import { useSelector } from "react-redux";
import BagItem from "../Components/BagItem";
import BagSummary from "../Components/BagSummary";

function Bag() {
  const bagItems = useSelector((state) => state.bag);
  const items = useSelector((state) => state.item);
  const finalItems = items.filter((item) => {
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >= 0;
  });
  console.log(finalItems);
  return (
    <>
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            {finalItems.map((item) => (
              <BagItem key={item.id} item={item} />
            ))}
          </div>
          <BagSummary />
        </div>
      </main>
    </>
  );
}

export default Bag;
