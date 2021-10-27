'use strict';

console.log(typeof(String(null)));
console.log(typeof(String(4)));

console.log(typeof(5 + ''));

const num = 5;

console.log('https://vk.com/catalog/' + 5);

const fontSize = 26 + 'px';
 // to Number

 // 1)
 console.log(typeof(Number('4')));

 //2) 

  console.log(typeof(+'5'));

// 3)
 console.log(typeof(parsrInt('15px', 10)));



 let answ = +prompt('Hell', '');

 // to boolean 

// 0, '', null, undefined, NaN

let switcher = null;

if (switcher ) {
  console.log("working");
}

switcher = 1;

if (switcher) {
  console.log("working");
}

console.log(typeof(Boolean('4')));

console.log(typeof(!!'4444'));