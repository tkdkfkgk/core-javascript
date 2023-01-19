/* global gsap */

import { 
  // xhrData,
  insertLast,
  // xhrPromise,
  tiger,
  delayP,
  getNode as $,
  renderUserCard,
  changeColor,
  renderSpinner,
  renderEmptyCard,
  attr
} from "./lib/index.js";

// rendingUserList 함수 만들기 
// ajax (tiger) get user List

// 유저 카드 생성
// 생성된 카드로 랜더링 

//  1. userList.js로 갑니다.
//  2. renderUserCard 함수를 만들기
//  3. 만들어진 함수 안에 createUserCard를 던지고,
//  4. renderUserCard함수를 사용했을 때  랜더링이 잘 될 수 있도록.

const userCardContainer = $('.user-card-inner');

async function rendingUserList(){
  
  renderSpinner(userCardContainer)

  try{
    // await delayP(100);

    $('.loadingSpinner').remove();

    let response = await tiger.get('http://localhost:3000/users');
    
    let userData = response.data;
  
    // console.log(userData);
    // for(let i=0; i<userData.length; i++){
    //   renderUserCard(userCardContainer,userData)
    // }
  
    // userData.forEach(data=> renderUserCard(userCardContainer,data))
    
    userData.forEach((data)=> {
      renderUserCard(userCardContainer,data)
    })
    // renderUserCard(userCardContainer,userData)
  
    // 객체 하나만 받아서 랜더링
    // console.log(gsap.utils.toArray('user-card'));
  
    changeColor('.user-card')
    gsap.to(gsap.utils.toArray('.user-card'),{
      x:0,
      opacity:1,
      duration:1.5,
      stagger:0.2
      // duration:3,
    })
  }catch(err){
    // console.log(err);
    renderEmptyCard(userCardContainer)
  }
}

rendingUserList();

// 삭제 버튼을 클릭하면 콘솔창에 '삭제' 글자가 출력이 될 수 있도록 만들어 주세요.

function handler(e){
  let deleteButton = e.target.closest('button');
  let article = e.target.closest('article');

  if(!deleteButton || !article) return;

  let id = attr(article,'data-index').slice(5);

  tiger.delete(`http://localhost:3000/users/${id}`).then(()=>{
    userCardContainer.innerHTML = '';
    rendingUserList();
  })


  console.log(id);
  console.log(2,deleteButton);
  console.log(3,article);
}

userCardContainer.addEventListener('click',handler)

// xhrPromise
// .get('https://jsonplaceholder.typicode.com/users/1')
// .then((res)=>{
//   insertLast(document.body,JSON.stringify(res));
// })
// .catch((err)=>{
//   console.log(err);
// })

/* xhrData.get(
  'https://jsonplaceholder.typicode.com/users/1',
  (res)=>{
    insertLast('body',JSON.stringify(res))
  },
  (err)=>{
    insertLast('body','데이터 로딩에 실패했습니다.')
  }
)

 */

/* 


 */

/* async function render(){

  await delayP(2000,{nn:'aa'});
  let response = await tiger.get('https://jsonplaceholder.typicode.com/users/1')

  console.log(response.data);
}
render() */