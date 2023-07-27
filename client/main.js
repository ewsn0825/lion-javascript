import {
  clearContents,
  deleteStorage,
  getNode,
  getStorage,
  setStorage,
} from './lib/index.js';

const textField = getNode('#textField');
const btn = getNode('button');

function handleTextField() {
  const value = this.value;

  setStorage('text', value);
}

function init() {
  getStorage('text').then((res) => {
    textField.value = res;
    console.log(res);
  });
}

function handleClear() {
  clearContents('#textField');
  deleteStorage();
}

textField.addEventListener('input', handleTextField);
window.addEventListener('DOMContentLoaded', init);
btn.addEventListener('click', handleClear);
