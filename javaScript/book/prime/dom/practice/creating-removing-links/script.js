//1
// let elems = document.querySelectorAll('#parent li');

// for (let elem of elems) {
//   let remove = document.createElement('a');
//   remove.href = '';
//   remove.textContent = 'remove';
//   elem.appendChild(remove);

//   remove.addEventListener('click', function (event) {
//     elem.remove();
//     event.preventDefault();
//   });
// }

//2
const table = document.querySelector('#table')
let tableObj = {}

for (let i = 0; i < table.children[0].children.length; i++) {
  tableObj[`tr${i}`] = table.children[0].children[i].children.length
}
console.log(tableObj)

table.textContent = ''
let tableObjLength = 0
for (let key in tableObj) {
  tableObjLength++
}

console.log(tableObjLength)


for (let i = 0; i < tableObjLength; i++) {
  let tr = document.createElement('tr')
  for (let j = 0; j <= tableObj['tr' + i]; j++) {
    if (j === tableObj['tr' + i]) {
      let td = document.createElement('td')
      let remove = document.createElement('a');
      remove.href = '';
      remove.textContent = 'remove';
      remove.addEventListener('click', (e) => {
        e.preventDefault()
        e.target.parentNode.parentNode.remove()
      })

      td.appendChild(remove);
      tr.appendChild(td)
    } else {
      let td = document.createElement('td')
      tr.appendChild(td)
    }
    table.appendChild(tr)
  }
}