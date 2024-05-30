import React from "react";
import useFetch from "../hooks/useFetch";
import imgBurger from "../assets/bun drop images/cheeseburger2.jpg";

function CategoryCircle() {
  const { data, loading, error } = useFetch("http://localhost:3000/categories");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="categories">
      {data.map((c) => (
        <div className="cat-cont" key={c.id}>
          <img src={c.image} alt="" />
          <h5>{c.name}</h5>
        </div>
      ))}
    </div>
  );
}

export default CategoryCircle;
