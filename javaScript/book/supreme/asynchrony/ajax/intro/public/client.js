let div = document.querySelector('div');
let button = document.querySelector('button');

button.addEventListener('click', function () {
  fetch('/ajax.html').then(
    response => {
      return response.text();
    }
  ).then(
    text => {
      div.innerHTML = text;
    }
  );
});