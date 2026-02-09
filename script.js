'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(` Sara is  deposited ${i + 1} : ${mov}kr `);
  } else {
    console.log(` Sara is  withdrawl${i + 1} : ${Math.abs(mov)} kr`);
  }
});

for (const [i, mov] of movements.entries()) {
  if (mov > 0) {
    console.log(` Sara is  deposited ${i + 1} : ${mov}kr `);
  } else {
    console.log(` Sara is  withdrawl${i + 1} : ${Math.abs(mov)} kr`);
  }
}

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, arr) {
  console.log(`${key}:${value}`);
});

accounts.forEach(function (account) {
  console.log(
    `Owner: ${account.owner},Interest Rate : ${account.interestRate}}`,
  );
});

const displaymovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (move, i) {
    const type = move > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__date">3 days ago</div>
          <div class="movements__value">${move}€</div>
        </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

//displaymovements(account1.movements);

/** Add the values from the array and display the balance */

const displayBalance = function (data) {
  const b = data.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${b}€`;
};

//** DISPLAY THE ACCOUNT BALANCE */
//displayBalance(account1.movements);

//**DISPLAY SUMMARY  */

const displaysummary=function(acc)
{

   const income=acc.movements
   .filter(mov=>mov>0)
   .reduce((acc,mov)=>acc+mov,0);

   labelSumIn.textContent= `${income}€`

   const interest=acc.movements
   . filter(mov=>mov>0)
   .map(deposit=>(deposit*acc.interestRate)/100)
   .filter(int=>int>1)
   .reduce((acc,mov)=>acc+mov,0);
   labelSumInterest.textContent=`${ interest} €`;

     const deposit=acc.movements
   .filter(mov=>mov<0)
   .reduce((acc,mov)=>acc+mov,0);

   labelSumOut.textContent= `${Math.abs(deposit)}€`;



}
const caldisplayout=function(movements)
{

   const s=movements
   .filter(mov=>mov<0)
   .reduce((acc,mov)=>acc+mov,0);

   labelSumOut.textContent= `${Math.abs(s)}€`;




}
//caldisplayin(account1.movements);
//caldisplayout(account1.movements);






const eurToUSD = 1.1;

const movUSD = movements.map(function (move) {
  return move * eurToUSD;
});

const movUSD2 = movements.map(move => move * eurToUSD);
console.log(movements);
console.log(movUSD2);

const name = accounts.map(own => {
  return own.owner;
});

console.log(name);

movements: [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposit = movements.filter(move => {
  return move > 0;
});

console.log(deposit);

const withdrawal = movements.filter(move => move < 0);
console.log(withdrawal);

const balance = movements.reduce(function (acc, move) {
  return acc + move;
}, 0);

console.log(balance);

const ba = movements.reduce((acc, mov) => acc + mov, 0);

console.log(`Balance ${ba}`);

/* 158 Compute the user name */


const user1="Steven Thomas Williams";

const username=user1.toLowerCase().split(' ').map(
  name=>name[0]
).join('');

/* Now create a function */

const getusername=function(user)
{
const username=user.toLowerCase().split(' ').map(
  name=>name[0]
).join('');

return username;
}



 const getsname=accounts.map(user=>getusername(user.owner))



console.log(getsname);

/** Task is to create username propert in for each object */


const createsusename= function(accs)
{
accs.forEach( function(acc){
acc.username=acc.owner
.toLowerCase()
.split(' ')
.map(name=>name[0])
.join('');

});
};

createsusename(accounts);

console.log(accounts);



/** The Filter Method

*/


const newdeposit=movements.filter(mov=>mov>0);
const newwithdrawal=movements.filter(mov=>mov>0);

console.log(movements);
console.log(newdeposit);
console.log(withdrawal)

/** 160 The reduce Method
 * 
 * REDUCE METHOD: TO SUM ALL  THE VALUES IN SINGLE 
 * Working to sum the values in the  array 
 * 
 */

 const newbalance=movements.reduce((acc,cur)=>acc+cur,0);
 console.log(newbalance)


 /*** GETTING THE MAXIMUM VALUED FROM THE ARRAY movements: [200, 450, -400, 3000, -650, -130, 70, 1300];*/
const max=movements.reduce( (acc,mov)=> acc>mov?acc:mov,0)
console.log(max)
//


/** CHALLENGE # 1
 * /*
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets


HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]

TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 🙂
*/





 const checkDogs=function(dogsJulia,dogsKate)
 {
const newdogsJulia=dogsJulia.slice();
newdogsJulia.splice(0,1);
newdogsJulia.splice(-2);
const dogs=newdogsJulia.concat(dogsKate)
console.log(dogs);

dogs.forEach( function(dog,i)
{

  if(dog<=3)
  {
    console.log(` Dog num:  ${i} is Puppy and ${dog} years old    `)
  }
  else
  {
console.log(`Dog num:  ${i}  is adult and ${dog} years old `)
  }

})

 }

 checkDogs([3, 5, 2, 12, 7],[4, 1, 15, 8, 3])

/** CHALLENEGE # 2/*
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 🙂
*/

const calcAverageHumanAge= function (dogs)
{
    const humAage=dogs
    .map(dogAge=>dogAge<=2? 2*dogAge: 16 +  16 + dogAge * 4)
    .filter(dogAge=>dogAge>=18)
    .reduce((acc,coun,i,arr)=>acc+coun/arr.length,0)
   



    return humAage;
  
}

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]))


/**CHANLLENEGE # 3// Coding Challenge #3

/*
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 🙂
*/
 


/*** 162 The Magic of Chaning Methods  */

//Pipeline

const eurtousd1=1.1;

const Totaldeposit=movements
.filter(mov=>mov>0)
.map(con=>con*eurtousd1)
.reduce((acc,cur)=>acc+cur,0)

console.log(Math.trunc(Totaldeposit));



/** 164 : The find Method
 * 
 * Find the first value in the Array based on a condition 
 *  Filter return all the elements that staidfy the condition 
 * while find return first one
 * filter return array 
 * while find return first values
 *  === 
 * 
 */

const f=movements.find(el=>el<0)
console.log(f);



const account= accounts.find(acc=>acc.owner==='Jessica Davis');
console.log(account)


/** 165 Implemenrt Login  
 * 
 * prevent from submitting 
 *   e.preventDefault();
 * 
*/
 let currentUser;

btnLogin.addEventListener('click',function(e){

  e.preventDefault();
 currentUser=accounts.find(acc=>acc.username===inputLoginUsername.value.toLowerCase());
 if(currentUser?.pin===Number(inputLoginPin.value)){

  //DISPLAY UI AND MESSAGES

  labelWelcome.textContent=` Wellcome back ${currentUser.owner.split(' ')[0]}`;
  containerApp.style.opacity=100;

//CLEAR THE FIELDS 
inputLoginUsername.value=inputLoginPin.value='';
inputLoginPin.blur();

  // DISPLAY MOVEMENTS
  displaymovements(currentUser.movements);
  // DISPLAY BALANCE
  displayBalance(currentUser.movements);
  //DISPLAY SUMMARY 
  displaysummary(currentUser);



 }


})