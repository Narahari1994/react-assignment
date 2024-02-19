import Navbar from "./components/Navbar";
import Orders from "./components/Orders";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Sidebar />
        <Orders />
      </div>
    </>
  );
}

export default App;
