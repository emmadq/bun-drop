import React, { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";

function MenyItems({ input }) {
  const { data, loading, error } = useFetch("http://localhost:3000/menu");
  const [sortedMenu, setSortedMenu] = useState([]);

  useEffect(() => {
    if (!data) return;
    if (input) {
      const filteredMenu = data.filter(
        (d) =>
          d.title.toLowerCase().includes(input.toLowerCase()) ||
          d.category.toLowerCase().includes(input.toLowerCase())
      );
      setSortedMenu(filteredMenu);
    } else {
      setSortedMenu(data);
    }
  }, [input, data]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="menu-items">
      <div>
        {sortedMenu.map((m) => (
          <div className="menu-cont" key={m.id}>
            <img src={m.image} alt="" />
            <h5>{m.title}</h5>
            <h5>${m.price}</h5>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenyItems;
