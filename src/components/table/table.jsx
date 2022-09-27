import React from "react";
import "./table.css";
import { Link } from "react-router-dom";

const Table = ({ title, listData }) => {
  if (listData.length > 0) {
    return (
      <div className="wrapper">
        <h1>{title}</h1>
        <div className="CETable CETable--5cols CETable--collapse">
          <div className="CETable-row CETable-row--head">
            {Object.keys(listData[1]).map((colName, index) => {
              return (
                <>
                  {colName !== "id" && (
                    <div
                      data-testid="crypto_exchange_list_header_names"
                      key={index}
                      className="CETable-cell name-cell column-heading"
                    >
                      {colName.toUpperCase()}
                    </div>
                  )}
                </>
              );
            })}
          </div>
          {Object.entries(listData).map((k) => {
            return (
              <div
                className="CETable-row"
                data-testid="crypto_exchange_list_rows"
              >
                {Object.keys(k[1]).map((key, index) => {
                  return (
                    <>
                      {key !== "id" && (
                        <div key={index} className="CETable-cell name-cell">
                          <div className="CETable-cell--heading">
                            {key.toUpperCase()}
                          </div>
                          <Link to={`/details/${k[1]["id"]}`}>
                            {" "}
                            <div className="CETable-cell--content date-content">
                              <span>
                                {key === "logo" ? (
                                  <img
                                    src={k[1][key]}
                                    alt="logo"
                                    height="60"
                                    width="50"
                                  />
                                ) : (
                                  k[1][key]
                                )}
                              </span>
                            </div>
                          </Link>
                        </div>
                      )}
                    </>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};

export default Table;
