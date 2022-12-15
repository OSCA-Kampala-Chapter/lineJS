#!/usr/bin/env node
import axios from "axios";
import yargs from "yargs";

export const RemoteQuerying = async () => { 

const options = yargs(process.argv.slice(2))
 .usage("Usage: -n <name>")
 .option("n", { alias: "name", describe: "Your name", type: "string", demandOption: true })
 .option("s", { alias: "search", describe: "Search term", type: "string", demandOption: true })
 .argv;

const greeting = `Hello, ${options.name}!`;
console.log(greeting);

if (options.search) {
 console.log(`Searching for json data ${options.search}...`)
} else {
 console.log("Here's some json data for you:");
}

const url = options.search ? `${process.env.ACCESS_URL}${options.search}` : `${process.env.ACCESS_URL}`;

axios.get(url, { headers: { Accept: "application/json" } })
 .then(res => {
      if (options.search) {
          console.log("\n" +res);
        
      } else {
        console.log(res.data);

      }
 });

};
