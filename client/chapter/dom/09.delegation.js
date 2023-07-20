/* ------------------------ */
/* Event delegation         */
/* ------------------------ */

/* 클래스를 사용한 위임 ---------------- */

// const buttonA = getNode('.a')
// const buttonB = getNode('.b')
// const buttonC = getNode('.c')
// const buttonD = getNode('.d')

const container = getNode('.container');

function handleDelegation(e) {
  //e
  // console.log(this);
  // console.log(this === e.currentTarget);

  //현재 대상 가져옴
  // console.log(e.currentTarget);

  //누른 대상 가져옴
  // console.log(e.target);

  let target = e.target;

  console.log(target);

  let li = target.closest('li');

  if (!li) return;

  let className = attr(li, 'class');

  // let dataName = target.dataset.name;
  let dataName = attr(li, 'data-name');

  if (className === 'home') {
    console.log('홈 실행');
  }

  // console.log(className);

  // console.log(target);
  // console.log(target.getAttribute('class'));

  // if (target.getAttribute('class') === 'a') {
  //   console.log('A 버튼 클릭!');
  // }
  // if (target.getAttribute('class') === 'b') {
  //   console.log('B 버튼 클릭!');
  // }
  // if (target.getAttribute('class') === 'c') {
  //   console.log('C 버튼 클릭!');
  // }
  // if (target.getAttribute('class') === 'd') {
  //   console.log('D 버튼 클릭!');
  // }
}

container.addEventListener('click', handleDelegation);

/* 속성을 사용한 위임 ------------------ */

/* 노드를 사용한 위임 ------------------ */
