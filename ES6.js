/*********** warming up ** fundamentals **********/
/*vowel Count
https://www.codewars.com/kata/54ff3102c1bad923760001f3
*/
function getCount(str) {
  var vowelsCount = 0;

  // enter your majic here
  for(let i=0; i<str.length; i++){
    if(str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u"){
        vowelsCount ++;
       }
  }

  return vowelsCount;
}


/*even or Odd
https://www.codewars.com/kata/53da3dbb4a5168369a0000fe
*/
function even_or_odd(number) {
  return number % 2 ? "Odd" : "Even"
}


/*get the middle caractère
https://www.codewars.com/kata/56747fd5cb988479af000028
*/
function getMiddle(s)
{
  //Code goes here!
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);

}

/*Mumbling
//https://www.codewars.com/kata/5667e8f4e3f572a8f2000039
*/
/*My own idea & it works
function accum(s) {
	// your code
  let str =s[0].toUpperCase();
  for (let i = 1; i < s.length ; i++ ){
    str += "-"+s[i].toUpperCase()+s[i].toLowerCase().repeat(i);
  }
  console.log(str);
}*/
//the codewars solution
function accum(s) {
  return s.split('').map((x,index) => x.toUpperCase()+Array(index+1).join(x.toLowerCase())).join('-');
}


/* u r a square
https://www.codewars.com/kata/54c27a33fb7da0db0100040e
*/
var isSquare = function(n){
  //Number(Math.sqrt(n)) === Math.sqrt(n) &&  we can add this part too
  if (n!==0 && !Math.sqrt(n) || Math.sqrt(n) % 1 !== 0){
    return false;
  }else if (n < 0){
    return false;
  }else{
    return true;
  }
}
//codewars solution
var isSquare = function(n){
  return Number.isInteger(Math.sqrt(n));
}



/*disem vowel trolls
https://www.codewars.com/kata/52fba66badcd10859f00097e
*/
function disemvowel(str) {
  //return str.replace(/[aAeEiIoOuU]/g, ''); => this one is my solution
  return str.replace(/[aeiou]/gi, ''); //this is a better one
}


/*Highset and Lowest
https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript
*/
function highAndLow(numbers){
  numbers = numbers.split(' ');
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}
//other solution
function highAndLow(numbers){
  numbers = numbers.split(' ').map(Number);
  return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
}



/*Exes & Ohs
https://www.codewars.com/kata/55908aad6620c066bc00002a
*/
function XO(str) {
  let xArr, oArr;
  //looking for x
  if(str.match(/x/gi)){
    xArr = str.match(/x/gi);
  }else {
    xArr = [];
  }
  console.log(xArr);
  //looking for o
  if(str.match(/o/gi)){
    oArr = str.match(/o/gi);
  }else {
      oArr = [];
  }
  console.log(oArr);

  if(xArr.length === oArr.length){
    return true;
  } else {
    return false;
  }
}
//opitimal solutions
function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}
function XO(str) {
    var a = str.replace(/x/gi, ''),
        b = str.replace(/o/gi, '');
    return a.length === b.length;
}



/*square every digit
https://www.codewars.com/kata/546e2562b03326a88e000020*/
function squareDigits(num){ //my solution clever me ehehe
  return parseFloat(num.toString().split('').map(nbr => nbr*nbr).join(''));
}

//another solution
function squareDigits(num){
  return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
}


/*shortest word
https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9*/
function findShort(s){
  var arr = s.split(' ');
  var smallest = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if(arr[i].length < smallest.length){
      smallest = arr[i];
    }
  }
  return smallest.length;
}
//opitimal
function findShort(s){
  return Math.min.apply(null, s.split(' ').map(w => w.length));
}


/*complementary DNA
https://www.codewars.com/kata/554e4a2f232cdd87d9000038*/
function DNAStrand(dna){
  //your code here
  var result= "";
      for(var i =0; i<dna.length; i++)
      {
        if (dna[i]==="A")
       {
        result +="T";
       }
        else if (dna[i]==="T")
       {
        result += "A";
        }
        else if (dna[i]==="C")
        {
        result +="G";
        }
        else if (dna[i]==="G")
        {
        result += "C";
        }
        else {
        result +=dna[i];
        }
     }
     return result;
  }
  //optimal
  function DNAStrand(dna) {
  return dna.replace(/./g, function(c) {
    return DNAStrand.pairs[c]
  })
}

DNAStrand.pairs = {
  A: 'T',
  T: 'A',
  C: 'G',
  G: 'C',
}


/*descending order
https://www.codewars.com/kata/5467e4d82edf8bbf40000155*/
function descendingOrder(n){
  return parseInt(String(n).split('').sort().reverse().join(''))
}


/*sum of positive
https://www.codewars.com/kata/5715eaedb436cf5606000381*/
function positiveSum(arr) {
  var total = 0;
  for (i = 0; i < arr.length; i++) {    // setup loop to go through array of given length
    if (arr[i] > 0) {                   // if arr[i] is greater than zero
      total += arr[i];                  // add arr[i] to total
    }
  }
  return total;                         // return total
}
//optimal
function positiveSum(arr) {
   return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
}


/*isograms
https://www.codewars.com/kata/54ba84be607a92aa900000f1*/
function isIsogram(str){
  return new Set(str.toUpperCase()).size == str.length;
}
//
function isIsogram(str){
  return !/(\w).*\1/i.test(str)
}


