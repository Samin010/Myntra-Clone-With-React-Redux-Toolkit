import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsActions } from "../store/itemsSlice";
import { fetchStatusActions } from "../store/fetchStatusSLice";
function FetchItems() {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();
  useEffect(() => {
    if (fetchStatus.fetchDone) return;
    dispatch(fetchStatusActions.markFetchingStarted())

    fetch("http://localhost:8080/items")
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(fetchStatusActions.markFetchingFinished());
        dispatch(fetchStatusActions.markFetchDone());
        dispatch(itemsActions.addInitialItems(items[0]));
      });
  }, [fetchStatus]);
  return <></>;
}

export default FetchItems;
