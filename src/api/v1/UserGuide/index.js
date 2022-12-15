#!/usr/bin/env node
import yargs from "yargs";

/**
 * Tell users how to use your options and make demands.

 */
export const UserGuide = async () => {

    var argv = yargs(process.argv.slice(2))
    .usage('Usage: $0 -w [num] -h [num]')
    .demandOption(['w','h'])
    .argv;

console.log("The area is:", argv.w * argv.h);

};
