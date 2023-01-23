import { format } from "date-fns";
import React, { useContext } from "react";
import { useState } from "react";
import { RiListSettingsFill } from "react-icons/ri";
import { DataContext } from "../../../contexts/DataProvider";
import EventCard from "./EventCard";

const EventList = () => {
  const [filterActive, setFilterActive] = useState(false);
  const { events, currentEvent, setCurrentEvent, filters, setFilters } =
    useContext(DataContext);

  return (
    <div className="col-span-3 max-h-screen border-8 border-neutral-300 p-5 overflow-y-scroll">
      <div className="flex justify-between">
        <h3 className="font-bold text-2xl mb-5">Events</h3>
        <RiListSettingsFill
          onClick={() => setFilterActive(!filterActive)}
          className="text-2xl cursor-pointer"
        />
      </div>
      {filterActive && (
        <div className="bg-slate-200 p-5 mb-5 ">
          <h4 className="font-bold text-center text-xl mb-2">Filter</h4>
          {/* Filter Form */}
          <form>
            {/* Location Filter */}
            <div className="flex justify-between mb-2">
              <label htmlFor="location" className="font-bold">
                Location
              </label>
              <select
                onChange={(e) =>
                  setFilters({ ...filters, location: e.target.value })
                }
                name="location"
                id="location"
                className="bg-inherit"
              >
                <option value="">Select Location</option>
                <option value="Chennai">Chennai</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Bangalore">Bangalore</option>
              </select>
            </div>

            {/* Gender Filter */}
            <div className="flex justify-between mb-2">
              <label htmlFor="gender" className="font-bold">
                Gender
              </label>
              <select
                onChange={(e) =>
                  setFilters({ ...filters, gender: e.target.value })
                }
                name="gender"
                id="gender"
                className="bg-inherit"
              >
                <option value="">Select Gender</option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
              </select>
            </div>

            {/* Date Filter */}
            <div className="flex justify-between">
              <label htmlFor="dateTime" className="font-bold">
                Date
              </label>
              <input
                onChange={(e) =>
                  setFilters({
                    ...filters,
                    date: `${
                      e.target.value
                        ? `${format(new Date(e.target.value), "d")}-${format(
                            new Date(e.target.value),
                            "MMM"
                          )}-${format(new Date(e.target.value), "yy")}`
                        : ""
                    }`,
                  })
                }
                min="2023-01-05"
                max="2023-01-09"
                type="date"
                name="date"
                id="date"
                className="bg-inherit"
              />
            </div>
          </form>
        </div>
      )}
      <div className="">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default EventList;
