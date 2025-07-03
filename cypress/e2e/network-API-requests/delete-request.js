describe("Delete Request", () => {
  it("Delete a post via /posts API", () => {
    cy.request({
      method: "DELETE",
      url: "http://localhost:3000/posts/9",
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
