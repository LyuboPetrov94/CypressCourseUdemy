describe("Post Request", () => {
  let titleOfPosts = new Array();
  let randomTitle = Math.random().toString(36).substring(1) + Math.random().toString(36).substring(1);
  it("Create a new post via /post API", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:3000/posts",
      body: {
        id: "",
        title: randomTitle,
        author: "LP",
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
    });
  });

  it("Validate title of latest post", () => {
    cy.request({
      method: "GET",
      url: "http://localhost:3000/posts",
      headers: {
        accept: "application/json",
      },
    })
      .then((response) => {
        let body = JSON.parse(JSON.stringify(response.body));
        body.forEach(function (item) {
          titleOfPosts.push(item["title"]);
        });
      })
      .then(() => {
        let latestPost = titleOfPosts[titleOfPosts.length - 1];
        expect(latestPost).to.eq(randomTitle);
      });
  });
});
