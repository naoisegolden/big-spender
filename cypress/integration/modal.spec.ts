describe("Modal", () => {
  it("should not be visible when the page loads", () => {
    cy.visit("/");
    cy.get("[data-cy=modal]").should("not.be.visible");
  });

  it("opens when clicking billionaire image", () => {
    cy.get("[data-cy=chooseBillionaireBtn]").click();
    cy.get("[data-cy=modal]").should("be.visible");
  });

  it("closes when clicking the close icon", () => {
    cy.get("[data-cy=closeModal]").click();
    cy.get("[data-cy=modal]").should("not.be.visible");
  });
});
