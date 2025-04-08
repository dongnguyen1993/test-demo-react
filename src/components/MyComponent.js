
import React, { useState } from "react";
import AddUserInfo from "./AddUserInfo"
import DisplayInfo from "./DisplayInfo";
import logo from "./../logo.svg";

// class Mycomponent extends React.Component {

//     state = {
//         listUsers: [
//             { id: 1, name: "dong", age: "30", address: "Bien Hoa" },
//             { id: 2, name: "loc", age: "20", address: "tp.HCM" },
//             { id: 3, name: "hoa", age: "50", address: "Ha Noi" },
//         ]
//     }

//     handleListUsers = (userObjs) => {

//         this.setState({
//             listUsers: [userObjs, ...this.state.listUsers]
//         })

//     }

//     handleDelete = (userId) => {
//         let listUsersClone = this.state.listUsers;
//         listUsersClone = listUsersClone.filter(item => item.id !== userId)
//         this.setState({
//             listUsers: listUsersClone
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <AddUserInfo
//                     handleListUsers={this.handleListUsers}
//                 />
//                 <br />
//                 <DisplayInfo
//                     listUsers={this.state.listUsers}
//                     handleDelete={this.handleDelete}
//                 />
//             </div >
//         )
//     }
// }

const Mycomponent = (props) => {

    const [listUsers, setlistUsers] = useState(
        [
            { id: 1, name: "dong", age: "30", address: "Bien Hoa" },
            { id: 2, name: "loc", age: "20", address: "tp.HCM" },
            { id: 3, name: "hoa", age: "50", address: "Ha Noi" },
        ]
    );

    const handleListUsers = (userObjs) => {
        setlistUsers([userObjs, ...listUsers]);

    }
    const handleDelete = (userId) => {
        let listUsersClone = listUsers;
        listUsersClone = listUsersClone.filter(item => item.id !== userId)
        setlistUsers(listUsersClone);
    }
    return (
        <>
            <AddUserInfo
                handleListUsers={handleListUsers}
            />
            <br />
            <DisplayInfo
                listUsers={listUsers}
                handleDelete={handleDelete}
            />
        </>
    )
}
export default Mycomponent;