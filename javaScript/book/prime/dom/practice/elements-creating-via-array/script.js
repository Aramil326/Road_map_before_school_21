let parent = document.querySelector('#parent');

let arr = [1, 2, 3, 4, 5];

for (let elem of arr) {
  let p = document.createElement('p');
  p.textContent = elem;
  p.addEventListener('click', (e) => {
    p.textContent = +p.textContent + 1
    console.log(p.textContent)
  })

  parent.appendChild(p);
}