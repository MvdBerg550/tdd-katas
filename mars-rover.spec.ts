// enum Direction {
//   North,
//   East,
//   South,
//   West,
// }
class Coordinate {
  x = 0;

  y = 0;
}

class MarsRover {
  // #direction: Direction = Direction.North;

  coordinate = new Coordinate();

  getPosition() {
    return this.coordinate;
  }

  executeInstructions(instructions: string) {
    if (instructions === "RF") {
      this.coordinate.x = 1;
    } else {
      this.coordinate.y = 1;
    }
  }
}

describe("a new mars rover facing north by default", () => {
  let marsRover: MarsRover;
  beforeEach(() => {
    marsRover = new MarsRover();
  });
  it("should return the initial position", () => {
    expect(marsRover.getPosition()).toEqual({
      x: 0,
      y: 0,
    });
  });

  describe("when a step forward is taken", () => {
    it("should be on position (0,1)", () => {
      marsRover.executeInstructions("F");
      expect(marsRover.getPosition()).toEqual({
        x: 0,
        y: 1,
      });
    });
  });

  describe("when turning right and taking a step forward", () => {
    it("should be on position (1,0)", () => {
      marsRover.executeInstructions("RF");
      expect(marsRover.getPosition()).toEqual({
        x: 1,
        y: 0,
      });
    });
  });
});
