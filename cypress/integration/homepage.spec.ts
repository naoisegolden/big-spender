describe("Homepage", () => {
  it("Displays the current billionaire", () => {
    cy.visit("/");
    cy.get("[data-cy=currentBillionaireName]").should("contain", "JEFF BEZOS");
    cy.get("[data-cy=currentBillionaireIntro]").should(
      "contain",
      "Jeff Bezos founded e-commerce colossus Amazon in 1994 out of his garage in Seattle. He remains CEO and owns a nearly 11.2% stake."
    );
  });

  it("Updates the billionaire information when another billionaire is selected", () => {
    cy.get("[data-cy=chooseBillionaireBtn]").click();
    cy.get("[data-cy=selectBillionaireBtn]").eq(1).click();

    cy.get("[data-cy=currentBillionaireName]").should("contain", "BILL GATES");
    cy.get("[data-cy=currentBillionaireIntro]").should(
      "contain",
      "With his wife Melinda, Bill Gates chairs the Bill & Melinda Gates Foundation, the world's largest private charitable foundation."
    );

    cy.get("[data-cy=chooseBillionaireBtn]").click();
    cy.get("[data-cy=selectBillionaireBtn]").eq(5).click();
    cy.get("[data-cy=currentBillionaireName]")
      .should("not.contain", "BILL GATES")
      .and("not.contain", "JEFF BEZOS");

    cy.get("[data-cy=chooseBillionaireBtn]").click();
    cy.get("[data-cy=selectBillionaireBtn]").eq(7).click();
    cy.get("[data-cy=currentBillionaireName]")
      .should("not.contain", "BILL GATES")
      .and("not.contain", "JEFF BEZOS");
  });
});