/*list filtering
https://www.codewars.com/kata/53dbd5315a3c69eed20002dd*/
//my solution clever me
function filter_list(l) {
  return l.filter(function(v) {return typeof v == 'number'})
}


/*the smallest integer
https://www.codewars.com/kata/55a2d7ebe362935a210000b2*/
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
    // return Math.min.apply(null, args);
  }
}


/** sum of two lowest positive integer
https://www.codewars.com/kata/558fc85d8fd1938afb000014*/
//my solution
function sumTwoSmallestNumbers(numbers) {
  //Code here
  let sum =0;
  sum += Math.min(...numbers);
    //console.log("first sum",sum);

  let numbers1 = numbers.filter(n => n > sum);
    //console.log("numbers 1", numbers1);

  sum += Math.min(...numbers1);
  //console.log("second sum", sum);
  return sum;
}
//codewors solution
function sumTwoSmallestNumbers(numbers) {
  var min = Number.MAX_SAFE_INTEGER;
  var secondMin = Number.MAX_SAFE_INTEGER;

  var n;
  for (i = 0; i < numbers.length; i++) {
    n = numbers[i];
    if(n < min) {
      secondMin = min;
      min = n;
    } else if( n < secondMin ) {
      secondMin = n;
    }
  }

  return min + secondMin;
}
//optimal
function sumTwoSmallestNumbers(numbers){
  numbers = numbers.sort(function(a, b){return a - b; });
  return numbers[0] + numbers[1];
};



/*growth of population
https://www.codewars.com/kata/563b662a59afc2b5120000c6*/
function nbYear(p0, percent, aug, p) {
    var i = 1;
    var mult = 1 + percent / 100.0;
    var prev = p0;
    while (prev < p) {
        var ne = Math.floor(prev * mult + aug)
        prev = ne
        i++;
    }
    return (i - 1);
}
//optimal
function nbYear(p0, percent, aug, p) {

  for (var years = 0; p0 < p; years++) {
    p0 = Math.floor(p0 + p0 * percent / 100 + aug);
  }
  return years
}



/*string repeat
https://www.codewars.com/kata/57a0e5c372292dd76d000d7e*/
function repeatStr (n, s) {
  return s.repeat(n);
}









/*******************Algorithms*******************/
/*is this a triangle?
https://www.codewars.com/kata/56606694ec01347ce800001b*/
function isTriangle(a,b,c) {
  if(a > 0 && b > 0 && c > 0) {
    if(a < b + c && b < a + c && c < a + b) {
      return true;
    }
    else {
      return false;
    }
  }
  else {
   return false;
  }
}
//optimal
function isTriangle(a,b,c)
{
   return a + b > c && a + c > b && c + b > a;
}


/*find the next perfect square
https://www.codewars.com/kata/56269eb78ad2e4ced1000013*/
function findNextSquare(sq) {
  var number = Math.sqrt(sq);
  if(Math.round(number) === number) {
    return Math.pow(++number, 2)
  }
  return -1;
}
//optimal
function findNextSquare(sq) {
  return Math.sqrt(sq)%1? -1 : Math.pow(Math.sqrt(sq)+1,2);
}


/**credit card mask
https://www.codewars.com/kata/5412509bd436bd33920011bc */
//my solution and it's not perfect
function maskify(cc) { 
  return cc.split('').slice(0, cc.length-4).map((x) => x.replace(x,'#')).concat(cc.split('').slice(cc.length-4)).join(''); 
}
//codewars solution
function maskify(cc) {
  cc = cc.split("");
  for(var i = 0; i < cc.length - 4; i++){
    cc[i] = "#";
  }
  cc = cc.join("");
  return cc;
}
//optimal solution
function maskify(cc) {
  return cc.slice(-4).padStart(cc.length,'#'); //padStart is a predifined function which hide part of the string
}


/** sum of odd numbers
 * https://www.codewars.com/kata/55fd2d567d94ac3bc9000064 */
 function rowSumOddNumbers(n)
 {
   /* The rows' start numbers are Hogben's centered polygonal numbers:
      1, 3, 7, 13, 21, 31, 43 = b[n] = n^2 - n + 1.
      <https://oeis.org/A002061>
      
      The sum of one row is given by:
      s[n] = n^2 + n(b[n] - 1).
      <https://www.quora.com/What-is-the-sum-of-n-consecutive-odd-integers/answer/Xavier-Dectot>
      
      Inline b[n]:
      s[n] = n^2 + n(n^2 - n + 1 - 1)
           = n^2 + n(n^2 - n)
           = n^2 + n^3 - n^2
           = n^3
      ... oh. */
   return Math.pow(n, 3);
 }

 /**find the divisors
  * https://www.codewars.com/kata/544aed4c4a30184e960010f4 */
function divisors(integer) {
  var divs = [];
  
  for(var i = 2; i < integer; i++) {
    if(integer % i === 0) {
      divs.push(i);
    }
  }
  
  return divs.length ? divs : integer + ' is prime';
};
//
function divisors(integer){
  var res = []
  for (var i = 2; i <= Math.floor(integer / 2); ++i) if (integer % i == 0) res.push(i);
  return res.length ? res : integer + ' is prime';
}




