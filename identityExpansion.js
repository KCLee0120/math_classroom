//Type1: (x+b)(x-b), where x is an unknown, a is a random positive constant
function identityExpansionType1(){
  var unknowns = [
    "a", "b", "h", "m", "n", "p", "q", "r", "s", "t", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0, 12);
  var b = getRndInteger(1, 12);

  var question = "$(" + unknowns[unknownNumber] + "+" + b + ")(" + unknowns[unknownNumber] + "-" + b +  ")$";
  var correctOption = "$" + unknowns[unknownNumber] + "^2-" + b*b + "$";
  var wrongOption1 = "$" + unknowns[unknownNumber] + "^2+" + b*b + "$";
  var wrongOption2 = "$" + value2FirstCoe(b*b) + unknowns[unknownNumber] + "^2$";
  var wrongOption3 = "$" + unknowns[unknownNumber] + "^2-" + (2*b) + unknowns[unknownNumber] + "-" + b*b + "$";
  var option = [];

  var randomOption = getRndInteger(0, 3);
  if(randomOption==0)
      var answer = "optionA";
  else if (randomOption==1)
      var answer = "optionB";
  else if (randomOption==2)
      var answer = "optionC";
  else if (randomOption==3)
      var answer = "optionD";

  option[randomOption] = String.fromCharCode(randomOption+65) + ". " +  correctOption;
  option[(randomOption+1)%4] = String.fromCharCode((randomOption+1)%4+65) + ". " + wrongOption1;
  option[(randomOption+2)%4] = String.fromCharCode((randomOption+2)%4+65) + ". " +wrongOption2;
  option[((randomOption+3)%4)] = String.fromCharCode((randomOption+3)%4+65) + ". " +wrongOption3;

  return{question, option, answer};
}

//Type2: (b+x)(b-x), where x is an unknown, a is a random positive constant
function identityExpansionType2(){
  var unknowns = [
    "a", "b", "h", "m", "n", "p", "q", "r", "s", "t", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0, 12);
  var b = getRndInteger(1, 12);

  var question = "$(" + b + "+" + unknowns[unknownNumber] + ")(" + b + "-" + unknowns[unknownNumber] +  ")$";
  var correctOption = "$" + b*b + "-" + unknowns[unknownNumber] + "^2"  + "$";
  var wrongOption1 = "$" + b*b + "+" + unknowns[unknownNumber] + "^2" + "$";
  var wrongOption2 = "$" + value2FirstCoe(b*b) + unknowns[unknownNumber] + "^2$";
  var wrongOption3 = "$" + b*b + value2Coe(2*b) + unknowns[unknownNumber] + "-" + unknowns[unknownNumber] + "^2" + "$";
  var option = [];

  var randomOption = getRndInteger(0, 3);
  if(randomOption==0)
      var answer = "optionA";
  else if (randomOption==1)
      var answer = "optionB";
  else if (randomOption==2)
      var answer = "optionC";
  else if (randomOption==3)
      var answer = "optionD";

  option[randomOption] = String.fromCharCode(randomOption+65) + ". " +  correctOption;
  option[(randomOption+1)%4] = String.fromCharCode((randomOption+1)%4+65) + ". " + wrongOption1;
  option[(randomOption+2)%4] = String.fromCharCode((randomOption+2)%4+65) + ". " +wrongOption2;
  option[((randomOption+3)%4)] = String.fromCharCode((randomOption+3)%4+65) + ". " +wrongOption3;

  return{question, option, answer};
}

//Type3: (ax+b)(ax-b), where x is an unknown, a and b are random positive constant, a>1
function identityExpansionType3(){
  var unknowns = [
    "a", "b", "h", "m", "n", "p", "q", "r", "s", "t", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0, 12);
  var a = getRndInteger(2, 7);
  do{
    var b = getRndInteger(1, 12);
  }while(gcd_two_numbers(a, b)!=1)

  var question = "$(" + a + unknowns[unknownNumber] + value2Constant(b) + ")(" + a + unknowns[unknownNumber] + value2Constant(-b) + ")$";
  var correctOption = "$" + a*a + unknowns[unknownNumber] + "^2" + value2Constant(-b*b) + "$";
  var wrongOption1 = "$" + a*a + unknowns[unknownNumber] + "^2" + value2Constant(b*b) + "$";
  var wrongOption2 = "$" + a*a + unknowns[unknownNumber] + value2Constant(-b*b) + "$";
  var wrongOption3 = "$" + (a+a) + unknowns[unknownNumber] + "^2" + value2Constant(-2*b) + "$";
  var option = [];

  var randomOption = getRndInteger(0, 3);
  if(randomOption==0)
      var answer = "optionA";
  else if (randomOption==1)
      var answer = "optionB";
  else if (randomOption==2)
      var answer = "optionC";
  else if (randomOption==3)
      var answer = "optionD";

  option[randomOption] = String.fromCharCode(randomOption+65) + ". " +  correctOption;
  option[(randomOption+1)%4] = String.fromCharCode((randomOption+1)%4+65) + ". " + wrongOption1;
  option[(randomOption+2)%4] = String.fromCharCode((randomOption+2)%4+65) + ". " +wrongOption2;
  option[((randomOption+3)%4)] = String.fromCharCode((randomOption+3)%4+65) + ". " +wrongOption3;

  return{question, option, answer};
}

