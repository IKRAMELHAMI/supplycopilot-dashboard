import Header from "./components/Header";
import StockDashboard from "./components/StockDashboard";
import AlertBanner from "./components/AlertBanner";
import { stockData } from "./data/mockData";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <Header />
      <AlertBanner data={stockData} />
      <StockDashboard data={stockData} />
    </div>
  );
}

export default App;
