import React, { Fragment } from "react";
import classes from "./CSS/Remote.module.css";
import AddButton from "../styles/AddButton";

const Remote = ({ sortBy, setSortBy, setShowForm, query, setQuery }) => {
  const handleOpenAddForm = () => {
    setShowForm((prev) => !prev);
  };

  return (
    <Fragment>
      <form className={`d-flex flex-column gap-4 ${classes.form}`}>
        <div
          className={`d-flex align-items-sm-center justify-content-sm-evenly gap-3`}
        >
          <input
            className={`${classes.inp}`}
            type="text"
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <select
            value={sortBy}
            className={`text-center ${classes.select}`}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="noOrder">No Order</option>
            <option value="asscendingOrder">Sort by name</option>
            <option value="desscendingOrder">Sort by city</option>
          </select>

          <AddButton children={"add"} onClick={handleOpenAddForm} />
        </div>
      </form>
    </Fragment>
  );
};

export default Remote;