//Type4: (a+bx)(a-bx), where x is an unknown, a and b are random positive constant, b>1
function identityExpansionType4(){
  var unknowns = [
    "a", "b", "h", "m", "n", "p", "q", "r", "s", "t", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0, 12);
  var a = getRndInteger(1, 12);
  do{
    var b = getRndInteger(2, 7);
  }while(gcd_two_numbers(a, b)!=1)

  var question = "$(" + a + value2Coe(b) + unknowns[unknownNumber] + ")(" + a + value2Coe(-b) + unknowns[unknownNumber] + ")$" ;
  var correctOption = "$" + a*a + value2Coe(-b*b) + unknowns[unknownNumber] + "^2$";
  var wrongOption1 = "$" + a*a + value2Coe(b*b) + unknowns[unknownNumber] + "^2$";
  var wrongOption2 = "$" + (a+a) + value2Coe(b+b) + unknowns[unknownNumber] + "$";
  var wrongOption3 = "$" + a*a + value2Coe(-b*b) + unknowns[unknownNumber] + "$";
  var option = [];

  var randomOption = getRndInteger(0, 3);
  if(randomOption==0)
      var answer = "optionA";
  else if (randomOption==1)
      var answer = "optionB";
  else if (randomOption==2)
      var answer = "optionC";
  else if (randomOption==3)
      var answer = "optionD";

  option[randomOption] = String.fromCharCode(randomOption+65) + ". " +  correctOption;
  option[(randomOption+1)%4] = String.fromCharCode((randomOption+1)%4+65) + ". " + wrongOption1;
  option[(randomOption+2)%4] = String.fromCharCode((randomOption+2)%4+65) + ". " +wrongOption2;
  option[((randomOption+3)%4)] = String.fromCharCode((randomOption+3)%4+65) + ". " +wrongOption3;

  return{question, option, answer};
}

//Type5: (ax+b)(ax-b), where x is a unknown, a is a random negative constant, b is a random positive constants
function identityExpansionType5(){
  var unknowns = [
    "a", "b", "h", "m", "n", "p", "q", "r", "s", "t", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0, 12);
  var a = getRndInteger(-7, -2);
  do{
    var b = getRndInteger(1, 12);
  }while(gcd_two_numbers(a, b)!=1)

  var question = "$(" + a + unknowns[unknownNumber] + value2Constant(b) + ")(" + a + unknowns[unknownNumber] + value2Constant(-b) + ")$";
  var correctOption = "$" + a*a + unknowns[unknownNumber] + "^2" + value2Constant(-b*b) + "$" ;
  var wrongOption1 = "$" + a*a + unknowns[unknownNumber] + "^2" + value2Constant(b*b) + "$";
  var wrongOption2 = "$" + (a+a) + unknowns[unknownNumber] + "^2" + value2Constant(-(b+b)) + "$";
  var wrongOption3 = "$" + (a+a) + unknowns[unknownNumber] + value2Constant(-(b+b)) + "$";
  var option = [];

  var randomOption = getRndInteger(0, 3);
  if(randomOption==0)
      var answer = "optionA";
  else if (randomOption==1)
      var answer = "optionB";
  else if (randomOption==2)
      var answer = "optionC";
  else if (randomOption==3)
      var answer = "optionD";

  option[randomOption] = String.fromCharCode(randomOption+65) + ". " +  correctOption;
  option[(randomOption+1)%4] = String.fromCharCode((randomOption+1)%4+65) + ". " + wrongOption1;
  option[(randomOption+2)%4] = String.fromCharCode((randomOption+2)%4+65) + ". " +wrongOption2;
  option[((randomOption+3)%4)] = String.fromCharCode((randomOption+3)%4+65) + ". " +wrongOption3;

  return{question, option, answer};
}

//Type6: (ax+by)(ax-by), where x and y are unknowns, a and b are random positive constant
function identityExpansionType6(){
  var unknowns = [
    ["a", "b"], ["x", "y"], ["p", "q"], ["m", "n"]
  ];
  var unknownNumber = getRndInteger(0, 3);
  var a = getRndInteger(2, 7);
  do{
    var b = getRndInteger(1, 12);
  }while(gcd_two_numbers(a, b)!=1)

  var question = "$(" + a + unknowns[unknownNumber][0] + value2Coe(b) + unknowns[unknownNumber][1] + ")(" + a + unknowns[unknownNumber][0] + value2Coe(-b) + unknowns[unknownNumber][1] + ")$" ;
  var correctOption = "$" + a*a + unknowns[unknownNumber][0] + "^2" + value2Coe(-b*b) + unknowns[unknownNumber][1] + "^2$";
  var wrongOption1 = "$" + a*a + unknowns[unknownNumber][0] + "^2" + value2Coe(b*b) + unknowns[unknownNumber][1] + "^2$";
  var wrongOption2 = "$" + (a+a) + unknowns[unknownNumber][0] + "^2" + value2Coe(-(b+b)) + unknowns[unknownNumber][1] + "^2$";
  var wrongOption3 = "$" + (a+a) + unknowns[unknownNumber][0] + value2Coe(-(b+b)) + unknowns[unknownNumber][1] + "$";
  var option = [];

  var randomOption = getRndInteger(0, 3);
  if(randomOption==0)
      var answer = "optionA";
  else if (randomOption==1)
      var answer = "optionB";
  else if (randomOption==2)
      var answer = "optionC";
  else if (randomOption==3)
      var answer = "optionD";

  option[randomOption] = String.fromCharCode(randomOption+65) + ". " +  correctOption;
  option[(randomOption+1)%4] = String.fromCharCode((randomOption+1)%4+65) + ". " + wrongOption1;
  option[(randomOption+2)%4] = String.fromCharCode((randomOption+2)%4+65) + ". " +wrongOption2;
  option[((randomOption+3)%4)] = String.fromCharCode((randomOption+3)%4+65) + ". " +wrongOption3;

  return{question, option, answer};
}

