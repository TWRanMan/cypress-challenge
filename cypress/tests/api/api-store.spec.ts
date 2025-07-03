
const apiStore = `${Cypress.env("apiUrl")}/store`;

describe("Store API", function () {

  before(() => {
    cy.request("GET", "/");
  });

  beforeEach(function () {

  });

  context("GET /store/inventory", function () {
    xit("gets a list of users", function () {
      cy.request("GET", apiUsers).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.results).length.to.be.greaterThan(1);
      });
    });
  });


  context("POST /store/order", function () {
    it("creates a new user", function () {

      cy.request("POST", `${apiStore}/order`, {
        "id": 10,
        "petId": 198772,
        "quantity": 7,
        "shipDate": "2025-07-03T13:11:14.671Z",
        "status": "approved",
        "complete": true
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.id).to.equal(10);
      });
    });

    it("errors when an invalid field sent", function () {
      cy.request({
        method: "POST",
        url: `${apiStore}/order`,
        failOnStatusCode: false,
        body: {
          "id": 'abc',
        },
      }).then((response) => {
        console.log(response.body);
        expect(response.status).to.eq(400);
        expect(response.body.message.length).exist;
      });
    });
  });


});