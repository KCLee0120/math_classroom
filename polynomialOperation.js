//Type1: x^2+ax^2+bx+cx = (1+a)x^2+(b+c)x
function polynomialAddSubType1(){
  var unknowns = [
    "a", "b", "d", "h", "m", "n", "p", "r", "s", "t", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0, 12);
  do{
    var a = getRndInteger(-9, 9);
  }while(a==0 || a==-1)
  do{
    var b = getRndInteger(-9, 9);
    var c = getRndInteger(-9, 9);
  }while(b==0||c==0||b+c==0||b==c)

  var question = "$" + unknowns[unknownNumber] + value2Coe(a) + unknowns[unknownNumber] + "^2" + value2Coe(b) + unknowns[unknownNumber] + value2Coe(c) + unknowns[unknownNumber] + "$";
  var correctOption = "$" + value2FirstCoe(a+1) + unknowns[unknownNumber] + "^2" + value2Coe(b+c) + unknowns[unknownNumber] + "$";
  var wrongOption1 = "$" + value2FirstCoe(a) + unknowns[unknownNumber] + "^2" + value2Coe(b+c) + unknowns[unknownNumber] + "$";
  var wrongOption2 = "$" + value2FirstCoe(a+1) + unknowns[unknownNumber] + "^2" + value2Coe(b-c) + unknowns[unknownNumber] + "$";
  var wrongOption3 = "$" + value2FirstCoe(-a-1) + unknowns[unknownNumber] + "^2" + value2Coe(-b-c) + unknowns[unknownNumber] + "$";

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

//Type2: ax^2+bx^2+cx+dx = (a+b)x^2+(c+d)
function polynomialAddSubType2(){
  var unknowns = [
    "a", "b", "d", "h", "m", "n", "p", "r", "s", "t", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0, 12);
    var a = getRndInteger(2, 9);
  do{
    var b = getRndInteger(-12, 12);
    var c = getRndInteger(-12, 12);
    var d = getRndInteger(-12, 12);
  }while(b==0 || c==0 || d==0 || a+b==0 || c+d==0 || a+c==0 || b+d==0)

  var question = "$" + value2FirstCoe(a) + unknowns[unknownNumber] + "^2" + value2Coe(b) + unknowns[unknownNumber] + "^2" + value2Coe(c) + unknowns[unknownNumber] + value2Coe(d) + unknowns[unknownNumber] + "$";
  var correctOption = "$" + value2FirstCoe(a+b) + unknowns[unknownNumber] + "^2" + value2Coe(c+d) + unknowns[unknownNumber] + "$";
  var wrongOption1 = "$" + value2FirstCoe(a+b) + unknowns[unknownNumber] + "^4" + value2Coe(c+d) + unknowns[unknownNumber] + "$";
  var wrongOption2 = "$" + value2FirstCoe(a+c) + unknowns[unknownNumber] + "^2" + value2Coe(b+d) + unknowns[unknownNumber] + "$";
  var wrongOption3 = "$" + value2FirstCoe(a+c) + unknowns[unknownNumber] + "^4" + value2Coe(b+d) + unknowns[unknownNumber] + "$";

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

//Type3: ax^3+bx^3+cx+dx+ex^3+fx = (a+b+e)x^3+(c+d+f)x
function polynomialAddSubType3(){
  var unknowns = [
    "a", "b", "d", "h", "m", "n", "p", "r", "s", "t", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0, 12);

  do{
    var a = getRndInteger(-12, 12);
    var b = getRndInteger(-12, 12);
    var e = getRndInteger(-12, 12);
  }while(a==0 || b==0 || e==0 || a+b+e==0 || a+b-e==0)
  do{
    var c = getRndInteger(-12, 12);
    var d = getRndInteger(-12, 12);
    var f = getRndInteger(-12, 12);
  }while(c==0 || d==0 || f==0 || c+d+f==0 || c+d-f==0)

  var question = "$" + value2FirstCoe(a) + unknowns[unknownNumber] + "^3" + value2Coe(b) + unknowns[unknownNumber] + "^3" + value2Coe(c) + unknowns[unknownNumber] + value2Coe(d) + unknowns[unknownNumber] + value2Coe(e) + unknowns[unknownNumber] + "^3" + value2Coe(f) + unknowns[unknownNumber] + "$";
  var correctOption = "$" + value2FirstCoe(a+b+e) + unknowns[unknownNumber] + "^3" + value2Coe(c+d+f) + unknowns[unknownNumber] + "$";
  var wrongOption1 = "$" + value2FirstCoe(a+b+e) + unknowns[unknownNumber] + "^3" + value2Coe(c+d-f) + unknowns[unknownNumber] + "$";
  var wrongOption2 = "$" + value2FirstCoe(a+b-e) + unknowns[unknownNumber] + "^3" + value2Coe(c+d+f) + unknowns[unknownNumber] + "$";
  var wrongOption3 = "$" + value2FirstCoe(a+b-e) + unknowns[unknownNumber] + "^3" + value2Coe(c+d-f) + unknowns[unknownNumber] + "$";

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

//Type4: ax+bx^2+cx^2+dx+ex+fx^2 = (b+c+f)x^2+(a+d+e)x
function polynomialAddSubType4(){
  var unknowns = [
    "a", "b", "d", "h", "m", "n", "p", "r", "s", "t", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0, 12);

  do{
    var b = getRndInteger(-12, 12);
    var c = getRndInteger(-12, 12);
    var f = getRndInteger(-12, 12);
  }while(b==0 || c==0 || f==0 || (Math.abs(b)==Math.abs(c))&&(Math.abs(b)==Math.abs(f)) || b+c+f==0 ||b+c-f==0)

  do{
    var a = getRndInteger(-12, 12);
    var d = getRndInteger(-12, 12);
    var e = getRndInteger(-12, 12);
  }while(a==0 || d==0 || e==0 || (Math.abs(a)==Math.abs(d))&&(Math.abs(a)==Math.abs(e)) || a+d+e==0 || a+d-e==0)

  var question = "$" +　value2FirstCoe(a) + unknowns[unknownNumber] + value2Coe(b) + unknowns[unknownNumber] + "^2" + value2Coe(c) + unknowns[unknownNumber] + "^2" + value2Coe(d) + unknowns[unknownNumber] + value2Coe(e) + unknowns[unknownNumber] + value2Coe(f) + unknowns[unknownNumber] + "^2" + "$";
  var correctOption = "$" + value2FirstCoe(b+c+f) + unknowns[unknownNumber] + "^2" + value2Coe(a+d+e) + unknowns[unknownNumber] + "$";
  var wrongOption1 = "$" + value2FirstCoe(b+c+f) + unknowns[unknownNumber] + "^2" + value2Coe(a+d-e) + unknowns[unknownNumber] + "$";
  var wrongOption2 = "$" + value2FirstCoe(b+c-f) + unknowns[unknownNumber] + "^2" + value2Coe(a+d+e) + unknowns[unknownNumber] + "$";
  var wrongOption3 = "$" + value2FirstCoe(b+c-f) + unknowns[unknownNumber] + "^2" + value2Coe(a+d-e) + unknowns[unknownNumber] + "$";

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

//Type5: ax^2+bx+c+dx+ex^2+fx = (a+e)x^2+(b+d+f)x+c
function polynomialAddSubType5(){
  var unknowns = [
    "a", "b", "d", "h", "m", "n", "p", "r", "s", "t", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0, 12);

  do{
    var a = getRndInteger(-12, 12);
    var e = getRndInteger(-12, 12);
  }while(a==0 || e==0 || Math.abs(a)==Math.abs(e) || a+e==0 || a-e==0)

  do{
    var b = getRndInteger(-12, 12);
    var d = getRndInteger(-12, 12);
    var f = getRndInteger(-12, 12);
  }while(b==0 || d==0 || f==0 || (Math.abs(b)==Math.abs(d))&&(Math.abs(b)==Math.abs(f)) || b+d+f==0 || b+d-f==0)

  var c = getRndInteger(-12, 12);

  var question = "$" + value2FirstCoe(a) + unknowns[unknownNumber] + "^2" + value2Coe(b) + unknowns[unknownNumber] + value2Constant(c) + value2Coe(d) + unknowns[unknownNumber] + value2Coe(e) + unknowns[unknownNumber] + "^2" + value2Coe(f) + unknowns[unknownNumber] + "$";
  var correctOption = "$" + value2FirstCoe(a+e) + unknowns[unknownNumber] + "^2" + value2Coe(b+d+f) + unknowns[unknownNumber] + value2Constant(c) + "$";
  var wrongOption1 = "$" + value2FirstCoe(a+e) + unknowns[unknownNumber] + "^2" + value2Coe(b+d-f) + unknowns[unknownNumber] + value2Constant(c) + "$";
  var wrongOption2 = "$" + value2FirstCoe(a-e) + unknowns[unknownNumber] + "^2" + value2Coe(b+d+f) + unknowns[unknownNumber] + value2Constant(c) + "$";
  var wrongOption3 = "$" + value2FirstCoe(a-e) + unknowns[unknownNumber] + "^2" + value2Coe(b+d-f) + unknowns[unknownNumber] + value2Constant(c) + "$";

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

//Type6: ax+bx^2+cx^3+dx+ex^3+fx^2 = (c+e)x^3+(b+f)x^2+(a+d)x
function polynomialAddSubType6(){
  var unknowns = [
    "a", "b", "d", "h", "m", "n", "p", "r", "s", "t", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0, 12);

  do{
    var a = getRndInteger(-12,12);
    var d = getRndInteger(-12,12);
  }while(a==0 || d==0 || Math.abs(a)==Math.abs(d) || a+d==0 || a-d==0)

  do{
    var b = getRndInteger(-12,12);
    var f = getRndInteger(-12,12);
  }while(b==0 || f==0 || Math.abs(b)==Math.abs(f) || b+f==0 || b-f==0)

  do{
    var c = getRndInteger(-12,12);
    var e = getRndInteger(-12,12);
  }while(c==0 || e==0 || Math.abs(c)==Math.abs(e) || c+e==0 || c-e==0)

  var question = "$" + value2FirstCoe(a) + unknowns[unknownNumber] + value2Coe(b) + unknowns[unknownNumber] + "^2" + value2Coe(c) + unknowns[unknownNumber] + "^3" + value2Coe(d) + unknowns[unknownNumber] + value2Coe(e) + unknowns[unknownNumber] + "^3" + value2Coe(f) + unknowns[unknownNumber] + "^2" + "$";
  var correctOption = "$" + "$";
  var wrongOption1 = "$" + "$";
  var wrongOption2 = "$" + "$";
  var wrongOption3 = "$" + "$";;

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

//Type7: (ax+b)+(cx+d) = (a+c)x+(b+d)
function polynomialAddSubType7(){
  var unknowns = [
    "a", "b", "d", "h", "m", "n", "p", "r", "s", "t", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0, 12);

  var question = "$" + "$";
  var correctOption = "$" + "$";
  var wrongOption1 = "$" + "$";
  var wrongOption2 = "$" + "$";
  var wrongOption3 = "$" + "$";;

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

//Type8: (ax+b)-(cx+d) = (a-c)x+(b-d)
function polynomialAddSubType8(){
  var unknowns = [
    "a", "b", "d", "h", "m", "n", "p", "r", "s", "t", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0, 12);

  var question = "$" + "$";
  var correctOption = "$" + "$";
  var wrongOption1 = "$" + "$";
  var wrongOption2 = "$" + "$";
  var wrongOption3 = "$" + "$";;

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

//Type9: (ax+b)+(c+dx) = (a+d)x+(b+c)
function polynomialAddSubType9(){
  var unknowns = [
    "a", "b", "d", "h", "m", "n", "p", "r", "s", "t", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0, 12);

  var question = "$" + "$";
  var correctOption = "$" + "$";
  var wrongOption1 = "$" + "$";
  var wrongOption2 = "$" + "$";
  var wrongOption3 = "$" + "$";;

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

//Type10: (ax+b)-(c+dx) = (a-d)x+(b-c)
function polynomialAddSubType10(){
  var unknowns = [
    "a", "b", "d", "h", "m", "n", "p", "r", "s", "t", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0, 12);

  var question = "$" + "$";
  var correctOption = "$" + "$";
  var wrongOption1 = "$" + "$";
  var wrongOption2 = "$" + "$";
  var wrongOption3 = "$" + "$";;

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

//Type11: (ax+by+c)+(dx+ey+f) = (a+d)x+(b+e)y+(c+f)
function polynomialAddSubType11(){

}

//Type12: (ax+by+c)+(dy+ex+f) = (a+e)x+(b+e)y+(c+f)
function polynomialAddSubType12(){

}

//Type13: (a+by+cx)-(dx+ey+f) = (c-d)x+(b-e)y+(a-f)
function polynomialAddSubType13(){

}

//Type14: (ax+b+cy)-(dy+ex+f) = (c-e)x+(c-d)y+(b-f)
function polynomialAddSubType14(){

}

//Type15: (ax^2+bx+c) + (d+ex^2+fx) = (a+e)x^2+(b+f)+(c+d)
function polynomialAddSubType15(){

}

//Type16: (ax^3+bx^2+c)-(dx^2+e+fx^2) = ax^3+(b-d-f)x^2+(c-e)
function polynomialAddSubType16(){

}

//Type17: (ax+by^3+c)-(dx^3+ex+f) = (b-d)x^3+(a-e)x+(c-f)
function polynomialAddSubType17(){

}

//Type18: (ax^2+bx+cy^3)-(dy^3+ey^2+fx) = (c-d)x^3+(a-e)x^2+(b-f)x
function polynomialAddSubType18(){

}

//Type19: (ax^3+bx^2+c)+(dx^2+ex+f) = ax^3+(b+d)x^2+ex+(c+f)
function polynomialAddSubType19(){

}

//Type20: (-ax^3+bx+cx^2)-(dx+ex^4+fx^2) = -ex^4-ax^3+(c-f)x^2+(b-d)x
function polynomialAddSubType20(){

}

//Type21: (ax+bx^3+cx^2)+(dx^2+ex^3+f) = (b+e)x^3+(c+d)x^2+ax+f
function polynomialAddSubType21(){

}

//Type22: (ax^2+bx+cx^3)-(dx+ey^2+f) = cx^3+(a-e)x^2+(b-d)x-f
function polynomialAddSubType22(){

}

//Type23: axy+bx^2+cx+dx^2+ex+fxy = (b+d)x^2+(c+e)x^2+(a+f)xy
function polynomialAddSubType23(){

}

//Type24: ax^2+byz+cy+dyz+ex^2+fy = (a+e)x^2+(b+d)yz+(c+f)y
function polynomialAddSubType24(){

}

//Type25: axy+byz+cxy+dxz+exz+fyz = (a+c)xy+(b+f)yz+(d+e)xz
function polynomialAddSubType25(){

}

//Type26: -ayz^2+bxz^2+cyz^2+dxyz+exyz+fxz^2 = (b+f)xz^2+(-a+c)yz^2+(d+e)xyz
function polynomialAddSubType26(){

}

//Type27: (ax^2+bxy+cy^2)-(dx^2+exy+fy^2)+(gx^2+hxy+iy^2) = (a-d+g)x^2+(b-e+h)xy+(c-f+i)y^2
function polynomialAddSubType27(){

}

//Type28: (axy+byz+cxz)-(dxy+exz+fyz)-(gxz+hyz+ixy) = (a-d-i)xy+(b-f-h)yz+(c-e-g)xz
function polynomialAddSubType28(){

}

//Type29: (ax^3+bx^2+c)+(dx^2+ex+f)-(gx^3+hx+ix^2) = (a-g)x^3+(b+d-i)x^2+(e-h)x+(c+f)
function polynomialAddSubType28(){

}

//Type30: (ax^2+bxy+cy^2)-(dxy+ex^2+fy^2)+(gy^2+hx^2+ixy) = (a-e+h)x^2+(b-d+i)xy+(c-f+g)y^2
function polynomialAddSubType30(){

}

//Type31: (axy^2z+bxyz^2)-[(cx^2yz+dxy^2z)-(exyz^2+fx^2yz)] = (-c+f)x^2yz+(a-d)xy^2z+(b+e)xyz^2
function polynomialAddSubType31(){

}

//Type32: (axy+byz+cxz)+[(dxz+eyz)-(fyz+gxy)]-(hyz+ixy+jxz) = (a-g-i)xy+(c+d-j)xz+(b+e-f-h)yz
function polynomialAddSubType32(){

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
