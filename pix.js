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
}
