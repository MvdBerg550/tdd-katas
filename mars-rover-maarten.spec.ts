/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-console */
/* eslint-disable no-shadow */
/* eslint-disable max-classes-per-file */

enum Orientation {
  NORTH = 0,
  EAST = 1,
  SOUTH = 2,
  WEST = 3,
}

class Coordinates {
  xy = [0, 0]

  constructor(x: number, y: number) {
    this.xy[0] = x
    this.xy[1] = y
  }
}

class Rover {
  coordinates = new Coordinates(0, 0)

  orientation = Orientation.NORTH

  STEP_MATRIX = [
    [0, 1, 0, -1],
    [1, 0, -1, 0],
    [0, -1, 0, 1],
    [-1, 0, 1, 0],
  ]

  orientations = [Orientation.NORTH, Orientation.EAST, Orientation.SOUTH, Orientation.WEST]

  instructions = ['F', 'R', 'B', 'L']

  getPosition() {
    return this.coordinates
  }

  receiveInstructions(instructionstring: string) {
    Array.from(instructionstring).forEach((instruction) => {
      const orientationIndex = this.orientation
      const instructionIndex = this.instructions.indexOf(instruction)

      this.coordinates.xy.forEach((_val, axis) => {
        const newInstructionIndex = (instructionIndex + axis) % this.orientations.length
        this.coordinates.xy[axis] += this.STEP_MATRIX[newInstructionIndex]![orientationIndex]!
      })

      const newOrientationIndex =
        (this.orientations.length + orientationIndex + this.STEP_MATRIX[0]![instructionIndex]!) %
        this.orientations.length
      this.orientation = this.orientations[newOrientationIndex]!
    })
  }
}

let marsRover: Rover
beforeEach(() => {
  marsRover = new Rover()
})
describe('A new Mars Rover', () => {
  it('is initially at the origin', () => {
    expect(marsRover.getPosition()).toEqual(new Coordinates(0, 0))
  })

  it('is at (0,1) when it is instructed to move forward once', () => {
    marsRover.receiveInstructions('F')
    expect(marsRover.getPosition()).toEqual(new Coordinates(0, 1))
  })

  it('is at (0,-1) when it is instructed to move backward once', () => {
    marsRover.receiveInstructions('B')
    expect(marsRover.getPosition()).toEqual(new Coordinates(0, -1))
  })

  it('is at (1,0) when it is instructed to move to the right once', () => {
    marsRover.receiveInstructions('R')
    expect(marsRover.getPosition()).toEqual(new Coordinates(1, 0))
  })

  it('is at (-1,0) when it is instructed to move to the left once', () => {
    marsRover.receiveInstructions('L')
    expect(marsRover.getPosition()).toEqual(new Coordinates(-1, 0))
  })

  it('is at (0,2) when it is instructed to move forward twice', () => {
    marsRover.receiveInstructions('FF')
    expect(marsRover.getPosition()).toEqual(new Coordinates(0, 2))
  })

  it('is at (1,-1) when it is instructed to move to the right twice', () => {
    marsRover.receiveInstructions('RR')
    expect(marsRover.getPosition()).toEqual(new Coordinates(1, -1))
  })

  it('is at (1,1) when it is instructed to move forward, then move to the right', () => {
    marsRover.receiveInstructions('FR')
    expect(marsRover.getPosition()).toEqual(new Coordinates(1, 1))
  })

  it('is at (2,0) when it is instructed to move the right, then move forward', () => {
    marsRover.receiveInstructions('RF')
    expect(marsRover.getPosition()).toEqual(new Coordinates(2, 0))
  })
})

