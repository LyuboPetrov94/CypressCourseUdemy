describe("Update Request", () => {
  it("Update an existing post via the /posts API", () => {
    cy.request({
      method: "PUT",
      url: "http://localhost:3000/posts/3",
      body: {
        title: "Updated post title with PUT request",
        author: "Updated Author",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
