// Type1 : acx + bc, where x is an unknown, c is a random common factor, a and b are positive constants
function commonFactorType1(){
  var unknowns = [
    "a", "b", "c", "d", "f", "g", "h", "m", "n", "p", "q", "r", "s", "t", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0, 16);
  var a = getRndInteger(1, 8);
  do{
    var b = getRndInteger(1, 8);
  }while(gcd_two_numbers(a, b)!=1 || a==b);
  var c = getRndInteger(2, 8);

  var question = "$" + value2FirstCoe(a*c) + unknowns[unknownNumber] + value2Constant(b*c) + "$";
  var correctOption = "$" + value2FirstCoe(c) + "(" + value2FirstCoe(a) + unknowns[unknownNumber] + value2Constant(b) + ")$";
  var wrongOption1 = "$" + value2FirstCoe(c) + "(" + value2FirstCoe(b) + unknowns[unknownNumber] + value2Constant(a) + ")$";
  var wrongOption2 = "$" + value2FirstCoe(c) + "(" + value2FirstCoe(a) + unknowns[unknownNumber] + value2Constant(b*c) + ")$";
  var wrongOption3 = "$" + value2FirstCoe(a*c) + "(" + value2FirstCoe(a*c) + unknowns[unknownNumber] + value2Constant(b) + ")$";

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

//Type2 : abx+ac, where x is an unknown, a is a random common factor, b is a positive constant and c is a negative constant
function commonFactorType2(){
  var unknowns = [
    "a", "b", "c", "d", "f", "g", "h", "m", "n", "p", "q", "r", "s", "t", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0, 16);
  var a = getRndInteger(2, 10);
  var b = getRndInteger(1, 10);

  do{
    var c = getRndInteger(-10, -1);
  }while(gcd_two_numbers(b, c)!=1);


  var question = "$" + value2FirstCoe(a*b) + unknowns[unknownNumber] + value2Constant(a*c) + "$";
  var correctOption = "$" + value2FirstCoe(a) + "(" + value2FirstCoe(b) + unknowns[unknownNumber] + value2Constant(c) + ")$";
  var wrongOption1 = "$" + value2FirstCoe(a) + "(" + value2FirstCoe(b) + unknowns[unknownNumber] + value2Constant(a*c) + ")$";
  var wrongOption2 = "$" + value2FirstCoe(a) + "(" + value2FirstCoe(a) + unknowns[unknownNumber] + value2Constant(-c) + ")$";
  var wrongOption3 = "$" + value2FirstCoe(-a) + "(" + value2FirstCoe(b) + unknowns[unknownNumber] + value2Constant(-c) + ")$";

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

  option[randomOption] = String.fromCharCode(randomOption+65) + ". " + correctOption;
  option[(randomOption+1)%4] = String.fromCharCode((randomOption+1)%4+65) + ". " + wrongOption1;
  option[(randomOption+2)%4] = String.fromCharCode((randomOption+2)%4+65) + ". " + wrongOption2;
  option[((randomOption+3)%4)] = String.fromCharCode((randomOption+3)%4+65) + ". " + wrongOption3;

  return{question, option, answer};

}

//Type3 : abx^2+acx, where x is an unknown, a is a random common factor, b and c are random constant
function commonFactorType3(){
  var unknowns = [
    "a", "b", "c", "d", "f", "g", "h", "m", "n", "p", "q", "r", "s", "t", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0, 16);
  var a = getRndInteger(2, 10);
  var b = getRndInteger(2, 8);
  do{
    var c = getRndInteger(-10, 10);
  }while(c==0 || gcd_two_numbers(b, c)!=1);

  var question = "$" + value2FirstCoe(a*b) + unknowns[unknownNumber] + "^2" + value2Constant(a*c) + unknowns[unknownNumber] + "$";
  var correctOption = "$" + value2FirstCoe(a) + unknowns[unknownNumber] + "(" + value2FirstCoe(b) + unknowns[unknownNumber] + value2Constant(c) + ")$";
  var wrongOption1 = "$" + value2FirstCoe(a) + "(" + value2FirstCoe(b) + unknowns[unknownNumber] + "^2" + value2Coe(-c) + unknowns[unknownNumber] + ")$";
  var wrongOption2 = "$" + value2FirstCoe(-a) + unknowns[unknownNumber] + "(" + value2FirstCoe(-b) + unknowns[unknownNumber] + value2Constant(c) + ")$";
  var wrongOption3 = "$" + value2FirstCoe(a) + unknowns[unknownNumber] + "(" + value2FirstCoe(b) + unknowns[unknownNumber] + value2Constant(-c) + ")$";

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

  option[randomOption] = String.fromCharCode(randomOption+65) + ". " + correctOption;
  option[(randomOption+1)%4] = String.fromCharCode((randomOption+1)%4+65) + ". " + wrongOption1;
  option[(randomOption+2)%4] = String.fromCharCode((randomOption+2)%4+65) + ". " + wrongOption2;
  option[(randomOption+3)%4] = String.fromCharCode((randomOption+3)%4+65) + ". " + wrongOption3;

  return{question, option, answer};

}

//Type4 : abxy+acx, where x is an unknown, a is a random common factor, b and c are random constant
function commonFactorType4(){
  var unknowns = [
    ["a", "b"], ["x", "y"], ["p", "q"], ["m", "n"]
  ];
  var unknownNumber = getRndInteger(0, 3);
  var a = getRndInteger(2, 10);
  var b = getRndInteger(2, 6);
  do{
    var c = getRndInteger(-10, 10);
  }while(c==0 || gcd_two_numbers(b, c)!=1);


  var question = "$" + value2FirstCoe(a*b) + unknowns[unknownNumber][0] + unknowns[unknownNumber][1] + value2Coe(a*c) + unknowns[unknownNumber][0]  + "$";
  var correctOption = "$" + value2FirstCoe(a) + unknowns[unknownNumber][0] + "(" + value2FirstCoe(b) + unknowns[unknownNumber][1] + value2Constant(c) + ")$";
  var wrongOption1 = "$" + value2FirstCoe(a) + unknowns[unknownNumber][0] + "(" + value2FirstCoe(b) + unknowns[unknownNumber][1] + value2Constant(-c) + ")$";
  var wrongOption2 = "$" + value2FirstCoe(-a) + unknowns[unknownNumber][0] + "(" + value2FirstCoe(-b) + unknowns[unknownNumber][1] + value2Constant(c) + ")$";
  var wrongOption3 = "$" + value2FirstCoe(a) + unknowns[unknownNumber][1] + "(" + value2FirstCoe(b) + unknowns[unknownNumber][0] + value2Constant(c) + ")$";

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
  option[randomOption] = String.fromCharCode(randomOption+65) + ". " + correctOption;
  option[(randomOption+1)%4] = String.fromCharCode((randomOption+1)%4+65) + ". " + wrongOption1;
  option[(randomOption+2)%4] = String.fromCharCode((randomOption+2)%4+65) + ". " + wrongOption2;
  option[(randomOption+3)%4] = String.fromCharCode((randomOption+3)%4+65) + ". " + wrongOption3;

  return{question, option, answer};

}

//Type5 : -abx+ac, where x is an unknown, a is a random positive common factor, b and c are co-prime constants
function commonFactorType5(){
  var unknowns = [
    "a", "b", "c", "d", "f", "g", "h", "m", "n", "p", "q", "r", "s", "t", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0, 16);
  var a = getRndInteger(2, 10);
  var b = getRndInteger(2, 8);
  do{
    var c = getRndInteger(1, 10);
  }while(gcd_two_numbers(b, c)!=1);

  var question = "$-" + a*b + unknowns[unknownNumber] + value2Constant(a*c) + "$";
  var correctOption = "$" + value2FirstCoe(-a) + "(" + value2FirstCoe(b) + unknowns[unknownNumber] + value2Constant(-c) + ")$";
  var wrongOption1 = "$" + value2FirstCoe(a) + "(" + value2FirstCoe(b) + unknowns[unknownNumber] + value2Constant(c) + ")$";
  var wrongOption2 = "$" + value2FirstCoe(-a) + "(" + value2FirstCoe(b) + unknowns[unknownNumber] + value2Constant(c) + ")$";
  var wrongOption3 = "$" + value2FirstCoe(-a*b) + "(" + unknowns[unknownNumber] + value2Constant(c) + ")$";

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

  option[randomOption] = String.fromCharCode(randomOption+65) + ". " + correctOption;
  option[(randomOption+1)%4] = String.fromCharCode((randomOption+1)%4+65) + ". " + wrongOption1;
  option[(randomOption+2)%4] = String.fromCharCode((randomOption+2)%4+65) + ". " + wrongOption2;
  option[(randomOption+3)%4] = String.fromCharCode((randomOption+3)%4+65) + ". " + wrongOption3;

  return{question, option, answer};

}

//Type6 : -abx^2+acx, where x is an unknown, a is a random positive common factor, b and c are co-prime constants
function commonFactorType6(){
  var unknowns = [
    "a", "b", "c", "d", "f", "g", "h", "m", "n", "p", "q", "r", "s", "t", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0, 16);
  var a = getRndInteger(2, 10);
  var b = getRndInteger(2, 8);
  do{
    var c = getRndInteger(1, 10);
  }while(gcd_two_numbers(b, c)!=1);

  var question = "$-" + a*b + unknowns[unknownNumber] + "^2" + value2Constant(a*c) + unknowns[unknownNumber] + "$";
  var correctOption = "$" + value2FirstCoe(-a) + unknowns[unknownNumber] + "(" + value2FirstCoe(b) + unknowns[unknownNumber] + value2Constant(-c) + ")$";
  var wrongOption1 = "$" + value2FirstCoe(a) + unknowns[unknownNumber] + "(" + value2FirstCoe(b) + unknowns[unknownNumber] + value2Constant(c) + ")$";
  var wrongOption2 = "$" + value2FirstCoe(-a) + unknowns[unknownNumber] + "(" + value2FirstCoe(b) + unknowns[unknownNumber] + value2Constant(c) + ")$";
  var wrongOption3 = "$" + value2FirstCoe(-a*b) + unknowns[unknownNumber] + "(" + unknowns[unknownNumber] + value2Constant(c) + ")$";

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

  option[randomOption] = String.fromCharCode(randomOption+65) + ". " + correctOption;
  option[(randomOption+1)%4] = String.fromCharCode((randomOption+1)%4+65) + ". " + wrongOption1;
  option[(randomOption+2)%4] = String.fromCharCode((randomOption+2)%4+65) + ". " + wrongOption2;
  option[(randomOption+3)%4] = String.fromCharCode((randomOption+3)%4+65) + ". " + wrongOption3;

  return{question, option, answer};

}

//Type7 : abx+acx^2y+adxy, where x is an unknown, a is a random common factor, b and c are random constant
function commonFactorType7(){
  var unknowns = [
    ["a", "b"], ["x", "y"], ["p", "q"], ["m", "n"]
  ];
  var unknownNumber = getRndInteger(0, 3);
  var a = getRndInteger(2, 10);
  var b = getRndInteger(1, 10);
  do{
    var c = getRndInteger(-10, 10);
  }while(c==0 || gcd_two_numbers(b, c)!=1);
  do{
    var d = getRndInteger(-10, 10);
  }while(d==0 || gcd_two_numbers(c, d)!=1 || gcd_two_numbers(b, d)!=1);

  var question = "$" + value2FirstCoe(a*b) + unknowns[unknownNumber][0] + value2Coe(a*c) + unknowns[unknownNumber][0] + "^2" + unknowns[unknownNumber][1] + value2Coe(a*d) + unknowns[unknownNumber][0] + unknowns[unknownNumber][1] + "$";
  var correctOption = "$" + value2FirstCoe(a) + unknowns[unknownNumber][0] + "(" + b + value2Coe(c) + unknowns[unknownNumber][0] + unknowns[unknownNumber][1] + value2Coe(d) + unknowns[unknownNumber][1] + ")$";
  var wrongOption1 = "$" + value2FirstCoe(a) + unknowns[unknownNumber][1] + "(" + b + value2Coe(c) + unknowns[unknownNumber][0] + unknowns[unknownNumber][1] + value2Coe(d) + unknowns[unknownNumber][0] + ")$";
  var wrongOption2 = "$" + value2FirstCoe(a) + unknowns[unknownNumber][0] + "(" + b + value2Coe(-c) + unknowns[unknownNumber][0] + unknowns[unknownNumber][1] + value2Coe(-d) + unknowns[unknownNumber][1] + ")$";
  var wrongOption3 = "$" + value2FirstCoe(a) + "(" + b + value2Coe(c) + unknowns[unknownNumber][0] + unknowns[unknownNumber][1] + value2Coe(d) + unknowns[unknownNumber][1] + ")$";

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
  option[randomOption] = String.fromCharCode(randomOption+65) + ". " + correctOption;
  option[(randomOption+1)%4] = String.fromCharCode((randomOption+1)%4+65) + ". " + wrongOption1;
  option[(randomOption+2)%4] = String.fromCharCode((randomOption+2)%4+65) + ". " + wrongOption2;
  option[(randomOption+3)%4] = String.fromCharCode((randomOption+3)%4+65) + ". " + wrongOption3;

  return{question, option, answer};
}

//Type8 : abxy^m+acx^nyz^i+adx^ny^kz, where x and y are unknowns, a is a random common factor, b is a positive constant and c is a negative constant
function commonFactorType8(){
  var unknowns = [
    ["a", "b", "c"], ["x", "y", "z"], ["p", "q", "r"]
  ];
  var unknownNumber = getRndInteger(0, 2);

  var a = getRndInteger(2, 12);
  do{
    var b = getRndInteger(2, 6);
  }while(a*b>40);
  do{
  var c = getRndInteger(-10, 10);
}while(c==0);
  do{
    var d = getRndInteger(-10, 10);
}while(d==0||(gcd_two_numbers(b, d)!=1&&gcd_two_numbers(c, d)!=1));

  var m = getRndInteger(2, 4);
  do{
    var k = getRndInteger(2, 4);
  }while(m==k);
  var n = getRndInteger(2, 3);
  var i = getRndInteger(2, 3);

  var question = "$" + value2FirstCoe(a*b) + unknowns[unknownNumber][0] + unknowns[unknownNumber][1] + "^" + m + value2Coe(a*c) + unknowns[unknownNumber][0] + "^" + n + unknowns[unknownNumber][1] + unknowns[unknownNumber][2] + "^" + i + value2Coe(a*d) + unknowns[unknownNumber][0] + "^" + n + unknowns[unknownNumber][1] + "^" + k + unknowns[unknownNumber][2] + "$";
  var correctOption = "$" + value2FirstCoe(a) + unknowns[unknownNumber][0] + unknowns[unknownNumber][1] + "(" + value2FirstCoe(b) +　unknowns[unknownNumber][1] + value2Index(m-1) + value2Coe(c) + unknowns[unknownNumber][0] + value2Index(n-1) + unknowns[unknownNumber][2] + value2Index(i) + value2Coe(d) + unknowns[unknownNumber][0] + value2Index(n-1) + unknowns[unknownNumber][1] + value2Index(k-1) + unknowns[unknownNumber][2] + ")" + "$";
  var wrongOption1 = "$" + value2FirstCoe(a) + unknowns[unknownNumber][0] + unknowns[unknownNumber][1] + "(" + value2FirstCoe(b) +　unknowns[unknownNumber][1] + value2Index(m-1) + value2Coe(-c) + unknowns[unknownNumber][0] + value2Index(n-1) + unknowns[unknownNumber][2] + value2Index(i) + value2Coe(-d) + unknowns[unknownNumber][0] + value2Index(n-1) + unknowns[unknownNumber][1] + value2Index(k-1) + unknowns[unknownNumber][2] + ")" + "$";
  var wrongOption2 = "$" + unknowns[unknownNumber][0] + unknowns[unknownNumber][1] + "(" + value2FirstCoe(b) +　unknowns[unknownNumber][1] + value2Index(m-1) + value2Coe(c) + unknowns[unknownNumber][0] + value2Index(n-1) + unknowns[unknownNumber][2] + value2Index(i) + value2Coe(-d) + unknowns[unknownNumber][0] + value2Index(n-1) + unknowns[unknownNumber][1] + value2Index(k-1) + unknowns[unknownNumber][2] + ")" + "$";
  var wrongOption3 = "$" + value2FirstCoe(a) + unknowns[unknownNumber][0] + unknowns[unknownNumber][1] + "^2" + "(" + value2FirstCoe(b) +　unknowns[unknownNumber][1] + value2Index(m-1) + value2Coe(c) + unknowns[unknownNumber][0] + value2Index(n-1) + unknowns[unknownNumber][2] + value2Index(i) + value2Coe(d) + unknowns[unknownNumber][0] + value2Index(n-1) + unknowns[unknownNumber][1] + value2Index(k-1) + unknowns[unknownNumber][2] + ")" + "$";

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
  option[randomOption] = String.fromCharCode(randomOption+65) + ". " + correctOption;
  option[(randomOption+1)%4] = String.fromCharCode((randomOption+1)%4+65) + ". " + wrongOption1;
  option[(randomOption+2)%4] = String.fromCharCode((randomOption+2)%4+65) + ". " + wrongOption2;
  option[(randomOption+3)%4] = String.fromCharCode((randomOption+3)%4+65) + ". " + wrongOption3;

  return{question, option, answer};
}

// Type9 : ax(bx+cy)+d(bx+cy)
function commonFactorType9(){
  var unknowns = [
    ["a", "b"], ["x", "y"], ["p", "q"], ["m", "n"]
  ];
  var unknownNumber = getRndInteger(0, 3);
  var a = getRndInteger(1, 8);
  var b = getRndInteger(1, 5);
  do{
    var c = getRndInteger(-10, 10);
  }while(c==0||gcd_two_numbers(b, c)!=1)
  do{
    var d = getRndInteger(-12, 12);
  }while(d==0||gcd_two_numbers(a, d)!=1)

  var question = "$" + value2FirstCoe(a) + unknowns[unknownNumber][0] + "(" + value2FirstCoe(b) + unknowns[unknownNumber][0] + value2Coe(c) + unknowns[unknownNumber][1] + ")" + value2Coe(d) + "(" + value2FirstCoe(b) + unknowns[unknownNumber][0] + value2Coe(c) + unknowns[unknownNumber][1] + ")$";
  var correctOption = "$(" + value2FirstCoe(b) + unknowns[unknownNumber][0] + value2Coe(c) + unknowns[unknownNumber][1] + ")(" + value2FirstCoe(a) + unknowns[unknownNumber][0] + value2Constant(d) + ")$";
  var wrongOption1 = "$" + value2FirstCoe(a*d) + unknowns[unknownNumber][0] + "(" + value2FirstCoe(b) + unknowns[unknownNumber][0] + value2Coe(c) + unknowns[unknownNumber][1] + ")$";
  var wrongOption2 = "$" + value2FirstCoe(a+d) + unknowns[unknownNumber][0] + "(" + value2FirstCoe(b) + unknowns[unknownNumber][0] + value2Coe(c) + unknowns[unknownNumber][1] + ")$";
  var wrongOption3 = "$(" + value2FirstCoe(b) + unknowns[unknownNumber][0] + value2Coe(c) + unknowns[unknownNumber][1] + ")(" + value2FirstCoe(a) + unknowns[unknownNumber][0] + value2Constant(-d) + ")$";
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
  option[randomOption] = String.fromCharCode(randomOption+65) + ". " + correctOption;
  option[(randomOption+1)%4] = String.fromCharCode((randomOption+1)%4+65) + ". " + wrongOption1;
  option[(randomOption+2)%4] = String.fromCharCode((randomOption+2)%4+65) + ". " + wrongOption2;
  option[(randomOption+3)%4] = String.fromCharCode((randomOption+3)%4+65) + ". " + wrongOption3;

  return{question, option, answer};
}

// Type10 : ax(bx+cy)+dy(bx+cy)
function commonFactorType10(){
  var unknowns = [
    ["a", "b"], ["x", "y"], ["p", "q"], ["m", "n"]
  ];
  var unknownNumber = getRndInteger(0, 3);
  var a = getRndInteger(1, 8);
  var b = getRndInteger(1, 5);
  do{
    var c = getRndInteger(-10, 10);
  }while(c==0||gcd_two_numbers(b, c)!=1)
  do{
    var d = getRndInteger(-12, 12);
  }while(d==0||gcd_two_numbers(a, d)!=1)

  var question = "$" + value2FirstCoe(a) + unknowns[unknownNumber][0] + "(" + value2FirstCoe(b) + unknowns[unknownNumber][0] + value2Coe(c) + unknowns[unknownNumber][1] + ")" + value2Coe(d) + unknowns[unknownNumber][1] + "(" + value2FirstCoe(b) + unknowns[unknownNumber][0] + value2Coe(c) + unknowns[unknownNumber][1] + ")$";
  var correctOption = "$(" + value2FirstCoe(b) + unknowns[unknownNumber][0] + value2Coe(c) + unknowns[unknownNumber][1] + ")(" + value2FirstCoe(a) + unknowns[unknownNumber][0] + value2Coe(d) + unknowns[unknownNumber][1] + ")$";
  var wrongOption1 = "$" + value2FirstCoe(a*d) + unknowns[unknownNumber][0] + unknowns[unknownNumber][1] + "(" + value2FirstCoe(b) + unknowns[unknownNumber][0] + value2Coe(c) + unknowns[unknownNumber][1] + ")$";
  var wrongOption2 = "$" + value2FirstCoe(a+d) + unknowns[unknownNumber][0] + unknowns[unknownNumber][1] + "(" + value2FirstCoe(b) + unknowns[unknownNumber][0] + value2Coe(c) + unknowns[unknownNumber][1] + ")$";
  var wrongOption3 = "$(" + value2FirstCoe(b) + unknowns[unknownNumber][0] + value2Coe(c) + unknowns[unknownNumber][1] + ")(" + value2FirstCoe(a) + unknowns[unknownNumber][0] + value2Coe(-d) + unknowns[unknownNumber][1] + ")$";
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
  option[randomOption] = String.fromCharCode(randomOption+65) + ". " + correctOption;
  option[(randomOption+1)%4] = String.fromCharCode((randomOption+1)%4+65) + ". " + wrongOption1;
  option[(randomOption+2)%4] = String.fromCharCode((randomOption+2)%4+65) + ". " + wrongOption2;
  option[(randomOption+3)%4] = String.fromCharCode((randomOption+3)%4+65) + ". " + wrongOption3;

  return{question, option, answer};
}

// Tyep11 : a(bx+cy)^2+d(bx+cy)
function commonFactorType11(){
  var unknowns = [
    ["a", "b"], ["x", "y"], ["p", "q"], ["m", "n"]
  ];
  var unknownNumber = getRndInteger(0, 3);
  var a = getRndInteger(2, 8);
  var b = getRndInteger(1, 5);
  do{
    var c = getRndInteger(-10, 10);
  }while(c==0||gcd_two_numbers(b, c)!=1)
  do{
    var d = getRndInteger(-12, 12);
  }while(d==0||gcd_two_numbers(a, d)!=1)

  var question = "$" + value2FirstCoe(a) + "(" + value2FirstCoe(b) + unknowns[unknownNumber][0] + value2Coe(c) + unknowns[unknownNumber][1] + ")^2" + value2Coe(d) + "(" + value2FirstCoe(b) + unknowns[unknownNumber][0] + value2Coe(c) + unknowns[unknownNumber][1] + ")$";
  var correctOption = "$(" + value2FirstCoe(b) + unknowns[unknownNumber][0] + value2Coe(c) + unknowns[unknownNumber][1] + ")(" + value2FirstCoe(a*b) + unknowns[unknownNumber][0] + value2Coe(a*c) + unknowns[unknownNumber][1] + value2Constant(d) + ")$";
  var wrongOption1 = "$(" + value2FirstCoe(b) + unknowns[unknownNumber][0] + value2Coe(c) + unknowns[unknownNumber][1] + ")(" + value2FirstCoe(b) + unknowns[unknownNumber][0] + value2Coe(c) + unknowns[unknownNumber][1] + value2Constant(d) + ")$";
  var wrongOption2 = "$" + value2FirstCoe(a) +"(" + value2FirstCoe(b) + unknowns[unknownNumber][0] + value2Coe(c) + unknowns[unknownNumber][1] + ")(" + value2FirstCoe(b) + unknowns[unknownNumber][0] + value2Coe(c) + unknowns[unknownNumber][1] + value2Constant(d) + ")$";
  var wrongOption3 = "$(" + value2FirstCoe(b) + unknowns[unknownNumber][0] + value2Coe(c) + unknowns[unknownNumber][1] + ")(" + value2FirstCoe(a*b) + unknowns[unknownNumber][0] + value2Coe(-a*c) + unknowns[unknownNumber][1] + value2Constant(-d) + ")$";
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
  option[randomOption] = String.fromCharCode(randomOption+65) + ". " + correctOption;
  option[(randomOption+1)%4] = String.fromCharCode((randomOption+1)%4+65) + ". " + wrongOption1;
  option[(randomOption+2)%4] = String.fromCharCode((randomOption+2)%4+65) + ". " + wrongOption2;
  option[(randomOption+3)%4] = String.fromCharCode((randomOption+3)%4+65) + ". " + wrongOption3;

  return{question, option, answer};
}

//Tyep1 : ax+ay+zx+zy = (a+z)(x+y), where a is a random positive constant, x, y, z are unknowns
function groupingFactorType1(){
  var unknowns = [
    ["a", "b", "c"], ["x", "y", "z"], ["p", "q", "r"], ["m", "n", "k"], ["s", "t", "r"]
  ];
  var unknownNumber = getRndInteger(0, 4);
  var a = getRndInteger(2, 8);

  var question = "$" + value2FirstCoe(a) + unknowns[unknownNumber][0] + value2Coe(a) + unknowns[unknownNumber][1] + "+" + unknowns[unknownNumber][2] + unknowns[unknownNumber][0] + "+" + unknowns[unknownNumber][2] + unknowns[unknownNumber][1] + "$";
  var correctOption = "$(" + a + "+" + unknowns[unknownNumber][2] + ")(" + unknowns[unknownNumber][0] + "+" + unknowns[unknownNumber][1] + ")$";
  var wrongOption1 = "$(" + a + "-" + unknowns[unknownNumber][2] + ")(" + unknowns[unknownNumber][0] + "+" + unknowns[unknownNumber][1] + ")$";
  var wrongOption2 = "$(" + a + "+" + unknowns[unknownNumber][0] + ")(" + unknowns[unknownNumber][2] + "+" + unknowns[unknownNumber][1] + ")$";
  var wrongOption3 = "$(" + a + "+" + unknowns[unknownNumber][1] + ")(" + unknowns[unknownNumber][0] + "+" + unknowns[unknownNumber][2] + ")$";
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
  option[randomOption] = String.fromCharCode(randomOption+65) + ". " + correctOption;
  option[(randomOption+1)%4] = String.fromCharCode((randomOption+1)%4+65) + ". " + wrongOption1;
  option[(randomOption+2)%4] = String.fromCharCode((randomOption+2)%4+65) + ". " + wrongOption2;
  option[(randomOption+3)%4] = String.fromCharCode((randomOption+3)%4+65) + ". " + wrongOption3;

  return{question, option, answer};
}

//Tyep2 : x^2+xz-xy-zy = (x+z)(x-y), where a is a random positive constant, x, y, z are unknowns
function groupingFactorType2(){
  var unknowns = [
    ["a", "b", "c"], ["x", "y", "z"], ["p", "q", "r"], ["m", "n", "k"], ["s", "t", "r"]
  ];
  var unknownNumber = getRndInteger(0, 4);

  var question = "$" + unknowns[unknownNumber][0] + "^2+" + unknowns[unknownNumber][0] + unknowns[unknownNumber][2] + "-" + unknowns[unknownNumber][0] + unknowns[unknownNumber][1] + "-" + unknowns[unknownNumber][2] + unknowns[unknownNumber][1] + "$";
  var correctOption = "$(" + unknowns[unknownNumber][0] + "+" + unknowns[unknownNumber][2] + ")(" +unknowns[unknownNumber][0] + "-" + unknowns[unknownNumber][1] + ")$";
  var wrongOption1 = "$(" + unknowns[unknownNumber][0] + "^2" + "+" + unknowns[unknownNumber][2] + ")(" +unknowns[unknownNumber][0] + "-" + unknowns[unknownNumber][1] + ")$";
  var wrongOption2 = "$(" + unknowns[unknownNumber][0] + "-" + unknowns[unknownNumber][2] + ")(" +unknowns[unknownNumber][0] + "+" + unknowns[unknownNumber][1] + ")$";
  var wrongOption3 = "$(" + unknowns[unknownNumber][0] + "+" + unknowns[unknownNumber][1] + ")(" +unknowns[unknownNumber][0] + "-" + unknowns[unknownNumber][2] + ")$";
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
  option[randomOption] = String.fromCharCode(randomOption+65) + ". " + correctOption;
  option[(randomOption+1)%4] = String.fromCharCode((randomOption+1)%4+65) + ". " + wrongOption1;
  option[(randomOption+2)%4] = String.fromCharCode((randomOption+2)%4+65) + ". " + wrongOption2;
  option[(randomOption+3)%4] = String.fromCharCode((randomOption+3)%4+65) + ". " + wrongOption3;

  return{question, option, answer};
}

//Type3 : axy-axz+by-bz = (ax+b)(y-z), where a and b are random positive constants, x, y, z are unknowns
function groupingFactorType3(){
  var unknowns = [
    ["a", "b", "c"], ["x", "y", "z"], ["p", "q", "r"], ["m", "n", "k"], ["s", "t", "r"]
  ];
  var unknownNumber = getRndInteger(0, 4);
  var a = getRndInteger(2, 8);
  do{
    var b = getRndInteger(2, 8);
  }while(gcd_two_numbers(a, b)!=1)

  var question = "$" + a + unknowns[unknownNumber][0] + unknowns[unknownNumber][1] + "-" + a + unknowns[unknownNumber][0] + unknowns[unknownNumber][2] + "+" + b + unknowns[unknownNumber][1] + "-" + b + unknowns[unknownNumber][2] + "$";
  var correctOption = "$(" + a + unknowns[unknownNumber][0] + "+" + b + ")(" + unknowns[unknownNumber][1] + "-" + unknowns[unknownNumber][2] + ")$";
  var wrongOption1 = "$(" + a + unknowns[unknownNumber][0] + "-" + b + ")(" + unknowns[unknownNumber][1] + "-" + unknowns[unknownNumber][2] + ")$";
  var wrongOption2 = "$(" + a + unknowns[unknownNumber][0] + "-" + b + ")(" + unknowns[unknownNumber][1] + "+" + unknowns[unknownNumber][2] + ")$";
  var wrongOption3 = "$(" + a + unknowns[unknownNumber][0] + "+" + unknowns[unknownNumber][2] + ")(" + unknowns[unknownNumber][1] + "-" + b + ")$";
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
  option[randomOption] = String.fromCharCode(randomOption+65) + ". " + correctOption;
  option[(randomOption+1)%4] = String.fromCharCode((randomOption+1)%4+65) + ". " + wrongOption1;
  option[(randomOption+2)%4] = String.fromCharCode((randomOption+2)%4+65) + ". " + wrongOption2;
  option[(randomOption+3)%4] = String.fromCharCode((randomOption+3)%4+65) + ". " + wrongOption3;

  return{question, option, answer};
}

//Type4 : acxy+abx-cdy-bd
function groupingFactorType4(){
  var unknowns = [
    ["a", "b"], ["x", "y"], ["p", "q"], ["m", "n"]
  ];
  var unknownNumber = getRndInteger(0, 3);
  var a = getRndInteger(2, 8);
  var b = getRndInteger(1, 5);
  do{
    var c = getRndInteger(1, 10);
  }while(gcd_two_numbers(c, b)!=1);
  do{
    var d =getRndInteger(-6, -2);
  }while(gcd_two_numbers(a, d)!=1);

  var question = "$" + value2FirstCoe(a*c) + unknowns[unknownNumber][0] + unknowns[unknownNumber][1] + value2Coe(a*b) + unknowns[unknownNumber][0] + value2Coe(c*d) + unknowns[unknownNumber][1] + value2Coe(b*d) + "$";
  var correctOption = "$(" + value2FirstCoe(c) + unknowns[unknownNumber][1] + value2Constant(b) + ")(" + value2FirstCoe(a) +  unknowns[unknownNumber][0] + value2Constant(d) + ")$";
  var wrongOption1 = "$(" + value2FirstCoe(c) + unknowns[unknownNumber][1] + value2Constant(b) + ")(" + value2FirstCoe(a) +  unknowns[unknownNumber][0] + value2Constant(-d) + ")$";
  var wrongOption2 = "$(" + value2FirstCoe(c) + unknowns[unknownNumber][1] + value2Constant(-b) + ")(" + value2FirstCoe(a) +  unknowns[unknownNumber][0] + value2Constant(d) + ")$";
  var wrongOption3 = "$(" + value2FirstCoe(c) + unknowns[unknownNumber][1] + value2Constant(b) + ")(" + d + value2Coe(-a) + unknowns[unknownNumber][0] + ")$";
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
  option[randomOption] = String.fromCharCode(randomOption+65) + ". " + correctOption;
  option[(randomOption+1)%4] = String.fromCharCode((randomOption+1)%4+65) + ". " + wrongOption1;
  option[(randomOption+2)%4] = String.fromCharCode((randomOption+2)%4+65) + ". " + wrongOption2;
  option[(randomOption+3)%4] = String.fromCharCode((randomOption+3)%4+65) + ". " + wrongOption3;

  return{question, option, answer};
}

//Type5 : ax^2-axy-bx+by = (ax-b)(x-y), where a and b are random positive constants, x and y are unknowns
function groupingFactorType5(){
  var unknowns = [
    ["a", "b"], ["x", "y"], ["p", "q"], ["m", "n"], ["h", "k"]
  ];
  var unknownNumber = getRndInteger(0, 4);
  var a = getRndInteger(2, 8);
  do{
    var b = getRndInteger(2, 8)
  }while(gcd_two_numbers(a, b)!=1)

  var question = "$" + a + unknowns[unknownNumber][0] + "^2-" + a + unknowns[unknownNumber][0] + unknowns[unknownNumber][1] + "-" + b + unknowns[unknownNumber][0] + "+" + b + unknowns[unknownNumber][1] + "$";
  var correctOption = "$(" + a + unknowns[unknownNumber][0] + "-" + b + ")(" + unknowns[unknownNumber][0] + "-" + unknowns[unknownNumber][1] + ")$";
  var wrongOption1 = "$(" + a + unknowns[unknownNumber][0] + "+" + b + ")(" + unknowns[unknownNumber][0] + "-" + unknowns[unknownNumber][1] + ")$";
  var wrongOption2 = "$(" + a + unknowns[unknownNumber][0] + "-" + b + ")(" + unknowns[unknownNumber][0] + "+" + unknowns[unknownNumber][1] + ")$";
  var wrongOption3 = "$(" + a + unknowns[unknownNumber][0] + "-" + b + ")(" + unknowns[unknownNumber][1] + "-" + unknowns[unknownNumber][0] + ")$";
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
  option[randomOption] = String.fromCharCode(randomOption+65) + ". " + correctOption;
  option[(randomOption+1)%4] = String.fromCharCode((randomOption+1)%4+65) + ". " + wrongOption1;
  option[(randomOption+2)%4] = String.fromCharCode((randomOption+2)%4+65) + ". " + wrongOption2;
  option[(randomOption+3)%4] = String.fromCharCode((randomOption+3)%4+65) + ". " + wrongOption3;

  return{question, option, answer};
}

//Type6 : xy-z^2+yz-xz = (y-z)(x+z), where x, y, z are unknowns
function groupingFactorType6(){
  var unknowns = [
    ["a", "b", "c"], ["x", "y", "z"], ["p", "q", "r"], ["m", "n", "k"], ["s", "t", "r"]
  ];
  var unknownNumber = getRndInteger(0, 4);

  var question = "$" + unknowns[unknownNumber][0] + unknowns[unknownNumber][1] + "-" + unknowns[unknownNumber][2] + "^2+" + unknowns[unknownNumber][1] + unknowns[unknownNumber][2] + "-" + unknowns[unknownNumber][0] + unknowns[unknownNumber][2] + "$";
  var correctOption = "$(" + unknowns[unknownNumber][1] + "-" + unknowns[unknownNumber][2]  + ")(" + unknowns[unknownNumber][0] + "+" + unknowns[unknownNumber][2] + ")$";
  var wrongOption1 = "$(" + unknowns[unknownNumber][2] + "-" + unknowns[unknownNumber][1]  + ")(" + unknowns[unknownNumber][2] + "+" + unknowns[unknownNumber][0] + ")$";
  var wrongOption2 = "$(" + unknowns[unknownNumber][1] + "-" + unknowns[unknownNumber][2]  + ")(" + unknowns[unknownNumber][0] + "-" + unknowns[unknownNumber][2] + ")$";
  var wrongOption3 = "$(" + unknowns[unknownNumber][2] + "-" + unknowns[unknownNumber][0]  + ")(" + unknowns[unknownNumber][2] + "+" + unknowns[unknownNumber][1] + ")$";
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
  option[randomOption] = String.fromCharCode(randomOption+65) + ". " + correctOption;
  option[(randomOption+1)%4] = String.fromCharCode((randomOption+1)%4+65) + ". " + wrongOption1;
  option[(randomOption+2)%4] = String.fromCharCode((randomOption+2)%4+65) + ". " + wrongOption2;
  option[(randomOption+3)%4] = String.fromCharCode((randomOption+3)%4+65) + ". " + wrongOption3;

  return{question, option, answer};
}

//Type7 : ax^2y+abxy^2-abcy^2z-acxyz = ay(x-cz)(x+by)
function groupingFactorType7(){
  var unknowns = [
    ["a", "b", "c"], ["x", "y", "z"], ["p", "q", "r"], ["m", "n", "k"], ["s", "t", "r"]
  ];
  var unknownNumber = getRndInteger(0, 4);

  var a = getRndInteger(2, 3);
  var b = getRndInteger(2, 5);
  do{
    var c = getRndInteger(2, 5);
  }while(gcd_two_numbers(b, c)!=1)

  var question = "$" + a + unknowns[unknownNumber][0] + "^2" + unknowns[unknownNumber][1] + "+" + (a*b) + unknowns[unknownNumber][0] + unknowns[unknownNumber][1] + "^2-" + (a*b*c) + unknowns[unknownNumber][1] + "^2" + unknowns[unknownNumber][2] + "-" + (a*c) + unknowns[unknownNumber][0] + unknowns[unknownNumber][1] + unknowns[unknownNumber][2] + "$";
  var correctOption = "$" + a + unknowns[unknownNumber][1] + "(" + unknowns[unknownNumber][0] + "-" + c + unknowns[unknownNumber][2]  + ")(" + unknowns[unknownNumber][0] + "+" + b + unknowns[unknownNumber][1] + ")$";
  var wrongOption1 = "$" + a  + "(" + unknowns[unknownNumber][0] + unknowns[unknownNumber][1] + "-" + c + unknowns[unknownNumber][2]  + ")(" + unknowns[unknownNumber][0] + unknowns[unknownNumber][1] + "+" + b + unknowns[unknownNumber][1] + ")$";
  var wrongOption2 = "$" + a + unknowns[unknownNumber][1] + "(" + unknowns[unknownNumber][0] + "+" + c + unknowns[unknownNumber][2]  + ")(" + unknowns[unknownNumber][0] + "-" + b + unknowns[unknownNumber][1] + ")$";
  var wrongOption3 = "$" + a + unknowns[unknownNumber][1] + "(" + c + unknowns[unknownNumber][2] + "-" + unknowns[unknownNumber][0]  + ")(" + unknowns[unknownNumber][0] + "+" + b + unknowns[unknownNumber][1] + ")$";
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
  option[randomOption] = String.fromCharCode(randomOption+65) + ". " + correctOption;
  option[(randomOption+1)%4] = String.fromCharCode((randomOption+1)%4+65) + ". " + wrongOption1;
  option[(randomOption+2)%4] = String.fromCharCode((randomOption+2)%4+65) + ". " + wrongOption2;
  option[(randomOption+3)%4] = String.fromCharCode((randomOption+3)%4+65) + ". " + wrongOption3;

  return{question, option, answer};
}

//Type8 : kax+kk_3bx+kk_1ay+kk_1k_3by+kk_2az+kk_2k_3bz = k(a+k_1y+k_2z)(a+k_3b)
function groupingFactorType8(){
  var unknowns = [
    ["a", "b", "c", "x", "y"], ["x", "y", "z", "a", "b"], ["p", "q", "r", "m", "n"]
  ];
  var unknownNumber = getRndInteger(0, 2);

  var k = getRndInteger(2, 3);
  do{
    var k_1 = getRndInteger(-4, 4);
  }while(Math.abs(k_1)<=1)
  do{
    var k_2 = getRndInteger(-4, 4);
  }while(Math.abs(k_2)<=1)
  do{
    var k_3 = getRndInteger(-3, 3);
  }while(Math.abs(k_3)<=1)

  var question = "$" + k + unknowns[unknownNumber][3] + unknowns[unknownNumber][0] + value2Coe(k*k_3) + unknowns[unknownNumber][4] + unknowns[unknownNumber][0] + value2Coe(k*k_1) + unknowns[unknownNumber][3] + unknowns[unknownNumber][1] +　value2Coe(k*k_1*k_3) + unknowns[unknownNumber][4] + unknowns[unknownNumber][1] + value2Coe(k*k_2) + unknowns[unknownNumber][3] + unknowns[unknownNumber][2] + value2Coe(k*k_2*k_3) + unknowns[unknownNumber][4] + unknowns[unknownNumber][2] + "$";
  var correctOption = "$" + k + "(" + unknowns[unknownNumber][0] + value2Coe(k_1) + unknowns[unknownNumber][1] + value2Coe(k_2) + unknowns[unknownNumber][2] + ")(" + unknowns[unknownNumber][3] + value2Coe(k_3) + unknowns[unknownNumber][4] + ")$";
  var wrongOption1 = "$" + k + "(" + unknowns[unknownNumber][0] + value2Coe(k_1) + unknowns[unknownNumber][1] + value2Coe(-k_2) + unknowns[unknownNumber][2] + ")(" + unknowns[unknownNumber][3] + value2Coe(k_3) + unknowns[unknownNumber][4] + ")$";
  var wrongOption2 = "$" + k + "(" + unknowns[unknownNumber][0] + value2Coe(-k_1) + unknowns[unknownNumber][1] + value2Coe(k_2) + unknowns[unknownNumber][2] + ")(" + unknowns[unknownNumber][3] + value2Coe(-k_3) + unknowns[unknownNumber][4] + ")$";
  var wrongOption3 = "$" + (-k) + "(" + unknowns[unknownNumber][0] + value2Coe(-k_1) + unknowns[unknownNumber][1] + value2Coe(-k_2) + unknowns[unknownNumber][2] + ")(" + unknowns[unknownNumber][3] + value2Coe(k_3) + unknowns[unknownNumber][4] + ")$";
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
  option[randomOption] = String.fromCharCode(randomOption+65) + ". " + correctOption;
  option[(randomOption+1)%4] = String.fromCharCode((randomOption+1)%4+65) + ". " + wrongOption1;
  option[(randomOption+2)%4] = String.fromCharCode((randomOption+2)%4+65) + ". " + wrongOption2;
  option[(randomOption+3)%4] = String.fromCharCode((randomOption+3)%4+65) + ". " + wrongOption3;

  return{question, option, answer};
}

// returns H.C.F. of x and y
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
