describe("Header", () => {
  it("shows who it was made by", () => {
    cy.visit("/");
    cy.get("[data-cy=madeBy]").should("contain", "by Chris Martin");
  });

  it("shows an image of the current billionaire", () => {
    cy.get("[data-cy=billionaireThumbnail]")
      .should("have.attr", "src")
      .should(
        "include",
        "https://specials-images.forbesimg.com/imageserve/5bb22ae84bbe6f67d2e82e05/416x416.jpg?background=000000&cropX1=904&cropX2=1403&cropY1=262&cropY2=761"
      );
  });

  it("updates the current billionaire image when another billionaire is selected", () => {
    cy.get("[data-cy=chooseBillionaireBtn]").click();
    cy.get("[data-cy=selectBillionaireBtn]").last().click();
    cy.get("[data-cy=billionaireThumbnail]")
      .should("have.attr", "src")
      .should("include", "/chris.6b5d9e3a.jpg");

    cy.get("[data-cy=chooseBillionaireBtn]").click();
    cy.get("[data-cy=selectBillionaireBtn]").eq(7).click();
    cy.get("[data-cy=billionaireThumbnail]")
      .should("have.attr", "src")
      .should("not.include", "/chris.6b5d9e3a.jpg")
      .should(
        "not.include",
        "https://specials-images.forbesimg.com/imageserve/5bb22ae84bbe6f67d2e82e05/416x416.jpg?background=000000&cropX1=904&cropX2=1403&cropY1=262&cropY2=761"
      );
  });
});
