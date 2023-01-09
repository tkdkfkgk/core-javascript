/* ---------------------------------------------------------------------- */
/* Functions → Arrow                                                      */
/* ---------------------------------------------------------------------- */


const calculateTotal = (...args) => {
  // console.log(args)
  let total=0;
  args.forEach(function(item,index){
    total += item
  })

  return ;
}

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);


// 함수 선언 → 화살표 함수 (표현)식
let calcAllMoney = (a,b,c,d) => a+b+c+d;



// 화살표 함수와 this


/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
let pow; 


Array(10)
Array(10).fill(null)
Array(10).fill(1)
// Array(powerCount).fill(null)
// repeat(text: string, repeatCount: number): string;
let repeat; 

let repeatExpression = (text, repeatCount) => {return Array(repeatCount).fill(null).reduce((acc)=>acc + text,'')};
repeatExpression('qw',2);

// let repeatExpression = (text,number) =>{
//   return Array(number).fill(text).reduce((acc,cur,i)=>{
//     return acc += cur;
//   },'')
// }