//Type7: k(x+a)(x-a), where x is a unknown, a is a random constant, k is also a random constnat
function identityExpansionType7(){
  var unknowns = [
    "a", "b", "h", "m", "n", "p", "q", "r", "s", "t", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0, 12);
  var a = getRndInteger(2, 12);
  do{
    var k = getRndInteger(-4, 4);
  }while(k==0 || Math.abs(k)==1)
  var question = "$" + k + "(" + unknowns[unknownNumber] + value2Constant(a) + ")(" + unknowns[unknownNumber] + value2Constant(-a) + ")$";
  var correctOption = "$" + k + unknowns[unknownNumber] + "^2" + value2Constant(-k*a*a) + "$";
  var wrongOption1 = "$" + k + unknowns[unknownNumber] + "^2" + value2Constant(k*a*a) + "$";
  var wrongOption2 = "$" + k + unknowns[unknownNumber] + "^2" + value2Constant(-a*a) + "$";
  var wrongOption3 = "$" + k + unknowns[unknownNumber] + value2Constant(-k*a*a) + "$";
  var option = [];

  var randomOption = getRndInteger(0, 3);
  if(randomOption==0)
      var answer = "optionA";
  else if (randomOption==1)
      var answer = "optionB";
  else if (randomOption==2)
      var answer = "optionC";
  else if (randomOption==3)
      var answer = "optionD";

  option[randomOption] = String.fromCharCode(randomOption+65) + ". " +  correctOption;
  option[(randomOption+1)%4] = String.fromCharCode((randomOption+1)%4+65) + ". " + wrongOption1;
  option[(randomOption+2)%4] = String.fromCharCode((randomOption+2)%4+65) + ". " +wrongOption2;
  option[((randomOption+3)%4)] = String.fromCharCode((randomOption+3)%4+65) + ". " +wrongOption3;

  return{question, option, answer};
}

//Type8: k(ax+b)(ax-b), where x is a unknown, a is a random positive constant, b is a random constant, k is also a random constnat
function identityExpansionType8(){
  var unknowns = [
    "a", "b", "h", "m", "n", "p", "q", "r", "s", "t", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0, 12);
  var a = getRndInteger(2, 5);
  do{
    var k = getRndInteger(-4, 4);
  }while(k==0 || Math.abs(k)==1)
  do{
    var b = getRndInteger(1, 12);
  }while(gcd_two_numbers(a, b)!=1)

  var question = "$" + k + "(" + a + unknowns[unknownNumber] + value2Constant(b) + ")(" + a +unknowns[unknownNumber] + value2Constant(-b) + ")$" ;
  var correctOption = "$" + value2FirstCoe(k*a*a) + unknowns[unknownNumber] + "^2" + value2Constant(-k*b*b) + "$";
  var wrongOption1 = "$" + value2FirstCoe(k*a*a) + unknowns[unknownNumber] + "^2" + value2Constant(k*b*b) + "$";
  var wrongOption2 = "$" + value2FirstCoe(k*(a+a)) + unknowns[unknownNumber] + "^2" + value2Constant(-k*(b+b)) + "$";
  var wrongOption3 = "$" + value2FirstCoe(k*(a+a)) + unknowns[unknownNumber] + value2Constant(-k*(b+b)) + "$";
  var option = [];

  var randomOption = getRndInteger(0, 3);
  if(randomOption==0)
      var answer = "optionA";
  else if (randomOption==1)
      var answer = "optionB";
  else if (randomOption==2)
      var answer = "optionC";
  else if (randomOption==3)
      var answer = "optionD";

  option[randomOption] = String.fromCharCode(randomOption+65) + ". " +  correctOption;
  option[(randomOption+1)%4] = String.fromCharCode((randomOption+1)%4+65) + ". " + wrongOption1;
  option[(randomOption+2)%4] = String.fromCharCode((randomOption+2)%4+65) + ". " +wrongOption2;
  option[((randomOption+3)%4)] = String.fromCharCode((randomOption+3)%4+65) + ". " +wrongOption3;

  return{question, option, answer};
}

