#!/usr/bin/env node
import chalk from "chalk";
import boxen from "boxen";

  export const welcomeMessage  = ()=>{

    const greeting = chalk.white.bold("LineJs loading...");

    const boxenOptions = {
      padding: 1,
      margin: 1,
      borderStyle: "round",
      borderColor: "green",
      backgroundColor: "#555555",
    };
    const msgBox = boxen(greeting, boxenOptions);
    
    console.log(msgBox);
    
  }
