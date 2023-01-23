import { format } from "date-fns";
import React, { useContext } from "react";
import { DataContext } from "../../../contexts/DataProvider";

const EventDetails = () => {
  const { currentEvent } = useContext(DataContext);
  // console.log(currentEvent);
  const { id, Location, Gender, Name, date, Time, Image } = currentEvent;
  const dt = new Date(`${date} ${Time}`);
  return (
    <div className="col-span-8 py-5 pr-10">
      <h2 className="text-center text-2xl font-bold mb-10">{Gender}</h2>
      <div className="grid grid-cols-2 ">
        <div>
          <h4 className="font-bold text-3xl">{id}</h4>
          <p className="font-bold text-lg mb-7">Person Detected</p>
          <table className="mb-7">
            <tbody className="text-lg">
              <tr>
                <td>Name</td>
                <td className="px-3">:</td>
                <td>{Name}</td>
              </tr>
              <tr>
                <td>Location</td>
                <td className="px-3">:</td>
                <td>{Location}</td>
              </tr>
              <tr>
                <td>Date</td>
                <td className="px-3">:</td>
                <td>{date}</td>
              </tr>
              <tr>
                <td>Time</td>
                <td className="px-3">:</td>
                <td>{Time}</td>
              </tr>
            </tbody>
          </table>

          <p className="text-lg">
            Description: <br />
            {`${Name} detected at ${Location} on ${format(dt, "do")} ${format(
              dt,
              "MMMM"
            )}, ${format(dt, "yyyy")}.`}
          </p>
        </div>
        <div>
          <img className="max-h-[80vh]" src={Image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