/*************************Data Types*************************** */
/**return negatives
 * https://www.codewars.com/kata/55685cd7ad70877c23000102 */
 //my solution
 function makeNegative(num) {
  // Code?
  if (num > 0){
    return -Math.abs(num);
  }else{
    return num;
  }
}
//optimal solution from codewars
function makeNegative(num) {
  return num < 0 ? num : -num;
}


/**remove first and last character
 * https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0*/
 //clever girl <3
 function removeChar(str){
  //You got this!
   return str.substr(1,str.length-2); 
 };
 //codewars solution
 function removeChar(str) {
  return str.slice(1, -1);
}


/**remove string space
 * https://www.codewars.com/kata/57eae20f5500ad98e50002c5 */
function noSpace(x){
  return x.split(' ').join('');
  //or return x.replace(/\s/g, '');
}

/**convert boolean value to string
 * https://www.codewars.com/kata/53369039d7ab3ac506000467 */
 function boolToWord( bool ){
  //...
  return bool === true ? 'Yes' : 'No';
}

/**convert a number to string
 * https://www.codewars.com/kata/5265326f5fda8eb1160004c8 */
 //clever me :D
 function numberToString(num) {
 return num.toString();
 //or return String(num)
} 



/************************ Numbers **********************/
/**Basic mathematical operations
 * https://www.codewars.com/kata/57356c55867b9b7a60000bd7 */
//my solution
function basicOp(op, a, b)
{
  // Code
  switch (op)
  { case "+": return a + b
    case "-": return a - b
    case "*": return a * b
    case "/": return a / b
    case "%": return a % b
    case "^": return Math.pow(a, b)
    default: return "error"
  }
}
//codewars
function basicOp(op, a, b) {
  return eval(a+op+b);
}


/**sum of the 1st nth term of series
 * https://www.codewars.com/kata/555eded1ad94b00403000071 */
function SeriesSum(n) {
  var sum = 0;
  for(var i = 0; i < n; i++) {
    sum += 1 / (3 * i + 1);
  }
  return sum.toFixed(2);
}
//optimal
function SeriesSum(n, s = 0) {
  return n ? SeriesSum(n - 1, s + 1 / (3 * n - 2)) : s.toFixed(2)
}


/**keep hydrated
 * https://www.codewars.com/kata/582cb0224e56e068d800003c */
function litres(time) {
  return Math.floor(time * 0.5);
}//floor rounds a number to the nearst down integer


/**century from year
 * https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097 */
function century(year) {
  // not a perfect solution 
  return Number(String(year).split('').slice(0,2).join(''))+ 1;
}
//codewars
function century(year) {
  return (year + 99) / 100 | 0;
}


/**beginner lost without a map
 * https://www.codewars.com/kata/57f781872e3d8ca2a000007e */
function maps(x){
  return x.map(x => x * 2);
}



/*********************String****************** */
/**reverse a string
 *https://www.codewars.com/kata/5168bb5dfe9a00b126000018*/
 //clever me :p
function solution(str){
  return str.split('').reverse().join('');
}


/**string endswith ?
 * https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d */
function solution(str, ending){
  return str.endsWith(ending);
}

/**do i get a bonus
 * https://www.codewars.com/kata/56f6ad906b88de513f000d96 */
//good job maya
function bonusTime(salary, bonus) {
  // your code here
    return bonus === true ? "£"+String(salary*10) : "£"+String(salary);
}


/**abbreviate two word name
 * https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3*/
//my solution
function abbrevName(name){
  var arr = name.split(" ");
  return arr[0].slice(0,1).toUpperCase()+"."+arr[1].slice(0,1).toUpperCase();
}
//optimal
function abbrevName(name){
  var nameArray = name.split(" ");
  return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}


/**DNA to RNA conversion
 * https://www.codewars.com/kata/5556282156230d0e5e000089 */
function DNAtoRNA(dna){
  return dna.replace(/T/g, 'U');
}





/*****************************Arrays****************************/
/**counting sheep
 * https://www.codewars.com/kata/54edbc7200b811e956000556 */
//good job maya <3
function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
  return arrayOfSheep.filter(sheep => sheep === true).length;
  //or  return arrayOfSheeps.filter(Boolean).length;
}

/** Ones and Zeros
 * https://www.codewars.com/kata/578553c3a1b8d5c40300037c */
 //clever maya kiss
const binaryArrayToNumber = arr => {
  // your code
  return parseInt(arr.join(''),2);
};


/** a needle in the haystack
 * https://www.codewars.com/kata/56676e8fabd2d1ff3000000c*/
//my solution ha ha
function findNeedle(haystack) {
  // your code here
  if (haystack.findIndex( needle => needle === "needle") >= 0 ){
    return `found the needle at position ${haystack.findIndex(needle => needle === "needle")}`;
  } else{
    return "needle not found";
  }   
}
//optimal
function findNeedle(haystack) {
  return "found the needle at position " + haystack.indexOf("needle");
}


/**remove the minimum
 * https://www.codewars.com/kata/563cf89eb4747c5fb100001b */
 function removeSmallest(numbers) {
  let indexOfMin = numbers.indexOf(Math.min(...numbers));
  return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
}
//an other one
function removeSmallest(numbers) {
  const min = Math.min.apply(this, numbers);
  return numbers.filter((num, idx, arr) => idx !== arr.indexOf(min));
}


