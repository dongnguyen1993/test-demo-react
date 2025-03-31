import React from "react";
import { initializeUseSelector } from "react-redux/es/hooks/useSelector";

class UserInfo extends React.Component {
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

    handleOnChangeInput(event) {
        this.setState({
            name: event.target.value
        })
    }

    handleOnChangeAge(event) {
        this.setState({
            age: event.target.value
        })
    }

    handleOnSubmit(event) {
        event.preventDefault(); // hàm dùng để ngăn load lại trang của sự kiện submit
        console.log(this.state)
    }
    render() {
        return (
            <div>
                My name is {this.state.name} I'm {this.state.age}
                <div>
                    <button onClick={(event) => { this.handleClick(event) }}  >click me</button>
                </div>
                <form onSubmit={(event) => { this.handleOnSubmit(event) }}>
                    <div>
                        <label>Name : </label>
                        <input type="text"
                            value={this.state.name}
                            onChange={(event) => { this.handleOnChangeInput(event) }}>
                        </input>
                    </div>
                    <div>
                        <label>Age : </label>
                        <input type="text"
                            value={this.state.age}
                            onChange={(event) => { this.handleOnChangeAge(event) }}>
                        </input>
                    </div>
                    <div><button>Submit</button></div>

                </form>
            </div>
        )
    }
}

export default UserInfo