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

console.log(chalk.hex(randomHex).bold(myStr));
