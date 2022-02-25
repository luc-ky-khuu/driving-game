/* global data */
/* exported data */
var $car = document.querySelector('#car');

document.addEventListener('keydown', function (event) {
  data.previousView = data.view;
  if (event.key === 'ArrowUp') {
    $car.setAttribute('data-view', 'up');
    data.view = 'up';
    $car.className = 'up';
    $car.style = 'transform: rotate(-90deg)';
  } else if (event.key === 'ArrowDown') {
    $car.setAttribute('data-view', 'down');
    data.view = 'down';
    $car.className = 'down';
    $car.style = 'transform: rotate(90deg)';
  } else if (event.key === 'ArrowLeft') {
    $car.setAttribute('data-view', 'left');
    data.view = 'left';
    $car.className = 'left';
    $car.style = 'transform: rotate(180deg)';
  } else if (event.key === 'ArrowRight') {
    $car.setAttribute('data-view', 'right');
    data.view = 'right';
    $car.className = 'right';
    $car.style = 'transform: rotate(0)';
  }
});
