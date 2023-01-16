import { clearContents, copy, getInputValue, getNode, getRandom, insertLast, isNumericString, showAlert, addClass, removeClass } from './lib/index.js';

import { jujeobData } from "./data/data.js";

/* GSAP */
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
    showAlert('.alert-error','잘못된 정보입니다 !',2000)

    // GSAP
    gsap.fromTo(resultArea, 0.01, {x:-5}, {x:5, clearProps:"x", repeat:20})

    // addClass(resultArea,'shake');
    // setTimeout(()=>{
    //   removeClass(resultArea,'shake')
    // },1000)
    return;
  }

  if(isNumericString(name)){
    showAlert('.alert-error','정확한 이름을 입력해주세요 !',2000)
    return;
  }

  clearContents(resultArea)
  insertLast(resultArea,pick)
}

export function clickCopyHandler(){
  let text = resultArea.textContent;
  // navigator.clipboard.writeText(text) // writeText 매개변수로 받은 값을 클립보드에 써주는 역할
  copy(text).then(()=>{
    showAlert('.alert-success','클립보드 복사가 완료됐습니다.',2000);
  })
  // 약속 구문
  // 약속
  // 다음 해야 할 일
}

submit.addEventListener('click',clickSubmitHandler);
resultArea.addEventListener('click', clickCopyHandler);
