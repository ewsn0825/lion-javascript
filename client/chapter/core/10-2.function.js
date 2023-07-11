/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */


function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

const resultX = calcTotal(10000, 8900, 1360, 2100);
const resultY = calcTotal(21500, 3200, 9800, 4700);
const resultZ = calcTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);


// 함수 선언 → 일반 함수 (표현)식
let calculateTotal = function (){
  
  console.log(arguments);
  //함수 안에서만 접근 가능한 인수들의 집합 객체로서 배열과 유사한 형태를 가지고 있는 이것은? : arguments

  let total=0;

  //for of 사용

  /* for (let key of arguments){
    total +=key;
  }

  return total; */


  //3. 슬라이스 이용한 배열처리
  /* let total=0;

  let realArray=  Array.prototype.slice.call(arguments);

  console.log(realArray);

  realArray.forEach(function name(item) {
    total+=item;
  
  });

  return total; */
   

  //4. for문 이용해서 arguments 다루기 

  // for(let i=0; i<arguments.length; i++){
  //   total+=arguments;
  // }
  
  // return total;

  //5. Array.from 사용
  /* let realArray =Array.from(arguments);
  console.log(realArray);
  realArray.forEach(function(item){
    total+=item;
  }) */

  //6. 스프레드 신텍스

  let realArray = [... arguments];
  // console.log(realArray);

  // return total;

  return realArray.reduce((acc,item)=>{
    return acc+item;
  },0)

  //0은 init value : 초기값이다.
};

const result=calculateTotal(1000,500,200,6500);

console.log(result);

// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression = function () {
  
};


// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression = function hello() {
  
};


// 콜백 함수 (표현)식
let callbackFunctionExpression=function(isActive,success,fail) {
  
  if(isActive){
    success();
    return;
  }

};

callbackFunctionExpression(
  true,
  function () {
    console.log('성공!!')
  },
  function () {
    console.log('실패!!')
  }
)



const movePage = function(url,success,fail){

  if(url.match(/http.+www/) && typeof url === 'string'){
    success(url)
  }else{
    fail()
  }
}



movePage(
  'www.naver.com',
  function(url){
    console.log('성공 몇초 뒤 해당 페이지로 이동합니다.');
    
    setTimeout(() => {
      window.location.href = url
    }, 3000);
    
  },
  function(){
    console.log('올바르지 않은 주소입니다.');
    // ????
  }
)


// 함수 선언문 vs. 함수 (표현)식


// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression
let IIFE;

/* const master=(function () {
  var x =10;

  console.log('즉시 함수 !');

  return '퉤';
})() */


//변수의 보호
// 은닉화 (캡슐화)

const master=(function () {
  var x =10;

  let uid='ewsn0825'
  

  return {
    getKey(){
      return uid;
    },
    setKey(value){
      uid=value;
    }
  };
})()

console.log(master.setKey)

//인스턴스 메소드
// Object.prototype.toString();

//스태틱 메소드
// Object.entries();