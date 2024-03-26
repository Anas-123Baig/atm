// A simple calculator
  import inquirer from "inquirer";
  import prompt from "inquirer/lib/ui/prompt.js";
  let answer=await  inquirer.prompt([
      {message:"Enter your first number",type:"number",name:"firstNumber"},
     { message:"Enter your second number",type:"number",name:"secondNumber"},
    {
      message:"Please select one operator",
      name:"operator",
      type:"list",
      choices:["addition","subtraction","multiplication","division"]
    }
  ])
  if(answer.operator==="addition"){
      console.log(answer.firstNumber + answer.secondNumber)
     
  }
  else if(answer.operator==="subtraction"){
      console.log(answer.firstNumber - answer.secondNumber)
  }
  else if(answer.operator==="multiplication"){
      console.log(answer.firstNumber * answer.secondNumber)
  }
  else if(answer.operator==="division"){
      console.log(answer.firstNumber / answer.secondNumber)
  }
  else console.log("Invalid input")
  


 
