/* ---------------------------------------------------------------------- */
/* Logical Operators                                                      */
/* ---------------------------------------------------------------------- */

let age = 20;
if(age >= 14 && age <= 90) {
  console.log('')
}


// if(age <= 14 && age >= 90)
// if(age >= 14 && age <= 90)


// let a = 10;
// let b = '';
// let value = Boolean(b);

// 논리곱(그리고) 연산자
// let AandB = a && b;

// 논리합(또는) 연산자
// let AorB = a || b;

// 부정 연산자
// let reverseValue = a != b;


// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && ' ' && [] && {thisIsFalsy:false};

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || '' || [2.3].length || {thisIsTruthy:true};

let pw;

let userName = prompt('사용자 이름 입력');
if (userName === 'admin') {
  prompt('비밀번호 입력')
} else {
  console.log('취소되었습니다');
} 

if (pw === 'master') {
  prompt('환영');
} else if (pw !== 'master'){
  console.log('인증에 실패하였습니다')
} else {
  console.log('입력 취소되었습니다');
}