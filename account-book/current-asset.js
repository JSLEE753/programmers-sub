export function renderCurrentAsset() {
  // TODO: 숫자에 콤마 작성 -> toLocaleString() 사용
  // TODO: currentFunds가 없는 경우 -> 
  // 방법1. if(store.currentFunds) 
  // 방법2. 삼항연산자 사용 : store.currentFunds ?
  // $currentAssetValue.textContent = store.currentFunds ? store.currentFunds.toLocaleString() : "-";
  // 방법3. Optional Chaining : store.currentFunds?.toLocaleString() ?? "-";
  $currentAssetValue.textContent = store.currentFunds?.toLocaleString() ?? "-";
  $currentAssetInput.value = store.currentFunds;
}