/**convert number o reversed array of digital
 *https://www.codewars.com/kata/5583090cbe83f4fd8c000051 */
//saèiti mayoucha muwaaah
function digitize(n) {
  return String(n).split("").map((n)=>{
    return Number(n)
  }).reverse();
}





/********************objects*********************************/
/**Make a function that does arithmetic
 * https://www.codewars.com/kata/583f158ea20cfcbeb400000a */
//my solution
 function arithmetic(a, b, operator){
  switch (operator)
    { case "add": return a + b
      case "subtract": return a - b
      case "multiply": return a * b
      case "divide": return a / b    
      default:
    }
}
//codewars
function arithmetic(a, b, operator){
  optable = { "add":"+", "subtract": "-", "multiply": "*" , "divide":"/"};
  return eval(a + optable[operator] + b); 
}


/**Regular ball super ball
 * https://www.codewars.com/kata/53f0f358b9cb376eca001079 */
var Ball = function(ballType) {
  // your code goes here
  this.ballType = ballType || 'regular';
};


/**make them barck
 * https://www.codewars.com/kata/5535572c1de94ba2db0000f6 */
function Dog(name, breed, sex, age){
  this.name  = name,
  this.breed = breed,
  this.sex   = sex,
  this.age   = age;
}
Dog.prototype.bark = function() { return 'Woof!' }

/**add property to every object in array
 * https://www.codewars.com/kata/54e8c3e89e2ae6f4900005a1 */
//good job mayouch
questions.forEach(question => {
  question.usersAnswer = null;
});

/**fix me : get full name
 * https://www.codewars.com/kata/597c684822bc9388f600010f */
//my solution
class Dinglemouse{

  constructor( firstName, lastName ){
    this.firstName=firstName;
    this.lastName=lastName;
  }
  
  getFullName(){
    return `${this.firstName} ${this.lastName}`.trim();    
  }  
}




/*********************Basic language features***************************/
/**Grasshopper-summation
 * https://www.codewars.com/kata/55d24f55d7dd296eb9000030 */
var summation = function (num) {
  // Code here
  let sum = 0;
  for (let i=1; i<= num; i++){
    sum+=i;
  }
  return sum;
}
//optimal
const summation = n => n * (n + 1) / 2;


/**jenny's secret message
 * https://www.codewars.com/kata/55225023e1be1ec8bc000390 */
 function greet(name){
  if(name === "Johnny")
    return "Hello, my love!";
  else
    return "Hello, " + name + "!";
}
//optimal
function greet(name){
  return "Hello, " + (name == "Johnny" ? "my love" : name) + "!";
}


/**function 1 hello world
 * https://www.codewars.com/kata/523b4ff7adca849afe000035 */
function greet() {
  return "hello world!";
}

/**Count the monkeys
 * https://www.codewars.com/kata/56f69d9f9400f508fb000ba7 */
//my solution
function monkeyCount(n) {
  var monkeys = [];
  for(var i=1; i<n+1; i++){
    monkeys.push(i);
  }
  return monkeys;
}
 //optimal
function monkeyCount(n) {
  return Array.from({length:n}, (_,i)=>i+1)
}


/**Are you playing banjo
 * https://www.codewars.com/kata/53af2b8861023f1d88000832 */
function areYouPlayingBanjo(name) {
  if (name[0].toLowerCase() === 'r') {
    return name + ' plays banjo';
  } else {
    return name + ' does not play banjo';
  }
}
//optimal
function areYouPlayingBanjo(name) {
  return name + (/^r/i.test(name) ? " plays " : " does not play ") + "banjo";
}





/**Conditional statements 
 * https://www.codewars.com/kata/539ee3b6757843632d00026b */
var capitals = function (word) {
  var caps = [];
  for(var i = 0; i < word.length; i++) {
    if(word[i].toUpperCase() == word[i]) caps.push(i);
  }
  return caps;
};
//codewars
var capitals = function (word) {
  return word.split('')
             .map(function(l, i) { if (l.toUpperCase() === l) return i; })
             .filter(function(i) { return i != null })
};


/**plural
 * https://www.codewars.com/kata/52ceafd1f235ce81aa00073a */
function plural(n) {
  return n !== 1;
}


/**Drink about 
 * https://www.codewars.com/kata/56170e844da7c6f647000063 */
function peopleWithAgeDrink(age){
  let drink;
    if(age < 14)
      drink = 'toddy';
    else if(age < 18)
      drink = 'coke'
    else if(age < 21)
      drink = 'beer';
    else if(age => 21)
      drink = 'whisky';

    return 'drink ' + drink;
}
//optimal
const peopleWithAgeDrink = (age) =>
  age < 14 ? "drink toddy" :
  age < 18 ? "drink coke" :
  age < 21 ? "drink beer" : "drink whisky";


/**leonardo dicaprio and oscars
* https://www.codewars.com/kata/56d49587df52101de70011e4   */
function leo(oscar){
  switch (oscar){
    case 88:
      return "Leo finally won the oscar! Leo is happy";
      break;
    case 86:
      return  "Not even for Wolf of wallstreet?!";
      break;
    default:
      if(oscar<88) return "When will you give Leo an Oscar?";
      else return  "Leo got one already!";
  }
}
//optimal
const leo = (oscar) => {
  return oscar === 88 ? 'Leo finally won the oscar! Leo is happy' :
         oscar === 86 ? 'Not even for Wolf of wallstreet?!'       :
         oscar  <  88 ? 'When will you give Leo an Oscar?'        :
         'Leo got one already!';
};


