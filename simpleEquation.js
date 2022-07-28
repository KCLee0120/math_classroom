//Type1: -x+a=b, where x is unknown, a and b are constants
function simpleEquationType1(){
  do{
    var x = getRndInteger(2,12);
    var a = getRndInteger(1,10);
    var b = -x + a;
  }while(b<=0)
  var question = "$$-x" + value2Constant(a) + "=" + b + "$$";
  var answer = x;
  var fractionOfAnswer = [];
  var numerator = "";
  var denominator = "";
  return{question, answer, numerator, denominator};
}

//Type2: -ax+b=c, where x is unknown, a, b and c are constants
function simpleEquationType2(){
    var a = getRndInteger(-2,-6);
    var b = getRndInteger(-12,-1);
    var c = getRndInteger(2, 15);
    var x = (c-b)/a;
    var question = "$$" + value2FirstCoe(a) + "x" + value2Constant(b) + "=" + c + "$$";
    var answer = x;
    var numerator = (c-b)/gcd_two_numbers(c-b,a);
    var denominator = a/gcd_two_numbers(c-b,a);
    return{question, answer, numerator, denominator};
}

//Type3: a-x=b, where x is unknown, a and b are constants
function simpleEquationType3(){
  var unknowns = [
    "a", "b", "d", "h", "m", "n", "p", "r", "s", "t", "x", "x", "x", "x", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0, 16);
  do{
    var a = getRndInteger(1,15);
    var b = getRndInteger(2,15);
    var x = a-b;
  }while(x==0)
    var question = "$$" + a + "-" + unknowns[unknownNumber] + "=" + b + "$$";
    var answer = x;
    var numerator = x;
    var denominator = 1;
    return{question, answer, numerator, denominator};
}

//Type4: a-bx=c, where x is unknown, a, b and c are constants
function simpleEquationType4(){
  var unknowns = [
    "a", "b", "d", "h", "m", "n", "p", "r", "s", "t", "x", "x", "x", "x", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0,16);
  do{
    var a = getRndInteger(4,24);
    var b = getRndInteger(2,6);
    var x = getRndInteger(-6,-2);
    var c = a-b*x;
  }while(c<=0)
    var question = "$$" + a + "-" + b + unknowns[unknownNumber] + "=" + c + "$$";
    var answer = x;
    var numerator = x;
    var denominator = 1;
    return{question, answer, numerator, denominator};
}

//Type5: a-bx=c, where x is unknown, a, b and (c<0) are constants
function simpleEquationType5(){
  var unknowns = [
    "a", "b", "d", "h", "m", "n", "p", "r", "s", "t", "x", "x", "x", "x", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0,16);
  do{
    var a = getRndInteger(4,24);
    var b = getRndInteger(2,6);
    var x = getRndInteger(2,8);
    var c = a-b*x;
  }while(c>=0)
    var question = "$$" + a + "-" + b + unknowns[unknownNumber] + "=" + c + "$$";
    var answer = x;
    var numerator = x;
    var denominator = 1;
    return{question, answer, numerator, denominator};
}

//Type6: (x-a)/b=c, where x is unknown, a, b and c are constants
function simpleEquationType6(){
  var unknowns = [
    "a", "b", "d", "h", "m", "n", "p", "r", "s", "t", "x", "x", "x", "x", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0,16);
    var a = getRndInteger(2,15);
    var b = getRndInteger(2,6);
    var c = getRndInteger(3,10);
    var x = b*c+a;
    var question = "$$\\frac{x-" + a + "}{" + b + "}=" + c + "$$";
    var answer = x;
    var numerator = x;
    var denominator = 1;
    return{question, answer, numerator, denominator};
}

//Type7: (x+a)/b=c, where x is unknown, a, b and c are constants
function simpleEquationType7(){
  var unknowns = [
    "a", "b", "d", "h", "m", "n", "p", "r", "s", "t", "x", "x", "x", "x", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0,16);
  do{
    var a = getRndInteger(2,15);
    var b = getRndInteger(2,6);
    var c = getRndInteger(-10,10);
    var x = b*c-a;
  }while(Math.abs(c)<=3)
    var question = "$$\\frac{x+" + a + "}{" + b + "}=" + c + "$$";
    var answer = x;
    var numerator = x;
    var denominator = 1;
    return{question, answer, numerator, denominator};
}

//Type8: x/a+b=c, where x is unknown, a, b and c are constants
function simpleEquationType8(){
  var unknowns = [
    "a", "b", "d", "h", "m", "n", "p", "r", "s", "t", "x", "x", "x", "x", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0,16);
  do{
    var a = getRndInteger(2,8);
    var b = getRndInteger(-15,15);
    var c = getRndInteger(2,12);
    var x = (c-b)*a;
  }while(Math.abs(b)<=2 || b==c)
    var question = "$$\\frac{" + unknowns[unknownNumber] + "}{" + a + "}" + value2Constant(b) + "=" + c + "$$";
    var answer = x;
    var numerator = x;
    var denominator = 1;
    return{question, answer, numerator, denominator};
}

// returns H.C.F. of x and y
function gcd_two_numbers(x,y) {
  if ((typeof x !== 'number') || (typeof y !== 'number'))
    return false;
  x = Math.abs(x);
  y = Math.abs(y);
  while(y) {
    var t = y;
    y = x % y;
    x = t;
  }
  return x;
}

// returns a random integer between min and max (both included)
function getRndInteger(min,max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function value2FirstCoe(n){
  if(n<0)
    if(n!=-1)
      return n;
    else
      return "-";
  else if(n>0)
    if(n!=1)
      return n;
    else
      return "";
}

function value2Constant(n){
  if(n>0)
    return "+" + n;
  else if(n<0)
    return "-" + Math.abs(n);
  else
    return "";
}

function value2Coe(n){
  if(n<0)
    if(n!=-1)
      return n;
    else
      return "-";
  else if(n>0)
    if(n!=1)
      return "+" + n;
    else
      return "+";
}

function value2Index(n){
  if(n==1)
    return "";
  else if (n>1)
    return ("^" + n);
}

function checkPrime(n){
  for(let i = 2, s = Math.sqrt(n); i <= s; i++)
        if(n % i === 0) return false;
    return n > 1;
}

//return factors of an integer in accending order
function getFactors(n){
  var str = [];
  var j = 0;
    for (var i = 1; i <= n; i++) {
        if (n % i == 0) {
            str[j] = i;
            j++;
        }
    }
    return str;
}

//return factor combinations of an integer
function getFactorsCombination(num){
  var factorCom = [];
    for(var i=0; i<num.length/2; i++)
      factorCom[i] = [num[i], num[num.length-1-i]];
  return factorCom;
}
