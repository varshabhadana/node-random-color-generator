import { argv } from 'node:process';
import chalk from 'chalk';
import randomcolor from 'randomcolor';

const hexCode = randomcolor.randomColor({
  luminosity: argv[3],
  hue: argv[2],
});

const block = `###############################
###############################
###############################
#####                     #####
#####     ${hexCode}         #####
#####                     #####
###############################
###############################
###############################`;

console.log(chalk.hex(hexCode).bold(block));
