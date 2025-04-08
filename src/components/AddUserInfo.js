import React, { useState } from "react";
import { initializeUseSelector } from "react-redux/es/hooks/useSelector";

// class AddUserInfo extends React.Component {
//     state = {
//         id: "",
//         name: "dong",
//         address: "bienhoa",
//         age: 32
//     }

//     handleClick(event) {
//         console.log("My event click!")
//         console.log("My name is ", this.state.name)

//         this.setState({
//             name: "dongnguyen",
//             age: Math.floor((Math.random() * 100) + 1)
//         })
//     }

//     handleonMouseOver(event) {
//         // console.log(event.pageX);
//     }

//     handleOnChangeInput(event) {
//         this.setState({
//             name: event.target.value
//         })
//     }

//     handleOnChangeAge(event) {
//         this.setState({
//             age: event.target.value
//         })
//     }

//     handleOnSubmit(event) {
//         event.preventDefault(); // hàm dùng để ngăn load lại trang của sự kiện submit

//         this.props.handleListUsers({
//             id: Math.floor((Math.random() * 100) + 1) + "-rd",
//             name: this.state.name,
//             age: this.state.age,
//             address: this.state.address
//         });
//     }
//     render() {
//         return (
//             <div>
//                 My name is {this.state.name} <br />
//                 I'm {this.state.age} <br />
//                 My Address {this.state.address}
//                 <div>
//                     <button onClick={(event) => { this.handleClick(event) }}  >click me</button>
//                 </div>
//                 <form onSubmit={(event) => { this.handleOnSubmit(event) }}>
//                     <div>
//                         <label>Name : </label>
//                         <input type="text"
//                             value={this.state.name}
//                             onChange={(event) => { this.handleOnChangeInput(event) }}>
//                         </input>
//                     </div>
//                     <div>
//                         <label>Age : </label>
//                         <input type="text"
//                             value={this.state.age}
//                             onChange={(event) => { this.handleOnChangeAge(event) }}>
//                         </input>
//                     </div>
//                     <div>
//                         <label>Address : </label>
//                         <input type="text"
//                             value={this.state.address}
//                             onChange={(event) => { this.handleOnChangeAge(event) }}>
//                         </input>
//                     </div>
//                     <div><button>Submit</button></div>

//                 </form>
//             </div>
//         )
//     }
// }

const AddUserInfo = (props) => {

    const [name, setName] = useState("Dong");
    const [address, setAddress] = useState("bienhoa");
    const [age, setAge] = useState("32");



    const handleClick = (event) => {

        // console.log("My name is ", event)
        setName("DongNguyen");
        setAddress("Long Binh Tan");
        setAge(Math.floor((Math.random() * 100) + 1));

    }

    const handleOnChangeInput = (event) => {
        setName(event.target.value)
    }

    const handleOnChangeAge = (event) => {
        setAge(event.target.value)
    }

    const handleOnChangeAddress = (event) => {
        setAddress(event.target.value)

    }

    const handleOnSubmit = (event) => {
        event.preventDefault(); // hàm dùng để ngăn load lại trang của sự kiện submit

        props.handleListUsers({
            id: Math.floor((Math.random() * 100) + 1) + "-rd",
            name: name,
            age: age,
            address: address
        });
    }

    return (
        <div>
            My name is {name} <br />
            I'm {age} <br />
            My Address {address}
            <div>
                <button onClick={(event) => { handleClick(event) }}  >click me</button>
            </div>
            <form onSubmit={(event) => { handleOnSubmit(event) }}>
                <div>
                    <label>Name : </label>
                    <input type="text"
                        value={name}
                        onChange={(event) => { handleOnChangeInput(event) }}>
                    </input>
                </div>
                <div>
                    <label>Age : </label>
                    <input type="text"
                        value={age}
                        onChange={(event) => { handleOnChangeAge(event) }}>
                    </input>
                </div>
                <div>
                    <label>Address : </label>
                    <input type="text"
                        value={address}
                        onChange={(event) => { handleOnChangeAddress(event) }}>
                    </input>
                </div>
                <div><button>Submit</button></div>

            </form>
        </div>
    )

}

export default AddUserInfo