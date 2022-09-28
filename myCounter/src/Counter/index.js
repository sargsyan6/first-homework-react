import { Component } from "react";
import "../App.css";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  add = () => {
    if (this.state.count + +this.props.step > +this.props.max) {
      this.setState({ count: +this.props.max });
    } else if (this.state.count >= this.props.min) {
      this.setState({ count: this.state.count + +this.props.step });
    }
  };

  sub = () => {
    if (this.state.count - +this.props.step < +this.props.min) {
      this.setState({ count: +this.props.min });
    } else {
      this.setState({ count: this.state.count - +this.props.step });
    }
  };

  reset = () => {
    this.setState({ count: this.props.min });
  };

  render() {
    const { count } = this.state;
    const { min, max, step } = this.props;
    return (
      <>
        <div className="div">
          <div>
            <h1>Count is {count}</h1>
            <button
              className="btn"
              disabled={+this.props.max <= count}
              onClick={this.add}
            >
              Increase
            </button>
            <button
              className="btn"
              disabled={+this.props.min >= count}
              onClick={this.sub}
            >
              Decrease
            </button>
            <button className="btn" onClick={this.reset}>
              Reset
            </button>
          </div>
        </div>
        {min === max ? (
          <div className="value">
            <p>Please change min and max values</p>
          </div>
        ) : count === max ? (
          <div className="value">
            <p>maxValue</p>
          </div>
        ) : count === min ? (
          <div className="value">
            <p>minValue</p>
          </div>
        ) : (
          false
        )}
      </>
    );
  }
}

export default Counter;
