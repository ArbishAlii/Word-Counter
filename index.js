#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.cyanBright("\t \t Welcome to Word Counter Activity \t"));
console.log("=".repeat(50));
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: chalk.blue("Enter a Sentence")
    }
]);
//trimming the sentence & spliting it into separate words based on "spaces"
let words = answers.sentence.trim().split(" ");
console.log("=".repeat(50));
console.log(chalk.green("Sentence Words:"));
console.log(words);
console.log(chalk.bold.redBright(`\n - Word Count: ${words.length}`));
console.log("=".repeat(50));