/**switch case bug fixing
 * https://www.codewars.com/kata/55c933c115a8c426ac000082  */
function evalObject(value){
  switch(value.operation){
    case'+': return value.a + value.b;
    case'-': return value.a - value.b;
    case'/': return value.a / value.b;
    case'*': return value.a * value.b;
    case'%': return value.a % value.b;
    case'^': return Math.pow(value.a, value.b);
  }
}



/*****************loops************************/
/**sentence smash
 * https://www.codewars.com/kata/53dc23c68a0c93699800041d */
function smash (words) {
  return words.toString().replace(/\,/g, ' ');
};


/**if u can't sleep just count sheep
 * https://www.codewars.com/kata/5b077ebdaf15be5c7f000077 */
var countSheep = function (num){
  let str = "";
  for(let i = 1; i <= num; i++) { str+= `${i} sheep...`; }
  return str;
}


/**double char
 * https://www.codewars.com/kata/56b1f01c247c01db92000076 */
function doubleChar(str) {
  // Your code here
  let doubled = '';
  for(let i=0; i<str.length; i++){
    doubled+=str[i].repeat(2);
  }
  return doubled;
}
//optimal solution
const doubleChar = (str) => str.split("").map(c => c + c).join("");


/**unfinished loop
 * https://www.codewars.com/kata/55c28f7304e3eaebef0000da */
 function createArray(number){
  var newArray = [];
  
  for(var counter = 1; counter <= number; counter++){
    newArray.push(counter);
  }
  
  return newArray;
}


/**sum of numbers from 0 to n
 https://www.codewars.com/kata/56e9e4f516bcaa8d4f001763 */
 var SequenceSum = (function() {
  function SequenceSum() {}

  SequenceSum.showSequence = function(count) {
    var sum = 0;
    var str = "";
    if (count === 0) {
      return "0=0";
    } else if (count < 0) {
      return count + "<0";
    } else {
      for (var i = 0; i < count; i++) {
        sum += i;
        str += i + "+";
      };
    sum += count;
    str += count + " = " + sum;
    return str;
    };
  };

  return SequenceSum;

})();






/*************************Changing Gears**************************/
/**Multiples of 3 or 5
 * https://www.codewars.com/kata/514b92a657cdc65150000006 */
function solution(number){
  var sum = 0;
  
  for(var i = 1;i< number; i++){
    if(i % 3 == 0 || i % 5 == 0){
      sum += i
    }
  }
  return sum;
}
//optimal solution
function solution(number){
  var n3 = Math.floor(--number/3), n5 = Math.floor(number/5), n15 = Math.floor(number/15);
  return (3 * n3 * (n3 + 1) + 5 * n5 * (n5 + 1) - 15 * n15 * (n15+1)) /2;
}


/**Sum of digits
 * https://www.codewars.com/kata/541c8630095125aba6000c00 */
function digital_root(n) {
  if (n < 10)
    return n;
  for (var sum = 0, i = 0, n = String(n); i < n.length; i++)
    sum += Number(n[i]);   
  return digital_root(sum);
}


/**who likes it
 * https://www.codewars.com/kata/5266876b8f4bf2da9b000362 */
function likes(names) {
  names = names || [];
  switch(names.length){
    case 0: return 'no one likes this'; break;
    case 1: return names[0] + ' likes this'; break;
    case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
    case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
    default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
  }
}


/**find the parity outlier
 * https://www.codewars.com/kata/5526fc09a1bbd946250002dc */
function findOutlier(integers){
  const even = integers.filter(int => int % 2 === 0);
  const odd  = integers.filter(int => int % 2 !== 0);
  return even.length === 1 ? even[0] : odd[0];
}


/**stop gninnipS my sdrow
 * https://www.codewars.com/kata/5264d2b162488dc400000001 */
function spinWords(words){
  return words.split(' ').map(function (word) {
    return (word.length > 4) ? word.split('').reverse().join('') : word;
  }).join(' ');
}


/**fire at will */
//https://www.codewars.com/kata/52449b062fb80683ec000024
function generateHashtag (str) {
  if(!str || str.length < 1) return false;
  
  var r = '#' + str.split(' ').map(function(el) {
    return el.charAt(0).toUpperCase() + el.slice(1).toLowerCase();
  }).join('');
  return r.length > 140?false:r;
}

//https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/javascript
function duplicateCount(text){
  return text.toLowerCase().split('').filter(function(val, i, arr){
    return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
  }).length;
}

//https://www.codewars.com/kata/550554fd08b86f84fe000a58/javascript
function inArray(arr1, arr2) {
  return arr1.filter(function(needle) {
    return arr2.some(function(haystack) {
      return haystack.indexOf(needle) > -1;
    });
  }).sort();
}

//https://www.codewars.com/kata/55c45be3b2079eccff00010f
function order(words){
  // ...
   return words.split(' ').sort(function(a, b){
      return a.match(/\d/) - b.match(/\d/);
   }).join(' ');
}

