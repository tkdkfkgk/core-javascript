
/* readyState
  0: uninitalized // 초기화 
  1: loading // 로딩
  2: loaded // 로딩이 완료된 
  3: interactive // 인터랙티브
  4: complete // 완료 
  */

// xhrData 함수 만들기 method, url 

function xhrData({
  url = '',
  method = 'GET',
  body = null,
  onSuccess = null,
  onFail = null,
  headers = {
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin': '*',
  },
  
} = {}){
  // const {url,method,body} = options;

  const xhr = new XMLHttpRequest();
  // console.log(xhr);
  // 비동기 통신 오픈
  xhr.open( method, url)
  
  // Object.entries(headers).forEach(([key,value])=>{
  //   xhr.setRequestHeader(key,value);
  // })

  xhr.addEventListener('readystatechange',()=>{
    const {status,readyState,response} = xhr; // 객체 구조 분해 할당 

    if(status >= 200 && status < 400){
      if(readyState === 4){
        console.log('통신 성공');
        onSuccess(JSON.parse(response));
      }  
    }else{
      onFail('통신 실패');
    }
  })
  // 서버에 요청
  xhr.send(JSON.stringify(body));
}

// xhrData({
//   url:'https://jsonplaceholder.typicode.com/users',
//   onSuccess: (result)=>{
//     console.log(1,result);
//   },
//   onFail: (err)=>{
//     console.error(2,err);
//   }
// })

xhrData.get = (url,onSuccess,onFail)=>{ // get은 그냥 이름 지은거, xhrData의 get함수
  xhrData({
    url,
    onSuccess,
    onFail
  })
}

xhrData.post = (url,body,onSuccess,onFail)=>{
  xhrData({
    method:'POST',
    body,
    url,
    onSuccess,
    onFail
  })
}

xhrData.put = (url,body,onSuccess,onFail)=>{
  xhrData({
    method:'PUT',
    body,
    url,
    onSuccess,
    onFail
  })
}

xhrData.delete = (url,onSuccess,onFail)=>{
  xhrData({
    method:'DELETE',
    url,
    onSuccess,
    onFail
  })
}

xhrData.get(
  'https://jsonplaceholder.typicode.com/users',
  (res)=>{ // result
    console.log(res);
  },
  (err)=>{
    console.log(err);
  }
)

/* 
xhrData('POST','https://jsonplaceholder.typicode.com/users',{
  "name": "kindtiger",
  "username": "seonbeom",
  "email": "tiger@euid.dev",
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  },
  "phone": "010-7169-0262",
  "website": "hildegard.org",
  "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  }
})
 */


/* 
let movePage = function (주소,성공,실패){
  // 조건에 따라 조건이 잘 맞으면 성공() || 실패()
  if(주소 === '네이버'){
    성공(주소);
  }else{
    실패();
  }
};
movePage(
  '네이바',
  (주소)=>{
    console.log('3초후 '+ 주소 +'로 이동합니다.');
    setTimeout(() => {
      window.location.href = 'https://www.naver.com/'
    }, 3000);
  }
  ,
  ()=>{
    console.log('잘못된 주소를 입력했습니다.');
  })
 */