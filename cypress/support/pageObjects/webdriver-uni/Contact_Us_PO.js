class Contact_Us_PO {
  contactForm_Submission(
    firstName,
    lastName,
    email,
    comment,
    $selector,
    textToLocate
  ) {
    cy.get('[name="first_name"]').type(firstName);
    cy.get('[name="last_name"]').type(lastName);
    cy.get('[name="email"]').type(email);
    cy.get("textarea.feedback-input").type(comment);
    cy.get('[type="submit"]').click();
    cy.get($selector).contains(textToLocate, { timeout: 60000 });
    //cy.screenshot();
    //cy.screenshot("Made a contact us form submission");
  }
}
export default Contact_Us_PO;