//Type9: k(ax+by)(ax-by), where x and y are unknowns, a is a random positive constant, b is a random constant, k is also a random constnat
function identityExpansionType9(){
  var unknowns = [
    ["a", "b"], ["x", "y"], ["p", "q"], ["m", "n"]
  ];
  var unknownNumber = getRndInteger(0, 3);
  var a = getRndInteger(2, 5);
  do{
    var k = getRndInteger(-4, 4);
  }while(k==0 || Math.abs(k)==1)
  do{
    var b = getRndInteger(1, 12);
  }while(gcd_two_numbers(a, b)!=1)

  var question = "$" + k + "(" + a + unknowns[unknownNumber][0] + value2Coe(b) + unknowns[unknownNumber][1] + ")(" + a + unknowns[unknownNumber][0] + value2Coe(-b) + unknowns[unknownNumber][1] + ")$" ;
  var correctOption = "$" + value2FirstCoe(k*a*a) + unknowns[unknownNumber][0] + "^2" + value2Coe(-k*b*b) + unknowns[unknownNumber][1] + "^2$";
  var wrongOption1 = "$" + value2FirstCoe(k*a*a) + unknowns[unknownNumber][0] + "^2" + value2Coe(k*b*b) + unknowns[unknownNumber][1] + "^2$";
  var wrongOption2 = "$" + value2FirstCoe(k*(a+a)) + unknowns[unknownNumber][0] + "^2" + value2Coe(-k*(b+b)) + unknowns[unknownNumber][1] + "^2$";
  var wrongOption3 = "$" + value2FirstCoe(k*(a+a)) + unknowns[unknownNumber][0] + value2Coe(-k*(b+b)) + unknowns[unknownNumber][1] + "$";
  var option = [];

  var randomOption = getRndInteger(0, 3);
  if(randomOption==0)
      var answer = "optionA";
  else if (randomOption==1)
      var answer = "optionB";
  else if (randomOption==2)
      var answer = "optionC";
  else if (randomOption==3)
      var answer = "optionD";

  option[randomOption] = String.fromCharCode(randomOption+65) + ". " +  correctOption;
  option[(randomOption+1)%4] = String.fromCharCode((randomOption+1)%4+65) + ". " + wrongOption1;
  option[(randomOption+2)%4] = String.fromCharCode((randomOption+2)%4+65) + ". " +wrongOption2;
  option[((randomOption+3)%4)] = String.fromCharCode((randomOption+3)%4+65) + ". " +wrongOption3;

  return{question, option, answer};
}

//Type10: (ax^2+by)(ax^2-by), where x is a unknown, a is a random positive constant, b is a random constant
function identityExpansionType10(){
  var unknowns = [
    ["a", "b"], ["x", "y"], ["p", "q"], ["m", "n"]
  ];
  var unknownNumber = getRndInteger(0, 3);
  var a = getRndInteger(2, 5);
  do{
    var k = getRndInteger(-4, 4);
  }while(k==0 || Math.abs(k)==1)
  do{
    var b = getRndInteger(1, 12);
  }while(gcd_two_numbers(a, b)!=1)

  var question = "$" + k + "(" + a + unknowns[unknownNumber][0] + "^2" + value2Coe(b) + unknowns[unknownNumber][1] + ")(" + a + unknowns[unknownNumber][0] + "^2" + value2Coe(-b) + unknowns[unknownNumber][1] + ")$" ;
  var correctOption = "$" + value2FirstCoe(k*a*a) + unknowns[unknownNumber][0] + "^4" + value2Coe(-k*b*b) + unknowns[unknownNumber][1] + "^2$";
  var wrongOption1 = "$" + value2FirstCoe(k*a*a) + unknowns[unknownNumber][0] + "^4" + value2Coe(k*b*b) + unknowns[unknownNumber][1] + "^2$";
  var wrongOption2 = "$" + value2FirstCoe(k*(a+a)) + unknowns[unknownNumber][0] + "^4" + value2Coe(-k*(b+b)) + unknowns[unknownNumber][1] + "^2$";
  var wrongOption3 = "$" + value2FirstCoe(k*(a+a)) + unknowns[unknownNumber][0] + "^2" + value2Coe(-k*(b+b)) + unknowns[unknownNumber][1] + "$";
  var option = [];

  var randomOption = getRndInteger(0, 3);
  if(randomOption==0)
      var answer = "optionA";
  else if (randomOption==1)
      var answer = "optionB";
  else if (randomOption==2)
      var answer = "optionC";
  else if (randomOption==3)
      var answer = "optionD";

  option[randomOption] = String.fromCharCode(randomOption+65) + ". " +  correctOption;
  option[(randomOption+1)%4] = String.fromCharCode((randomOption+1)%4+65) + ". " + wrongOption1;
  option[(randomOption+2)%4] = String.fromCharCode((randomOption+2)%4+65) + ". " +wrongOption2;
  option[((randomOption+3)%4)] = String.fromCharCode((randomOption+3)%4+65) + ". " +wrongOption3;

  return{question, option, answer};
}

//Type11: (x+a)^2 = x^2+2ax+a^2
function identityExpansionType11(){
  var unknowns = [
    "a", "b", "h", "m", "n", "p", "q", "r", "s", "t", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0, 12);
  var a = getRndInteger(1, 12);

  var question = "$(" + unknowns[unknownNumber] + value2Constant(a) + ")^2$";
  var correctOption = "$" + unknowns[unknownNumber] + "^2" + value2Coe(2*a) + unknowns[unknownNumber] + value2Constant(a*a)  + "$";
  var wrongOption1 = "$" + unknowns[unknownNumber] + "^2" + value2Coe(-2*a) + unknowns[unknownNumber] + value2Constant(a*a)  + "$";
  var wrongOption2 = "$" + unknowns[unknownNumber] + "^2" + value2Constant(a*a)  + "$";
  var wrongOption3 = "$" + unknowns[unknownNumber] + "^2" + value2Coe(a) + unknowns[unknownNumber] + value2Constant(a*a)  + "$";
  var option = [];

  var randomOption = getRndInteger(0, 3);
  if(randomOption==0)
      var answer = "optionA";
  else if (randomOption==1)
      var answer = "optionB";
  else if (randomOption==2)
      var answer = "optionC";
  else if (randomOption==3)
      var answer = "optionD";

  option[randomOption] = String.fromCharCode(randomOption+65) + ". " +  correctOption;
  option[(randomOption+1)%4] = String.fromCharCode((randomOption+1)%4+65) + ". " + wrongOption1;
  option[(randomOption+2)%4] = String.fromCharCode((randomOption+2)%4+65) + ". " +wrongOption2;
  option[((randomOption+3)%4)] = String.fromCharCode((randomOption+3)%4+65) + ". " +wrongOption3;

  return{question, option, answer};
}

