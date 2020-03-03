const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.
$(document).ready(function() {
  $( '#button' ).click( calculateEmployees );
});

function bonusCalculator(employee){
  let name = employee.name;
  let bonusPercentage = 0;
  let totalCompensation = 0;
  let totalBonus = 0;

  //Checking the rating
  if (employee.reviewRating === 3){
    bonusPercentage = 0.04;
  }else if (employee.reviewRating === 4){
    bonusPercentage = 0.06;
  } else if (employee.reviewRating === 5){
    bonusPercentage = 0.10;
  }

  //Checking the employee number length
  if (employee.employeeNumber.length === 4){
    bonusPercentage += 0.05;
  }

  //Checking the employee income too much?
  if (employee.annualSalary > 65000){
    bonusPercentage -= 0.01;
  }
  
  //Checking if the employee bonus exceed normal range
  if (bonusPercentage > 0.13 ){
    bonusPercentage = 0.13;
  } 
  else if(bonusPercentage < 0){
    bonusPercentage = 0;
  }

  totalBonus = Math.round(Number(employee.annualSalary) * bonusPercentage);
  totalCompensation += Number(employee.annualSalary) + totalBonus;

  employeeBonuses = {
    name: name,
    bonusPercentage: bonusPercentage,
    totalCompensation: totalCompensation,
    totalBonus: totalBonus
  };
  $('ul').append(`<li>Emplayee Name: ${employeeBonuses.name} --- Bonus %: ${employeeBonuses.bonusPercentage} --- Compensation: $${employeeBonuses.totalCompensation} --- Bonus: $${employeeBonuses.totalBonus}</li>`)
  return employeeBonuses
  
}

function calculateEmployees(){
  $('ul').text('');
  for (let employee of employees) {
    console.log(bonusCalculator(employee));
  }
}