//https://www.codewars.com/kata/583203e6eb35d7980400002a
function countSmileys(arr) {
  return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
}

//https://www.codewars.com/kata/5842df8ccbd22792a4000245
function expandedForm(num) {
  return String(num)
          .split("")
          .map((num, index, arr) => num + "0".repeat(arr.length - index -1 ))
          .filter((num) => Number(num) != 0)
          .join(" + ")
}

//https://www.codewars.com/kata/54a2e93b22d236498400134b
function presses(phrase) {
  var chunks = ['1', 'ABC2', 'DEF3', 'GHI4', 'JKL5', 'MNO6', 'PQRS7', 'TUV8', 'WXYZ9', ' 0'],
      phrase = phrase.toUpperCase().split(''),
      total = 0;
  
  phrase.forEach(function(l) {
    var key = chunks.filter(function(c) {
      return c.indexOf(l) > -1;
    })[0];
    total += key.indexOf(l) + 1;
  });
  
  return total;
      
}


//https://www.codewars.com/kata/54da539698b8a2ad76000228
function isValidWalk(walk) {
  var dx = 0
  var dy = 0
  var dt = walk.length
  
  for (var i = 0; i < walk.length; i++) {
    switch (walk[i]) {
      case 'n': dy--; break
      case 's': dy++; break
      case 'w': dx--; break
      case 'e': dx++; break
    }
  }
  
  return dt === 10 && dx === 0 && dy === 0
}

//https://www.codewars.com/kata/57eb8fcdf670e99d9b000272
function high(s){
  let as = s.split(' ').map(s=>[...s].reduce((a,b)=>a+b.charCodeAt(0)-96,0));
  return s.split(' ')[as.indexOf(Math.max(...as))];
}

//https://www.codewars.com/kata/5b3f207a6be5d8b2d20000b5
class DOM {
  createElement(tag) {
    return new Node(tag);
  }
}

class Node {
  constructor(tag) {
    this._tagName = tag.toUpperCase();
    this._id = '';
    this._parentNode = null;
    this.childNodes = new ChildNodes();
    this.attributes = new Attributes();
    this.classList = new ClassList();
  }
  
  get tagName() {
    return this._tagName;
  }
  
  get parentNode() { 
    return this._parentNode; 
  }
  
  get nextSibling() {
    let siblings = this._parentNode.childNodes.children;
    return siblings[siblings.indexOf(this) + 1] || null;
  }
  
  get previousSibling() {
    let siblings = this._parentNode.childNodes.children;
    return siblings[siblings.indexOf(this) - 1] || null;
  }
  
  appendChild(child) {
    if (child._parentNode) {
      let children = child._parentNode.childNodes.children;
      children.splice(children.indexOf(child), 1);
    }
    child._parentNode = this;
    this.childNodes.children.push(child);
  }
  
  setAttribute(name, value) {
    if (name === 'id') this.id = value;
    if (name === 'class') this.className = value;
    this.attributes.map.set(name.toLowerCase(), value);
  }
  
  getAttribute(attr) {
    return this.attributes.map.get(attr.toLowerCase()) || null;
  }
  
  removeAttribute(attr) {
    if (attr === 'id') this.id = '';
    if (attr === 'class') this.className = '';
    this.attributes.map.delete(attr.toLowerCase());
  }
  
  get id() {
    return this._id;
  }
  
  set id(id) {
    this._id = id;
    this.attributes.map.set('id', id);
  }
  
  get className() {
    return this.classList.toString();
  }
  
  set className(name) {
    this.classList.classes.clear();
    if (name) this.classList.add(...name.split` `);
    this.attributes.map.set('class', name);
  }
}

class ChildNodes {
  constructor() {
    this.children = [];
  }
  
  item(idx) {
    return this.children[idx];
  }
  
  get length() { 
    return this.children.length; 
  }
}

class Attributes {
  constructor() {
    this.map = new Map();
  }
  
  item(idx) {
    let [name, value] = Array.from(this.map)[idx];
    return { name, value };
  }
  
  get length() { 
    return this.map.size; 
  }
}

class ClassList {
  constructor() {
    this.classes = new Set();
  }
  
  get length() {
    return [...this.classes].length;
  }
  
  item(idx) {
    return [...this.classes][idx];
  }
  
  add(...classes) {
    for (let cls of classes) {
      this.classes.add(cls);
    }
  }
  
  remove(...classes) {
    for (let cls of classes) {
      this.classes.delete(cls);
    }
  }
  
  toString() {
    return [...this.classes].join` `;
  }
}

//https://www.codewars.com/kata/55b3425df71c1201a800009c
function stat(strg) {
  if (strg === '') {
    return strg;
  }
  const teamStats = new teamStatistics(strg);
  return 'Range: ' +  teamStats.getRange() + ' Average: ' + teamStats.getAverage() + ' Median: ' + teamStats.getMedian();
}

