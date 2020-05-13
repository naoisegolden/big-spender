describe("Backdrop", () => {
  it("is not visible when the page loads", () => {
    cy.visit("/");
    cy.get("[data-cy=backdrop]").should("not.be.visible");
  });

  it("should only be visible when the modal is visible", () => {
    cy.get("[data-cy=chooseBillionaireBtn]").click();
    cy.get("[data-cy=backdrop]").should("be.visible");
    cy.get("[data-cy=closeModal]").click();
    cy.get("[data-cy=backdrop]").should("not.be.visible");
  });
});
