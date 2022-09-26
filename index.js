/* import { argv } from 'node:process'; */
import chalk from 'chalk';
import randomcolor from 'randomcolor';

const hexCode = randomcolor.randomColor();

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
