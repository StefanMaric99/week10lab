import React from "react";

function Display(props) {
  console.log({ props });
  const { email, fullName, address, address2, city, province, postalCode, terms } = props.info;

  const displaySec = (label, value) => {
    console.log(value);
    return (
      <div className="d-flex justify-content-center">
        <h3 style={{ marginRight: '1rem', color: "yellowgreen" }}>{label}: </h3>
        <h3>{value}</h3>
      </div>
    )
  }
  return (
    <div className="">
      {displaySec("Email", email)}
      {displaySec("Full Name", fullName)}
      {displaySec("Address", address)}
      {displaySec("Address2", address2)}
      {displaySec("City", city)}
      {displaySec("Province", province)}
      {displaySec("Postal Code", postalCode)}
      {displaySec("Terms", terms ? "True" : "False")}
    </div>
  )
}

export default Display;