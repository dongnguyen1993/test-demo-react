
import React from "react"

class Mycomponent extends React.Component {

    state = {
        name: "dong",
        address: "bienhoa",
        age: 32
    }

    handleClick(event) {
        console.log("My event click!")
        console.log("My name is ", this.state.name)

        this.setState({
            name: "dongnguyen",
            age: Math.floor((Math.random() * 100) + 1)
        })

    }

    handleonMouseOver(event) {
        console.log(event.pageX);
    }

    render() {
        return (
            <div>
                My name is {this.state.name} I'm {this.state.age}
                <div>
                    <button onClick={(event) => { this.handleClick(event) }}  >click me</button>
                    <button onMouseOver={(event) => { this.handleonMouseOver(event) }}
                        onClick={(event) => { this.handleClick(event) }}  >hover me</button>
                </div>


            </div >
        )
    }
}
export default Mycomponent;