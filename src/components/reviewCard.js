import React from "react";

const reviewCard = props => {
  const { postal_code, address, landlord_bio, comment } = props.data;
  const { first_name, last_name } = landlord_bio;
  return (
    <div key={props.id} style={styles.cardStyle}>
      <span className="subheader">Location Details</span>
      <p>
        <strong>Postal Code</strong>: {postal_code}
        <br />
        <strong>Apartment number:</strong>
        {address.apartment_number || "n/a"}
        <br />
        <strong>Street address</strong>: {address.street_number}
      </p>
      <span className="subheader">Land lord info</span>
      <p className="Landlord-Bio"> 
        <strong>First Name</strong>:{first_name}
        <br />
        <strong>Last Name</strong>:{last_name}
        <br />
        <strong>Comment:</strong>
        {comment}
      </p>
      <style jsx>
      {`
        .Landlord-Bio {
          font-weight: bold;
          text-transform: capitalize
        }

        .subheader{
          display: block;
          color: rgba(255,89,65,0.8);
          margin: 10px 0;
          padding: 0;
          font-weight: bolder;
          font-size: 20px;
          font-family:'Fira Sans, sans-serif'
        }

        strong {
          color: #fffffa;
          font-size: 14px;
          margin-right: 10px;
          font-weight: bolder
        }

        p {
          padding:0;
          margin:0;
          font-family: Poppins, sans-serif;
          font-size: 16px;
          color: #F8EFFF
        }
      `}
      </style>
    </div>
  );
};

const styles = {
  cardStyle: {
    padding: "20px 40px",
    margin: "10px auto",
    alignSelf: "center",
    maxWidth: "400px",
    width: "80%",
    borderRadius: "5px",
    height: "250px",
    background: "#191923",
    boxShadow: "2px 1px 2px 3px #cdcdcd"
  }
};
export default reviewCard;
