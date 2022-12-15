#!/usr/bin/env node
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
/**
 * Inquirier section.

 */
  
 const sing = () => console.log('🎵 Oy oy oy');

 const askName = async () => {
   const answers = await inquirer.prompt([
     {
       message: 'What is your name?',
       name: 'name',
       type: 'string'
     }
   ]);
 
   console.log(`Hello, ${answers.name}!`);
 };

export const Inquirier = async () => {  

const argv = yargs(process.argv.splice(2))
  .command('ask', 'use inquirer to prompt for your name', () => {}, askName)
  .command('sing', 'a classic yargs command without prompting', () => {}, sing)
  .demandCommand(1, 1, 'choose a command: ask or sing')
  .strict()
  .help('h').argv;

  return argv

};
