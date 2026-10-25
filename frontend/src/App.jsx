// ebd bn'b: the whole page, built from components (Lab 6)
import Header from "./components/Header.jsx";
import ListingCard from "./components/ListingCard.jsx";
import listings from "./data/listings.js";

function App() {
  // One card per listing
  const cards = listings.map((listing) => (
    <ListingCard key={listing._id} listing={listing} />
  ));

  return (
    <main>
      <Header />
      <div className="listings">{cards}</div>
    </main>
  );
}

export default App;
