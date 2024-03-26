import inquirer from "inquirer";
let user = await inquirer.prompt([
    {
        type:"number",
        name:"pincode",
        message:"Enter your pin code"

    },
    {
        type:"list",
        name:"accountType",
        message:"select your account type",
        choices:["current","saving"]
    },
    {
        type:"list",
        name:"transitionType",
        message:"Select your transition type",
        choices:["cash","withdraw"]
    },
    {
        type:"list",
        name:"amount",
        message:"select your amount",
        choices:[1000,2000,10000],
        when(user){
            return user.transitionType == "cash"
        }
    },
    {
        type:"number",
        name:"amount",
        message:"Enter your amount",
        when(user){
            return user.transitionType == "withdraw"
        }
    }
])
if (user.pincode){
    const balance = Math.floor(Math.random()*10000+1)
    console.log(balance)
    const enteramount = user.account
    if(enteramount<=balance){
        const remaining =balance - enteramount 
        console.log('you have withdraw rupees ${enteramount} and you have remaining balance $"{remaining}')   
    }
}