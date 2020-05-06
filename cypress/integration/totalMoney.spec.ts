describe("Total Money", () => {
  it("shows the total money for the current billionaire", () => {
    cy.visit("/");
    cy.get("[data-cy=totalMoney]").should("be.visible");
  });

  it("updates the total money for the specific billionaire", () => {
    cy.get("[data-cy=chooseBillionaireBtn]").click();
    cy.get("[data-cy=billionaireTable]")
      .first()
      .find("[data-cy=billionaireTotalMoney]")
      .invoke("text")
      .should("equal", "$139,941,319,000");
  });
});

// cy.get("[data-cy=billionaireTable]")
//   .first()
//   .find("[data-cy=billionaireTotalMoney]")
//   .invoke("text")
// .then(() => {})
//   .should("equal", "$139,941,319,000");
