import { useState } from "react";
import PropTypes from "prop-types";

const tabs = [
  {
    id: 0,
    title: "HTML",
    content:
      "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
  },

  {
    id: 1,
    title: "CSS",
    content:
      "Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.",
  },

  {
    id: 2,
    title: "JavaScript",
    content:
      "JavaScript is a high-level, interpreted programming language that conforms to the ECMAScript specification.",
  },
];

function Tab({ id, tabItem, onTabClickHandler }) {
  const isActive = tabItem.id === id;

  return (
    <button
      className={`btn btn--purple ${isActive ? "active" : ""}`}
      onClick={() => onTabClickHandler(tabItem)}
    >
      {tabItem.title}
    </button>
  );
}

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const onTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div
        style={{
          margin: "2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        {tabs.map((tab) => {
          return (
            <Tab
              key={tab.id}
              id={tab.id}
              tabItem={tab}
              onTabClickHandler={onTabClick}
            />
          );
        })}
      </div>
      <div>{activeTab.content}</div>
    </>
  );
}

Tab.propTypes = {
  id: PropTypes.number.isRequired,
  tabItem: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }),
  onTabClickHandler: PropTypes.func.isRequired,
};
