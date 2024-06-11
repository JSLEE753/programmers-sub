export function addNewHistory(newHistory) {
  try {
    // TODO:
    /**
     * - store의 detailList 새로 갱신
     * - store.currentFunds 새로 갱신
     */
    if (store.detailList[store.todayId]){
      store.detailList[store.todayId].push(newHistory) ; 
    } else {
      store.detailList[store.todayId] = [newHistory]
    }

    store.currentFunds -= newHistory.amount;
    console.log('store' , store)

    updateStorage();
    return true;
  } catch (error) {
    alert(error);
    return false;
  }
}


 
export function removeHistory(dateId, itemId) {
  try {
    // TODO:
    /**
     * - store의 detailList 새로 갱신
     * - store.currentFunds 새로 갱신
     */

    // 기존 배열 -> 삭제할 요소를 제거한 배열 -> 재할당 
    // └─ filter 함수 이용
    store.detailList[dateId] = store.detailList[dateId].filter(({id , amount }) =>{
      if(id === Number(itemId)){
        store.currentFunds += amount ; 
      }
      return id !== Number(itemId);
    });

    updateStorage();
    return true;
  } catch (error) {
    alert(error);
    return false;
  }
}