//모듈 프로그래밍 => js의 어려운 문법은 x -> 방법론

//getNode 가져오기
import { getNode ,getNodes} from './lib/dom/getNode.js';
import { clearContents } from './lib/dom/clearContents.js';
import { insertLast } from './lib/dom/insert.js';

const first = getNode('#firstNumber');
const second = getNode('#secondNumber');
const result = getNode('.result');
const clear = getNode('#clear');

const calculator = getNode('.calculator');

// 1. input value 값 가져오기
// 2. 두 수의 합 더하기
// 3. result 출력하기

function handleInput() {
  let firstValue = Number(first.value);
  let secondValue = Number(second.value);

  let total = firstValue + secondValue;

  clearContents(result);
  insertLast(result, total);

  // return result;
  // let result = firstValue + secondValue;

  // console.log(firstValue);
  // console.log(secondValue);

  // return result;
}

function handleClear(e) {
  e.preventDefault();

  // first.value = '';
  // second.value = '';

  clearContents(first);
  clearContents(second);

  result.textContent = '-';
  // clearContents(result);
  // insertLast(result, '-');
}

//clear버튼을 누르면 모든 글자가 초기화

first.addEventListener('input', handleInput);
second.addEventListener('input', handleInput);
clear.addEventListener('click', handleClear);
