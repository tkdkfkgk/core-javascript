export const memo = (() => {
  const cache = {};

  return (key,callback)=>{
    if(!callback) return cache[key];
  
    if(cache[key]){
      console.warn(`${key} 값은 이미 캐시된 값이 존재합니다`);
      return;
    }
  
  
    cache[key] = callback();
    console.log(cache);
  }
})()

// memo('cube',()=>document.querySelector('#cube')); // 함수로 넣는 이유는 많은 양을 넣기 위해서
// memo('cube',()=>'난 큐브')
// console.log(memo('cube'));