/* ---------------------------------------------------------------------- */
/* Functions → Expression                                                 */
/* ---------------------------------------------------------------------- */


function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

let resultX = calcTotal(10000, 8900, 1360, 2100);
let resultY = calcTotal(21500, 3200, 9800, 4700);
let resultZ = calcTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);


// 함수 선언 → 일반 함수 (표현)식
let calculateTotal = function(moneyA, moneyB, moneyC, moneyD){
  
  console.log(arguments);

  let total = 0 ;
  for(let i=0; i<arguments.length; i++){
    total += arguments[i];
  }
  
  return total;
  // return moneyA + moneyB + moneyC + moneyD;
};

console.log(calculateTotal(100,500,300,150,400,150));


// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression = function(){};


// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression = function hello(){};


// 콜백 함수 (표현)식
let callbackFunctionExpression = function (url, resolve, reject) {
  if (typeof url === "string" && url.includes('http') && url.includes('www')) {
  // if (typeof url === "string" && url.match(/http.+www/)) {
    resolve(url);
  } else {
    reject();
  }
};

callbackFunctionExpression(
  // "https://www.naver.com",
  'http w2ww',
  function (url) {
    console.log(`${url} 해당 페이지로 이동합니다.`);
  },
  function () {
    // console.log("url 입력 정보가 올바르지 않습니다.");
    throw new Error("url 입력 정보가 올바르지 않습니다.");
  }
);

// * forEach 는 내부에 이런 식으로 구현되어 있을려나요 ?
// forEach(function(currentValue, index, array){}, thisArg)
// arr.forEach(function(item, index){})

// * 함수 선언문 vs. 함수 (표현)식
function aa() {}

const bb = function () {};

// * 즉시 실행 함수 (표현)식
// * Immediately Invoked Function Expression
// * 즉시 호출될수 있는 함수의 표현식
let IIFE;

// * why 전역을 보호하기 위해 사용
// * e.g. var x = 1;

// * var 함수 스코프
// * let, const  블록 스코프
{
  let x = 1;
  const y = 1;
  var z = 1;
}

// console.log(x, y, z); //* let,const 는 접근 X, var 는 가능

// * 그래서 var 가 전역 환경을 오염시키지 않게 하기 위해 함수안에서 생성
(function () {
  var alpha = 1;
  console.log("HI~");
})();

(function ($) {
  console.log($);
})(window);


// --------------------------------------------------------------------------------------------------
// 너 getNode 이거 나가

// getNode 받아

const MASTER = (function ($) {
  // parameter
  const KEY = "alcls@#@!$%";

  // 내가 내보내고 싶은 항목들만 내보낼꺼야
  // 모듈로서의 활용
  // 정보 은닉화 incapsulation : 외부의 접근을 차단
  // 일부 정보만 노출

  // console.log($(".first"));

  return {
    getKey: function () {
      return KEY;
    },
  };
})(getNode); // arguments

function getNode(node) {
  return document.querySelector(node);
}

console.log(MASTER.getKey());