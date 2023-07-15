import React, { useEffect, useState } from "react";
import Header from "./Header";
import AddForm from "./AddForm";
import Remote from "./Remote";
import Detail from "./Detail";

const initialLists = [
  {
    id: 1,
    firstName: "aman",
    lastName: "khare",
    address: "bengaluru",
    postalCode: "12345",
  },
  {
    id: 2,
    firstName: "raj",
    lastName: "singh",
    address: "rewa",
    postalCode: "23456",
  },
  {
    id: 3,
    firstName: "priya",
    lastName: "shukla",
    address: "bhopal",
    postalCode: "34567",
  },
];

// Get data from localStorage.
const getLocalDetails = () => {
  let addressList = localStorage.getItem("details");
  console.log(addressList);

  if (addressList) {
    return JSON.parse(localStorage.getItem("details"));
  } else {
    return initialLists;
  }
};

const AddressBook = () => {
  // Display and Hide forms.
  const [showForm, setShowForm] = useState(false);

  // details logic states.
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [detailsList, setDetailsList] = useState(getLocalDetails());
  const [curOpen, setCurOpen] = useState(null);
  const [sortBy, setSortBy] = useState("");
  const [query, setQuery] = useState("");

  // Display data.
  const handleAddress = (detail) => {
    setDetailsList((detailsList) => [...detailsList, detail]);
  };

  // Edit functionality.
  const updateAddress = (address, num) => {
    const updatedDetail = detailsList.map((detail) =>
      detail.id === num ? address : detail
    );

    setDetailsList(updatedDetail);
  };

  // Sorting functionality.
  let sortedAddressList = detailsList;

  if (sortBy === "noOrder") sortedAddressList = detailsList;

  if (sortBy === "asscendingOrder") {
    sortedAddressList = detailsList.slice().sort((a, b) => {
      return a.firstName.localeCompare(b.firstName);
    });
  }

  if (sortBy === "desscendingOrder") {
    sortedAddressList = detailsList.slice().sort((a, b) => {
      return a.address.localeCompare(b.address);
    });
  }

  // Searching functionality.
  const searchedData = sortedAddressList.filter(
    (detail) =>
      detail.firstName.toLowerCase().includes(query.toLowerCase()) ||
      detail.lastName.toLowerCase().includes(query.toLowerCase())
  );

  //console.log(searchedData);

  // Add data to localStorage.
  useEffect(() => {
    localStorage.setItem("details", JSON.stringify(detailsList));
  }, [detailsList]);

  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-sm-2"></div>
        <div className={`col-12 col-sm-8 d-flex flex-column gap-5`}>
          <Header />
          {showForm && (
            <AddForm
              setShowForm={setShowForm}
              setFirstName={setFirstName}
              firstName={firstName}
              lastName={lastName}
              setLastName={setLastName}
              address={address}
              setAddress={setAddress}
              postalCode={postalCode}
              setPostalCode={setPostalCode}
              handleAddress={handleAddress}
            />
          )}
          {!showForm && (
            <Remote
              sortBy={sortBy}
              setSortBy={setSortBy}
              setShowForm={setShowForm}
              query={query}
              setQuery={setQuery}
            />
          )}

          <ul style={{ padding: "0" }}>
            {searchedData.map((detail) => {
              return (
                <Detail
                  key={detail.id}
                  detail={detail}
                  detailsList={detailsList}
                  curOpen={curOpen}
                  setCurOpen={setCurOpen}
                  num={detail.id}
                  setDetailsList={setDetailsList}
                  updateAddress={updateAddress}
                />
              );
            })}
          </ul>
        </div>
        <div className="col-sm-2"></div>
      </div>
    </div>
  );
};

export default AddressBook;
