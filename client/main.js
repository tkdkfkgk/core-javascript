import { clearContents, getInputValue, getNode, getRandom, insertLast, isNumericString, showAlert,  } from './lib/index.js';

import { jujeobData } from "./data/data.js";

// console.log(1, isNaN == 12);
// console.log(isNumericString(123));

const submit = getNode('#submit');
const resultArea = getNode('.result');

console.log(submit);


function clickSubmitHandler(e){
  e.preventDefault(); // 브라우저 기능 새로고침 차단

  let name = getInputValue('#nameField'); // input의 값 가져오기
  let list = jujeobData(name);
  let pick = list[getRandom(list.length-1)]

  // console.log(list);
  // console.log(pick);
showAlert
  // let result = pick;
  if(!name){
    showAlert('.alert-error','이름을 입력해주세요 !',3000)
    return;
  }

  if(isNumericString(name)){
    showAlert('.alert','제대로된 이름을 입력해주세요 !',3000)
  }

  clearContents(resultArea)
  insertLast(resultArea,pick)
}

submit.addEventListener('click',clickSubmitHandler)

