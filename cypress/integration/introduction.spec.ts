describe("Introduction", () => {
  it("loads the correct text", () => {
    cy.visit("/");
    cy.get("[data-cy=introduction]").contains(
      "Spend some money and put into perspective just how much each of these billionaires can afford to spend. As you scroll down the items will become increasingly more expensive. Treat yourself to a second-hand car, a house on the beach, maybe even buy a Premier League team. Be careful who you choose, they might not all be billionaires!"
    );
  });
});
