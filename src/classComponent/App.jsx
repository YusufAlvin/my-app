import axios from "axios"
import React from "react"
import Button from "./Button"
// import {FmlxIcon} from 'fmlx-common-ui'
import './App.scss'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      show: false,
      data: [],
      value: '',
    }

    this.element = React.createRef(null)
  }

  handleClick = () => {
    this.setState({show: !this.state.show})
  }

  handleChange = (e) => {
    const newValue = e.target.value;

    if(Number(newValue)){
      this.setState({...this.state, value: e.target.value})
    } 
  }

  componentDidMount(){
    axios({
      method: 'get',
      url: 'https://jsonplaceholder.typicode.com/posts'
    })
    .then((response) => {
      const posts = response.data
      this.setState({...this.state, data: posts})
    })
  }

  render(){
    console.log(this.state.value)
    return (
      <>
        {/* <Button onClick={this.handleClick} label={this.state.show ? 'Hide' : 'Show'}/>
        {this.state.show && <div className="container" ref={this.element}></div>}
        <br/> */}
        {/* <FmlxIcon name="Eye" variant="command" customColor="black"/> */}
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
      </>
    )
  }
}

export default App