import { useEffect, useState, useRef } from "react";
import LandCard from "./LandCard";
import Loader from "./Loader";
import "../index.css";

const InfiniteScroll = () => {
  const [lands, setLands] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const observer = useRef();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `http://localhost:5000/api/lands?page=${page}`
        );
        const data = await response.json();
        setLands((prev) => [...prev, ...data.results]);
      } catch (error) {
        console.error("Error fetching lands:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [page]);

  const lastLandRef = (node) => {
    if (isLoading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPage((prevPage) => prevPage + 1);
      }
    });
    if (node) observer.current.observe(node);
  };

  return (
    <div className="land-container">
      {lands.map((land, index) => {
        const landKey = land.id + "_" + index;
        if (index === lands.length - 1) {
          return <LandCard key={landKey} land={land} ref={lastLandRef} />;
        }
        return <LandCard key={landKey} land={land} />;
      })}
      {isLoading && <Loader isLoading={isLoading} />}
    </div>
  );
};

export default InfiniteScroll;
