import  {Navbar} from "./components/Navbar/Navbar";
import './App.css'
import Welcome from "./components/Welcome/Welcome";
import Tab from "./components/Tabs/Tab";
import Tabs from "./components/Tabs/Tabs";
import Chart from "./components/Chart/Chart";

function App() {
  return (
    <div>
      <Navbar/>
      <br/>
      <Welcome/>
      <br/>
      {/* <Chart/> */}
      <br/>
      <Tabs/>
      <br/>
      <br/>
    </div>
  );
}

export default App;
