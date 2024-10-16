import Calendar from "../Calendar";
import Navbar from "../Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
export default function Home() {
  const [centers, setCenters] = useState([]);
  const [bookingsData,setBookings] = useState([]);
  const [courtsData,setCourts] = useState([]);
  const [selectedDate,setSelectedDate] = useState(new Date());
  const fetchCenters = async () => {
    try {
      const res = await axios.get("http://localhost:8080/center");
      setCenters(res.data.data);
    } catch (error) {
      console.error(error);
    }
  };
  const updateCalendar = (bookings,courts)=>{
    setBookings(bookings);
    setCourts(courts);
  }
  useEffect(()=>{
     fetchCenters()
  },[]);
  return (
    <div className="h-screen flex justify-center items-center">
      <Navbar centersData={centers}  updateCalendar = {updateCalendar} setDate={setSelectedDate}/>
      <Calendar bookings={bookingsData} courts = {courtsData} selectedDate = {selectedDate}/>
    </div>
  );
}
