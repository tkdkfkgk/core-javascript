/* ---------------------------------------------------------------------- */
/* Do While Loop                                                          */
/* ---------------------------------------------------------------------- */

// let i = 10
// do{
//   console.log(i);
//   i++
// }while(i<5);

// do ~ while 문 (역순환)
// - prompt 창을 띄워 사용자로 하여금 순환 횟수를 요청
// - 사용자로부터 요청된 횟수 만큼 역방향으로 순환 출력
// - 사용자로부터 요청된 횟수가 0보다 작을 경우, 
//   '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.' 출력
// - 순환 중단

// let count = prompt('ㅅㅎ','');

// do{
//   console.log(count);

//   if (count <= 0 || !count){
//     console.log('최초 실행');
//     break;
//   }

//   count--;
// }while(count)

// do ~ while 문 (순환)
// - 위 do ~ while 문을 순방향으로 순환되도록 설정

let first = document.querySelector('.first'); // 문서에있는 쿼리셀렉터로 돔의 .first를 가져옴
let second = document.querySelector('.second'); 

// 엘리먼트 노드에 p랑div 태그만 있는데 돔에서 불러온 태그는 span 이잖아요? 근데 왜 같죠
// function next(node){
//   do{
//     node = node.nextSibling;
//   }while(node.nodeType !== document.ELEMENT_NODE)

//   return node
// }

// console.log(next(first));

// next(first) // second

// prev(second) // first
// function prev(node){
//   do{
//     node = node.previousSibling;
//   }while(node.nodeType !== document.ELEMENT_NODE)

//   return node
// }

// console.log(prev(second));

do{
  console.log(1, first, first.nodeType);
  first = first.nextSibling;
}while(first.nodeType !== document.ELEMENT_NODE)

console.log(2, first);
console.log(3, document.ELEMENT_NODE);