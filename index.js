//export/import
//npm init es6
//create a index.js
//export function greet from greet.js
//import function greet in index.js


import {greet} from './greet.js';
import {yo} from './yo.js';
import chalk from 'chalk';
import cowsay from 'cowsay';
import figlet from 'figlet';

console.log(yo('Ntombi'));
console.log(greet('Ntombi'));
const styledMessage = chalk.bgGreen.black(greet('Xola'));
console.log(styledMessage);
console.log(chalk.bgBlack.white(cowsay.say({
    text: "Hello, world!"
})));
figlet('Hello, Amanda!', function(err, data) {
if (err) {
    console.log('Something went wrong...');
    console.dir(err);
    return;
}
console.log(data);
});