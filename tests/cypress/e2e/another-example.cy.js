describe("My First Tests", () => {
  it("Visits the Home", () => {
    cy.visit("/");
    cy.contains("Welcome");
  });

  xit("deliberately fail", () => {
    cy.visit("/");
    cy.contains("Goodbye");
  });

  it("Visits the About", () => {
    cy.visit("/about");
    cy.contains("amazing");
  });

  it("use the Parrot", () => {
    const PARROT_INPUT_TEXT = "fruit salad";

    cy.visit("/about");
    cy.get("input").type(PARROT_INPUT_TEXT);
    cy.contains("Talk").click();

    cy.on("window:alert", (text) => {
      expect(text).to.contains(PARROT_INPUT_TEXT);
    });
  });

  it("Visits the Contact", () => {
    cy.visit("/contact");
    cy.contains("gang");
  });
});
