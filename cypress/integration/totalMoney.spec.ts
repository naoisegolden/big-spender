describe("Total Money", () => {
  it("shows the total money for the current billionaire", () => {
    cy.visit("/");
    cy.get("[data-cy=totalMoney]").should("be.visible");
    cy.get("[data-cy=chooseBillionaireBtn]").click();
    cy.get("[data-cy=billionaireTable]")
      .first()
      .find("[data-cy=billionaireTotalMoney]")
      .invoke("text")
      .then(($value) => {
        const value = $value;

        cy.get("[data-cy=billionaireTable]")
          .first()
          .find("[data-cy=selectBillionaireBtn]")
          .click();

        cy.get("[data-cy=totalMoney]").invoke("text").should("equal", value);
      });
  });

  it("updates the total money for a specific billionaire", () => {
    cy.get("[data-cy=chooseBillionaireBtn]").click();
    cy.get("[data-cy=billionaireTable]")
      .last()
      .find("[data-cy=billionaireTotalMoney]")
      .invoke("text")
      .then(($value) => {
        const value = $value;

        cy.get("[data-cy=billionaireTable]")
          .last()
          .find("[data-cy=selectBillionaireBtn]")
          .click();

        cy.get("[data-cy=totalMoney]").invoke("text").should("equal", value);
      });

    cy.get("[data-cy=chooseBillionaireBtn]").click();
    cy.get("[data-cy=billionaireTable]")
      .eq(4)
      .find("[data-cy=billionaireTotalMoney]")
      .invoke("text")
      .then(($value) => {
        const value = $value;

        cy.get("[data-cy=billionaireTable]")
          .eq(4)
          .find("[data-cy=selectBillionaireBtn]")
          .click();

        cy.get("[data-cy=totalMoney]").invoke("text").should("equal", value);
      });
  });
});
