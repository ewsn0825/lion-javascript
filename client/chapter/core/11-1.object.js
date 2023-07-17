/* --------- */
/* Object    */
/* --------- */

/* Primitives vs. Object --------- */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = `
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let cssMap = {
  position: 'fixed',
  zIndex: 10000,
  top: '50%',
  left: '50%',
  width: '60vw',
  maxWidth: '800px',
  height: '40vh',
  minHeight: '280px',
  transform: 'translate(-50%, -50%)',
};

// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

let authUser = null;

authUser = {
  uid: 'ewsn0825',
  name: 'jaeho',
  email: 'ewsn0825@naver.com',
  isSignIn: true,
  permissions: 'paid',
};

console.log(authUser);

// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.

console.log(authUser.uid);
console.log(authUser.permissions);
console.log(authUser.email);

// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.

console.log(authUser['uid']);
console.log(authUser['email']);
console.log(authUser['name']);

// 계산된 프로퍼티 (computed property)
let calculateProperty = 'phone'; // phone | tel

//class로 객체
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

const user3 = new User('동혁', 'vvs@naver.com');

//함수로 객체 만들기

function createUser(
  name, 
  email,
  computedProp='phone',
  number='010-0000-0000') {
  return {
    name,
    email,
    [computedProp]:number,
  };
}

const user1 = createUser('진승', 'victory@naver.com');
const user2 = createUser('희소', 'happyCow@naver.com');

// 프로퍼티 포함 여부 확인

//key in user1

//자신(own)의 속성(property)을 가지고(has) 있는지

for(let key in user1){
  if(Object.prototype.hasOwnProperty.call(user1.key)){
    console.log(key);
  }
}

// 프로퍼티 나열

//key만 모아놓은 배열 만들어주세요 Object.keys()

let keyArray = Object.keys(authUser);
let valueArray = Object.values(authUser);

//getProp(object)

function getProp(object) {

  if(typeof object !== 'object'){
    throw new Error('getProp함수의 매개 변수는 객체 타입 이어야 합니다');
  }

  return Object.keys(object);

  
}


function getP(object){

  let result =[];

  for(let key in object){
    if(({}).hasOwnProperty.call(object,key)){
      result.push(key);
    }
  }

  return result;
}

// console.log(valueArray);

// 프로퍼티 제거 or 삭제

//authUser.name=null;
//delete authUser.uid

function removeProperty(object,key){

  if(typeof object !=='object'){
    throw new Error('....');
  }

  if(key==='all'){
    for(let key of getProp(object)){
      object[key]=null;
    }

    return object;
  }

  object[key]=null;

  return object;

}


function deleteProperty(object,key) {

  delete object[key];

  return object
}

//delete authUser.uid

deleteProperty(authUser,'name');

//제거 : null
//삭제 : 없앰


// 단축 프로퍼티
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;

const student={
  // name:name,
  // email:email,
  // authorization:authorization,
  // isLogin:isLogin,
  name,
  email,
  authorization,
  isLogin,
}

console.log(student);

// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...

// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
function isEmptyObject(object) {

  // return Object.keys(object).length===0 ? true : false;

  return getProp(object).length=== 0 ? true : false;

}

isEmptyObject(authUser) //false

/* ------------------------------------------- */
/* 배열 구조 분해 할당  destructuring assignments   */
/* ------------------------------------------- */

let color =['#ff0000','#2b00ff','#00ff2f'];

let [red,blue,green] =color;


// let red = color[0];
// let blue = color[1];
// let green = color[2];



//초록색만 뽑고 싶을때
//let [,,green]=color;


/* -------------------------------------------- */
/* 객체 구조 분해 할당  destructuring assignments    */
/* --------------------------------------------- */

const salaries={
  권혜미:50,
  강예나:500,
  김태일:700,
}

const {이수연:a = 10,권혜미:b = 20,김태일:c=30,강예나:d=40}=salaries;

// console.log(a);  => 10;

// const {권혜미,이수연,강예나,김태일}=salaries;



//const {이수연:a =10,권혜미:b=20,김태일:c=30,강예나:d=40}=salaries;

function setElementCss(options) {
  
  const {width,height,overflow,color} = options;

  console.log(width,color);
}

const defaults={
  overflow:false,
  height:200,
  width:100,
  color:'orange',
}

setElementCss({
  height:100,
  color:'red',

})


//배열의 구조분해할당 : 순서가 정해져있다. 변수 이름을 바꿀 수 있다.
//객체의 구조분해할당 : 순서가 정해져있지 않다. 변수의 이름을 바꿀 수 있다.

// ex)

/* function setElementCss(options) {
  
  const {width:w,height:h,overflow:of,color:c} = options;

  console.log(width,color);
} */

