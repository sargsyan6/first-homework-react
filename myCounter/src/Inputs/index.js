import { Component } from "react";
import Counter from "../Counter";
import "../App.css";

class Inputs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      min: 0,
      max: 100,
      step: 1,
    };
  }

  render() {
    const { min, max, step } = this.state;
    return (
      <>
        <div className="div">
          <span>max value</span>
          <input
            className="input"
            value={max}
            onChange={(e) =>
              this.setState({
                max: isNaN(+e.target.value) ? 10 : +e.target.value,
              })
            }
            placeholder="maxValue"
            type="text"
          />

          <span>min value</span>
          <input
            className="input"
            value={min}
            onChange={(e) =>
              this.setState({
                min: isNaN(+e.target.value) ? 0 : +e.target.value,
              })
            }
            placeholder="minValue"
            type="text"
          />
<span>Step</span>
          <input
            className="input"
            value={step}
            onChange={(e) =>
              this.setState({
                step: isNaN(+e.target.value) ? 1 : +e.target.value,
              })
            }
            placeholder="Step"
            type="text"
          />
        </div>
        <Counter step={step} min={min} max={max} />
      </>
    );
  }
}

export default Inputs;