class teamStatistics {
constructor(teamScores) {
  this.teamScoresInArray = teamScores.split(', ');
  this.teamTimesInSeconds = [];
  
  for(let singlePerson of this.teamScoresInArray) {
    const hoursToSeconds = Number(singlePerson.split('|')[0] * 60 * 60);
    const minutesToSeconds = Number(singlePerson.split('|')[1] * 60);
    const seconds = Number(singlePerson.split('|')[2]);
    this.teamTimesInSeconds.push(hoursToSeconds + minutesToSeconds + seconds);
  }
}

getFormatedTime(timeInSeconds) {
  const date = new Date(null);
  date.setSeconds(timeInSeconds);
  
  return date.toISOString().substr(11, 8).replace(/:\s*/g, '|');
}

getAverage() {
  let arraySum = 0;
  let average = 0;
  const arrayLength = this.teamTimesInSeconds.length;
  
  for (let number of this.teamTimesInSeconds) {
    arraySum += number;
  }
  
  return this.getFormatedTime(arraySum / arrayLength);
}
  
getMedian() {
  this.teamTimesInSeconds.sort( function(a,b) {return a - b;} );

  var half = Math.floor(this.teamTimesInSeconds.length/2);

  if(this.teamTimesInSeconds.length % 2) {
    return this.getFormatedTime(this.teamTimesInSeconds[half]);
  } else {
    return this.getFormatedTime((this.teamTimesInSeconds[half-1] + this.teamTimesInSeconds[half]) / 2.0);
  }
}

getRange() {
  const biggest = Math.max.apply(Math, this.teamTimesInSeconds);
  const smallest = Math.min.apply(Math, this.teamTimesInSeconds);
  return this.getFormatedTime(biggest-smallest);
}

}

//https://www.codewars.com/kata/57b06f90e298a7b53d000a86
function queueTime(customers, n) {
  var w = new Array(n).fill(0);
  for (let t of customers) {
    let idx = w.indexOf(Math.min(...w));
    w[idx] += t;
  }
  return Math.max(...w);
}

//https://www.codewars.com/kata/59590976838112bfea0000fa
function beggars(values, n){
  var outputValues = [];
  for (var i = 0; i < n; i++) {
    var sum = 0;
    for (var j = i; j < values.length; j += n) {
      sum += values[j];
    }
    outputValues.push(sum);
  }
  return outputValues;
}

//https://www.codewars.com/kata/5d23d89906f92a00267bb83d/javascript
const MENU = {
  Burger:     1,
  Fries:      2,
  Chicken:    3,
  Pizza:      4,
  Sandwich:   5,
  Onionrings: 6,
  Milkshake:  7,
  Coke:       8,
};
const REG_CMD = new RegExp(Object.keys(MENU).join('|'), 'gi');

function getOrder(cmd) {
  return cmd.match(REG_CMD)
            .map(s=>s.charAt(0).toUpperCase()+s.slice(1))
            .sort((x,y)=>MENU[x]-MENU[y])
            .join(' ');
}

//https://www.codewars.com/kata/545cedaa9943f7fe7b000048/javascript
function isPangram(string){
  string = string.toLowerCase();
  return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
    return string.indexOf(x) !== -1;
  });
}

//https://www.codewars.com/kata/573992c724fc289553000e95/javascript
Array.prototype.move = function(from, to) {
  this.splice(to, 0, this.splice(from, 1)[0]);
  return this;
};

function smallest(n) {
let iter = `${n}`.length, res = new Map();
for (let i = 0; i < iter; i++) {
  for (let j = 0; j < iter; j++) {
    let number = `${n}`.split('').move(i, j).join('');
    if (!res.has(+number)) res.set(+number, [i, j]);
  }
}
let min = Math.min(...res.keys());
return [min, ...res.get(min)];
}

//https://www.codewars.com/kata/52e1476c8147a7547a000811/javascript
function validate(password) {
  return  /^[A-Za-z0-9]{6,}$/.test(password) &&
          /[A-Z]+/           .test(password) &&
          /[a-z]+/           .test(password) &&
          /[0-9]+/           .test(password) ;
}

//https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/javascript
function towerBuilder(n) {
  return Array.from({length: n}, function(v, k) {
    const spaces = ' '.repeat(n - k - 1);
    return spaces + '*'.repeat(k + k + 1) + spaces;
  });
}

//https://www.codewars.com/kata/5503013e34137eeeaa001648/train/javascript
function diamond (n) {
  if (n <= 0 || n % 2 === 0) return null
  str = ''
  for (let i = 0; i < n; i++) { 
    let len = Math.abs((n-2*i-1)/2)
    str += ' '.repeat(len)
    str += '*'.repeat(n-2*len)
    str += '\n'
  }
  return str
}

//https://www.codewars.com/kata/554a44516729e4d80b000012/javascript
function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
  var months = 0, moneySaved = 0;
  while (startPriceNew > startPriceOld + moneySaved){
    moneySaved += savingperMonth;
    startPriceOld -= (startPriceOld * (percentLossByMonth / 100));
    startPriceNew -= (startPriceNew * (percentLossByMonth / 100));
    months++;
    if (months % 2 == 1){
      percentLossByMonth += .5;
    }
  }
  return [months, Math.round(startPriceOld + moneySaved - startPriceNew)];
}

//https://www.codewars.com/kata/567c63c365ee000c5f000007
String.prototype.delete = function(...args) {
  return args.reduce((res, a) => {
    if (a instanceof RegExp) return res.replace(a, '');
    if (typeof a === 'string') return res.replace(new RegExp(a, 'g'), '');
    return res;
  }, this + '');
};

