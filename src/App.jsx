import Tab from "./components/tab/Tab";
import Accordions from "./components/accordion/Accordion";
import TrafficLight from "./components/traffic-light/TrafficLight";
import ColorBox from "./components/color-box/ColorBox";
import JobsBoard from "./components/jobs-board/JobsBoard";
import PreventComponentRerender from "./components/prevent-components-rerender/PreventComponentRerender";
import SkipFirstRender from "./components/skip-first-render/SkipFirstRender";

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

      <div className="wrapper">
        <div className="container">
          <h1 style={{ color: "orange" }}>Jobs Board</h1>
          <JobsBoard />
        </div>
      </div>

      <div className="wrapper">
        <div className="container">
          <h1>Skip First Render</h1>
          <SkipFirstRender />
        </div>
      </div>

      <div className="wrapper">
        <div className="container">
          <PreventComponentRerender />
        </div>
      </div>
    </>
  );
}

export default App;
