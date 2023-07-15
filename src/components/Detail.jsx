import React from "react";
import classes from "./CSS/Detail.module.css";
import { TiEdit } from "react-icons/ti";
import CheckAndDelete from "./CheckAndDelete";

const Detail = ({
  detail,
  num,
  curOpen,
  setCurOpen,
  setDetailsList,
  detailsList,
  updateAddress,
}) => {
  const isOpen = curOpen === num;

  const openDeleteFormHandler = () => {
    setCurOpen(isOpen ? null : num);
  };

  return (
    <li className={`${classes.details}`}>
      <div
        className={`d-flex align-items-center justify-content-around ${classes.detailsList}`}
      >
        <h4 className={`${classes.name}`}>
          {detail.firstName} {detail.lastName}
        </h4>
        <p className={`fw-semibold text-uppercase`}>{detail.address}</p>
        <p className={`fw-medium`}>{detail.postalCode}</p>
        <span>
          <TiEdit
            type="submit"
            onClick={openDeleteFormHandler}
            className={`${classes.edit}`}
          />
        </span>
      </div>
      {isOpen && (
        <CheckAndDelete
          num={num}
          setCurOpen={setCurOpen}
          setDetailsList={setDetailsList}
          detailsList={detailsList}
          updateAddress={updateAddress}
          detail={detail}
        />
      )}
    </li>
  );
};

export default Detail;
