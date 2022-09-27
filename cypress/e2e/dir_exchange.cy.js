/// <reference types="cypress" />

describe(
  "Crypto Exchange Directory Test",
  { defaultCommandTimeOut: 1000 },
  () => {
    it("fetches the crypto exchange list - GET", () => {
      cy.visit("http://localhost:3000/");
      cy.contains("Directory of Cryptocurrency Exchanges");
      cy.request("https://api.coingecko.com/api/v3/exchanges").as(
        "exchangeRequest"
      );
      cy.get("@exchangeRequest").then((exchange) => {
        expect(exchange.status).to.eq(200);
        assert.isArray(exchange.body, "Exchange list response is an array");
      });

      //Directory should have 5 header cell names : name, country, URL, logo, trust rank
      cy.get('[data-testid="crypto_exchange_list_header_names"]')
        .should("have.length", 5)
        .contains("TRUST RANK");

      //Directory should have a total of 10 rows for the first 10 exchanges
      cy.get('[data-testid="crypto_exchange_list_rows"]')
        .should("have.length", 10)
        .contains("Binance"); //test if an exchange name appears in the list
    });

    let exchangeId = "";

    it("navigates to the details page when a single exchange record is clicked", () => {
      cy.contains("span", "Binance").click();

      cy.wait(1000);

      cy.url()
        .should("include", "/details/")
        .then((response) => {
          //check if exchange id is being passed in the URL
          const valuesArr = response.split("/details/");
          if (valuesArr.length === 2) {
            exchangeId = valuesArr[1];
            alert("exchange id in url:" + exchangeId);
          }
        });

      cy.contains("Exchange Details");
    });

    it("fetches the details of selected crypto exchange by id from url - GET", () => {
      cy.request(`https://api.coingecko.com/api/v3/exchanges/${exchangeId}`).as(
        "exchangeDetailRequest"
      );

      cy.get("@exchangeDetailRequest").then((exchange) => {
        expect(exchange.status).to.eq(200);
        assert.isObject(exchange.body, "Exchange detail response is an object");

        let expectedValue = "Binance";

        expect(exchange.body.name).to.equal(expectedValue);
      });
    });

    it("navigates back to the exchange directory page when Back To Main Page link is clicked", () => {
      cy.url().should("include", "/details/");

      cy.contains("BACK TO MAIN PAGE").click();

      cy.contains("Directory of Cryptocurrency Exchanges");
    });
  }
);
