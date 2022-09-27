// the name, country, trust rank, logo, year of establishment, social media links, description, and a back-to-main-page button

import React from "react";
import { useState, useEffect } from "react";
import Card from "../components/card/card";
import { useParams } from "react-router-dom";

const ExchangeDetails = () => {
  const { id } = useParams();
  const [cryptoExchangeDetails, setCryptoExchangeDetails] = useState({});

  useEffect(() => {
    fetch(`https://api.coingecko.com/api/v3/exchanges/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (Object.keys(data).length > 0) {
          console.log("DETAILS", data);
          setCryptoExchangeDetails(data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div>
      <Card title={"Exchange Details"} data={cryptoExchangeDetails}></Card>
    </div>
  );
};

export default ExchangeDetails;
