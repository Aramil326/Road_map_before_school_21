function build(field, arr) {
  field.textContent = ''
  let cells = []
  for (let i = 0; i < arr.length; i++) {
    let tr = document.createElement('tr')
    for (let j = 0; j < arr[i].length; j++) {
      let td = document.createElement('td')
      td.textContent = arr[i][j]
      cells.push(td)
      tr.append(td)
    }
    field.append(tr)
  }

  return cells
}

function prepare(size) {
  let arr = []

  arr = range(size * size)
  arr = shuffle(arr)
  arr = chunk(arr, size)

  return arr
}

function range(count) {
  let arr = []

  for (let i = 0; i < count; i++) {
    arr.push(i + 1)
  }

  return arr
}

function shuffle(arr) {
  var j, temp;
  for (var i = arr.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

function chunk(arr, n) {
  let result = [];
  let count = Math.ceil(arr.length / n);

  for (let i = 0; i < count; i++) {
    let elems = arr.splice(0, n);
    result.push(elems);
  }

  return result
}

function activate(cells, size) {
  let counter = 1
  let last = size * size

  for (let cell of cells) {
    cell.addEventListener('click', function () {
      if (+cell.textContent === counter) {
        this.classList.add('active');
        if (last === counter) {
          start(size + 1)
        }
        counter++
      }
    });
  }
}

let field = document.querySelector('#field');
start(2);

function start(size) {
  activate(build(field, prepare(size)), size)
}