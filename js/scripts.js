var romanNumerals = function(number) {
  console.log("Hello");
  // BUSINESS LOGIC

  // 900 Thousands

    var  numberInput = number;
    var romanOutput = [];

    if (numberInput > 3999) {
      alert("Roman Numerals don't go that high..FOO!");
    }

 if (numberInput - 3999 >= 1) {
      numberInput -= 3999;
      romanOutput.push('MMM');
    } else if (numberInput - 3000 >= 0) {
      numberInput -= 3000;
      romanOutput.push('MMM');
    } else if (numberInput - 3000 >= 0) {
      numberInput -= 2000;
      romanOutput.push('MM');
    } else if (numberInput - 1000 >= 0) {
      numberInput -= 1000;
      romanOutput.push('M');
    } else if (numberInput - 900 >= 0) {
      numberInput -= 900;
      romanOutput.push('CM');
    } else if (numberInput - 800 >=0) {
      numberInput -= 800;
      romanOutput.push('DCCC')
    } else if (numberInput - 700 >=0) {
      numberInput -= 700;
      romanOutput.push('DCC')
    } else if (numberInput - 600 >=0) {
      numberInput -= 600;
      romanOutput.push('DC')
    }


    // 400 to 500

    if (numberInput - 500 >= 0) {
      numberInput -= 500;
      romanOutput.push('D');
    } else if (numberInput - 400 >= 0) {
      numberInput -= 400;
      romanOutput.push('CD');
    } else if (numberInput - 300 >= 0) {
      numberInput -= 300;
      romanOutput.push('CCC');
    } else if (numberInput - 200 >= 0) {
      numberInput -= 200;
      romanOutput.push('CC');
    }

    // 100 to 60

    if (numberInput - 100 >= 0) {
      numberInput -= 100;
      romanOutput.push('C');
    } else if (numberInput - 90 >= 0) {
      numberInput -= 90;
      romanOutput.push('XC');
    } else if (numberInput - 80 >=0) {
      numberInput -= 80;
      romanOutput.push('LXXX');
    } else if (numberInput - 70 >= 0) {
      numberInput -= 70;
      romanOutput.push('LXX');
    } else if (numberInput - 60 >= 0) {
      numberInput -= 60;
      romanOutput.push('LX');
    }

    // 50

    if (numberInput - 50 >= 0) {
      numberInput -= 50;
      romanOutput.push("L")
    } else if (numberInput - 40 >=0) {
      numberInput -= 40;
      romanOutput.push('XL');
    } else if (numberInput - 30 >=0) {
      numberInput -= 30;
      romanOutput.push('XXX');
    } else if (numberInput -20 >=0) {
      numberInput -= 20;
      romanOutput.push('XX');
    } else if (numberInput -10 >=0) {
      numberInput -= 10;
      romanOutput.push('X');
    }

    // 10 through 1

    if (numberInput - 9 >=0) {
      numberInput -= 9;
      romanOutput.push('IX');
    } else if (numberInput -8 >=0) {
      numberInput -= 8;
      romanOutput.push('VIII');
    } else if (numberInput - 7 >=0) {
      numberInput -= 7;
      romanOutput.push('VII');
    } else if (numberInput -6 >=0) {
      numberInput -= 6;
      romanOutput.push('VI');
    } else if (numberInput - 5>=0) {
      numberInput -= 5;
      romanOutput.push('V');
    } else if (numberInput -4>=0) {
      numberInput -=4;
      romanOutput.push('IV');
    } else if (numberInput -3>=0) {
      numberInput -=3;
      romanOutput.push('III');
    } else if (numberInput - 2>=0) {
      numberInput -=2;
      romanOutput.push('II');
    } else if (numberInput - 1>=0) {
      numberInput -=1;
      romanOutput.push('I');
    } else {
      alert("Enter a numba FOO!");
    }



    return romanOutput;
    console.log(romanOutput);
    console.log("hello!");

};


$(document).ready(function() {
  // USER INTERFACE LOGIC

  $("form#roman-numerals").submit(function(event) {
    event.preventDefault();
    var roman = parseInt($("input#roman").val());
    var result = romanNumerals(roman).join("");
    $("#result").text(result);

    console.log("loaded");

    // Roman Numerals //
    // I = 1
    // II = 2
    // III = 3
    // IV = 4
    // V = 5
    // VI = 6
    // VII =7
    // VIII = 8
    // IX = 9
    // X = 10
    // L = 50
    // C = 100
    // D = 500
    // M = 1000

    // BUSINESS LOGIC

    // 900 Thousands

      // var  numberInput = number;
      // var romanOutput = [];
      //
      // if (numberInput - 3000 >= 0) {
      //   numberInput -= 3000;
      //   romanOutput.push('MMM');
      // } else if (numberInput - 3000 >= 0) {
      //   numberInput -= 2000;
      //   romanOutput.push('MM');
      // } else if (numberInput - 1000 >= 0) {
      //   numberInput -= 1000;
      //   romanOutput.push('M');
      // } else if (numberInput - 900 >= 0) {
      //   numberInput -= 900;
      //   romanOutput.push('CM');
      // }
      //
      // // 400 to 500
      //
      // if (numberInput - 500 >= 0) {
      //   numberInput -= 500;
      //   romanOutput.push('D');
      // } else if (numberInput - 400 >= 0) {
      //   numberInput -= 400;
      //   romanOutput.push('CD');
      // } else if (numberInput - 300 >= 0) {
      //   numberInput -= 300;
      //   romanOutput.push('CCC');
      // } else if (numberInput - 200 >= 0) {
      //   numberInput -= 200;
      //   romanOutput.push('CC');
      // }
      //
      // // 90 to 100
      //
      // if (numberInput - 100 >= 0) {
      //   numberInput -= 100;
      //   romanOutput.push('C');
      // } else if (numberInput - 90 >= 0) {
      //   numberInput -= 90;
      //   romanOutput.push('XC');
      // }
      //
      // // 50
      //
      // if (numberInput - 50 >= 0) {
      //   numberInput -= 50;
      //   romanOutput.push("L")
      // }


      //
      // console.log(romanOutput);

});
});
