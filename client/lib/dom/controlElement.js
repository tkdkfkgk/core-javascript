import { typeError } from "../error/typeError.js";
import { isElement } from "../utils/typeOf.js";

// JSDoc > 타입스크립트처럼 들어올 값 명시
/**
 * @funcion isElement checkElement
 * @param {HTMLElement} node
 * @return set disabled
 */

export function disableElement(node){

  if(!isElement(node)){
    typeError('disableElement 함수의 인자는 DOM 요소 노드 이어야 합니다.')
  }
  node.disabled = true;
}


export function enableElement(node){
  if(!isElement(node)){
    typeError('enableElement 함수의 인자는 DOM 요소 노드 이어야 합니다.')
  }
  
  node.disabled = false;
}

export function visibleElement(node){
  if(!isElement(node)){
    typeError('visibleElement 함수의 인자는 DOM 요소 노드 이어야 합니다.')
  }
  node.hidden = false;
}

export function invisibleElement(node){
  if(!isElement(node)){
    typeError('invisibleElement 함수의 인자는 DOM 요소 노드 이어야 합니다.')
  }
  node.hidden = true;
}