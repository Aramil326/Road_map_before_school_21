class Circle {
  constructor(radius) {
    this.#radius = radius;
  }

  returnCircleSquare() {
    return (this.#radius * this.#radius * 3.14)
  }

  returnCircleLength() {
    return (this.#radius * 2 * 3.14)
  }
}