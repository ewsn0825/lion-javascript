/* ------------------------------ */
/* Array's Methods                */
/* ------------------------------ */

// Array.isArray
//배열인지 체크해주는 메서드

//Object.prototype.toString()
//어떤 형태를 가지고있는지 체크해줌

function isArray(data){
  return Object.prototype.toString.call(data).slice(8,-1).toLowerCase()==='array';
}

//화살표 함수
// const isArray = data => Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'array';

// const isNull = data => Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'null';


/* 요소 순환 ---------------------------- */

// forEach

/* 원형 파괴 ----------------------------- */

// push
// pop
// unshift
// shift
// reverse
// splice
// sort

/* 새로운 배열 반환 ------------------------ */

// concat
// slice
// toSorted
// toReversed
// toSpliced
// map

/* 요소 포함 여부 확인 ---------------------- */

// indexOf
// lastIndexOf
// includes

/* 요소 찾기 ------------------------------ */

// find
// findIndex

/* 요소 걸러내기 --------------------------- */

// filter

/* 요소별 리듀서(reducer) 실행 -------------- */

// reduce
// reduceRight

/* string ←→ array 변환 ------------------ */

// split
// join