
import React from "react"

class Mycomponent extends React.Component {

    state = {
        name: "dongnguyen",
        address: "bienhoa",
        age: 32
    }

    render() {
        return (
            <div>
                My name is {this.state.name} I'm {this.state.age}
            </div>
        )
    }
}
export default Mycomponent;