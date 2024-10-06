import HomePage from "./components/Home/HomePage";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";

export default function App() {
  return (
    <div>
      <div class="sm:h-screen h-full bg-custom-orange">
        <div class="text-2xl tailwind-menu z-50 sticky top-0 w-full p-0 bg-custom-orange rounded shadow">
          <Navbar />
        </div>
        <div>
          <HomePage />
        </div>
      </div>
      <div>
        <Products />
      </div>
    </div>
  );
}
