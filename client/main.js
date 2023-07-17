/* console.log('hello js!');

const a = 10;

const b = 10;

 */





//dom에 접근

const input=document.querySelector('#todo');
console.log(input.value);


//input 실시간 이벤트
let value=input.value
input.addEventListener('input',()=>{
  value=input.value;
  console.log(input.value);
})

input.classList.add('is-active');
input.classList.remove('is-active');

//토글
//classList.toggle()