//Type12: (x-a)^2 = x^2-2ax+a^2
function identityExpansionType12(){
  var unknowns = [
    "a", "b", "h", "m", "n", "p", "q", "r", "s", "t", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0, 12);
  var a = getRndInteger(1, 12);

  var question = "$(" + unknowns[unknownNumber] + value2Coe(-a) + ")^2$";
  var correctOption = "$" + unknowns[unknownNumber] + "^2" + value2Coe(-2*a) + unknowns[unknownNumber] + value2Constant(a*a)  + "$";
  var wrongOption1 = "$" + unknowns[unknownNumber] + "^2" + value2Coe(2*a) + unknowns[unknownNumber] + value2Constant(a*a)  + "$";
  var wrongOption2 = "$" + unknowns[unknownNumber] + "^2" + value2Constant(-a*a)  + "$";
  var wrongOption3 = "$" + unknowns[unknownNumber] + "^2" + value2Coe(-a) + unknowns[unknownNumber] + value2Constant(a*a)  + "$";
  var option = [];

  var randomOption = getRndInteger(0, 3);
  if(randomOption==0)
      var answer = "optionA";
  else if (randomOption==1)
      var answer = "optionB";
  else if (randomOption==2)
      var answer = "optionC";
  else if (randomOption==3)
      var answer = "optionD";

  option[randomOption] = String.fromCharCode(randomOption+65) + ". " +  correctOption;
  option[(randomOption+1)%4] = String.fromCharCode((randomOption+1)%4+65) + ". " + wrongOption1;
  option[(randomOption+2)%4] = String.fromCharCode((randomOption+2)%4+65) + ". " +wrongOption2;
  option[((randomOption+3)%4)] = String.fromCharCode((randomOption+3)%4+65) + ". " +wrongOption3;

  return{question, option, answer};
}

//Type13: (ax+b)^2 = a^2x^2+2abx+b^2
function identityExpansionType13(){
  var unknowns = [
    "a", "b", "h", "m", "n", "p", "q", "r", "s", "t", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0, 12);
  var a = getRndInteger(2, 12);
  do{
    var b = getRndInteger(1, 12);
  }while(gcd_two_numbers(a, b)!=1)

  var question = "$(" + value2FirstCoe(a) + unknowns[unknownNumber] + value2Constant(b) + ")^2$";
  var correctOption = "$" + value2FirstCoe(a*a) + unknowns[unknownNumber] + "^2" + value2Coe(2*a*b) + unknowns[unknownNumber] + value2Constant(b*b)  + "$";
  var wrongOption1 = "$" + value2FirstCoe(a) + unknowns[unknownNumber] + "^2" + value2Coe(2*a*b) + unknowns[unknownNumber] + value2Constant(b*b)  + "$";
  var wrongOption2 = "$" + value2FirstCoe(a*a) + unknowns[unknownNumber] + "^2" + value2Constant(b*b)  + "$";
  var wrongOption3 = "$" + value2FirstCoe(a) + unknowns[unknownNumber] + "^2" + value2Constant(b*b)  + "$";
  var option = [];

  var randomOption = getRndInteger(0, 3);
  if(randomOption==0)
      var answer = "optionA";
  else if (randomOption==1)
      var answer = "optionB";
  else if (randomOption==2)
      var answer = "optionC";
  else if (randomOption==3)
      var answer = "optionD";

  option[randomOption] = String.fromCharCode(randomOption+65) + ". " +  correctOption;
  option[(randomOption+1)%4] = String.fromCharCode((randomOption+1)%4+65) + ". " + wrongOption1;
  option[(randomOption+2)%4] = String.fromCharCode((randomOption+2)%4+65) + ". " +wrongOption2;
  option[((randomOption+3)%4)] = String.fromCharCode((randomOption+3)%4+65) + ". " +wrongOption3;

  return{question, option, answer};
}

