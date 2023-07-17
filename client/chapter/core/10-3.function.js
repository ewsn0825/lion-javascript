/* ---------------------- */
/* Functions → Arrow      */
/* ---------------------- */

const calculateTotal = function(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);


// 함수 선언 → 화살표 함수 (표현)식

//                 rest parameter
/* let calcAllMoney=(... args)=>{
  console.log(args);
};

const result = calcAllMoney(1000,500,200,2000);

console.log(result); */
// 화살표 함수와 this


//함수 선언문

function normalFunction(){

  console.log(this);
}

//함수 표현식

const expressionFunction=function(){
  console.log(this);
}

//화살표함수  => 컨스트럭트 포함되어있지 않다. , 화살표 함수는 this를 바인딩 하지 않는다(부모의 this를 가져옴 : outer).


const arrowFunction = ()=>{
  console.log(this);
}

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
let pow; 

// repeat(text: string, repeatCount: number): string;
let repeat; 




//객체 안에서 this

const user={
  total:0,
  name:'tiger',
  adddress:'수원시 장안구 구운동',
  grades:[80,90,100],
  totalGrades:function () {

    function sayHi() {
      console.log(this);  
    }
    
    sayHi()
  }
}



