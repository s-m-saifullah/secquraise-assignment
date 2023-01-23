import React, { useContext } from "react";
import EventDetails from "./EventDetails/EventDetails";
import EventList from "./EventList/EventList";
import LeftSideBar from "../LeftSideBar";
import { DataContext } from "../../contexts/DataProvider";

const AppContainer = () => {
  const {
    currentEvent,
    setCurrentEvent,
    events,
    filters,
    setFilters,
    loading,
  } = useContext(DataContext);

  // console.log(loading);
  return (
    <div className="grid grid-cols-12 h-[93vh]">
      <LeftSideBar />
      {loading ? (
        <div className="col-span-8 grid place-items-center">
          <h4 className="font-bold text-3xl">Loading...</h4>
        </div>
      ) : currentEvent ? (
        <EventDetails />
      ) : (
        <div className="col-span-8 grid place-items-center">
          <h4 className="font-bold text-3xl">
            No Event Found With The Given Filter
          </h4>
        </div>
      )}
      <EventList />
    </div>
  );
};

export default AppContainer;
