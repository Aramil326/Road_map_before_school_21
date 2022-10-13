// 1
// function make(callback) {
//   setTimeout(function () {
//     let res = [1, 2, 3, 4, 5];
//     callback(res);
//   }, 3000);
// }

// make(function (res) {
//   let sum = 0

//   for (let elem of res) {
//     sum += +elem
//   }

//   console.log(sum);
// });

// 2
// function make(num1, num2, callback) {
//   setTimeout(function () {
//     let arr = [1, 2, 3, 4, 5];
//     callback(arr[num1] + arr[num2]);// результатом передаем элемент массива
//   }, 3000);
// }

// make(3, 4, function (res) {
//   console.log(res); // третий элемент массива
// });

// 3
// function loadImage(imgSrc, callback) {
//   setTimeout(function () {
//     if (imgSrc === undefined || imgSrc === null || imgSrc === '') {
//       err = 'elem not exists'; // текст ошибки
//     } else {
//       err = null; // ошибки нет
//     }
//     callback(imgSrc, err);// результатом передаем элемент массива
//   }, 3000);
// }

// loadImage('image.png', function (image, err) {
//   if (!err) {
//     document.body.append(image);
//   } else {
//     console.log('произошла ошибка: ' + err);
//   }
// });

// 4
// function loadImage(imgSrc, callback) {
//   setTimeout(function () {
//     if (imgSrc === undefined || imgSrc === null || imgSrc === '') {
//       err = 'elem not exists'; // текст ошибки
//     } else {
//       err = null; // ошибки нет
//     }
//     callback(imgSrc, err);// результатом передаем элемент массива
//   }, 3000);
// }

// loadImage('image1.png', function (image, err) {
//   if (!err) {
//     document.body.append(image);
//   } else {
//     console.log('произошла ошибка: ' + err);
//   }
//   loadImage('image2.png', function (image, err) {
//     if (!err) {
//       document.body.append(image);
//     } else {
//       console.log('произошла ошибка: ' + err);
//     }
//     loadImage('image3.png', function (image, err) {
//       if (!err) {
//         document.body.append(image);
//       } else {
//         console.log('произошла ошибка: ' + err);
//       }
//       loadImage('image4.png', function (image, err) {
//         if (!err) {
//           document.body.append(image);
//         } else {
//           console.log('произошла ошибка: ' + err);
//         }
//         loadImage('image5.png', function (image, err) {
//           if (!err) {
//             document.body.append(image);
//           } else {
//             console.log('произошла ошибка: ' + err);
//           }
//           loadImage('image6.png', function (image, err) {
//             if (!err) {
//               document.body.append(image);
//             } else {
//               console.log('произошла ошибка: ' + err);
//             }
//             loadImage('image7.png', function (image, err) {
//               if (!err) {
//                 document.body.append(image);
//               } else {
//                 console.log('произошла ошибка: ' + err);
//               }
//               loadImage('image8.png', function (image, err) {
//                 if (!err) {
//                   document.body.append(image);
//                 } else {
//                   console.log('произошла ошибка: ' + err);
//                 }
//                 loadImage('image9.png', function (image, err) {
//                   if (!err) {
//                     document.body.append(image);
//                   } else {
//                     console.log('произошла ошибка: ' + err);
//                   }
//                   loadImage('', function (image, err) {
//                     if (!err) {
//                       document.body.append(image);
//                     } else {
//                       console.log('произошла ошибка: ' + err);
//                     }
//                   });
//                 });
//               });
//             });
//           });
//         });
//       });
//     });
//   });
// });