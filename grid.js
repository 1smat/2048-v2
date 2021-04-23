import number from './number.js'

const grid = {
  gridElement: document.getElementsByClassName("grid")[0],
  cells: [],
  playable: false,
  init: function () {
    const cellElements = document.getElementsByClassName("cell")
    let cellIndex = 1

    for (let cellElement of cellElements) {
      grid.cells[cellIndex] = {
        element: cellElement,
        top: cellElement.offSetTop,
        left: cellElement.offSetLeft,
        number: null
      }
      cellIndex++
    }
    // spawn first number and start game
    number.spawn()
    this.playable = true
  },
  randomEmptyCellIndex: () => {
    let emptyCells = []

    for (let i = 1; i < this.cells.length; i++) {
      if (this.cells[i].number === null) {
        emptyCells.push(i)
      }
    }

    if (emptyCells.length === 0) {
      // no empty cell game over! :#
      return false
    }
    return emptyCells[ Math.floor( Math.random() * emptyCells.length )]
  }
}

export default grid
