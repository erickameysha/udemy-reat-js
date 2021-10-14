  "use strict";

  let options = {
    car: 'Blue',
    mark: 'Mark',
    colors:{
      border: 'left',
      bg: 'red'
    },
    makeTest: function () {
      console.log('test');
    } 
  }
  options.makeTest()
   
  const {border, bg} = options.colors;
  console.log(border);

  // console.log(Object.keys(options).length);
  // let counter = 0;
  // for (let key in options) {
  //   if (typeof (options[key]) === 'object') {
  //     for (let i in options[key]) {
  //      console.log(`Свойства ${i} значение ${options[key][i]}`);
  //      counter++
  //     }
  //   } else{
  //         console.log(`Свойства ${key} значение ${options[key]}`);
  //         counter++
  //   }

  // }
  // console.log(counter);


