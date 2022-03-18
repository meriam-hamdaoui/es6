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
function squareDigits(num){ //my solution cleaver me ehehe
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
//my solution cleaver me
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
 function divisors(n){
   while(n/i !== 1){
     i++;
   }
 }











