describe("Display Billionaires", () => {
  it("renders 10 different billionaires + Chris", () => {
    cy.visit("/");
    cy.get("[data-cy=chooseBillionaireBtn]").click();
    cy.get("[data-cy=billionaireTable]").should("have.length", "11");
  });

  it("each billionaire has an image", () => {
    cy.get("[data-cy=billionaireTable]").each((element) => {
      cy.wrap(element).find("img").should("have.attr", "src");
    });
  });

  it("each billionaires wealth is displayed", () => {
    cy.get("[data-cy=billionaireTable]").each((element) => {
      cy.wrap(element)
        .find("[data-cy=billionaireTotalMoney]")
        .should("not.be.empty");
    });
  });

  it("each billionaires source of wealth is displayed", () => {
    cy.get("[data-cy=billionaireTable]").each((element) => {
      cy.wrap(element).find("[data-cy=wealthSource]").should("not.be.empty");
    });
  });

  it("each billionaires should have a select button", () => {
    cy.get("[data-cy=billionaireTable]").each((element) => {
      cy.wrap(element).find("[data-cy=selectBillionaireBtn]").should("exist");
    });
  });

  it("closes the modal on select billionaire", () => {
    cy.get("[data-cy=modal]").should("be.visible");
    cy.get("[data-cy=billionaireTable]")
      .first()
      .find("[data-cy=selectBillionaireBtn]")
      .click();
    cy.get("[data-cy=modal]").should("not.be.visible");
  });
});
