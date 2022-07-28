//Type1: x^2-a^2=(x-a)(x+a), where x is an unknown, a is a random positive constant
function identityFactorizationType1(){
  var unknowns = [
    "a", "b", "c", "d", "f", "g", "h", "m", "n", "p", "q", "r", "s", "t", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0, 16);

  var a = getRndInteger(1, 12);

  var question = "$" + unknowns[unknownNumber] + "^2" + value2Constant(-a*a) + "$";
  var correctOption = "$(" + unknowns[unknownNumber] + value2Constant(-a) + ")(" + unknowns[unknownNumber] + value2Constant(a) + ")$";
  var wrongOption1 = "$(" + unknowns[unknownNumber] + value2Constant(-a) + ")^2$";
  var wrongOption2 = "$(" + a + "+" + unknowns[unknownNumber] + ")(" + a + "-" + unknowns[unknownNumber] + ")$";
  var wrongOption3 = "$(" + unknowns[unknownNumber] + "^2" + value2Constant(-a) + ")(" + unknowns[unknownNumber] + "^2" + value2Constant(a) + ")$";

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

//Type2: a^2x^2-b^2=(ax-b)(ax+b), where x is an unknown, a and b are co-prime random positive constants
function identityFactorizationType2(){
  var unknowns = [
    "a", "b", "c", "d", "f", "g", "h", "m", "n", "p", "q", "r", "s", "t", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0, 16);

  var a = getRndInteger(2, 9);

  do{
    var b = getRndInteger(2, 12);
  }while(gcd_two_numbers(a, b)!=1)

  var question = "$" + value2FirstCoe(a*a) + unknowns[unknownNumber] + "^2" + value2Constant(-b*b) + "$";
  var correctOption = "$(" + value2FirstCoe(a) + unknowns[unknownNumber] + value2Constant(-b) + ")(" + value2FirstCoe(a) + unknowns[unknownNumber] + value2Constant(b) + ")$";
  var wrongOption1 = "$(" + value2FirstCoe(a) + unknowns[unknownNumber] + value2Constant(-b) + ")^2$";
  var wrongOption2 = "$(" + value2FirstCoe(a*a) + unknowns[unknownNumber] + value2Constant(-b) + ")(" + value2FirstCoe(a*a) + unknowns[unknownNumber] + value2Constant(b) + ")$";
  var wrongOption3 = "$(" + value2FirstCoe(b) + value2Coe(-a) + unknowns[unknownNumber] + ")(" + value2FirstCoe(b) + value2Coe(a) + unknowns[unknownNumber] + ")$";

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

//Type3: a^2x^2-b^2y^2=(ax-by)(ax+by), where x and y are unknowns, a and b are co-prime random positive constants
function identityFactorizationType3(){
  var unknowns = [
    ["a", "b"], ["x", "y"], ["p", "q"], ["m", "n"], ["h", "k"]
  ];
  var unknownNumber = getRndInteger(0, 4);

  var a = getRndInteger(2, 9);

  do{
    var b = getRndInteger(2, 12);
  }while(gcd_two_numbers(a, b)!=1)

  var question = "$" + value2FirstCoe(a*a) + unknowns[unknownNumber][0] + "^2" + value2Coe(-b*b) + unknowns[unknownNumber][1] + "^2" + "$";
  var correctOption = "$(" + value2FirstCoe(a) + unknowns[unknownNumber][0] + value2Coe(-b) + unknowns[unknownNumber][1] + ")(" + value2FirstCoe(a) + unknowns[unknownNumber][0] + value2Coe(b) + unknowns[unknownNumber][1] + ")$";
  var wrongOption1 = "$(" + value2FirstCoe(a) + unknowns[unknownNumber][0] + value2Coe(-b) + unknowns[unknownNumber][1] + ")^2$";
  var wrongOption2 = "$(" + value2FirstCoe(a*a) + unknowns[unknownNumber][0] + value2Coe(-b) + unknowns[unknownNumber][1] + ")(" + value2FirstCoe(a*a) + unknowns[unknownNumber][0] + value2Coe(b) + unknowns[unknownNumber][1] + ")$";
  var wrongOption3 = "$(" + b + unknowns[unknownNumber][1] + value2Coe(-a) + unknowns[unknownNumber][0] + ")(" + b + unknowns[unknownNumber][1] + value2Coe(a) + unknowns[unknownNumber][0] + ")$";

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

//Type4: -a^2x^2+b^2y^2=(by-ax)(by+ax), where x and y are unknowns, a and b are co-prime random positive constants
function identityFactorizationType4(){
  var unknowns = [
    ["a", "b"], ["x", "y"], ["p", "q"], ["m", "n"], ["h", "k"]
  ];
  var unknownNumber = getRndInteger(0, 4);
  var a = getRndInteger(2, 9);
  do{
    var b = getRndInteger(2, 12);
  }while(gcd_two_numbers(a, b)!=1)

  var question = "$" + value2FirstCoe(-a*a) + unknowns[unknownNumber][0] + "^2" + value2Coe(b*b) + unknowns[unknownNumber][1] + "^2" + "$";
  var correctOption = "$(" + b + unknowns[unknownNumber][1] + value2Coe(-a) + unknowns[unknownNumber][0] + ")(" + b + unknowns[unknownNumber][1] + value2Coe(a) + unknowns[unknownNumber][0] + ")$";
  var wrongOption1 = "$-(" + a + unknowns[unknownNumber][0] + value2Coe(-b) + unknowns[unknownNumber][1] + ")^2$";
  var wrongOption2 = "$-(" + b + unknowns[unknownNumber][1] + value2Coe(-a) + unknowns[unknownNumber][0] + ")(" + b + unknowns[unknownNumber][1] + value2Coe(a) + unknowns[unknownNumber][0] + ")$";
  var wrongOption3 = "$(" + b*b + unknowns[unknownNumber][1] + value2Coe(-a*a) + unknowns[unknownNumber][0] + ")(" + b*b + unknowns[unknownNumber][1] + value2Coe(a*a) + unknowns[unknownNumber][0] + ")$";

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

//Type5: ax^2-ab^2=a(x+b)(x-b), where x is an unknown, a and b are random positive constants
function identityFactorizationType5(){
  var unknowns = [
    "a", "b", "c", "d", "f", "g", "h", "m", "n", "p", "q", "r", "s", "t", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0, 16);

  var a = getRndInteger(2, 10);
  var b = getRndInteger(2, 9);

  var question = "$" + value2FirstCoe(a) + unknowns[unknownNumber] + "^2" + value2Constant(-a*b*b) + "$";
  var correctOption = "$" + a + "(" + unknowns[unknownNumber] + value2Constant(b) + ")(" + unknowns[unknownNumber] + value2Constant(-b) + ")$";
  var wrongOption1 = "$" + a + "(" + unknowns[unknownNumber] + value2Constant(-b) + ")^2$";
  var wrongOption2 = "$" + "(" + a + unknowns[unknownNumber] + value2Constant(b) + ")(" + a + unknowns[unknownNumber] + value2Constant(-b) + ")$";
  var wrongOption3 = "$" + b*b + "(" + a + unknowns[unknownNumber] + value2Constant(1) + ")(" + a + unknowns[unknownNumber] + value2Constant(-1) + ")$";

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

//Type6: ab^2x^2-ac^2y^2=a(bx+cy)(bx-cy), where x and y are unknowns, b and c are co-prime random positive constants, a is a random unknown
function identityFactorizationType6(){
  var unknowns = [
    ["a", "b"], ["x", "y"], ["p", "q"], ["m", "n"], ["h", "k"]
  ];
  var unknownNumber = getRndInteger(0, 4);
  do{
    var a = getRndInteger(-5, 5);
  }while(Math.abs(a)<=1)
  var b = getRndInteger(2, 9);
  do{
    var c = getRndInteger(2, 9);
  }while(gcd_two_numbers(b, c)!=1)

  var question = "$" + value2FirstCoe(a*b*b) + unknowns[unknownNumber][0] + "^2" + value2Coe(-a*c*c) + unknowns[unknownNumber][1] + "^2" + "$";
  var correctOption = "$" + a + "(" + value2FirstCoe(b) + unknowns[unknownNumber][0] + value2Coe(c) + unknowns[unknownNumber][1] + ")(" + value2FirstCoe(b) + unknowns[unknownNumber][0] + value2Coe(-c) + unknowns[unknownNumber][1] + ")$";
  var wrongOption1 = "$" + a + "(" + value2FirstCoe(b) + unknowns[unknownNumber][0] + value2Coe(-c) + unknowns[unknownNumber][1] + ")^2$";
  var wrongOption2 = "$" + a + "(" + value2FirstCoe(b*b) + unknowns[unknownNumber][0] + value2Coe(c*c) + unknowns[unknownNumber][1] + ")(" + unknowns[unknownNumber][0] + value2Coe(-1) + unknowns[unknownNumber][1] + ")$";
  var wrongOption3 = "$" + a + "(" + value2FirstCoe(c) + unknowns[unknownNumber][1] + value2Coe(b) + unknowns[unknownNumber][0] + ")(" + value2FirstCoe(c) + unknowns[unknownNumber][1] + value2Coe(-b) + unknowns[unknownNumber][0] + ")$";

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

//Type7: ab^2x-ac^2xy^2 = ax(b-cy)(b+cy), where x and y are unknowns, a is a random positive constant, b and c are co-prime random positive constants
function identityFactorizationType7(){
  var unknowns = [
    ["a", "b"], ["x", "y"], ["p", "q"], ["m", "n"], ["h", "k"]
  ];
  var unknownNumber = getRndInteger(0, 4);

  var a = getRndInteger(2, 8);
  var b = getRndInteger(1, 9);
  do{
    var c = getRndInteger(2, 9);
  }while(gcd_two_numbers(b,c)!=1)

  var question = "$" + value2FirstCoe(a*b*b) + unknowns[unknownNumber][0] + value2Coe(-a*c*c) + unknowns[unknownNumber][0] + unknowns [unknownNumber][1] + "^2" + "$";
  var correctOption = "$" + a + unknowns[unknownNumber][0] + "(" + b + value2Coe(-c) + unknowns[unknownNumber][1] + ")(" + value2FirstCoe(b) + value2Coe(c) + unknowns[unknownNumber][1] + ")$";
  var wrongOption1 = "$" + a + "(" + value2FirstCoe(b) + unknowns[unknownNumber][0] + value2Coe(-c) + unknowns[unknownNumber][1] + ")(" + b + value2Coe(c) + unknowns[unknownNumber][1] + ")$";
  var wrongOption2 = "$" + a + unknowns[unknownNumber][0] + "(" + b + value2Coe(-c) + unknowns[unknownNumber][1] + ")^2$";
  var wrongOption3 = "$" + (-a) + unknowns[unknownNumber][0] + "(" + b + value2Coe(-c) + unknowns[unknownNumber][1] + ")(" + b + value2Coe(c) + unknowns[unknownNumber][1] + ")$";

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

//Type8: ab^2xy^2-ac^2x^3=ax(by-cx)(by+cx), where x and y are unknowns, a is a random positive constant, b and c are co-prime positive constants
function identityFactorizationType8(){
  var unknowns = [
    ["a", "b"], ["x", "y"], ["p", "q"], ["m", "n"], ["h", "k"]
  ];
  var unknownNumber = getRndInteger(0, 4);
  var a = getRndInteger(2, 8);
  var b = getRndInteger(2, 9);
  do{
    var c = getRndInteger(2, 9);
  }while(gcd_two_numbers(b,c)!=1)

  var question = "$" + value2FirstCoe(a*b*b) + unknowns[unknownNumber][0] + unknowns[unknownNumber][1] + "^2" + value2Coe(-a*c*c) + unknowns[unknownNumber][0] + "^3" + "$";
  var correctOption = "$" + value2FirstCoe(a) + unknowns[unknownNumber][0] + "(" + value2FirstCoe(b) + unknowns[unknownNumber][1] + value2Coe(-c) + unknowns[unknownNumber][0] + ")(" + value2FirstCoe(b) + unknowns[unknownNumber][1] + value2Coe(c) + unknowns[unknownNumber][0] + ")$";
  var wrongOption1 = "$" + value2FirstCoe(a) + unknowns[unknownNumber][0] + "(" + value2FirstCoe(b) + unknowns[unknownNumber][1] + value2Coe(-c) + unknowns[unknownNumber][0] + ")^2$";
  var wrongOption2 = "$" + value2FirstCoe(a) + "(" + value2FirstCoe(b) + unknowns[unknownNumber][0] + unknowns[unknownNumber][1] + value2Coe(-c) + unknowns[unknownNumber][0] + ")(" + value2FirstCoe(b) + unknowns[unknownNumber][1] + value2Coe(c) + unknowns[unknownNumber][0] + ")$";
  var wrongOption3 = "$" + value2FirstCoe(a) + unknowns[unknownNumber][0] + "(" + value2FirstCoe(c) + unknowns[unknownNumber][0] + value2Coe(-b) + unknowns[unknownNumber][1] + ")(" + value2FirstCoe(c) + unknowns[unknownNumber][0] + value2Coe(b) + unknowns[unknownNumber][1] + ")$";

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

//Type9: (ax+by)^2-b^2x^2=(ax+by+bx)(ax+by-bx)=((a+b)x+by)((a-b)x+by), where x and y are unknowns, a and b are random positive constants, a>b, (a-b) and b, (a+b) and b are co-prime
function identityFactorizationType9(){
  var unknowns = [
    ["a", "b"], ["x", "y"], ["p", "q"], ["m", "n"], ["h", "k"]
  ];
  var unknownNumber = getRndInteger(0, 4);
  do{
    var a = getRndInteger(2, 9);
    var b = getRndInteger(2, 9);
  }while(gcd_two_numbers(a, b)!=1 || a<=b || gcd_two_numbers((a+b), b)!=1 || gcd_two_numbers((a-b), b)!=1)

  var question = "$(" + a + unknowns[unknownNumber][0] + value2Coe(b) + unknowns[unknownNumber][1] + ")^2" + value2Coe(-b*b) + unknowns[unknownNumber][0] + "^2" + "$";
  var correctOption = "$(" + value2FirstCoe(a+b) + unknowns[unknownNumber][0] + value2Coe(b) + unknowns[unknownNumber][1] + ")(" + value2FirstCoe(a-b) + unknowns[unknownNumber][0] + value2Coe(b) + unknowns[unknownNumber][1] + ")$";
  var wrongOption1 = "$(" + value2FirstCoe(a+b) + unknowns[unknownNumber][0] + value2Coe(-b) + unknowns[unknownNumber][1] + ")(" + value2FirstCoe(a-b) + unknowns[unknownNumber][0] + value2Coe(-b) + unknowns[unknownNumber][1] + ")$";;
  var wrongOption2 = "$(" + value2FirstCoe(a) + unknowns[unknownNumber][0] + value2Coe(a+b) + unknowns[unknownNumber][1] + ")(" + value2FirstCoe(a) + unknowns[unknownNumber][0] + value2Coe(a-b) + unknowns[unknownNumber][1] + ")$";
  var wrongOption3 = "$(" + value2FirstCoe(a-b) + unknowns[unknownNumber][0] + value2Coe(b) + unknowns[unknownNumber][1] + ")^2$";

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

//Type10: a^2x^2-b^2y^2+cax+cby=(ax+by)(ax-by+c), where x and y are unknowns, a and b are co-prime random positive constant, c is a random constant
function identityFactorizationType10(){
  var unknowns = [
    ["a", "b"], ["x", "y"], ["p", "q"], ["m", "n"], ["h", "k"]
  ];
  var unknownNumber = getRndInteger(0, 4);
  var a = getRndInteger(2, 9);
  do{
    var b = getRndInteger(2, 9);
  }while(gcd_two_numbers(a, b)!=1)
  do{
    var c = getRndInteger(-6, 6);
  }while(c==0)

  var question = "$" + value2FirstCoe(a*a) + unknowns[unknownNumber][0] + "^2" + value2Coe(-b*b) + unknowns[unknownNumber][1] + "^2" + value2Coe(c*a) + unknowns[unknownNumber][0] + value2Coe(c*b) + unknowns[unknownNumber][1] + "$";
  var correctOption = "$(" + value2FirstCoe(a) + unknowns[unknownNumber][0] + value2Coe(b) + unknowns[unknownNumber][1] + ")(" + value2FirstCoe(a) + unknowns[unknownNumber][0] + value2Coe(-b) + unknowns[unknownNumber][1] + value2Constant(c) + ")$";
  var wrongOption1 = "$(" + value2FirstCoe(a) + unknowns[unknownNumber][0] + value2Coe(-b) + unknowns[unknownNumber][1] + ")(" + value2FirstCoe(a) + unknowns[unknownNumber][0] + value2Coe(-b) + unknowns[unknownNumber][1] + value2Constant(c) + ")$";
  var wrongOption2 = "$(" + value2FirstCoe(a) + unknowns[unknownNumber][0] + value2Coe(-b) + unknowns[unknownNumber][1] + ")(" + value2FirstCoe(a) + unknowns[unknownNumber][0] + value2Coe(b) + unknowns[unknownNumber][1] + value2Constant(c) + ")$";
  var wrongOption3 = "$(" + value2FirstCoe(a) + unknowns[unknownNumber][0] + value2Coe(b) + unknowns[unknownNumber][1] + ")(" + value2FirstCoe(a) + unknowns[unknownNumber][0] + value2Coe(-b) + unknowns[unknownNumber][1] + value2Constant(-c) + ")$";

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

//Type11: x^2+2ax+a^2=(x+a)^2
function identityFactorizationType11(){
  var unknowns = [
    "a", "b", "c", "d", "f", "g", "h", "m", "n", "p", "q", "r", "s", "t", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0, 16);
  var a = getRndInteger(1, 10);

  var question = "$" + unknowns[unknownNumber] + "^2" + value2Coe(2*a) + unknowns[unknownNumber] + value2Constant(a*a) + "$";
  var correctOption = "$(" + unknowns[unknownNumber] + value2Constant(a) + ")^2$";
  var wrongOption1 = "$(" + unknowns[unknownNumber] + value2Constant(-a) + ")^2$";
  var wrongOption2 = "$(" + "2" + unknowns[unknownNumber] + value2Constant(a) + ")^2$";
  var wrongOption3 = "$(" + unknowns[unknownNumber] + value2Constant(2*a) + ")^2$";

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

//Type12: x^2-2ax+a^2=(x-a)^2
function identityFactorizationType12(){
  var unknowns = [
    "a", "b", "c", "d", "f", "g", "h", "m", "n", "p", "q", "r", "s", "t", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0, 16);
  var a = getRndInteger(1, 10);

  var question = "$" + unknowns[unknownNumber] + "^2" + value2Coe(-2*a) + unknowns[unknownNumber] + value2Constant(a*a) + "$";
  var correctOption = "$(" + unknowns[unknownNumber] + value2Constant(-a) + ")^2$";
  var wrongOption1 = "$(" + unknowns[unknownNumber] + value2Constant(a) + ")^2$";
  var wrongOption2 = "$(" + "2" + unknowns[unknownNumber] + value2Constant(-a) + ")^2$";
  var wrongOption3 = "$(" + unknowns[unknownNumber] + value2Constant(-2*a) + ")^2$";

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

//Type13: a^2x^2+2abx+b^2=(ax+b)^2
function identityFactorizationType13(){
  var unknowns = [
    "a", "b", "c", "d", "f", "g", "h", "m", "n", "p", "q", "r", "s", "t", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0, 16);
  var a = getRndInteger(2, 10);
  do{
    var b = getRndInteger(1, 10);
  }while(gcd_two_numbers(a, b)!=1)

  var question = "$" + value2FirstCoe(a*a) + unknowns[unknownNumber] + "^2" + value2Coe(2*a*b) + unknowns[unknownNumber] + value2Constant(b*b) + "$";
  var correctOption = "$(" + value2FirstCoe(a) + unknowns[unknownNumber] + value2Constant(b) + ")^2$";
  var wrongOption1 = "$(" + value2FirstCoe(a*a) + unknowns[unknownNumber] + value2Constant(b) + ")^2$";
  var wrongOption2 = "$(" + value2FirstCoe(a) + unknowns[unknownNumber] + value2Constant(-b) + ")^2$";
  var wrongOption3 = "$(" + value2FirstCoe(a*a) + unknowns[unknownNumber] + value2Constant(1) + ")(" + unknowns[unknownNumber] + value2Constant(b*b) +")$";

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

//Type14: a^2x^2-2axy+b^2=(ax-b)^2
function identityFactorizationType14(){
  var unknowns = [
    "a", "b", "c", "d", "f", "g", "h", "m", "n", "p", "q", "r", "s", "t", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0, 16);
  var a = getRndInteger(2, 10);
  do{
    var b = getRndInteger(1, 10);
  }while(gcd_two_numbers(a, b)!=1)

  var question = "$" + value2FirstCoe(a*a) + unknowns[unknownNumber] + "^2" + value2Coe(-2*a*b) + unknowns[unknownNumber] + value2Constant(b*b) + "$";
  var correctOption = "$(" + value2FirstCoe(a) + unknowns[unknownNumber] + value2Constant(-b) + ")^2$";
  var wrongOption1 = "$(" + value2FirstCoe(a*a) + unknowns[unknownNumber] + value2Constant(-b) + ")^2$";
  var wrongOption2 = "$(" + value2FirstCoe(a) + unknowns[unknownNumber] + value2Constant(b) + ")^2$";
  var wrongOption3 = "$(" + value2FirstCoe(a*a) + unknowns[unknownNumber] + value2Constant(-1) + ")(" + unknowns[unknownNumber] + value2Constant(-b*b) +")$";

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

//Type15: x^2+2axy+a^2y^2=(x+ay)^2
function identityFactorizationType15(){
  var unknowns = [
    ["a", "b"], ["x", "y"], ["p", "q"], ["m", "n"], ["h", "k"]
  ];
  var unknownNumber = getRndInteger(0, 4);

  var a = getRndInteger(2, 10);

  var question = "$" + unknowns[unknownNumber][0] + "^2" + value2Coe(2*a) + unknowns[unknownNumber][0] + unknowns[unknownNumber][1] + value2Coe(a*a) + unknowns[unknownNumber][1] + "^2" + "$";
  var correctOption = "$(" + unknowns[unknownNumber][0] + value2Coe(a) + unknowns[unknownNumber][1] + ")^2$";
  var wrongOption1 = "$(" + unknowns[unknownNumber][0] + value2Coe(-a) + unknowns[unknownNumber][1] + ")^2$";
  var wrongOption2 = "$(" + unknowns[unknownNumber][0] + "+" + unknowns[unknownNumber][1] + ")(" + unknowns[unknownNumber][0] + value2Coe(a*a) + unknowns[unknownNumber][1] + ")$" ;
  var wrongOption3 = "$(" + unknowns[unknownNumber][0] + "^2" + value2Coe(a) + unknowns[unknownNumber][1] + ")(1" + value2Coe(a) + unknowns[unknownNumber][1] + ")$" ;

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

//Type16: x^2-2axy+a^2y^2=(x-ay)^2
function identityFactorizationType16(){
  var unknowns = [
    ["a", "b"], ["x", "y"], ["p", "q"], ["m", "n"], ["h", "k"]
  ];
  var unknownNumber = getRndInteger(0, 4);
  var a = getRndInteger(-10, 2);

  var question = "$" + unknowns[unknownNumber][0] + "^2" + value2Coe(2*a) + unknowns[unknownNumber][0] + unknowns[unknownNumber][1] + value2Coe(a*a) + unknowns[unknownNumber][1] + "^2" + "$";
  var correctOption = "$(" + unknowns[unknownNumber][0] + value2Coe(a) + unknowns[unknownNumber][1] + ")^2$";
  var wrongOption1 = "$(" + unknowns[unknownNumber][0] + value2Coe(-a) + unknowns[unknownNumber][1] + ")^2$";
  var wrongOption2 = "$(" + unknowns[unknownNumber][0] + "-" + unknowns[unknownNumber][1] + ")(" + unknowns[unknownNumber][0] + value2Coe(a*a) + unknowns[unknownNumber][1] + ")$" ;
  var wrongOption3 = "$(" + unknowns[unknownNumber][0] + "^2" + value2Coe(a) + unknowns[unknownNumber][1] + ")(1" + value2Coe(a) + unknowns[unknownNumber][1] + ")$" ;

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

//Type17: a^2x^2+2abxy+b^2y^2=(ax+by)^2
function identityFactorizationType17(){
  var unknowns = [
    ["a", "b"], ["x", "y"], ["p", "q"], ["m", "n"], ["h", "k"]
  ];
  var unknownNumber = getRndInteger(0, 4);

  var a = getRndInteger(2, 10);
  do{
    var b = getRndInteger(2, 10);
  }while(gcd_two_numbers(a, b)!=1)

  var question = "$" + value2FirstCoe(a*a) + unknowns[unknownNumber][0] + "^2" + value2Coe(2*a*b) + unknowns[unknownNumber][0] + unknowns[unknownNumber][1] + value2Coe(b*b) + unknowns[unknownNumber][1] + "^2" + "$";
  var correctOption = "$(" + value2FirstCoe(a) + unknowns[unknownNumber][0] + value2Coe(b) + unknowns[unknownNumber][1] + ")^2$";
  var wrongOption1 = "$(" + value2FirstCoe(a*a) + unknowns[unknownNumber][0] + value2Coe(b) + unknowns[unknownNumber][1] + ")^2$";
  var wrongOption2 = "$(" + value2FirstCoe(a) + unknowns[unknownNumber][0] + value2Coe(b) + unknowns[unknownNumber][1] + "^2)(" + value2FirstCoe(a) + unknowns[unknownNumber][0] + value2Constant(b) + ")$";
  var wrongOption3 = "$(" + value2FirstCoe(a*a) + unknowns[unknownNumber][0] + value2Coe(b) + unknowns[unknownNumber][1] + ")(" + unknowns[unknownNumber][0] + value2Coe(b) + unknowns[unknownNumber][1] + ")$";

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

//Type18: a^2x^2-2abxy+b^2y^2=(ax-by)^2
function identityFactorizationType18(){
  var unknowns = [
    ["a", "b"], ["x", "y"], ["p", "q"], ["m", "n"], ["h", "k"]
  ];
  var unknownNumber = getRndInteger(0, 4);

  var a = getRndInteger(2, 10);
  do{
    var b = getRndInteger(2, 10);
  }while(gcd_two_numbers(a, b)!=1)

  var question = "$" + value2FirstCoe(a*a) + unknowns[unknownNumber][0] + "^2" + value2Coe(-2*a*b) + unknowns[unknownNumber][0] + unknowns[unknownNumber][1] + value2Coe(b*b) + unknowns[unknownNumber][1] + "^2" + "$";
  var correctOption = "$(" + value2FirstCoe(a) + unknowns[unknownNumber][0] + value2Coe(-b) + unknowns[unknownNumber][1] + ")^2$";
  var wrongOption1 = "$(" + value2FirstCoe(a*a) + unknowns[unknownNumber][0] + value2Coe(-b) + unknowns[unknownNumber][1] + ")^2$";
  var wrongOption2 = "$(" + value2FirstCoe(a) + unknowns[unknownNumber][0] + value2Coe(-b) + unknowns[unknownNumber][1] + "^2)(" + value2FirstCoe(a) + unknowns[unknownNumber][0] + value2Constant(-b) + ")$";
  var wrongOption3 = "$(" + value2FirstCoe(a*a) + unknowns[unknownNumber][0] + value2Coe(-b) + unknowns[unknownNumber][1] + ")(" + unknowns[unknownNumber][0] + value2Coe(-b) + unknowns[unknownNumber][1] + ")$";

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

//Type19: ca^2x^2+2abcxy+bc^2y^2=c(ax+by)^2
function identityFactorizationType19(){
  var unknowns = [
    ["a", "b"], ["x", "y"], ["p", "q"], ["m", "n"], ["h", "k"]
  ];
  var unknownNumber = getRndInteger(0, 4);

  var a = getRndInteger(2, 10);
  do{
    var b = getRndInteger(2, 10);
  }while(gcd_two_numbers(a, b)!=1)
  do{
    var c = getRndInteger(-4, 4);
  }while(Math.abs(c)<=1)

  var question = "$" + value2FirstCoe(c*a*a) + unknowns[unknownNumber][0] + "^2" + value2Coe(2*c*a*b) + unknowns[unknownNumber][0] + unknowns[unknownNumber][1] + value2Coe(c*b*b) + unknowns[unknownNumber][1] + "^2" + "$";
  var correctOption = "$" + c + "(" + value2FirstCoe(a) + unknowns[unknownNumber][0] + value2Coe(b) + unknowns[unknownNumber][1] + ")^2$";
  var wrongOption1 = "$" + c + "(" + value2FirstCoe(a*a) + unknowns[unknownNumber][0] + value2Coe(b) + unknowns[unknownNumber][1] + ")(" + unknowns[unknownNumber][0] + value2Coe(b) + unknowns[unknownNumber][1] + ")$" ;
  var wrongOption2 = "$(" + value2FirstCoe(a*c) + unknowns[unknownNumber][0] + value2Coe(b*c) + unknowns[unknownNumber][1] + "^2)(" + value2FirstCoe(a) + unknowns[unknownNumber][0] + value2Constant(b) + ")$";
  var wrongOption3 = "$" + (-c) + "(" + value2FirstCoe(a*a) + unknowns[unknownNumber][0] + value2Coe(b) + unknowns[unknownNumber][1] + ")(" + unknowns[unknownNumber][0] + value2Coe(b) + unknowns[unknownNumber][1] + ")$";

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

//Type20: ca^2x^2-2abcxy+bc^2y^2=c(ax-by)^2
function identityFactorizationType20(){
  var unknowns = [
    ["a", "b"], ["x", "y"], ["p", "q"], ["m", "n"], ["h", "k"]
  ];
  var unknownNumber = getRndInteger(0, 4);

  var a = getRndInteger(2, 10);
  do{
    var b = getRndInteger(2, 10);
  }while(gcd_two_numbers(a, b)!=1)
  do{
    var c = getRndInteger(-4, 4);
  }while(Math.abs(c)<=1)

  var question = "$" + value2FirstCoe(c*a*a) + unknowns[unknownNumber][0] + "^2" + value2Coe(-2*c*a*b) + unknowns[unknownNumber][0] + unknowns[unknownNumber][1] + value2Coe(c*b*b) + unknowns[unknownNumber][1] + "^2" + "$";
  var correctOption = "$" + c + "(" + value2FirstCoe(a) + unknowns[unknownNumber][0] + value2Coe(-b) + unknowns[unknownNumber][1] + ")^2$";
  var wrongOption1 = "$" + c + "(" + value2FirstCoe(a*a) + unknowns[unknownNumber][0] + value2Coe(-b) + unknowns[unknownNumber][1] + ")(" + unknowns[unknownNumber][0] + value2Coe(-b) + unknowns[unknownNumber][1] + ")$" ;
  var wrongOption2 = "$(" + value2FirstCoe(a*c) + unknowns[unknownNumber][0] + value2Coe(-b*c) + unknowns[unknownNumber][1] + "^2)(" + value2FirstCoe(a) + unknowns[unknownNumber][0] + value2Constant(-b) + ")$";
  var wrongOption3 = "$" + (-c) + "(" + value2FirstCoe(a*a) + unknowns[unknownNumber][0] + value2Coe(-b) + unknowns[unknownNumber][1] + ")(" + unknowns[unknownNumber][0] + value2Coe(-b) + unknowns[unknownNumber][1] + ")$";

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

//Type1: x^2+bx+c=(x+p)(x+q), where p and q are distinct positive prime numbers less than 8
function factorizationCrossMethodOneType1(){
  var unknowns = [
    "a", "b", "c", "d", "f", "g", "h", "m", "n", "p", "q", "r", "s", "t", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0, 16);
  do{
    var p = getRndInteger(1, 8);
  }while((checkPrime(p)==false)&&(p!=1))
  do{
    var q = getRndInteger(1, 8);
  }while((checkPrime(q)==false)&&(q!=1) || p==q)

  var question = "$" + unknowns[unknownNumber] + "^2" + value2Coe(p+q) + unknowns[unknownNumber] + value2Constant(p*q) + "$";
  var correctOption = "$(" + unknowns[unknownNumber] + value2Constant(p) + ")(" + unknowns[unknownNumber] + value2Constant(q) + ")$";
  var wrongOption1 = "$(" + unknowns[unknownNumber] + value2Constant(-p) + ")(" + unknowns[unknownNumber] + value2Constant(-q) + ")$";
  var wrongOption2 = "$(" + unknowns[unknownNumber] + value2Constant(p) + ")(" + unknowns[unknownNumber] + value2Constant(-q) + ")$";
  var wrongOption3 = "$(" + unknowns[unknownNumber] + value2Constant(-p) + ")(" + unknowns[unknownNumber] + value2Constant(q) + ")$";

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

//Type2: x^2-bx+c=(x+p)(x+q), where p and q are distinct negative prime numbers greater than -8
function factorizationCrossMethodOneType2(){
  var unknowns = [
    "a", "b", "c", "d", "f", "g", "h", "m", "n", "p", "q", "r", "s", "t", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0, 16);

  do{
    var p = getRndInteger(-8, -1);
  }while((checkPrime(Math.abs(p))==false)&&(Math.abs(p)!=1))
  do{
    var q = getRndInteger(-8, -1);
  }while((checkPrime(Math.abs(q))==false)&&(q!=1) || p==q)

  var question = "$" + unknowns[unknownNumber] + "^2" + value2Coe(p+q) + unknowns[unknownNumber] + value2Constant(p*q) + "$";
  var correctOption = "$(" + unknowns[unknownNumber] + value2Constant(p) + ")(" + unknowns[unknownNumber] + value2Constant(q) + ")$";
  var wrongOption1 = "$(" + unknowns[unknownNumber] + value2Constant(-p) + ")(" + unknowns[unknownNumber] + value2Constant(-q) + ")$";
  var wrongOption2 = "$(" + unknowns[unknownNumber] + value2Constant(p) + ")(" + unknowns[unknownNumber] + value2Constant(-q) + ")$";
  var wrongOption3 = "$(" + unknowns[unknownNumber] + value2Constant(-p) + ")(" + unknowns[unknownNumber] + value2Constant(q) + ")$";

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

//Type3: x^2+bx-c=(x+p)(x+q), where p and q are prime, p>0 and q<0, |p|>|q|
function factorizationCrossMethodOneType3(){
  var unknowns = [
    "a", "b", "c", "d", "f", "g", "h", "m", "n", "p", "q", "r", "s", "t", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0, 16);
  do{
    var p = getRndInteger(1, 8);
    var q = getRndInteger(-8, -1);
  }while((checkPrime(Math.abs(p))==false)&&(Math.abs(p)!=1) || (checkPrime(Math.abs(q))==false)&&(Math.abs(q)!=1) || (Math.abs(p)<=Math.abs(q)))

  var question = "$" + unknowns[unknownNumber] + "^2" + value2Coe(p+q) + unknowns[unknownNumber] + value2Constant(p*q) + "$";
  var correctOption = "$(" + unknowns[unknownNumber] + value2Constant(p) + ")(" + unknowns[unknownNumber] + value2Constant(q) + ")$";
  var wrongOption1 = "$(" + unknowns[unknownNumber] + value2Constant(-p) + ")(" + unknowns[unknownNumber] + value2Constant(-q) + ")$";
  var wrongOption2 = "$(" + unknowns[unknownNumber] + value2Constant(p) + ")(" + unknowns[unknownNumber] + value2Constant(-q) + ")$";
  var wrongOption3 = "$(" + unknowns[unknownNumber] + value2Constant(-p) + ")(" + unknowns[unknownNumber] + value2Constant(q) + ")$";

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

//Type4: x^2-bx-c=(x+p)(x+q), where p and q are prime, p>0 and q<0, |p|<|q|
function factorizationCrossMethodOneType4(){
  var unknowns = [
    "a", "b", "c", "d", "f", "g", "h", "m", "n", "p", "q", "r", "s", "t", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0, 16);

  do{
    var p = getRndInteger(1, 8);
    var q = getRndInteger(-8, -1);
  }while((checkPrime(Math.abs(p))==false)&&(Math.abs(p)!=1) || (checkPrime(Math.abs(q))==false)&&(Math.abs(q)!=1) || (Math.abs(p)>=Math.abs(q)))

  var question = "$" + unknowns[unknownNumber] + "^2" + value2Coe(p+q) + unknowns[unknownNumber] + value2Constant(p*q) + "$";
  var correctOption = "$(" + unknowns[unknownNumber] + value2Constant(p) + ")(" + unknowns[unknownNumber] + value2Constant(q) + ")$";
  var wrongOption1 = "$(" + unknowns[unknownNumber] + value2Constant(-p) + ")(" + unknowns[unknownNumber] + value2Constant(-q) + ")$";
  var wrongOption2 = "$(" + unknowns[unknownNumber] + value2Constant(p) + ")(" + unknowns[unknownNumber] + value2Constant(-q) + ")$";
  var wrongOption3 = "$(" + unknowns[unknownNumber] + value2Constant(-p) + ")(" + unknowns[unknownNumber] + value2Constant(q) + ")$";

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

//Type5: x^2+bx+c=(x+p)(x+q), where p and q are not both prime, p and q are positive
function factorizationCrossMethodOneType5(){
  var unknowns = [
    "a", "b", "c", "d", "f", "g", "h", "m", "n", "p", "q", "r", "s", "t", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0, 16);

  do{
    var p = getRndInteger(2, 15);
    var q = getRndInteger(2, 15);
  }while(p==q || (checkPrime(p) && checkPrime(q)) || p*q>50)

  var factorCombination = getFactorsCombination(getFactors(p*q));
  var wrongFactorCombination = [];
  var j = 0;
  for(var i=0; i<factorCombination.length; i++){
    if((factorCombination[i][0]+factorCombination[i][1])!=(p+q) && (factorCombination[i][0]!=factorCombination[i][1])){
      wrongFactorCombination[j] = [factorCombination[i][0], factorCombination[i][1]];
      j++;
    }
  }

  var finalWrongFactors = getRndInteger(0, wrongFactorCombination.length-1);

  var question = "$" + unknowns[unknownNumber] + "^2" + value2Coe(p+q) + unknowns[unknownNumber] + value2Constant(p*q) + "$";
  var correctOption = "$(" + unknowns[unknownNumber] + value2Constant(p) + ")(" + unknowns[unknownNumber] + value2Constant(q) + ")$";
  var wrongOption1 = "$(" + unknowns[unknownNumber] + value2Constant(-p) + ")(" + unknowns[unknownNumber] + value2Constant(-q) + ")$";
  var wrongOption2 = "$(" + unknowns[unknownNumber] + value2Constant(wrongFactorCombination[finalWrongFactors][0]) + ")(" + unknowns[unknownNumber] + value2Constant(wrongFactorCombination[finalWrongFactors][1]) + ")$";
  var wrongOption3 = "$(" + unknowns[unknownNumber] + value2Constant(-wrongFactorCombination[finalWrongFactors][0]) + ")(" + unknowns[unknownNumber] + value2Constant(-wrongFactorCombination[finalWrongFactors][1]) + ")$";

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

//Type6: x^2-bx+c=(x+p)(x+q), where p and q are distinct negative numbers, p and q are not both prime
function factorizationCrossMethodOneType6(){
  var unknowns = [
    "a", "b", "c", "d", "f", "g", "h", "m", "n", "p", "q", "r", "s", "t", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0, 16);

  do{
    var p = getRndInteger(-15, -2);
    var q = getRndInteger(-15, -2);
  }while(p==q || (checkPrime(p) && checkPrime(q)) || p*q>50)

  var factorCombination = getFactorsCombination(getFactors(p*q));
  var wrongFactorCombination = [];
  var j = 0;
  for(var i=0; i<factorCombination.length; i++){
    if((factorCombination[i][0]+factorCombination[i][1])!=Math.abs(p+q) && (factorCombination[i][0]!=factorCombination[i][1])){
      wrongFactorCombination[j] = [factorCombination[i][0], factorCombination[i][1]];
      j++;
    }
  }

  var finalWrongFactors = getRndInteger(0, wrongFactorCombination.length-1);

  var question = "$" + unknowns[unknownNumber] + "^2" + value2Coe(p+q) + unknowns[unknownNumber] + value2Constant(p*q) + "$";
  var correctOption = "$(" + unknowns[unknownNumber] + value2Constant(p) + ")(" + unknowns[unknownNumber] + value2Constant(q) + ")$";
  var wrongOption1 = "$(" + unknowns[unknownNumber] + value2Constant(-p) + ")(" + unknowns[unknownNumber] + value2Constant(-q) + ")$";
  var wrongOption2 = "$(" + unknowns[unknownNumber] + value2Constant(wrongFactorCombination[finalWrongFactors][0]) + ")(" + unknowns[unknownNumber] + value2Constant(wrongFactorCombination[finalWrongFactors][1]) + ")$";
  var wrongOption3 = "$(" + unknowns[unknownNumber] + value2Constant(-wrongFactorCombination[finalWrongFactors][0]) + ")(" + unknowns[unknownNumber] + value2Constant(-wrongFactorCombination[finalWrongFactors][1]) + ")$";

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

//Type7: x^2+bx-c=(x+p)(x+q), where p and q distinct numbers, p>0 and q<0 , |p|>|q|, p and q are not both prime
function factorizationCrossMethodOneType7(){
  var unknowns = [
    "a", "b", "c", "d", "f", "g", "h", "m", "n", "p", "q", "r", "s", "t", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0, 16);

  do{
    var p = getRndInteger(2, 15);
    var q = getRndInteger(-15, -2);
  }while(Math.abs(p)<=Math.abs(q) || (checkPrime(p) && checkPrime(q)) || Math.abs(p*q)>50)

  var factorCombination = getFactorsCombination(getFactors(Math.abs(p*q)));
  var wrongFactorCombination = [];
  var j = 0;
  for(var i=0; i<factorCombination.length; i++){
    if(Math.abs(factorCombination[i][0]-factorCombination[i][1])!=Math.abs(p+q) && (factorCombination[i][0]!=factorCombination[i][1])){
      wrongFactorCombination[j] = [factorCombination[i][0], factorCombination[i][1]];
      j++;
    }
  }

  var finalWrongFactors = getRndInteger(0, wrongFactorCombination.length-1);

  var question = "$" + unknowns[unknownNumber] + "^2" + value2Coe(p+q) + unknowns[unknownNumber] + value2Constant(p*q) + "$";
  var correctOption = "$(" + unknowns[unknownNumber] + value2Constant(p) + ")(" + unknowns[unknownNumber] + value2Constant(q) + ")$";
  var wrongOption1 = "$(" + unknowns[unknownNumber] + value2Constant(-p) + ")(" + unknowns[unknownNumber] + value2Constant(-q) + ")$";
  var wrongOption2 = "$(" + unknowns[unknownNumber] + value2Constant(wrongFactorCombination[finalWrongFactors][0]) + ")(" + unknowns[unknownNumber] + value2Constant(-wrongFactorCombination[finalWrongFactors][1]) + ")$";
  var wrongOption3 = "$(" + unknowns[unknownNumber] + value2Constant(-wrongFactorCombination[finalWrongFactors][0]) + ")(" + unknowns[unknownNumber] + value2Constant(wrongFactorCombination[finalWrongFactors][1]) + ")$";

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

//Type8: x^2-bx-c=(x+p)(x+q), where p and q distinct numbers, p>0 and q<0 , |p|<|q|, p and q are not both prime
function factorizationCrossMethodOneType8(){
  var unknowns = [
    "a", "b", "c", "d", "f", "g", "h", "m", "n", "p", "q", "r", "s", "t", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0, 16);

  do{
    var p = getRndInteger(2, 15);
    var q = getRndInteger(-15, -2);
  }while(Math.abs(p)>=Math.abs(q) || (checkPrime(p) && checkPrime(q)) || Math.abs(p*q)>50)

  var factorCombination = getFactorsCombination(getFactors(Math.abs(p*q)));
  var wrongFactorCombination = [];
  var j = 0;
  for(var i=0; i<factorCombination.length; i++){
    if(Math.abs(factorCombination[i][0]-factorCombination[i][1])!=Math.abs(p+q) && (factorCombination[i][0]!=factorCombination[i][1])){
      wrongFactorCombination[j] = [factorCombination[i][0], factorCombination[i][1]];
      j++;
    }
  }

  var finalWrongFactors = getRndInteger(0, wrongFactorCombination.length-1);

  var question = "$" + unknowns[unknownNumber] + "^2" + value2Coe(p+q) + unknowns[unknownNumber] + value2Constant(p*q) + "$";
  var correctOption = "$(" + unknowns[unknownNumber] + value2Constant(p) + ")(" + unknowns[unknownNumber] + value2Constant(q) + ")$";
  var wrongOption1 = "$(" + unknowns[unknownNumber] + value2Constant(-p) + ")(" + unknowns[unknownNumber] + value2Constant(-q) + ")$";
  var wrongOption2 = "$(" + unknowns[unknownNumber] + value2Constant(wrongFactorCombination[finalWrongFactors][0]) + ")(" + unknowns[unknownNumber] + value2Constant(-wrongFactorCombination[finalWrongFactors][1]) + ")$";
  var wrongOption3 = "$(" + unknowns[unknownNumber] + value2Constant(-wrongFactorCombination[finalWrongFactors][0]) + ")(" + unknowns[unknownNumber] + value2Constant(wrongFactorCombination[finalWrongFactors][1]) + ")$";

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

//Type9: -x^2+bx+c=-(x+p)(x+q), where p and q are distinct numbers (not both prime)
function factorizationCrossMethodOneType9(){
  var unknowns = [
    "a", "b", "c", "d", "f", "g", "h", "m", "n", "p", "q", "r", "s", "t", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0, 16);

  do{
    var p = getRndInteger(-15, 15);
    var q = getRndInteger(-15, 15);
  }while(p==0 || q==0 || Math.abs(p)==Math.abs(q) || (checkPrime(p) && checkPrime(q)) || Math.abs(p*q)>64 || checkPrime(Math.sqrt(Math.abs(p*q))))

  var factorCombination = getFactorsCombination(getFactors(Math.abs(p*q)));
  var wrongFactorCombination = [];
  var j = 0;
  for(var i=0; i<factorCombination.length; i++){
    if(Math.abs(factorCombination[i][0]-factorCombination[i][1])!=Math.abs(p+q) && (factorCombination[i][0]!=factorCombination[i][1])){
      if(p*q>0)
        wrongFactorCombination[j] = [factorCombination[i][0], factorCombination[i][1]];
        else
          wrongFactorCombination[j] = [-factorCombination[i][0], factorCombination[i][1]];
      j++;
    }
  }

  var finalWrongFactors = getRndInteger(0, wrongFactorCombination.length-1);

  console.log("p = " + p);
  console.log("q = " + q);

  console.log(wrongFactorCombination)

  var question = "$-" + unknowns[unknownNumber] + "^2" + value2Coe(-(p+q)) + unknowns[unknownNumber] + value2Constant(-p*q) + "$";
  var correctOption = "$-(" + unknowns[unknownNumber] + value2Constant(p) + ")(" + unknowns[unknownNumber] + value2Constant(q) + ")$";
  var wrongOption1 = "$(" + unknowns[unknownNumber] + value2Constant(-p) + ")(" + unknowns[unknownNumber] + value2Constant(-q) + ")$";
  var wrongOption2 = "$-(" + unknowns[unknownNumber] + value2Constant(wrongFactorCombination[finalWrongFactors][0]) + ")(" + unknowns[unknownNumber] + value2Constant(wrongFactorCombination[finalWrongFactors][1]) + ")$";
  var wrongOption3 = "$(" + unknowns[unknownNumber] + value2Constant(-wrongFactorCombination[finalWrongFactors][0]) + ")(" + unknowns[unknownNumber] + value2Constant(-wrongFactorCombination[finalWrongFactors][1]) + ")$";

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

//Type10: c+x^2+bx=(x+p)(x+q), where p and q are distinct numbers (not both prime)
function factorizationCrossMethodOneType10(){
  var unknowns = [
    "a", "b", "c", "d", "f", "g", "h", "m", "n", "p", "q", "r", "s", "t", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0, 16);

  do{
    var p = getRndInteger(-15, 15);
    var q = getRndInteger(-15, 15);
  }while(p==0 || q==0 || Math.abs(p)==Math.abs(q) || (checkPrime(p) && checkPrime(q)) || Math.abs(p*q)>64 || checkPrime(Math.sqrt(Math.abs(p*q))))

  var factorCombination = getFactorsCombination(getFactors(Math.abs(p*q)));
  var wrongFactorCombination = [];
  var j = 0;
  for(var i=0; i<factorCombination.length; i++){
    if(Math.abs(factorCombination[i][0]-factorCombination[i][1])!=Math.abs(p+q) && (factorCombination[i][0]!=factorCombination[i][1])){
      if(p*q>0)
        wrongFactorCombination[j] = [factorCombination[i][0], factorCombination[i][1]];
        else
          wrongFactorCombination[j] = [-factorCombination[i][0], factorCombination[i][1]];
      j++;
    }
  }
  var finalWrongFactors = getRndInteger(0, wrongFactorCombination.length-1);

  var question = "$" + p*q + "+" + unknowns[unknownNumber] + "^2" + value2Coe(p+q) + unknowns[unknownNumber] + "$";
  var correctOption = "$(" + unknowns[unknownNumber] + value2Constant(p) + ")(" + unknowns[unknownNumber] + value2Constant(q) + ")$";
  var wrongOption1 = "$(" + unknowns[unknownNumber] + value2Constant(-p) + ")(" + unknowns[unknownNumber] + value2Constant(-q) + ")$";
  var wrongOption2 = "$(" + unknowns[unknownNumber] + value2Constant(wrongFactorCombination[finalWrongFactors][0]) + ")(" + unknowns[unknownNumber] + value2Constant(wrongFactorCombination[finalWrongFactors][1]) + ")$";
  var wrongOption3 = "$(" + unknowns[unknownNumber] + value2Constant(-wrongFactorCombination[finalWrongFactors][0]) + ")(" + unknowns[unknownNumber] + value2Constant(-wrongFactorCombination[finalWrongFactors][1]) + ")$";

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

//Type1: ax^2+bx+c=(ax+p)(x+q), where a = 2 or a = 3, p and q are positive prime numbers less than 8
function factorizationCrossMethodTwoType1(){
  var unknowns = [
    "a", "b", "c", "d", "f", "g", "h", "m", "n", "p", "q", "r", "s", "t", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0, 16);
    var a = getRndInteger(2, 3);
    do{
      var p = getRndInteger(1, 7);
    }while((checkPrime(p)==false && p!=1) || gcd_two_numbers(a,p)!=1)
    do{
      var q = getRndInteger(1, 7);
    }while((checkPrime(q)==false && q!=1) || (p==1 && q==1))

  var question = "$" + value2FirstCoe(a) + unknowns[unknownNumber] + "^2" + value2Coe(a*q+p) + unknowns[unknownNumber] + value2Constant(p*q) + "$";
  var correctOption = "$(" + value2FirstCoe(a) + unknowns[unknownNumber] + value2Constant(p) + ")(" + unknowns[unknownNumber] + value2Constant(q) + ")$";
  var wrongOption1 = "$(" + value2FirstCoe(a) + unknowns[unknownNumber] + value2Constant(-p) + ")(" + unknowns[unknownNumber] + value2Constant(-q) + ")$";
  if(p==q){
    var wrongOption2 = "$(" + value2FirstCoe(a) + unknowns[unknownNumber] + value2Constant(p*q) + ")(" + unknowns[unknownNumber] + value2Constant(1) + ")$";
    var wrongOption3 = "$(" + value2FirstCoe(a) + unknowns[unknownNumber] + value2Constant(1) + ")(" + unknowns[unknownNumber] + value2Constant(p*q) + ")$";
  }else{
    var wrongOption2 = "$(" + value2FirstCoe(a) + unknowns[unknownNumber] + value2Constant(q) + ")(" + unknowns[unknownNumber] + value2Constant(p) + ")$";
    var wrongOption3 = "$(" + value2FirstCoe(a) + unknowns[unknownNumber] + value2Constant(-q) + ")(" + unknowns[unknownNumber] + value2Constant(-p) + ")$";
  }
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

//Type2: ax^2-bx+c=(ax+p)(x+q), where a = 2 or a = 3, p and q are negative prime numbers greater than -8
function factorizationCrossMethodTwoType2(){
  var unknowns = [
    "a", "b", "c", "d", "f", "g", "h", "m", "n", "p", "q", "r", "s", "t", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0, 16);
    var a = getRndInteger(2, 3);
    do{
      var p = getRndInteger(1, 7);
    }while((checkPrime(p)==false && p!=1) || gcd_two_numbers(a,p)!=1)
    do{
      var q = getRndInteger(1, 7);
    }while((checkPrime(q)==false && q!=1) || (p==1 && q==1))

  var question = "$" + value2FirstCoe(a) + unknowns[unknownNumber] + "^2" + value2Coe(-a*q-p) + unknowns[unknownNumber] + value2Constant(p*q) + "$";
  var correctOption = "$(" + value2FirstCoe(a) + unknowns[unknownNumber] + value2Constant(-p) + ")(" + unknowns[unknownNumber] + value2Constant(-q) + ")$";
  var wrongOption1 = "$(" + value2FirstCoe(a) + unknowns[unknownNumber] + value2Constant(p) + ")(" + unknowns[unknownNumber] + value2Constant(q) + ")$";
  if(p==q){
    var wrongOption2 = "$(" + value2FirstCoe(a) + unknowns[unknownNumber] + value2Constant(-p*q) + ")(" + unknowns[unknownNumber] + value2Constant(-1) + ")$";
    var wrongOption3 = "$(" + value2FirstCoe(a) + unknowns[unknownNumber] + value2Constant(-1) + ")(" + unknowns[unknownNumber] + value2Constant(-p*q) + ")$";
  }else{
    var wrongOption2 = "$(" + value2FirstCoe(a) + unknowns[unknownNumber] + value2Constant(q) + ")(" + unknowns[unknownNumber] + value2Constant(p) + ")$";
    var wrongOption3 = "$(" + value2FirstCoe(a) + unknowns[unknownNumber] + value2Constant(-q) + ")(" + unknowns[unknownNumber] + value2Constant(-p) + ")$";
  }
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

//Type3: ax^2+bx-c=(ax+p)(x+q), where a = 2 or a = 3 or a = 5, a*q+p>0, p and q are prime numbers less than 8
function factorizationCrossMethodTwoType3(){
  var unknowns = [
    "a", "b", "c", "d", "f", "g", "h", "m", "n", "p", "q", "r", "s", "t", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0, 16);
  do{
    do{
      var a = getRndInteger(2, 5);
    }while(a==4)
    do{
      var p = getRndInteger(-7, 7);
    }while((checkPrime(Math.abs(p))==false && Math.abs(p)!=1) || gcd_two_numbers(a,Math.abs(p))!=1 || p==0)
    do{
      var q = getRndInteger(-7, 7);
    }while((checkPrime(Math.abs(q))==false && Math.abs(q)!=1) || (p==1 && q==-1) || (p==-1 && q==1) || p*q>0 || q==0)
  }while((a*q+p)<=0)
var question = "$" + value2FirstCoe(a) + unknowns[unknownNumber] + "^2" + value2Coe(-a*q-p) + unknowns[unknownNumber] + value2Constant(p*q) + "$";
var correctOption = "$(" + value2FirstCoe(a) + unknowns[unknownNumber] + value2Constant(-p) + ")(" + unknowns[unknownNumber] + value2Constant(-q) + ")$";
var wrongOption1 = "$(" + value2FirstCoe(a) + unknowns[unknownNumber] + value2Constant(p) + ")(" + unknowns[unknownNumber] + value2Constant(q) + ")$";
if(p==q){
  var wrongOption2 = "$(" + value2FirstCoe(a) + unknowns[unknownNumber] + value2Constant(-p*q) + ")(" + unknowns[unknownNumber] + value2Constant(-1) + ")$";
  var wrongOption3 = "$(" + value2FirstCoe(a) + unknowns[unknownNumber] + value2Constant(-1) + ")(" + unknowns[unknownNumber] + value2Constant(-p*q) + ")$";
}else{
  var wrongOption2 = "$(" + value2FirstCoe(a) + unknowns[unknownNumber] + value2Constant(q) + ")(" + unknowns[unknownNumber] + value2Constant(p) + ")$";
  var wrongOption3 = "$(" + value2FirstCoe(a) + unknowns[unknownNumber] + value2Constant(-q) + ")(" + unknowns[unknownNumber] + value2Constant(-p) + ")$";
}
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

//Type4: ax^2-bx-c=(ax+p)(x+q), where a = 2 or a = 3 or a = 5, a*q+p<0, p and q are prime numbers less than 8
function factorizationCrossMethodTwoType4(){
  var unknowns = [
    "a", "b", "c", "d", "f", "g", "h", "m", "n", "p", "q", "r", "s", "t", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0, 16);
  do{
    do{
      var a = getRndInteger(2, 5);
    }while(a==4)
    do{
      var p = getRndInteger(-7, 7);
    }while((checkPrime(Math.abs(p))==false && Math.abs(p)!=1) || gcd_two_numbers(a,Math.abs(p))!=1 || p==0)
    do{
      var q = getRndInteger(-7, 7);
    }while((checkPrime(Math.abs(q))==false && Math.abs(q)!=1) || (p==1 && q==-1) || (p==-1 && q==1) || p*q>0 || q==0)
  }while((a*q+p)>=0)
var question = "$" + value2FirstCoe(a) + unknowns[unknownNumber] + "^2" + value2Coe(-a*q-p) + unknowns[unknownNumber] + value2Constant(p*q) + "$";
var correctOption = "$(" + value2FirstCoe(a) + unknowns[unknownNumber] + value2Constant(-p) + ")(" + unknowns[unknownNumber] + value2Constant(-q) + ")$";
var wrongOption1 = "$(" + value2FirstCoe(a) + unknowns[unknownNumber] + value2Constant(p) + ")(" + unknowns[unknownNumber] + value2Constant(q) + ")$";
if(p==q){
  var wrongOption2 = "$(" + value2FirstCoe(a) + unknowns[unknownNumber] + value2Constant(-p*q) + ")(" + unknowns[unknownNumber] + value2Constant(-1) + ")$";
  var wrongOption3 = "$(" + value2FirstCoe(a) + unknowns[unknownNumber] + value2Constant(-1) + ")(" + unknowns[unknownNumber] + value2Constant(-p*q) + ")$";
}else{
  var wrongOption2 = "$(" + value2FirstCoe(a) + unknowns[unknownNumber] + value2Constant(q) + ")(" + unknowns[unknownNumber] + value2Constant(p) + ")$";
  var wrongOption3 = "$(" + value2FirstCoe(a) + unknowns[unknownNumber] + value2Constant(-q) + ")(" + unknowns[unknownNumber] + value2Constant(-p) + ")$";
}
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

//Type5: mx^2+nx+c=(ax+p)(bx+q), where p and q are prime numbers less than 8
function factorizationCrossMethodTwoType5(){
  var unknowns = [
    "a", "b", "c", "d", "f", "g", "h", "m", "n", "p", "q", "r", "s", "t", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0, 16);
  do{
    var a = getRndInteger(2, 5);
  }while(a==4)
  do{
    var b = getRndInteger(2, 5);
  }while(b==4)
  do{
    var p = getRndInteger(-7, 7);
  }while((checkPrime(Math.abs(p))==false && Math.abs(p)!=1) || p==0 || gcd_two_numbers(a,p)!=1)
  do{
    var q = getRndInteger(-7, 7);
  }while((checkPrime(Math.abs(q))==false && Math.abs(q)!=1) || q==0 || gcd_two_numbers(b,q)!=1 || (p==1 && q==-1) || (p==-1 && q==1))

  var question = "$" + value2FirstCoe(a*b) + unknowns[unknownNumber] + "^2" + value2Coe(a*q+b*p) + unknowns[unknownNumber] + value2Constant(p*q) + "$";
  var correctOption = "$(" + value2FirstCoe(a) + unknowns[unknownNumber] + value2Constant(p) + ")(" + value2FirstCoe(b) + unknowns[unknownNumber] + value2Constant(q) + ")$";
  var wrongOption1 = "$(" + value2FirstCoe(a) + unknowns[unknownNumber] + value2Constant(-p) + ")(" + value2FirstCoe(b) + unknowns[unknownNumber] + value2Constant(-q) + ")$";
  if(p==q){
    var wrongOption2 = "$(" + value2FirstCoe(a) + unknowns[unknownNumber] + value2Constant(p*q) + ")(" + value2FirstCoe(b) + unknowns[unknownNumber] + value2Constant(1) + ")$";
    var wrongOption3 = "$(" + value2FirstCoe(a*b) + unknowns[unknownNumber] + value2Constant(1) + ")(" + unknowns[unknownNumber] + value2Constant(p*q) + ")$";
  }else if(a==b){
    var wrongOption2 = "$(" + value2FirstCoe(a) + unknowns[unknownNumber] + value2Constant(-q) + ")(" + value2FirstCoe(b) + unknowns[unknownNumber] + value2Constant(p) + ")$";
    var wrongOption3 = "$(" + value2FirstCoe(a*b) + unknowns[unknownNumber] + value2Constant(q) + ")(" + unknowns[unknownNumber] + value2Constant(-p) + ")$";
  }else{
    var wrongOption2 = "$(" + value2FirstCoe(a) + unknowns[unknownNumber] + value2Constant(q) + ")(" + value2FirstCoe(b) + unknowns[unknownNumber] + value2Constant(p) + ")$";
    var wrongOption3 = "$(" + value2FirstCoe(a*b) + unknowns[unknownNumber] + value2Constant(-q) + ")(" + unknowns[unknownNumber] + value2Constant(-p) + ")$";
  }

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

//Type6: ax^2+bx+c=(ax+p)(bx+q), where 1<a<7, 1<b<7, a>b, |p| and |q| are less than 13 and 0<pq<50 (a==b && |p|==|q| is not allowed)
function factorizationCrossMethodTwoType6(){
  var unknowns = [
    "a", "b", "c", "d", "f", "g", "h", "m", "n", "p", "q", "r", "s", "t", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0,16);
  do{
      do{
          var a = getRndInteger(2,7);
        do{
          var b = getRndInteger(1,7);
        }while(b==4 || (a==1 && b==1) || a*b>15)
      }while(a<b)
    do{
      var p = getRndInteger(-12,12);
    }while(p==0 || gcd_two_numbers(a,p)!=1)

    do{
      var q = getRndInteger(-12,12)
    }while(p*q<0 || p*q>50 || q==0 || (p==q && Math.abs(q)==1) || gcd_two_numbers(b,q)!=1)
  }while(a==b && Math.abs(p)==Math.abs(q))

  var factorCombination = getFactorsCombination(getFactors(Math.abs(p*q)));
  var wrongFactorCombination = [];
  var j = 0;
  for(var i=0; i<factorCombination.length; i++){
    if(Math.abs(factorCombination[i][0]-factorCombination[i][1])!=Math.abs(p+q) && (factorCombination[i][0]!=factorCombination[i][1])){
      if(p*q>0)
        wrongFactorCombination[j] = [factorCombination[i][0], factorCombination[i][1]];
        else
          wrongFactorCombination[j] = [-factorCombination[i][0], factorCombination[i][1]];
      j++;
    }
  }
  var finalWrongFactors = getRndInteger(0, wrongFactorCombination.length-1);

  var question = "$" + value2FirstCoe(a*b) + unknowns[unknownNumber] + "^2" + value2Coe(a*q+b*p) + unknowns[unknownNumber] + value2Constant(p*q) + "$";
  var correctOption = "$(" + value2FirstCoe(a) + unknowns[unknownNumber] + value2Constant(p) + ")(" + value2FirstCoe(b) + unknowns[unknownNumber] + value2Constant(q) + ")$";
  var wrongOption1 = "$(" + value2FirstCoe(a) + unknowns[unknownNumber] + value2Constant(wrongFactorCombination[finalWrongFactors][0]) + ")(" + value2FirstCoe(b) + unknowns[unknownNumber] + value2Constant(wrongFactorCombination[finalWrongFactors][1]) + ")$";
  if(b!=1){
    var wrongOption2 = "$(" + value2FirstCoe(a*b) + unknowns[unknownNumber] + value2Constant(p) + ")(" + value2FirstCoe(1) + unknowns[unknownNumber] + value2Constant(q) + ")$";
    var wrongOption3 = "$(" + value2FirstCoe(a*b) + unknowns[unknownNumber] + value2Constant(wrongFactorCombination[finalWrongFactors][0]) + ")(" + value2FirstCoe(1) + unknowns[unknownNumber] + value2Constant(wrongFactorCombination[finalWrongFactors][1]) + ")$";
  }else{
    var wrongOption2 = "$(" + value2FirstCoe(a) + unknowns[unknownNumber] + value2Constant(q) + ")(" + value2FirstCoe(b) + unknowns[unknownNumber] + value2Constant(p) + ")$";
    var wrongOption3 = "$(" + value2FirstCoe(a) + unknowns[unknownNumber] + value2Constant(wrongFactorCombination[finalWrongFactors][1]) + ")(" + value2FirstCoe(b) + unknowns[unknownNumber] + value2Constant(wrongFactorCombination[finalWrongFactors][0]) + ")$";
  }
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

//Type7: ax^2+bx+c=(ax+p)(bx+q), where 1<a<7, 1<b<7, a>b, |p| and |q| are less than 13 and -50<pq<0
function factorizationCrossMethodTwoType7(){
  var unknowns = [
    "a", "b", "c", "d", "f", "g", "h", "m", "n", "p", "q", "r", "s", "t", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0,16);
  do{
      do{
          var a = getRndInteger(2,7);
        do{
          var b = getRndInteger(1,7);
        }while(b==4 || (a==1 && b==1) || a*b>15)
      }while(a<b)
    do{
      var p = getRndInteger(-12,12);
    }while(p==0 || gcd_two_numbers(a,p)!=1)

    do{
      var q = getRndInteger(-12,12)
    }while(p*q>0 || p*q<-50 || q==0 || (p==q && Math.abs(q)==1) || gcd_two_numbers(b,q)!=1)
  }while(a==b && Math.abs(p)==Math.abs(q))

  var factorCombination = getFactorsCombination(getFactors(Math.abs(p*q)));
  var wrongFactorCombination = [];
  var j = 0;
  for(var i=0; i<factorCombination.length; i++){
    if(Math.abs(factorCombination[i][0]-factorCombination[i][1])!=Math.abs(p+q) && (factorCombination[i][0]!=factorCombination[i][1])){
      if(p*q>0)
        wrongFactorCombination[j] = [factorCombination[i][0], factorCombination[i][1]];
        else
          wrongFactorCombination[j] = [-factorCombination[i][0], factorCombination[i][1]];
      j++;
    }
  }
  var finalWrongFactors = getRndInteger(0, wrongFactorCombination.length-1);

  var question = "$" + value2FirstCoe(a*b) + unknowns[unknownNumber] + "^2" + value2Coe(a*q+b*p) + unknowns[unknownNumber] + value2Constant(p*q) + "$";
  var correctOption = "$(" + value2FirstCoe(a) + unknowns[unknownNumber] + value2Constant(p) + ")(" + value2FirstCoe(b) + unknowns[unknownNumber] + value2Constant(q) + ")$";
  var wrongOption1 = "$(" + value2FirstCoe(a) + unknowns[unknownNumber] + value2Constant(wrongFactorCombination[finalWrongFactors][0]) + ")(" + value2FirstCoe(b) + unknowns[unknownNumber] + value2Constant(wrongFactorCombination[finalWrongFactors][1]) + ")$";
  if(b!=1){
    var wrongOption2 = "$(" + value2FirstCoe(a*b) + unknowns[unknownNumber] + value2Constant(p) + ")(" + value2FirstCoe(1) + unknowns[unknownNumber] + value2Constant(q) + ")$";
    var wrongOption3 = "$(" + value2FirstCoe(a*b) + unknowns[unknownNumber] + value2Constant(wrongFactorCombination[finalWrongFactors][0]) + ")(" + value2FirstCoe(1) + unknowns[unknownNumber] + value2Constant(wrongFactorCombination[finalWrongFactors][1]) + ")$";
  }else{
    var wrongOption2 = "$(" + value2FirstCoe(a) + unknowns[unknownNumber] + value2Constant(q) + ")(" + value2FirstCoe(b) + unknowns[unknownNumber] + value2Constant(p) + ")$";
    var wrongOption3 = "$(" + value2FirstCoe(a) + unknowns[unknownNumber] + value2Constant(wrongFactorCombination[finalWrongFactors][1]) + ")(" + value2FirstCoe(b) + unknowns[unknownNumber] + value2Constant(wrongFactorCombination[finalWrongFactors][0]) + ")$";
  }
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

//Type8: -ax^2+bx+c=-(ax+p)(bx+q), where 1<a<7, 1<b<7, a>b, |p| and |q| are less than 13 and -50<pq<0
function factorizationCrossMethodTwoType8(){
  var unknowns = [
    "a", "b", "c", "d", "f", "g", "h", "m", "n", "p", "q", "r", "s", "t", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0,16);
  do{
      do{
          var a = getRndInteger(2,7);
        do{
          var b = getRndInteger(1,7);
        }while(b==4 || (a==1 && b==1) || a*b>15)
      }while(a<b)
    do{
      var p = getRndInteger(-12,12);
    }while(p==0 || gcd_two_numbers(a,p)!=1)

    do{
      var q = getRndInteger(-12,12)
    }while(p*q>0 || p*q<-50 || q==0 || (p==q && Math.abs(q)==1) || gcd_two_numbers(b,q)!=1)
  }while(a==b && Math.abs(p)==Math.abs(q))

  var factorCombination = getFactorsCombination(getFactors(Math.abs(p*q)));
  var wrongFactorCombination = [];
  var j = 0;
  for(var i=0; i<factorCombination.length; i++){
    if(Math.abs(factorCombination[i][0]-factorCombination[i][1])!=Math.abs(p+q) && (factorCombination[i][0]!=factorCombination[i][1])){
      if(p*q>0)
        wrongFactorCombination[j] = [factorCombination[i][0], factorCombination[i][1]];
        else
          wrongFactorCombination[j] = [-factorCombination[i][0], factorCombination[i][1]];
      j++;
    }
  }
  var finalWrongFactors = getRndInteger(0, wrongFactorCombination.length-1);

  var question = "$" + value2FirstCoe(-a*b) + unknowns[unknownNumber] + "^2" + value2Coe(-a*q-b*p) + unknowns[unknownNumber] + value2Constant(-p*q) + "$";
  var correctOption = "$-(" + value2FirstCoe(a) + unknowns[unknownNumber] + value2Constant(p) + ")(" + value2FirstCoe(b) + unknowns[unknownNumber] + value2Constant(q) + ")$";
  var wrongOption1 = "$-(" + value2FirstCoe(a) + unknowns[unknownNumber] + value2Constant(wrongFactorCombination[finalWrongFactors][0]) + ")(" + value2FirstCoe(b) + unknowns[unknownNumber] + value2Constant(wrongFactorCombination[finalWrongFactors][1]) + ")$";
  if(b!=1){
    var wrongOption2 = "$-(" + value2FirstCoe(a*b) + unknowns[unknownNumber] + value2Constant(p) + ")(" + value2FirstCoe(1) + unknowns[unknownNumber] + value2Constant(q) + ")$";
    var wrongOption3 = "$-(" + value2FirstCoe(a*b) + unknowns[unknownNumber] + value2Constant(wrongFactorCombination[finalWrongFactors][0]) + ")(" + value2FirstCoe(1) + unknowns[unknownNumber] + value2Constant(wrongFactorCombination[finalWrongFactors][1]) + ")$";
  }else{
    var wrongOption2 = "$-(" + value2FirstCoe(a) + unknowns[unknownNumber] + value2Constant(q) + ")(" + value2FirstCoe(b) + unknowns[unknownNumber] + value2Constant(p) + ")$";
    var wrongOption3 = "$-(" + value2FirstCoe(a) + unknowns[unknownNumber] + value2Constant(wrongFactorCombination[finalWrongFactors][1]) + ")(" + value2FirstCoe(b) + unknowns[unknownNumber] + value2Constant(wrongFactorCombination[finalWrongFactors][0]) + ")$";
  }
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

function checkPrime(n){
  for(let i = 2, s = Math.sqrt(n); i <= s; i++)
        if(n % i === 0) return false;
    return n > 1;
}

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

function getFactorsCombination(num){
  var factorCom = [];
    for(var i=0; i<num.length/2; i++)
      factorCom[i] = [num[i], num[num.length-1-i]];
  return factorCom;
}
