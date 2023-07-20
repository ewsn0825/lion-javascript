/* --------------------------------- */
/* DOM traversal                     */
/* --------------------------------- */

/* 모든 노드에서 사용 */
// - parentNode
// - childNodes
// - firstChild
// - lastChild
// - previousSibling
// - nextSibling

/* 요소 노드에서만 사용 가능 */
// - parentElement
// - children
// - firstElementChild
// - lastElementChild
// - previousElementSibling
// - nextElementSibling

/* 문서 대상 찾기 */

// - getElementById
// const message = document.getElementById('message')

// console.log(message);

// - getElementsByTagName
// - getElementsByClassName
// const message = document.getElementsByClassName('first')

//el,els

getNode('.first');

// - querySelector
const first = document.querySelector('.first');

console.log(first);

// - querySelectorAll
const list = document.querySelectorAll('span');
console.log(list);

// - closest
// 가장 가까운 요소를 보여줌 (부모를 찾아감)
console.log(first.closest('h1'));

/* 문서 대상 확인 */
// - matches
console.log(first.matches('.first'));
// - contains
