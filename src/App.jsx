import Tab from "./components/tab/Tab";
import Accordions from "./components/accordion/Accordion";
import TrafficLight from "./components/traffic-light/TrafficLight";
import ColorBox from "./components/color-box/ColorBox";

function App() {
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <h1>Traffic Light</h1>
          <TrafficLight />
        </div>
      </div>

      <div className="wrapper">
        <div className="container">
          <h1>Tabs</h1>
          <Tab />
        </div>
      </div>

      <div className="wrapper">
        <div className="container">
          <h1>Accordion</h1>
          <Accordions />
        </div>
      </div>

      <div className="wrapper">
        <div className="container">
          <h1>Color Box</h1>
          <ColorBox />
        </div>
      </div>
    </>
  );
}

export default App;
