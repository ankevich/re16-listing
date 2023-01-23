import "./App.css";
import data from "./etsy.json"; // вместо JSON.parse можно использовать импорт

const Listing = ({ data }) => {
  return (
    <div className="item-list">
      {data.map((item) => (
        <Item item={item} key={item.listing_id} />
      ))}
    </div>
  );
};

const Item = ({ item }) => {
  const image = item.MainImage ? item.MainImage.url_570xN : "";

  const title = item.title || "";
  const shortTitle = title.length > 50 ? title.slice(0, 50) + "…" : title;

  const price =
    item.currency_code === "USD"
      ? `$${item.price}`
      : item.currency_code === "EUR"
      ? `€${item.price}`
      : `${item.price} ${item.currency_code}`;

  const priceLevel =
    item.quantity <= 10
      ? "level-low"
      : item.quantity <= 20
      ? "level-medium"
      : "level-high";

  return (
    <div className="item">
      <div className="item-image">
        <a href={item.url}>
          <img src={image} />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{shortTitle}</p>
        <p className="item-price">{price}</p>
        <p className={"item-quantity " + priceLevel}>{item.quantity}</p>
      </div>
    </div>
  );
};

function App() {
  return <Listing data={data} />;
}

export default App;
