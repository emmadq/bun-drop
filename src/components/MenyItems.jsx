import React, { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import { useActionData } from "react-router-dom";
import { setUserSession } from "../assets/helpers/auth";

function MenyItems({
  searchInput,
  cat,
  setSelectedItem,
  addToFavo,
  removeFromFavo,
  favo,
}) {
  const { data, loading, error } = useFetch("http://localhost:3000/menu");
  const [sortedMenu, setSortedMenu] = useState([]);

  useEffect(() => {
    if (!data) return;
    if (searchInput || cat) {
      const filteredMenu = data.filter(
        (d) =>
          d.title.toLowerCase().includes(searchInput.toLowerCase() || cat) ||
          d.category.toLowerCase().includes(searchInput.toLowerCase() || cat)
      );
      setSortedMenu(filteredMenu);
    } else {
      setSortedMenu(data);
    }
  }, [searchInput, cat, data]);

  const isFavo = (itemId) => {
    return favo.some((f) => f.itemId === itemId);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleFavoClick = (e, item) => {
    e.stopPropagation();
    if (isFavo(item.id)) {
      removeFromFavo(item.id);
    } else {
      addToFavo(item.id);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="menu-items">
      <div>
        {sortedMenu.map((m) => (
          <div
            className="menu-cont"
            key={m.id}
            onClick={() => handleItemClick(m)}
          >
            <img src={m.image} alt="" />

            <div
              className="favo"
              onClick={(e) => {
                handleFavoClick(e, m);
              }}
            >
              {isFavo(m.id) ? (
                <img src="/src/assets/icons/star.svg" alt="" />
              ) : (
                <img src="/src/assets/icons/starempty.svg" alt="" />
              )}
            </div>

            <h5>{m.title}</h5>
            <h5>${m.price}</h5>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenyItems;
