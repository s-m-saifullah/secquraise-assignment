import React from "react";
import EventDetails from "./EventDetails/EventDetails";
import EventList from "./EventList/EventList";
import LeftSideBar from "../LeftSideBar";

const AppContainer = ({
  currentEvent,
  setCurrentEvent,
  events,
  filters,
  setFilters,
  loading,
}) => {
  console.log(loading);
  return (
    <div className="grid grid-cols-12 h-[93vh]">
      <LeftSideBar />
      {loading ? (
        <div className="col-span-8 grid place-items-center">
          <h4 className="font-bold text-3xl">Loading...</h4>
        </div>
      ) : currentEvent ? (
        <EventDetails currentEvent={currentEvent} />
      ) : (
        <div className="col-span-8 grid place-items-center">
          <h4 className="font-bold text-3xl">
            No Event Found With The Given Filter
          </h4>
        </div>
      )}
      <EventList
        events={events}
        currentEvent={currentEvent}
        setCurrentEvent={setCurrentEvent}
        filters={filters}
        setFilters={setFilters}
      />
    </div>
  );
};

export default AppContainer;
