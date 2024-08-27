import Navbar from "./components/Navbar/Navbar";

export default function App() {
  return (
    <div class="h-screen bg-custom-orange">
      <div class="text-2xl tailwind-menu z-50 sticky top-0 w-full p-4 bg-custom-orange rounded shadow">
        <Navbar />
      </div>
    </div>
  );
}
