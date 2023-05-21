import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Vans = () => {
  const [vans, setVans] = useState([]);

  const fetchRequest = async () => {
    const response = await fetch("/api/vans");
    const data = await response.json();
    setVans(data.vans);
  };

  useEffect(() => {
    fetchRequest();
  }, []);

  const vanElements = vans.map((van) => (
    <Link key={van.id} to={`/vans/${van.id}`}>
      <div className="van-tile">
        <img src={van.imageUrl} />
        <div className="van-info">
          <h3>{van.name}</h3>
          <p>
            ${van.price}
            <span>/day</span>
          </p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </div>
    </Link>
  ));

  return (
    <div className="van-list-container">
      <h1>Explore our options</h1>
      <div className="van-list">{vanElements}</div>
    </div>
  );
};

export default Vans;
