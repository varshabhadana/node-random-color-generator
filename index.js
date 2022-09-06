import { argv } from 'node:process';
import chalk from 'chalk';
import randomcolor from 'randomcolor';

const randomHex = randomcolor.randomColor({
  luminosity: argv[3],
  hue: argv[2],
});

const myStr = `###############################
###############################
###############################
#####                     #####
#####     ${randomHex}         #####
#####                     #####
###############################
###############################
###############################`;

/* if (argv[2] === 'ask') {
  console.log(`provide name of the color and the luminosity`);
} else {
  console.log(chalk.hex(randomHex).bold(myStr));
} */
console.log(chalk.hex(randomHex).bold(myStr));
