window.onload = function() {
  let colors = ['red', 'orange', 'yellow', 'green', 'blue',
    'purple', 'brown', 'gray', 'black', 'white'];
  let selectedColor = colors[0];

  // Drawing grid
  let grid = document.createElement('div');
  grid.id = 'grid';
  for (let row = 0; row < 40; row++) {
    for (let col = 0; col < 60; col++) {
      let pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixel.addEventListener('click', event => {
        pixel.style.backgroundColor = selectedColor;
      });
      grid.append(pixel);
    }
  }
  document.body.append(grid);

  // Palette
  let palette = document.createElement('div');
  palette.id = 'palette';
  for (color of colors) {
    let colorSource = document.createElement('div');
    colorSource.className = 'colorSource';
    colorSource.style.backgroundColor = color;
    colorSource.addEventListener('click', event => {
      selectedColor = colorSource.style.backgroundColor;
    });
    palette.append(colorSource);
  }
  document.body.append(palette);
}
