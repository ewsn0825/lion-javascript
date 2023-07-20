/* ---------------------------- */
/* Event bubbling & capturing   */
/* ---------------------------- */

/* 버블링 ----------------------------------------------------------------- */

const section = getNode('section');
const article = getNode('article');
const p = getNode('p');


section.addEventListener('click',()=>{
  console.log('%c section','color:orange');
})

article.addEventListener('click',(e)=>{
  // e.stopPropagation() //버블링 중단됨
  console.log('%c article','color:dodgerblue');
})

p.addEventListener('click',(e)=>{
  // e.stopPropagation()
  console.log('%c p','color:hotpink');
})

//이벤트 안에서 다른 이벤트 할 때


/* 캡처링 ----------------------------------------------------------------- */

//true 사용시 역순으로 출력