/* ------------ */
/* For Loop     */
/* ------------ */


for (let j=2; j<=10; j++){
  if(j%2==0){
    console.log(j);
  }
  
}


// 2 ~ 10까지의 짝수 출력하기



//.split => 문자를 배열로 반환해줌
const frontEndDev = 'HTML CSS SVG JavaScript jQuery React Redux'.split(' ');

let i = 0;
let l = frontEndDev.length;

/* while(i < l) {
  console.log(frontEndDev[i]);
  i += 1;
} */


// while 문 → for 문 (순환)
// - 실행 흐름
for(let i=0; i<l; i++){
  console.log(frontEndDev[i]);
}
// - 순환 중단 또는 이어서 순환
//   - 조건이 맞을 경우, 이어서(continue) 순환
//   - 조건: SVG, jQuery는 출력하지 마세요.

for(let i=0; i<l; i++){
  let value = frontEndDev[i];
  
  if(value==='SVG'||value==='jQuery') continue;
  console.log(value);
}

//   - 조건이 맞을 경우, 순환 중단(break)
for(let i=0; i<l; i++){
  let value = frontEndDev[i];
  
  if(value==='SVG'||value==='jQuery') break;
  console.log(value);
}
//   - 조건: JavaScript 까지만 출력하세요.


//   - 무한 루프 (브레이크)
//   - for 문 (역순환)

for(let i=l-1; i>=0; i--){
  console.log(frontEndDev[i]);
}

