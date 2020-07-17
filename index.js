const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");
const markdownGenerator =  require("./utils/generateMarkdown");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);


// create a group of questions which need be answered by user

const questions = [
    // title
    {
type:"input",
message:"Please enter your project name: ",
name:"title"
},
// description
{
  type:"input",
  message:"Enter a brief description for this project: ",
  name:"description"  
},
// installation instruction(installation)
{
    type:"input",
    message:"Please provide the install instruction: ",
    name:"installation"
},
// usage information(usage)
{
    type:"input",
    message:"Please provide usage information about this project: ",
    name:"usage"
},
// contribution guidelines(contributing)
{
    type:"input",
    message:"Enter the contribution information about this project: ",
    name:"contributing"
},
// test instructions(tests)
{
    type:"input",
    message:"What are test instructions? ",
    name:"tests"
},
// license from a list of options
{
    type:"list",
    message:"Select a license be used: ",
    name: "license",
    choices: [
        "ISC",
        "MIT",
        "BSD",
        "Apache"
    ]
},
// enter my GitHub username
{
type:"input",
message:"Enter your Github username: ",
name:"username"
},
// enter email address
{
    type:"input",
    message:"Enter your contact email: ",
    name:"email"
}
];

// function to write README

async function writeToFile(fileName, data){
    try{
        const markdownInfo = markdownGenerator(data);
        await writeFileAsync(fileName,markdownInfo);
        console.log("README File Successfully Written!");
    }
    catch(err){
        return err;
    }
};

function init(){
    inquirer
    .prompt(questions)
    .then(function(answers){
       
       writeToFile("README_Template.md",answers) ;
    });
};

init();



// this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests




// a notice is added to the section of the README entitled License that explains which license the application is covered

// enter my GitHub username which is added to section of README entitled Questions, with a link to Github profile


// enter email address which is added to section of README entitled Questions

// click on the links then was taken to corresponding section of the README


