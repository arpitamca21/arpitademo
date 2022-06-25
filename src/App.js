import "./App.css";

const Name = ({ name }) => {
  return <div className="Name">{name}</div>;
};

const Details = (props) => {
  if (props?.city) {
    return <div className="DLeft">{props.city}</div>;
  }

  if (props?.country) {
    return <div className="DRight">{props.country}</div>;
  }
  return null;
};

const App = () => {
  const student = {
    name: "Arpita Tanwar",
    city: "New Delhi",
    country: "India",
  };

  return (
    <div className="App">
      <Name name={student.name} />
      <Details city={student.city} />
      <div className="Gap"></div>
      <Details country={student.country} />
    </div>
  );
};

export default App;
