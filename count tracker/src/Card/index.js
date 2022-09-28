import { Component } from "react";
import remove from "../image/remove.jpg";

class Card extends Component {
  constructor(props) {
    super(props);


  }

componentWillUnmount(){
  this.props.count(this.props.id)
  console.log();
}


  render() {
    const { id , toggleMount , } = this.props;
    return (
      <>
        <div className="card">
            <div className="content">{id}</div>
        <img className="image" alt="remove" src={remove} onClick={(e)=>toggleMount(e,id)}></img>
        </div>
      </>
    );
  }
}

export default Card;
