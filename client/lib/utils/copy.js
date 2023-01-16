export function copy(text){
  return navigator.clipboard.writeText(text); // writeText 매개변수로 받은 값을 클립보드에 써주는 역할
}