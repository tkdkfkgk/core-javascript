/* ---------------------------------------------------------------------- */
/* Nullish Coalescing Operator                                            */
/* ---------------------------------------------------------------------- */

let emailAddress;
let receivedEmailAddress;

if (emailAddress === undefined || emailAddress === null) {
  receivedEmailAddress = 'user@company.io';
} else {
  receivedEmailAddress = emailAddress;
}

// 3항 연산자 (ternary) 를 사용한 식으로 변경합니다.
receivedEmailAddress = (emailAddress === undefined || emailAddress === null) ? 'user@company.io' : emailAddress;


// 위 조건 처리문을 nullish 병합 연산자를 사용한 식으로 변경합니다.
receivedEmailAddress = emailAddress ?? 'user@company.io';

/* ?? vs. || ----------------------------------------------------------- */
// || → 첫번째 Truthy 값을 반환
// ?? → 첫번째 정의된(defined) 값을 반환

// 사용자가 넣었다고 판단하면 앞에껄 반환
const width = '10px';

console.log(null || width);
console.log(null ?? width);

console.log(undefined || width);
console.log(undefined ?? width);

console.log(false || width);
console.log(false ?? width); // 사용자가 일부러 정의했다 해서 그대로 false 값 출력

console.log('' || width);
console.log('' ?? width);