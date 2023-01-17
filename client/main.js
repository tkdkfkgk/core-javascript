// console.log(window);

import { insertLast, xhrData } from "./lib/index.js";

xhrData.get(
  'https://jsonplaceholder.typicode.com/users/1',
  (res)=>{
    console.log(5,res);
    insertLast('body',JSON.stringify(res))
  },
  (err)=>{
    insertLast('body','데이터 로딩 실패')
  }
)