import inquirer from 'inquirer';
async function main() {
    const { amount, conversion } = await inquirer.prompt([
        { type: 'input', name: 'amount', message: 'Amount:' },
        { type: 'list', name: 'conversion', message: 'Conversion:', choices: ['USD_PKR', 'PKR_USD'] },
    ]);
    const rates = { 'USD_PKR': 170.85, 'PKR_USD': 0.0059 }; // Please replace with the current exchange rate
    console.log(`Converted: ${(amount * rates[conversion]).toFixed(2)}`);
}
main();
