let gulp = require('gulp');

function task(cb) {
  task1(cb)
  task2(cb)
  task3(cb)
  cb();
}

function task1(cb) {
  console.log(new Date().getDate());
  cb();
}

function task2(cb) {
  console.log(new Date().getMonth());
  cb();
}

function task3(cb) {
  console.log(new Date().getFullYear());
  cb();
}

exports.default = task;