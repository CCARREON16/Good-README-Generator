
let fs = require("fs");
let util = require("util");
const inquirer = require("inquirer");
const writeFileAsync = util.promisify(fs.writeFile);
function promptUser () {
    return inquirer.prompt(
    [
        {
            type: "input",
            message: "what is your name of your project?",
            name: "name"
        },
        {
            type:"input",
            message: "Describe your project ?",
            name: "describe"
        },
        {
            type: "input",
            message: "how many contributors in your project?",
            name: "contributers"
        },
        {
            type: "input",
            message: "what was the challenging part about this project ?",
            name: "challenging"
        },
        {
            type: "input",
            message: "what did you learn from this project ?",
            name: "Learn"
        },
        {
            type: "input",
            message: "what is your GitHub URL?",
            name: "GitHubURL"
        }
    ]
    )
}
inqPromise = promptUser();
inqPromise.then(function(userInput){

    let html = `
    <!DOCTYPE html>
    <html lang="en-US"> 
    <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <title>HTML Portfolio</title>
    </head>
    <body>
      <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Hi! My name is${userInput.name}</h1>
        <p class="lead">
          I am from${userInput.describe}. My favorite movie is ${userInput.contributers}. 
          My favorite snack food is ${userInput.challenging}.
        </p>
        <h3><span class="badge badge-secondary">Contact Me</span></h3>
        <ul class="list-group">
          <li class="list-group-item">My GitHub URL is ${userInput.learn}</li>
          <li class="list-group-item">LinkedIn: ${userInput.GitHubURL}</li>
        </ul>
      </div>
    </div>
    </body>
    </html>
    ` ;
    let writePromise = writeFileAsync("profileIndex.html", html, "utf8");
    writePromise.then(function() {
        console.log("successfully wrote out to index.html");
    }) .catch(function(err) {
        console.log("problem with writing file index.html")
        console.log(err);
    }) .catch(function(err) {
        console.log("problem with inquirer.prompt");
        console.log(err);
    })
    });