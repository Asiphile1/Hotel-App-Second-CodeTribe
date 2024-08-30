import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { Link } from "react-router-dom";
import "../styles/HotelList.css";

const HotelList = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const fetchHotels = async () => {
      const hotelCollection = collection(db, "hotels");
      const hotelSnapshot = await getDocs(hotelCollection);
      const hotelList = hotelSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setHotels(hotelList);
    };

    fetchHotels();
  }, []);

  return (
    <div className="hotel-list">
      {hotels.map((hotel) => (
        <div className="hotel-card" key={hotel.id}>
          <img src={hotel.images[0]} alt={hotel.name} className="hotel-image" />
          <div className="hotel-info">
            <h3>{hotel.name}</h3>
            <p>{hotel.location}</p>
            <p>{hotel.price} per night</p>
            <Link to={`/hotels/${hotel.id}`} className="details-link">
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HotelList;
