class Rectangle {
  constructor(width, height) {
    this.#width = width;
    this.#height = height;
  }

  getSquare() {
    return this.#width * this.#height
  }
  getPerimeter() {
    return ((this.#width + this.#height) * 2)
  }
  getRatio() {
    return this.getSquare() / this.getPerimeter()
  }
}