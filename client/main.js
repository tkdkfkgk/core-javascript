import { 
  diceAnimation, 
  disableElement, 
  enableElement, 
  getNode, 
  getNodes, 
  visibleElement,
  invisibleElement} from "./lib/index.js";

// [ 주사위 굴리기 ]
// 1. dice 애니메이션 불러오기
// 2. bindEvent 유틸 함수 만들기 
// 3. handleRollingDice 함수 만들고 토글로 애니메이션 제어하기 
// 4. 변수 보호를 위한 클로저 + IIFE 사용하기 

// [ 레코드 리스트 보이기 ]
// 1. handleRecord 함수를 만들기
// 2. disable 활성 유틸 함수 만들기
// 3. handleReset 함수를 만듭니다.
// 4. visible 활성 유틸 함수 만들기
// 5. toggleState 유틸 함수 만들기

// diceAnimation()

// 1. 주사위굴리기 버튼 접근 > 배열의 구조 분해 할당
const [rollingDiceButton,recordButton,resetButton] = getNodes('.buttonGroup > button');
const recordListWrapper = getNode('.recordListWrapper');

// console.log(button);
// const rollingDiceButton = getNode('.buttonGroup > button:nth-child(1)');
// const recordButton = getNode('.buttonGroup > button:nth-child(2)');
// const resetButton = getNode('.buttonGroup > button:nth-child(3)');


// IIFE

// 2. setInterval함수를 사용해 주사위 계속 굴러가게,시간마다
const handleRollingDice = (() => {
 
  let isRolling = false;
  let stopAnimation;  

  return () => {
    if(!isRolling){
      console.log('첫번째 클릭');
      stopAnimation = setInterval(diceAnimation,100)
      // recordButton.disabled = true;
      disableElement(recordButton)
      disableElement(resetButton)
    }else{
      console.log('두번째 클릭');
      clearInterval(stopAnimation);
      // recordButton.disabled = false;
      enableElement(recordButton)
      enableElement(resetButton)
    }
  
    isRolling = !isRolling; // 2번 클릭시마다 t/f 값을 바꿔줘서 if의 구문을 토글기능처럼 사용
  }
})() // 클로저로 까대기를 바로 사용할 때는 즉시실행함수로 IIFE패턴을 사용

// 5
const handleRecord =()=>{
  console.log(1);
  visibleElement(recordListWrapper);
}

const handleReset =()=>{
  console.log(2);
  invisibleElement(recordListWrapper);
}

// 3. 주사위굴리기 버튼 클릭시 handleRollingDice 함수 실행
rollingDiceButton.addEventListener('click',handleRollingDice) // 클릭이벤트시 한번은 실행해주지만 ()붙여서 한번더실행 해서 값 반환
recordButton.addEventListener('click',handleRecord) // 4
resetButton.addEventListener('click',handleReset)

// let eventOff = bindEvent(rollingDiceButton,'click',handleRollingDice);

