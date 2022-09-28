import { Component } from "react";
import "./App.css";

import Show from "./Show";
import Card from "./Card";

class App extends Component {
  constructor() {
    super();
    this.state = {
      arrInfo: [
        {
          id: 1,
          count: 0,
          unmounted: false,
        },
        {
          id: 2,
          count: 0,
          unmounted: false,
        },
        {
          id: 3,
          count: 0,
          unmounted: false,
        },
        {
          id: 4,
          count: 0,
          unmounted: false,
        },
      ],
      isReported:false
    };
  }

  toggleMount = (e,id) => {
    
    this.setState({
      arrInfo:this.state.arrInfo.map((item)=>{
        if(item.id===id){
          return (
            {
              ...item,
              unmounted:!item.unmounted
            }
          )
        }
        else{
          return item
        }
      })
    })
  };

  count = (id)=>{
    this.setState({
      arrInfo:this.state.arrInfo.map((item)=>{
        if(item.id===id){
          return (
            {
              ...item,
              count:item.count + 1
            }
          )
        }
        else{
          return item
        }
      })
    })
  }


  render() {
    const {arrInfo,isReported}= this.state;
    return (
      <>
        <div className="container">
          <div className="card-container">
            {arrInfo.map((item) =>
              item.unmounted ? (
                <Show key={item.id} {...item} toggleMount={this.toggleMount}/>
              ) : (
                <Card {...item} count={this.count} toggleMount={this.toggleMount} key={item.id}  />
              )
            )}
          </div>

          <button onClick={()=>{
            this.setState({isReported:!isReported})
          }} className="report">{!isReported?"Report":"Close"}</button>

          {isReported&&<div>
          {arrInfo.map((item)=>{
            return <p key={item.id} className="count-info">{`Card Number ${item.id} unmounted ${item.count} times`}</p> 
          })}
          </div>}
        </div>
      </>
    );
  }
}

export default App;
