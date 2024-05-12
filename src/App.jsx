import Counter from "./Counter";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Compound Component Pattern</h1>
      {/* <Counter
        iconIncrease="+"
        iconDecrease="-"
        label="My NOT so flexible counter"
        hideLabel={false}
        hideIncrease={false}
        hideDecrease={false}
      /> */}
      <Counter>
        <Counter.Decrease icon="-" />
        <Counter.Count />
        <Counter.Increase icon="+" />
        <Counter.Label>My Counter Compund Component</Counter.Label>
      </Counter>

      {/* This is now flexible and re-usable */}
      <div>
        <Counter>
          <Counter.Decrease icon="◀️" />
          <Counter.Count />
          <Counter.Increase icon="▶️" />
        </Counter>
      </div>
    </div>
  );
}

export default App;
