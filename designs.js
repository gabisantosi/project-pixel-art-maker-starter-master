let color = document.getElementById('colorPicker')
let table = document.getElementById('pixelCanvas')
let sizePicker = document.getElementById('sizePicker')

const height = document.getElementById('inputHeight').value
const width = document.getElementById('inputWidth').value
  // makes grid
makeGrid(height, width)

sizePicker.addEventListener('click', e => {
  // prevents the page from reloading on submitting the form
  e.preventDefault()

  let height = inputHeight.value
  let width = inputWidth.value
  table.firstElementChild.remove()

  // makes grid
  makeGrid(height, width)
})

/**
 * @desc create a grid of squares
 * @param int $width - number of squares representing the width of the grid
 * @param int $height - number of squares representing the height of the grid
 */
function makeGrid (height, width) {
  for (let i = 0; i < height; i++) {
    let row = table.insertRow(i)
    for (let j = 0; j < width; j++) {
      let cell = row.insertCell(j)
      cell.addEventListener('click', e => {
        cell.style.backgroundColor = color.value
      })
    }
  }
}
