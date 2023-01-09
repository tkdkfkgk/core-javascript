/* ---------------------------------------------------------------------- */
/* Array's Methods                                                        */
/* ---------------------------------------------------------------------- */

// Array.isArray
const arr = [10,100,1000,10000]
console.log(typeof arr)

function isArray(data){
  return Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'array'
}

function isNull(data){
  return Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'null'
}

console.log(Array.isArray([]))
/* 요소 순환 -------------------------------------------------------------- */

// forEach
const user = {}

arr.forEach((item,index)=>{
  this[index] = item;
  // console.log(this);
},user)

/* 원형 파괴 -------------------------------------------------------------- */

// push
// pop
// unshift
// shift
// reverse
// arr.reverse()
// console.log(arr)

// splice
arr.splice(1,0,23,5) // 순서대로 시작인덱스, 제거대상, 추가배열요소
// console.log(arr)

// 반환 값 < 0 : a가 b보다 앞에 있어야 한다
// 반환 값 = 0 : a와 b의 순서를 바꾸지 않는다
// 반환 값 > 0 : b가 a보다 앞에 있어야 한다
// sort
arr.sort((a,b)=>{
  return a - b
})
console.log(arr)

/* 새로운 배열 반환 --------------------------------------------------------- */

// concat
// slice
// map

let todo = ['밥먹기','미용실가기','코딩공부하기'];

let template = todo.map((todoList)=>{
  return /* html */ `<li>${todoList}</li>`
})

template.forEach((item) => {
  document.body.insertAdjacentHTML("beforeend", item);
});

// console.log(template)

let newArray = arr.map(item=> item *= 2) // thisArg 는 자기자신을 찾나?
// console.log(1, newArray)

/* 요소 포함 여부 확인 ------------------------------------------------------ */

// indexOf
// console.log(arr.indexOf(100))
// lastIndexOf
// includes
// console.log(arr.includes(23))

/* 요소 찾기 -------------------------------------------------------------- */
const users = [
  {id:1,name:'로운'},
  {id:2,name:'승택'},
  {id:3,name:'연주'},
]
// find
const find = users.find((item,index)=>{
  return item.id < 5
})
// console.log(find)
// findIndex
const findIndex = users.findIndex((item,index)=>{
  return item.id === 1
})
// console.log(findIndex)
/* 요소 걸러내기 ----------------------------------------------------------- */

// filter
let result = arr.filter((number)=>{
  return number > 100
})
// console.log(result)

/* 요소별 리듀서(reducer) 실행 ---------------------------------------------- */
const friends = [
  {
    name: '윤보라',
    age: 28,
    job: '작꼬져',
  },
  {
    name: '이로운',
    age: 23,
    job: '배고픈 개발자',
  },
  {
    name: '오승택',
    age: 21,
    job: '물음표살인마',
  }
];
// reduce
let age = friends.reduce((a,c)=>{
  return a + c.age
},0)

let template2 = todo.reduce((acc,cur,index)=>{
  return /* html */ acc + `<li>할일${index + 1} : ${cur}</li>`
},'')

console.log(template2)
console.log(age)
// reduceRight

/* string ←→ array 변환 ------------------------------------------------- */

let str = '성찬 보경 일범 세민 형진 주현'
// split
let nameArray = str.split(' ');
console.log(nameArray);
// join
console.log(nameArray.join(' / '))

// [
//   {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//       "street": "Kulas Light",
//       "suite": "Apt. 556",
//       "city": "Gwenborough",
//       "zipcode": "92998-3874",
//       "geo": {
//         "lat": "-37.3159",
//         "lng": "81.1496"
//       }
//     },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//       "name": "Romaguera-Crona",
//       "catchPhrase": "Multi-layered client-server neural-net",
//       "bs": "harness real-time e-markets"
//     }
//   },
// ]
