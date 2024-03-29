import inquirer from "inquirer";
let todo= [];
{let add= await inquirer.prompt([
   { name:"todo",
    type:"input",
    message:"What do you want to add in your todo list",},
    {
        name:"addMore",
        type:"comfirm",
        message:"do you want to add more ?",
    
    }
    
])
todo.push(add.todo)
console.log(add)
    
      }
    
