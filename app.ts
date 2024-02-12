import inquirer from 'inquirer';

let user = await inquirer.prompt([
    {
        type: "input",
        name: "username",
        message: "What is your name?",
        validate: (ans) =>{
            if(!ans){
                return "Please give your answer"
            }
            return true
        }
    },
    {
        type: "number",
        name: "userage",
        message: "What is your age?",
    },
    {
        type: "number",
        name: "userage",
        message: "What is your age?",
    },
    {
        type: "list",
        name: "userhobby",
        message: "What is your hobby?",
        choices: ["gaming","reading","writing","swimming"],
        default:"nothing"
    },
    {
        type: "checkbox",
        name: "userEmail",
        message: "Please select your valid Email?",
        choices: ["gaming@test.com","reading@test.com","writing@test.com","swimming@test.com"],
        default:"nothing"
    }
])

console.log(user)