import {
  addClass,
  clearContents,
  copy,
  getNode,
  getNodes,
  getRandom,
  insertLast,
  isNumericString,
  removeClass,
  shake,
  showAlert,
} from './lib/index.js';
import { jujeobData } from './data/data.js';

const submit = getNode('#submit');
const nameField = getNode('#nameField');
let resultArea = getNode('.result');

function handleSubmit(e) {
  e.preventDefault();

  let name = nameField.value;
  const list = jujeobData(name);
  const pick = list[getRandom(list.length)];

  //replace 함수
  if (!name || name.replace(/\s*/g, '') === '') {
    // throw new Error('입력창에 이름을 입력해주세요');

    showAlert('.alert-error', '이름을 입력해 주세요!', 2000);

    shake.restart();

    return;
  }
  if (!isNumericString(name)) {
    showAlert('.alert-error', '제대로된 이름을 입력해 주세요!', 2000);

    shake.restart();

    return;
  }

  clearContents(resultArea);
  insertLast(resultArea, pick);
}

// 이름을 제대로 입력 했을 때 클립보드에 복사가 될 수 있도록.
// let state = false;

// state = true;

// if(state){  ...logic }

function handleCopy() {
  const text = resultArea.textContent;
  copy(text).then(() => {
    showAlert('.alert-success', '클립보드 복사 완료');
  });
}

submit.addEventListener('click', handleSubmit);
resultArea.addEventListener('click', handleCopy);
