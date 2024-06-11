export function validateRequired({ category, description, price }) {
  // TODO: 값이 존재하는지
  // category는 문자열형태이므로, 인자로써 "",null, undefined 값이 올것임. -> 
  // 방법1. Boolean(catrgory) 사용
  // 방법2. !!catrgory 
  // description과 price에도 마찬가지로 적용.
  return Boolean(category) && Boolean(description) && Boolean(price) && (price > 0) ;
}



export function validatePrice(currentFunds, currentAmount) {
  // TODO: 금액이 현재 자산보다 이하인지
  return currentFunds >= currentAmount ;
}

