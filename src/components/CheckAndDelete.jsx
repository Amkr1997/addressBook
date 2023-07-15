import React, { useState } from "react";
import classes from "./CSS/CheckAndDelete.module.css";
import AddButton from "../styles/AddButton";
import CloseButton from "../styles/CloseButton";

const CheckAndDelete = ({
  num,
  detail,
  setDetailsList,
  detailsList,
  updateAddress,
  setCurOpen,
}) => {
  const [firstNameEdit, setFirstNameEdit] = useState("");
  const [lastNameEdit, setLastNameEdit] = useState("");
  const [editAddress, setEditAddress] = useState("");
  const [editPostalCode, setEditPostalCode] = useState("");

  const hideDeleteFormHandler = (e) => {
    e.preventDefault();

    const updatedAddress = {
      firstName: firstNameEdit,
      lastName: lastNameEdit,
      address: editAddress,
      postalCode: editPostalCode,
      id: detail.id,
    };

    if (firstNameEdit.length > 0 && lastNameEdit.length > 0) {
      updateAddress(updatedAddress, num);
    }

    setFirstNameEdit("");
    setLastNameEdit("");
    setEditAddress("");
    setEditPostalCode("");

    setCurOpen(null);

    return;
  };

  const deleteFormHandler = () => {
    const deletedDetail = detailsList.filter((el) => el.id !== num);
    setDetailsList(deletedDetail);
  };

  return (
    <div>
      <form
        className={`d-flex flex-column gap-4 ${classes.form}`}
        onSubmit={hideDeleteFormHandler}
      >
        <div
          className={`d-flex align-items-center justify-content-center gap-3`}
        >
          <div>
            <label>First Name</label>
            <input
              className={`${classes.inp} ms-2`}
              type="text"
              value={firstNameEdit}
              onChange={(e) => setFirstNameEdit(e.target.value)}
            />
          </div>

          <div>
            <label>Last Name</label>
            <input
              className={`${classes.inp} ms-2`}
              type="text"
              value={lastNameEdit}
              onChange={(e) => setLastNameEdit(e.target.value)}
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
              value={editAddress}
              onChange={(e) => setEditAddress(e.target.value)}
            />
          </div>

          <div>
            <label>Postal Code</label>
            <input
              className={`${classes.inp} ms-2`}
              type="text"
              value={editPostalCode}
              onChange={(e) => setEditPostalCode(e.target.value)}
            />
          </div>
        </div>

        <div className={`d-flex align-items-center justify-content-evenly`}>
          <div className="">
            <AddButton children={"edit"} />
          </div>

          <div className="">
            <CloseButton children={"delete"} onClick={deleteFormHandler} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CheckAndDelete;
