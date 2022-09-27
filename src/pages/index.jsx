import React from "react";
import { useState, useEffect } from "react";
import Table from "../components/table/table";

const ExchangeDir = () => {
  const [cryptoExchangeData, setCryptoExchangeData] = useState([]);

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/exchanges")
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          data = data.slice(0, 10);
          const sortedData = getProperties(data, [
            "id",
            "name",
            "country",
            "image",
            "url",
            "trust_score_rank",
          ]).map((renameKey) => ({
            id: renameKey.id,
            logo: renameKey.image,
            name: renameKey.name,
            country: renameKey.country,
            url: renameKey.url,
            "trust rank": renameKey.trust_score_rank,
          }));
          console.log(sortedData);
          setCryptoExchangeData(sortedData);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function getProperties(array, keys) {
    return array.map((o) => Object.fromEntries(keys.map((k) => [k, o[k]])));
  }

  return (
    <div>
      <Table
        title={"Directory of Cryptocurrency Exchanges"}
        listData={cryptoExchangeData}
      ></Table>
    </div>
  );
};

export default ExchangeDir;
