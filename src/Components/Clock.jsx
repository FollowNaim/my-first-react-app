import React from 'react'
class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {time: new Date()};
  }
  componentDidMount(){
    setInterval(()=>{
      this.setState({
        time: new Date()
      })
    },1000)
  }
  render(){
    return(
    <>
    <span class="text-center p-4 text-[25px] inline-block mt-8 mx-[8rem]">{this.state.time.toLocaleTimeString(this.props.locale)}</span>
    </>
    )
  }
}


export default Clock;