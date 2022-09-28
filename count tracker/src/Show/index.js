import { Component } from "react";

class Show extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { id, toggleMount } = this.props;
    return (
      <>
        <div className="show">
          <button onClick={(e) => toggleMount(e, id)}>show</button>
        </div>
      </>
    );
  }
}

export default Show;
