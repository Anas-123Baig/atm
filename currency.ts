import inquirer from 'inquirer';

type ConversionType = 'USD_PKR' | 'PKR_USD';

async function main() {
  const { amount, conversion }: { amount: number; conversion: ConversionType } = await inquirer.prompt([
    { type: 'input', name: 'amount', message: 'Amount:' },
    { type: 'list', name: 'conversion', message: 'Conversion:', choices: ['USD_PKR', 'PKR_USD'] },
  ]);

  const rates: Record<ConversionType, number> = { 'USD_PKR': 170.85, 'PKR_USD': 0.0059 }; // Please replace with the current exchange rate
  console.log(`Converted: ${(amount * rates[conversion]).toFixed(2)}`);
}

main();



