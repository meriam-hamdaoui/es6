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














