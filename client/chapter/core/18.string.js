/* ---------------------------------------------------------------------- */
/* String Type                                                            */
/* ---------------------------------------------------------------------- */

let message = 'Less is more.';

// length 프로퍼티
let stringTotalLength = message.length;
console.log('stringTotalLength : ', stringTotalLength);

// 특정 인덱스의 글자 추출
let extractCharacter = message[10];
console.log('extractCharacter : ', extractCharacter);

// 문자열 중간 글자를 바꾸는 건 불가능
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
let immutableChangeCharacter;

// 부분 문자열 추출
let slice = message.slice(8, -1);
console.log('slice : ', slice);

let subString = message.substring(1, 3);
console.log('subString : ', subString);

//잘 쓰지 않음
let subStr = message.substr(1,3);
console.log('subStr : ', subStr);

// 문자열 포함 여부 확인

//값이 없으면 -1, 있으면 위치를 반환
let indexOf = message.indexOf('p');
console.log('indexOf : ', indexOf);

//
let lastIndexOf=message.lastIndexOf('m');
console.log('lastIndexOf : ',lastIndexOf)

//포함에 대한 여부를 확인
let includes = message.includes('less');
console.log('includes : ',includes);

//시작단어
let startsWith=message.startsWith('Less');
console.log('startsWith : ',startsWith);

//~ 끝나는 단어
let endsWith=message.endsWith('more.');
console.log('endsWith : ',endsWith);

// 공백 잘라내기

//문자의 왼쪽 공백을 없앰
let trimStart;

//문자의 오른쪽 공백을 없앰
let trimEnd;

//양쪽 다 없앰
let str='                as       d   fa       s    df         '

let trim=str.trim();
// console.log('trim : ',trim)

//글자 중간중간에 공백이 있을때
str.replace(/\s*/g,'');

function normalText(string){
  return string.replace(/\s*/g,'');
}

// 텍스트 반복
let repeat =message.repeat(3);
console.log('repeat : ',repeat);

// 대소문자 변환
let toLowerCase = message.toLowerCase();
console.log('toLowerCase : ',toLowerCase);

let toUpperCase= message.toUpperCase();
console.log('toUpperCase : ', toUpperCase);

// 텍스트 이름 변환 유틸리티 함수
function toCamelCase(string) {
  return string.replace(/(\s|-|_)+./g, ($1) => $1.trim().replace(/(-|_)+/, '').toUpperCase())
}

function toPascalCase(string) {
  let name = toCamelCase(string);
  return name[0].toUpperCase() + name.slice(1);
}

