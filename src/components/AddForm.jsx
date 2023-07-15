import React, { Fragment } from "react";
import classes from "./CSS/AddForm.module.css";
import AddButton from "../styles/AddButton";
import CloseButton from "../styles/CloseButton";

const AddForm = ({
  setShowForm,
  setFirstName,
  firstName,
  postalCode,
  setPostalCode,
  lastName,
  setLastName,
  address,
  setAddress,
  handleAddress,
}) => {
  const addAddressFormHandler = (e) => {
    e.preventDefault();

    const newAddress = {
      firstName,
      lastName,
      address,
      postalCode,
      id: Date.now(),
    };

    if (firstName.length > 0 && lastName.length > 0) {
      handleAddress(newAddress);
    }

    setFirstName("");
    setLastName("");
    setAddress("");
    setPostalCode("");

    setShowForm((prev) => !prev);
    return;
  };

  const handleCloseBUtton = () => {
    setShowForm((prev) => !prev);

    setFirstName("");
    setLastName("");
    setAddress("");
    setPostalCode("");
  };

  return (
    <Fragment>
      <form
        className={`d-flex flex-column gap-4 ${classes.form}`}
        onSubmit={addAddressFormHandler}
      >
        <div
          className={`d-flex align-items-center justify-content-center gap-3`}
        >
          <div>
            <label>First Name</label>
            <input
              className={`${classes.inp} ms-2`}
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div>
            <label>Last Name</label>
            <input
              className={`${classes.inp} ms-2`}
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>

        <div
          className={`d-flex align-items-center justify-content-center gap-3`}
        >
          <div>
            <label>Address</label>
            <input
              className={`${classes.inp} ms-2`}
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <div>
            <label>Postal Code</label>
            <input
              className={`${classes.inp} ms-2`}
              type="text"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
            />
          </div>
        </div>

        <div className={`d-flex align-items-center justify-content-evenly`}>
          <div className="">
            <AddButton children={"add"} onClick={addAddressFormHandler} />
          </div>

          <div className="">
            <CloseButton children={"close"} onClick={handleCloseBUtton} />
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default AddForm;
