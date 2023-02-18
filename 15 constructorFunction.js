// In JavaScript, a constructor function is used to create objects.

// When the this keyword is used in a constructor, it refers to the newly created objectz
function Rectangle(width, height, color) {
  this.width = width;
  this.height = height;
  this.color = color;
  this.detail = function () {
    console.log(`${this.width}x${this.height} is ${this.color}.`);
  };
}

const r1 = new Rectangle(100, 200, "red");
const r2 = new Rectangle(500, 800, "blue");

r1.detail();
r2.detail();
