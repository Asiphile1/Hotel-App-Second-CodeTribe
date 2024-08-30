import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import "../styles/HotelDetails.css";

const HotelDetails = () => {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);

  useEffect(() => {
    const fetchHotelDetails = async () => {
      const docRef = doc(db, "hotels", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setHotel(docSnap.data());
      } else {
        console.log("No such document!");
      }
    };

    fetchHotelDetails();
  }, [id]);

  if (!hotel) {
    return <div>Loading...</div>;
  }

  return (
    <div className="hotel-details">
      <h2>{hotel.name}</h2>
      <div className="hotel-gallery">
        {hotel.images.map((image, index) => (
          <img key={index} src={image} alt={`Gallery ${index}`} />
        ))}
      </div>
      <p><strong>Location:</strong> {hotel.location}</p>
      <p><strong>Price:</strong> {hotel.price} per night</p>
      <p><strong>Rating:</strong> {hotel.rating} stars</p>
      <p><strong>Amenities:</strong> {hotel.amenities.join(", ")}</p>
      <p><strong>Policies:</strong> {hotel.policies}</p>
      <div className="actions">
        <button className="btn-book">Book Now</button>
        <button className="btn-favorite">Add to Favorites</button>
      </div>
    </div>
  );
};

export default HotelDetails;
