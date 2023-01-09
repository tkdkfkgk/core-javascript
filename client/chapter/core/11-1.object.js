/* ---------------------------------------------------------------------- */
/* Object                                                                 */
/* ---------------------------------------------------------------------- */


/* Primitives vs. Object ------------------------------------------------ */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = /* css */`
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let cssMap = {
    position: "fixed",
    zIndex: 10000,
    top: "50%",
    left: "50%",
    width: "60vw",
    maxWidth: 800,
    height: "40vh",
    minHeight: 280,
    transform: "translate(-50%, -50%)",
};


// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

let authUser = null;

authUser = {
  uid: 'user-id-asd',
  name: 'kindtiger',
  email: 'seonbeom2@gmail.com',
  isSignIn: true,
  permission: 'paid'
}


// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.
// console.log(authUser.uid);
// console.log(authUser.name);
// console.log(authUser.email);
// console.log(authUser.isSignIn);
// console.log(authUser.permission);

// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고 
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.
// console.log(authUser['uid']);

// 계산된 프로퍼티 (calcurate property)
let calculateProperty = 'phone'; // phone | tel

function createUser(computedProp = 'phone'){ // 디폴트 파라미터

  return{
    name: 'unknown',
    email: 'unknown@asd',
    [computedProp]: '010-1234-1234'
  }
}

const user = createUser()
console.log(user);

Object.prototype.sign = true;

// 프로퍼티 포함 여부 확인
// Object.prototype.hasOwnProperty > 인스턴스 메소드 > 객체가 진짜 가지고있는 값만 가져옴
// call 빌려씀
for(let key in authUser){
  if(Object.prototype.hasOwnProperty.call(authUser,key)){
    // console.log(key)
  }
}

// 프로퍼티 나열

function getPropertiesList(object){
  // return Object.keys(object)

  let result = [];
  for(let key in object){
    result.push(key);
  }

  return result;
}

let result = getPropertiesList(authUser);
// console.log(result)

// 프로퍼티 제거 or 삭제
function removeProperty(object){
  console.log(object)
  // remove['uid'];

}

// let remove = removeProperty(authUser);

// 단축 프로퍼티
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;

const student = {
  name,
  email,
  authorization,
  isLogin
}


// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...


// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
function isEmptyObject(object, key) {
  Object.keys(object).length === 0 ? true : false
  return null;
}

let empty = isEmptyObject(authUser, 'uid')


let salaries = {
  john: 100,
  ann: 160,
  pete: 430
}

function sum(object){
  Object.entries

  console.log(Object.entries.keys)
}

sum(salaries);


let color = ['#ff0000', '#2b00ff', '#00ff2f'];
const COLOR_RED = color[0];
const COLOR_BLUE = color[1];
const COLOR_GREEN = color[2];



const element = {
  width: 500,
  height: 500,
};
function getElementWidth(option, node) {
  const {width, height} = element;
  
}