import { User } from "../../../common/models";


describe("User Sign-up and Login", function () {
  beforeEach(function () {


  });


  it("Test Case 1.1: should redirect to the product page after login", function () {
    const userInfo = {
      username: "standard_user",
      password: "secret_sauce",
    };

    cy.visit("/");
    cy.login(userInfo.username, userInfo.password);

    /* ==== Generated with Cypress Studio ==== */
    cy.get('.app_logo').should('be.visible');
    cy.get('#react-burger-menu-btn').should('be.enabled');
    cy.get('[data-test="shopping-cart-link"]').should('be.visible');
    /* ==== End Cypress Studio ==== */
    //cy.visualSnapshot("Redirect to Product Page after Login");
  }); 

  xit("Test Case 1.2: should error for an invalid user", function () {
    cy.login("invalidUserName", "invalidPa$$word");

    cy.getBySel("signin-error")
      .should("be.visible")
      .and("have.text", "Username or password is invalid");
    cy.visualSnapshot("Sign In, Invalid Username and Password, Username or Password is Invalid");
  });

  
});