//Type14: (ax-b)^2 = a^2x^2-2abx+b^2
function identityExpansionType14(){
  var unknowns = [
    "a", "b", "h", "m", "n", "p", "q", "r", "s", "t", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0, 12);
  var a = getRndInteger(2, 12);
  do{
    var b = getRndInteger(1, 12);
  }while(gcd_two_numbers(a, b)!=1)

  var question = "$(" + value2FirstCoe(a) + unknowns[unknownNumber] + value2Constant(-b) + ")^2$";
  var correctOption = "$" + value2FirstCoe(a*a) + unknowns[unknownNumber] + "^2" + value2Coe(-2*a*b) + unknowns[unknownNumber] + value2Constant(b*b)  + "$";
  var wrongOption1 = "$" + value2FirstCoe(a) + unknowns[unknownNumber] + "^2" + value2Coe(-2*a*b) + unknowns[unknownNumber] + value2Constant(b*b)  + "$";
  var wrongOption2 = "$" + value2FirstCoe(a*a) + unknowns[unknownNumber] + "^2" + value2Constant(-b*b)  + "$";
  var wrongOption3 = "$" + value2FirstCoe(a) + unknowns[unknownNumber] + "^2" + value2Constant(-b*b)  + "$";
  var option = [];

  var randomOption = getRndInteger(0, 3);
  if(randomOption==0)
      var answer = "optionA";
  else if (randomOption==1)
      var answer = "optionB";
  else if (randomOption==2)
      var answer = "optionC";
  else if (randomOption==3)
      var answer = "optionD";

  option[randomOption] = String.fromCharCode(randomOption+65) + ". " +  correctOption;
  option[(randomOption+1)%4] = String.fromCharCode((randomOption+1)%4+65) + ". " + wrongOption1;
  option[(randomOption+2)%4] = String.fromCharCode((randomOption+2)%4+65) + ". " +wrongOption2;
  option[((randomOption+3)%4)] = String.fromCharCode((randomOption+3)%4+65) + ". " +wrongOption3;

  return{question, option, answer};
}

//Type15: (ax+by)^2 = a^2x^2+2abxy+b^2y^2
function identityExpansionType15(){
  var unknowns = [
    ["a", "b"], ["x", "y"], ["p", "q"], ["m", "n"]
  ];
  var unknownNumber = getRndInteger(0, 3);

  var a = getRndInteger(2, 12);
  do{
    var b = getRndInteger(2, 12);
  }while(gcd_two_numbers(a, b)!=1)

  var question = "$(" + value2FirstCoe(a) + unknowns[unknownNumber][0] + value2Coe(b) + unknowns[unknownNumber][1] + ")^2$";
  var correctOption = "$" + value2FirstCoe(a*a) + unknowns[unknownNumber][0] + "^2" + value2Coe(2*a*b) + unknowns[unknownNumber][0] + unknowns[unknownNumber][1] + value2Coe(b*b) + unknowns[unknownNumber][1] + "^2" + "$";
  var wrongOption1 = "$" + value2FirstCoe(a) + unknowns[unknownNumber][0] + "^2" + value2Coe(2*a*b) + unknowns[unknownNumber][0] + unknowns[unknownNumber][1] + value2Coe(b) + unknowns[unknownNumber][1] + "^2" + "$";
  var wrongOption2 = "$" + value2FirstCoe(a*a) + unknowns[unknownNumber][0] + "^2" + value2Coe(a*b) + unknowns[unknownNumber][0] + unknowns[unknownNumber][1] + value2Coe(b*b) + unknowns[unknownNumber][1] + "^2" + "$";
  var wrongOption3 = "$" + value2FirstCoe(a) + unknowns[unknownNumber][0] + "^2" + value2Coe(b) + unknowns[unknownNumber][1] + "^2" + "$";
  var option = [];

  var randomOption = getRndInteger(0, 3);
  if(randomOption==0)
      var answer = "optionA";
  else if (randomOption==1)
      var answer = "optionB";
  else if (randomOption==2)
      var answer = "optionC";
  else if (randomOption==3)
      var answer = "optionD";

  option[randomOption] = String.fromCharCode(randomOption+65) + ". " +  correctOption;
  option[(randomOption+1)%4] = String.fromCharCode((randomOption+1)%4+65) + ". " + wrongOption1;
  option[(randomOption+2)%4] = String.fromCharCode((randomOption+2)%4+65) + ". " +wrongOption2;
  option[((randomOption+3)%4)] = String.fromCharCode((randomOption+3)%4+65) + ". " +wrongOption3;

  return{question, option, answer};
}

//Type16: (ax-by)^2 = a^2x^2-2abxy+b^2y^2
function identityExpansionType16(){
  var unknowns = [
    ["a", "b"], ["x", "y"], ["p", "q"], ["m", "n"]
  ];
  var unknownNumber = getRndInteger(0, 3);

  var a = getRndInteger(2, 12);
  do{
    var b = getRndInteger(2, 12);
  }while(gcd_two_numbers(a, b)!=1)

  var question = "$(" + value2FirstCoe(a) + unknowns[unknownNumber][0] + value2Coe(-b) + unknowns[unknownNumber][1] + ")^2$";
  var correctOption = "$" + value2FirstCoe(a*a) + unknowns[unknownNumber][0] + "^2" + value2Coe(-2*a*b) + unknowns[unknownNumber][0] + unknowns[unknownNumber][1] + value2Coe(b*b) + unknowns[unknownNumber][1] + "^2" + "$";
  var wrongOption1 = "$" + value2FirstCoe(a) + unknowns[unknownNumber][0] + "^2" + value2Coe(-2*a*b) + unknowns[unknownNumber][0] + unknowns[unknownNumber][1] + value2Coe(b) + unknowns[unknownNumber][1] + "^2" + "$";
  var wrongOption2 = "$" + value2FirstCoe(a*a) + unknowns[unknownNumber][0] + "^2" + value2Coe(-a*b) + unknowns[unknownNumber][0] + unknowns[unknownNumber][1] + value2Coe(b*b) + unknowns[unknownNumber][1] + "^2" + "$";
  var wrongOption3 = "$" + value2FirstCoe(a) + unknowns[unknownNumber][0] + "^2" + value2Coe(-b) + unknowns[unknownNumber][1] + "^2" + "$";
  var option = [];

  var randomOption = getRndInteger(0, 3);
  if(randomOption==0)
      var answer = "optionA";
  else if (randomOption==1)
      var answer = "optionB";
  else if (randomOption==2)
      var answer = "optionC";
  else if (randomOption==3)
      var answer = "optionD";

  option[randomOption] = String.fromCharCode(randomOption+65) + ". " +  correctOption;
  option[(randomOption+1)%4] = String.fromCharCode((randomOption+1)%4+65) + ". " + wrongOption1;
  option[(randomOption+2)%4] = String.fromCharCode((randomOption+2)%4+65) + ". " +wrongOption2;
  option[((randomOption+3)%4)] = String.fromCharCode((randomOption+3)%4+65) + ". " +wrongOption3;

  return{question, option, answer};
}

