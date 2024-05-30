import React, { useState } from "react";
import useFetch from "../hooks/useFetch";

function CategoryCircle({ catSearch, setCat }) {
  const { data, loading, error } = useFetch("http://localhost:3000/categories");
  const [selectedCat, setSelectedCat] = useState(null);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const handleClick = (catName) => {
    if (selectedCat === catName) {
      setSelectedCat(null);
      setCat(null);
    } else {
      setSelectedCat(catName);
      setCat(catName.toLowerCase());
    }
  };

  console.log(setCat);
  return (
    <div className="categories">
      {data.map((c) => (
        <div
          className={`cat-cont ${selectedCat === c.name ? "active" : ""}`}
          key={c.id}
          onClick={() => handleClick(c.name)}
        >
          <img src={c.image} alt="" />
          <h5>{c.name}</h5>
        </div>
      ))}
    </div>
  );
}

export default CategoryCircle;
