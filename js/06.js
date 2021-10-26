'use strict';

let str = "some";
let strObj = new String(str);

console.log(typeof(str));
console.log(typeof (strObj))
;
console.dir([2,3,4]);

const solder = {
    health: 400,
    armor:  100,
    seyHello: function (){
        console.log( "hello")
    }
}
// const john = {
//     health: 100

// john.__proto__ = solder;
const john = Object.create(solder)
console.log(john.armor);

Object.setPrototypeOf(john, solder);
john.seyHello()