//https://www.codewars.com/kata/55beec7dd347078289000021/train/javascript
function Node(data) {
  this.data = data
  this.next = null
}
function length(head) {
  return head ? 1 + length(head.next) : 0
}
function count(head, data) {
  if (!head) return 0
  return (head.data === data ? 1 : 0) + count(head.next, data)
}

//https://www.codewars.com/kata/569d488d61b812a0f7000015/train/javascript
const dataReverse = data => {
  const bytes = [];
  for (let i = 0; i < data.length; i += 8) {
    bytes.unshift(...data.slice(i, i + 8));
  }
  return bytes;
};

//https://www.codewars.com/kata/57814d79a56c88e3e0000786/javascript
function encrypt(text, n) {
  console.log(text, n);
  if (!text || n <= 0) return text; 
  while (n--) {
    let ans = '';
    for (let i = 1; i < text.length; i += 2) {
      ans += text[i];
    }
    for (let i = 0; i < text.length; i += 2) {
      ans += text[i];
    }
    text = ans;
  }
  return text;
}

function decrypt(encryptedText, n) {
  if (!encryptedText || n <= 0) return encryptedText;
  const ans = new Array(encryptedText.length);
  while (n--) {
    let j = 0;
    for (let i = 1; i < ans.length; i += 2) {
      ans[i] = encryptedText[j++];
    }
    for (let i = 0; i < ans.length; i += 2) {
      ans[i] = encryptedText[j++];
    }
    encryptedText = ans.join('');
  }
  return encryptedText;
}

//https://www.codewars.com/kata/53db96041f1a7d32dc0004d2/javascript
function doneOrNot(rows){

  var columns = []
  ,    blocks = [];
  
  for (var i = 0; i < 9; i++) {
    columns[i] = [];
    
    for (var j = 0; j < 9; j++) {
      var k = Math.floor(i / 3) + Math.floor(j / 3) * 3;
      blocks[k] = blocks[k] || [];
      
      blocks[k].push(rows[i][j]);
      columns[i].push(rows[j][i]);
    }
  }
  
  var is_valid_row = (row) => row.slice(0).sort((a, b) => a - b).join('') == '123456789';
  
  var is_valid = rows.every(is_valid_row) 
    && columns.every(is_valid_row) 
    && blocks.every(is_valid_row);
  
  return is_valid ? 'Finished!' : 'Try again!';
}

//https://www.codewars.com/kata/561e9c843a2ef5a40c0000a4/train/javascript
function gap(g, m, n) {
  var lastPrime = 0;
  var isPrime = function(x) { 
    for (var i=2; i*i<=x; i++) { if (x % i == 0) return false; } return true;
  }
  
  for(var i = m; i <= n; i++)
      if(isPrime(i)) {
          if(i - lastPrime == g) return [lastPrime, i];
          else lastPrime = i;
      }
    
  return null;
}

//https://www.codewars.com/kata/529bf0e9bdf7657179000008/train/javascript
function equals45(n){
  return n == 45;
}

function validSolution(board){
  var sumh = [0,0,0,0,0,0,0,0,0];
  var sumv = [0,0,0,0,0,0,0,0,0];
  osums = [[0,0,0],[0,0,0],[0,0,0]];
  for (var i=0;i<9;i++){
    for (var j=0;j<9;j++){
      sumh[i] += board[i][j];
      sumv[j] += board[i][j];
      osums[Math.floor(i/3)][Math.floor(j/3)] += board[i][j];
    }
  }
  for (var i=0;i<3;i++) if (!osums[i].every(equals45)) return false;
  return (sumh.every(equals45) && sumv.every(equals45));
}

//https://www.codewars.com/kata/5547cc7dcad755e480000004/javascript
function removeNb (n) {
  // from the instruction:
  // a * b = S(n) - a - b
  
  // and the sum of all first n natural numbers is
  // S(n) = n * (n + 1) / 2
  
  // so we can refrase the first formula like this:
  // a * b = n * (n + 1) / 2 - a - b
  // a * b + b = n * (n + 1) / 2 - a
  // b * (a + 1) = n * (n + 1) / 2 - a
  // b = (n * (n + 1) / 2 - a) / (a + 1)
  
  // but a and b are natural and up to n
  
  var results = [];
  for (var a = 1; a <= n; a++) {
    var b = (n * (n + 1) / 2 - a) / (a + 1);
    if (b % 1 === 0 && b <= n) results.push([a, b]);
  }
  return results;
}

//https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript
function domainName(url){
  url = url.replace("https://", '');
  url = url.replace("http://", '');
  url = url.replace("www.", '');
  return url.split('.')[0];
};

//https://www.codewars.com/kata/52e88b39ffb6ac53a400022e/train/javascript
function int32ToIp(int32){

  return (
           ((int32 >> 24) & 0xFF) + "." +
           ((int32 >> 16) & 0xFF) + "." +
           ((int32 >>  8) & 0xFF) + "." +
           ((int32) & 0xFF)
         );
  
 }


//https://www.codewars.com/kata/539a0e4d85e3425cb0000a88/train/javascript
function add(n){
  var fn = function(x) {
    return add(n + x);
  };
  
  fn.valueOf = function() {
    return n;
  };
  
  return fn;
}

//https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/train/javascript
function firstNonRepeatingLetter(s) {
  for(var i in s) {
    if(s.match(new RegExp(s[i],"gi")).length === 1) {
      return s[i];
    }
  }
  return '';
}