//Type17: (-ax+b)^2 = a^2x^2-2abx+b^2
function identityExpansionType17(){
  var unknowns = [
    ["a", "b"], ["x", "y"], ["p", "q"], ["m", "n"]
  ];
  var unknownNumber = getRndInteger(0, 3);

  var a = getRndInteger(-12, -2);
  do{
    var b = getRndInteger(1, 12);
  }while(gcd_two_numbers(a, b)!=1)

  var question = "$(" + value2FirstCoe(a) + unknowns[unknownNumber][0] + value2Coe(b) + unknowns[unknownNumber][1] + ")^2$";
  var correctOption = "$" + value2FirstCoe(a*a) + unknowns[unknownNumber][0] + "^2" + value2Coe(2*a*b) + unknowns[unknownNumber][0] + unknowns[unknownNumber][1] + value2Coe(b*b) + unknowns[unknownNumber][1] + "^2" + "$";
  var wrongOption1 = "$" + value2FirstCoe(a) + unknowns[unknownNumber][0] + "^2" + value2Coe(2*a*b) + unknowns[unknownNumber][0] + unknowns[unknownNumber][1] + value2Coe(b) + unknowns[unknownNumber][1] + "^2" + "$";
  var wrongOption2 = "$" + value2FirstCoe(a*a) + unknowns[unknownNumber][0] + "^2" + value2Coe(a*b) + unknowns[unknownNumber][0] + unknowns[unknownNumber][1] + value2Coe(b*b) + unknowns[unknownNumber][1] + "^2" + "$";
  var wrongOption3 = "$" + value2FirstCoe(a) + unknowns[unknownNumber][0] + "^2" + value2Coe(b) + unknowns[unknownNumber][1] + "^2" + "$";
  var option = [];

  var randomOption = getRndInteger(0, 3);
  if(randomOption==0)
      var answer = "optionA";
  else if (randomOption==1)
      var answer = "optionB";
  else if (randomOption==2)
      var answer = "optionC";
  else if (randomOption==3)
      var answer = "optionD";

  option[randomOption] = String.fromCharCode(randomOption+65) + ". " +  correctOption;
  option[(randomOption+1)%4] = String.fromCharCode((randomOption+1)%4+65) + ". " + wrongOption1;
  option[(randomOption+2)%4] = String.fromCharCode((randomOption+2)%4+65) + ". " +wrongOption2;
  option[((randomOption+3)%4)] = String.fromCharCode((randomOption+3)%4+65) + ". " +wrongOption3;

  return{question, option, answer};
}

//Type18: (-ax-by)^2 = a^2x^2+2abxy+b^2y^2
function identityExpansionType18(){
  var unknowns = [
    ["a", "b"], ["x", "y"], ["p", "q"], ["m", "n"]
  ];
  var unknownNumber = getRndInteger(0, 3);

  var a = getRndInteger(-12, -2);
  do{
    var b = getRndInteger(-12, -2);
  }while(gcd_two_numbers(a, b)!=1)

  var question = "$(" + value2FirstCoe(a) + unknowns[unknownNumber][0] + value2Coe(b) + unknowns[unknownNumber][1] + ")^2$";
  var correctOption = "$" + value2FirstCoe(a*a) + unknowns[unknownNumber][0] + "^2" + value2Coe(2*a*b) + unknowns[unknownNumber][0] + unknowns[unknownNumber][1] + value2Coe(b*b) + unknowns[unknownNumber][1] + "^2" + "$";
  var wrongOption1 = "$" + value2FirstCoe(a) + unknowns[unknownNumber][0] + "^2" + value2Coe(2*a*b) + unknowns[unknownNumber][0] + unknowns[unknownNumber][1] + value2Coe(b) + unknowns[unknownNumber][1] + "^2" + "$";
  var wrongOption2 = "$" + value2FirstCoe(a*a) + unknowns[unknownNumber][0] + "^2" + value2Coe(a*b) + unknowns[unknownNumber][0] + unknowns[unknownNumber][1] + value2Coe(b*b) + unknowns[unknownNumber][1] + "^2" + "$";
  var wrongOption3 = "$" + value2FirstCoe(a) + unknowns[unknownNumber][0] + "^2" + value2Coe(b) + unknowns[unknownNumber][1] + "^2" + "$";
  var option = [];

  var randomOption = getRndInteger(0, 3);
  if(randomOption==0)
      var answer = "optionA";
  else if (randomOption==1)
      var answer = "optionB";
  else if (randomOption==2)
      var answer = "optionC";
  else if (randomOption==3)
      var answer = "optionD";

  option[randomOption] = String.fromCharCode(randomOption+65) + ". " +  correctOption;
  option[(randomOption+1)%4] = String.fromCharCode((randomOption+1)%4+65) + ". " + wrongOption1;
  option[(randomOption+2)%4] = String.fromCharCode((randomOption+2)%4+65) + ". " +wrongOption2;
  option[((randomOption+3)%4)] = String.fromCharCode((randomOption+3)%4+65) + ". " +wrongOption3;

  return{question, option, answer};
}

