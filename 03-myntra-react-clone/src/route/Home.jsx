import { useSelector } from "react-redux";
import HomeItem from "../Components/HomeItem";

function Home() {
  const item = useSelector((store) => store.item);
  return (
    <main>
      <div className="items-container">
        {item.map((item) => (
          <HomeItem key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
}

export default Home;
