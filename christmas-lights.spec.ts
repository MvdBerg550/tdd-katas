class LightGrid {
    grid: boolean[][] = []

    constructor(size: number){
        this.grid = Array.from({ length: size }, () => Array(size).fill(false))
    }

    turnOn(startLight: [number, number], endLight: [number, number]){
      for (let i = 0; i < this.grid.length; i++) {
        for (let j = 0; j < this.grid[i].length; j++) {
          if( i>=startLight[0] && i<=endLight[0] && j>=startLight[1] && j<=endLight[1]){
            this.grid[i][j] = true
          }
        }
      }
    }

    turnOff(startLight: [number, number], endLight: [number, number]){
      for (let i = 0; i < this.grid.length; i++) {
        for (let j = 0; j < this.grid[i].length; j++) {
          if( i>=startLight[0] && i<=endLight[0] && j>=startLight[1] && j<=endLight[1]){
            this.grid[i][j] = false
          }
        }
      }
    }

    toggle(startLight: [number, number], endLight: [number, number]){
      for (let i = 0; i < this.grid.length; i++) {
        for (let j = 0; j < this.grid[i].length; j++) {
          if( i>=startLight[0] && i<=endLight[0] && j>=startLight[1] && j<=endLight[1]){
            this.grid[i][j] = !this.grid[i][j]
          }
        }
      }
    }

    getNumberOfBurningLights(){
      let burningLights = 0;

      for (let i = 0; i < this.grid.length; i++) {
        for (let j = 0; j < this.grid[i].length; j++) {
          if (this.grid[i][j]) {
            burningLights++;
          }
        }
      }
        return burningLights
    }

    getNumberOfDarkLights() {
        return this.grid.length**2 - this.getNumberOfBurningLights()
    }
}

describe('A new grid of 1000x1000 christmas lights', () => {

let lightGrid: LightGrid
beforeEach(() => {
  lightGrid = new LightGrid(1000)
})
    it('initially has no lights turned on', () => {
      expect(lightGrid.getNumberOfBurningLights()).toEqual(0)
    })

    it('initially has a 100 lights turned off', () => {
      expect(lightGrid.getNumberOfDarkLights()).toEqual(1000000)
    })

    it('has all lights turned on after passing 0,0 through 999,999', () => {
      lightGrid.turnOn([0, 0], [999, 999])
      expect(lightGrid.getNumberOfBurningLights()).toEqual(1000000)
    })

    it('has 50 lights turned on after passing 0,50 through 0,99', () => {
      lightGrid.turnOn([0, 50], [0, 99])
      expect(lightGrid.getNumberOfBurningLights()).toEqual(50)
    })
})

describe('a light grid',()=>{
  const lightGrid = new LightGrid(1000)
  it('when a series of instructions is provided', () => {
    lightGrid.turnOn([887, 9], [959, 629])
    lightGrid.turnOn([454,398], [844,448])
    lightGrid.turnOff([539,243], [559,965])
    lightGrid.turnOff([370,819], [676,868])
    lightGrid.turnOff([145,40], [370,997])    
    lightGrid.turnOff([301,3], [808,453])
    lightGrid.turnOn([351,678], [951,908])
    lightGrid.toggle([720,196], [897,994])
    lightGrid.toggle([831,394], [904,860])
  })
})