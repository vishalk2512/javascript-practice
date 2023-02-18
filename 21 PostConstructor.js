// Post constructor function before live post (post is only draft)

function Post(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0;
  this.comments = [];
  this.isLive = false;
}

const post1 = new Post("HTML", "Markup Language", "Vishal");

console.log(post1);
