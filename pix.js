window.onload = function() {
  let grid = document.createElement('div');
  grid.id = 'grid';

  for (let row = 0; row < 2; row++) {
    for (let col = 0; col < 2; col++) {
      let pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixel.addEventListener('click', event => {
        pixel.style.backgroundColor = 'red';
      });
      grid.append(pixel);
    }
  }
  document.body.append(grid);

  let palette = document.createElement('div');
  palette.id = 'palette';
  let colors = ['red', 'blue'];
  for (color of colors) {
    let colorSource = document.createElement('div');
    colorSource.className = 'colorSource';
    colorSource.style.backgroundColor = color;
    palette.append(colorSource);
  }
  document.body.append(palette);
}


// 4.Create a small palette of two colors (e.g. red and blue)
// below the canvas using more div tags.
