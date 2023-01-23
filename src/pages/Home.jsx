import { collection, getDocs, query, where } from "firebase/firestore";
import { useState, useEffect } from "react";
import AppContainer from "../components/AppContainer/AppContainer";
import Navbar from "../components/Navbar";
import { db } from "../firebase.config";

const Home = () => {
  const [events, setEvents] = useState([]);
  const [currentEvent, setCurrentEvent] = useState(null);
  const [loading, setLoading] = useState(false);
  const eventsCollectionRef = collection(db, "events");
  const [filters, setFilters] = useState({});
  console.log(filters);

  useEffect(() => {
    let q;
    // Only Location Filter
    if (filters.location && !filters.gender && !filters.date) {
      q = query(
        eventsCollectionRef,
        where("Location", "==", filters?.location)
      );
    } // Only Gender Filter
    else if (!filters.location && filters.gender && !filters.date) {
      q = query(eventsCollectionRef, where("Gender", "==", filters?.gender));
    } // Only Date Filter
    else if (!filters.location && !filters.gender && filters.date) {
      q = query(eventsCollectionRef, where("date", "==", filters?.date));
    } // Location and Gender Filter
    else if (filters.location && filters.gender && !filters.date) {
      q = query(
        eventsCollectionRef,
        where("Location", "==", filters.location),
        where("Gender", "==", filters.gender)
      );
    }
    // Location and Date Filter
    else if (filters.location && !filters.gender && filters.date) {
      q = query(
        eventsCollectionRef,
        where("Location", "==", filters.location),
        where("date", "==", filters.date)
      );
    }
    // Gender and Date Filter
    else if (!filters.location && filters.gender && filters.date) {
      q = query(
        eventsCollectionRef,
        where("Gender", "==", filters.gender),
        where("date", "==", filters.date)
      );
    }
    // Location, Gender and Date Filter
    else if (filters.location && filters.gender && filters.date) {
      q = query(
        eventsCollectionRef,
        where("Location", "==", filters.location),
        where("Gender", "==", filters.gender),
        where("date", "==", filters.date)
      );
    }

    const getEvents = async () => {
      if (q) {
        setLoading(true);
        console.log("Query Set");
        const data = await getDocs(q);
        setEvents(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        setLoading(false);
      } else {
        setLoading(true);
        console.log("Query Not Set");
        const data = await getDocs(eventsCollectionRef);
        setEvents(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        setLoading(false);
      }
    };

    getEvents();
  }, [filters]);

  useEffect(() => {
    setCurrentEvent(events[0]);
  }, [events]);

  return (
    <div>
      <Navbar events={events} />
      <AppContainer
        currentEvent={currentEvent}
        events={events}
        setCurrentEvent={setCurrentEvent}
        filters={filters}
        setFilters={setFilters}
        loading={loading}
      />
    </div>
  );
};

export default Home;
