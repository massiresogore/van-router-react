import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const VansDetails = () => {
  const [vans, setVans] = useState([]);
  const { id } = useParams();
  const { price, imageUrl, name, type } = vans;

  const fetchParam = async () => {
    const response = await fetch(`/api/vans/${id}`);
    const data = await response.json();
    setVans(data.vans);
  };

  useEffect(() => {
    fetchParam();
  }, [id]);
  return (
    <>
      {
        <div className="van-tile">
          <img src={imageUrl} />
          <div className="van-info">
            <h3>{name}</h3>
            <p>
              ${price}
              <span>/day</span>
            </p>
          </div>
          <i className={`van-type ${type} selected`}>{type}</i>
        </div>
      }
    </>
  );
};

export default VansDetails;
