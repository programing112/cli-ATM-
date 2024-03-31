import inquirer from "inquirer";
const answer = await inquirer.prompt([{
        type: "input",
        name: "userid",
        message: "Enter your id"
    },
    {
        type: "number",
        name: "userpin",
        message: "Enter your pin"
    },
    {
        type: "list",
        name: "Accounttype",
        choices: ["current", "saving", "other account"],
        message: "Enter your Account type"
    },
    {
        type: "list",
        name: "transactiontype",
        choices: ["fast cash", "balance check", "other amount"],
        message: "enter your transactiontype",
        when(answers) {
            return answers.Accounttype;
        }
    },
    {
        type: "list",
        name: "withdrowAtpe",
        choices: ["1000", "2000", "5000"],
        message: "enter your Amount",
        when(answers) {
            return answers.transactiontype == "fast cash";
        }
    }
]);
if (answer.userid && answer.userpin) {
    const balance = Math.floor(Math.random() * 10000000);
    console.log(balance);
    const Enteramount = parseInt(answer.withdrowAtpe || '0');
    if (balance >= Enteramount) {
        const remianing = balance - Enteramount;
        console.log("your remaining balance is", `${remianing}`);
    }
    else {
        console.log("insficiant balnce");
    }
}
;