//Type19: k(ax+b)^2 = ka^2x^2+2kabx+kb^2
function identityExpansionType19(){
  var unknowns = [
    "a", "b", "h", "m", "n", "p", "q", "r", "s", "t", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0, 12);
  var a = getRndInteger(2, 12);
  do{
    var b = getRndInteger(-12, 12);
  }while(gcd_two_numbers(a, b)!=1 || Math.abs(b)<=1)
  var k = getRndInteger(2, 5);

  var question = "$" + value2FirstCoe(k) + "(" + value2FirstCoe(a) + unknowns[unknownNumber] + value2Constant(b) + ")^2$";
  var correctOption = "$" + value2FirstCoe(k*a*a) + unknowns[unknownNumber] + "^2" + value2Coe(k*2*a*b) + unknowns[unknownNumber] + value2Constant(k*b*b)  + "$";
  var wrongOption1 = "$" + value2FirstCoe(k*a) + unknowns[unknownNumber] + "^2" + value2Coe(k*2*a*b) + unknowns[unknownNumber] + value2Constant(k*b*b)  + "$";
  var wrongOption2 = "$" + value2FirstCoe(k*a*a) + unknowns[unknownNumber] + "^2" + value2Constant(k*b*b)  + "$";
  var wrongOption3 = "$" + value2FirstCoe(k*a) + unknowns[unknownNumber] + "^2" + value2Constant(k*b*b)  + "$";
  var option = [];

  var randomOption = getRndInteger(0, 3);
  if(randomOption==0)
      var answer = "optionA";
  else if (randomOption==1)
      var answer = "optionB";
  else if (randomOption==2)
      var answer = "optionC";
  else if (randomOption==3)
      var answer = "optionD";

  option[randomOption] = String.fromCharCode(randomOption+65) + ". " +  correctOption;
  option[(randomOption+1)%4] = String.fromCharCode((randomOption+1)%4+65) + ". " + wrongOption1;
  option[(randomOption+2)%4] = String.fromCharCode((randomOption+2)%4+65) + ". " +wrongOption2;
  option[((randomOption+3)%4)] = String.fromCharCode((randomOption+3)%4+65) + ". " +wrongOption3;

  return{question, option, answer};
}

//Type20: -k(ax+by)^2 = -ka^2x+-2kabxy-kb^2y^2
function identityExpansionType20(){
  var unknowns = [
    ["a", "b"], ["x", "y"], ["p", "q"], ["m", "n"]
  ];
  var unknownNumber = getRndInteger(0, 3);

  var a = getRndInteger(2, 12);
  do{
    var b = getRndInteger(-12, 12);
  }while(gcd_two_numbers(a, b)!=1 || Math.abs(b)<=1)
  var k = getRndInteger(-5, -2);

  var question = "$" + value2FirstCoe(k) + "(" + value2FirstCoe(a) + unknowns[unknownNumber][0] + value2Coe(b) + unknowns[unknownNumber][1] + ")^2$";
  var correctOption = "$" + value2FirstCoe(k*a*a) + unknowns[unknownNumber][0] + "^2" + value2Coe(k*2*a*b) + unknowns[unknownNumber][0] + unknowns[unknownNumber][1] + value2Coe(k*b*b) + unknowns[unknownNumber][1] + "^2" + "$";
  var wrongOption1 = "$" + value2FirstCoe(k*a) + unknowns[unknownNumber][0] + "^2" + value2Coe(k*2*a*b) + unknowns[unknownNumber][0] + unknowns[unknownNumber][1] + value2Coe(k*b) + unknowns[unknownNumber][1] + "^2" + "$";
  var wrongOption2 = "$" + value2FirstCoe(k*a*a) + unknowns[unknownNumber][0] + "^2" + value2Coe(k*a*b) + unknowns[unknownNumber][0] + unknowns[unknownNumber][1] + value2Coe(k*b*b) + unknowns[unknownNumber][1] + "^2" + "$";
  var wrongOption3 = "$" + value2FirstCoe(k*a) + unknowns[unknownNumber][0] + "^2" + value2Coe(k*b) + unknowns[unknownNumber][1] + "^2" + "$";
  var option = [];

  var randomOption = getRndInteger(0, 3);
  if(randomOption==0)
      var answer = "optionA";
  else if (randomOption==1)
      var answer = "optionB";
  else if (randomOption==2)
      var answer = "optionC";
  else if (randomOption==3)
      var answer = "optionD";

  option[randomOption] = String.fromCharCode(randomOption+65) + ". " +  correctOption;
  option[(randomOption+1)%4] = String.fromCharCode((randomOption+1)%4+65) + ". " + wrongOption1;
  option[(randomOption+2)%4] = String.fromCharCode((randomOption+2)%4+65) + ". " +wrongOption2;
  option[((randomOption+3)%4)] = String.fromCharCode((randomOption+3)%4+65) + ". " +wrongOption3;

  return{question, option, answer};
}

function gcd_two_numbers(x, y) {
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
function getRndInteger(min, max) {
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
