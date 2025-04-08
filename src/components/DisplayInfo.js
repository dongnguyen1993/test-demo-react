import React, { useEffect, useState } from "react";
import './DisplayInfo.scss'
import logo from "./../logo.svg";

// class DisplayInfo extends React.Component {

//     state = {
//         isShowHide: true
//     }
//     handleShowHide = () => {
//         this.setState({
//             isShowHide: !this.state.isShowHide
//         })
//     }
//     render() {
//         //props => viết tắt properties(tài sản) 

//         const { listUsers } = this.props;

//         return (
//             <div className="display-infor-container">

//                 <button onClick={() => { this.handleShowHide() }}>
//                     {this.state.isShowHide === true ? "Hide list Users" : "Open list Users"}
//                 </button>
//                 {this.state.isShowHide &&
//                     //Fragment <>...</>: dùng thay thế thẻ <div>
//                     <>
//                         {
//                             listUsers.map((user) => {
//                                 return (
//                                     <div key={user.id} className={+user.age > 20 ? "green" : "red"}>
//                                         <div>
//                                             My name's {user.name}
//                                         </div>
//                                         <div>
//                                             My age's {user.age}
//                                         </div>
//                                         <div>
//                                             My address's {user.address}
//                                         </div>
//                                         <button onClick={() => this.props.handleDelete(user.id)}>Delete</button>
//                                         <hr></hr>
//                                     </div>
//                                 )
//                             })
//                         }
//                     </>
//                 }
//             </div>
//         )
//     }
// }

const DisplayInfo = (props) => {
    const { listUsers } = props;

    const [isShowHide, setIsShowHide] = useState(true);

    const handleShowHide = () => {
        // alert("ok");
        setIsShowHide(!isShowHide);
    }
    useEffect(
        () => {
            // console.log(">>>>> useEffect", listUsers)
            if (listUsers.length === 0) {
                alert("Yout list is emty ! ")
            }
        }, [listUsers]
    )
    return (
        <div className="display-infor-container">

            <button onClick={() => handleShowHide()}>
                {isShowHide === true ? "Hide list Users" : "Open list Users"}
            </button>
            {
                isShowHide &&
                //Fragment <>...</>: dùng thay thế thẻ <div>
                <>
                    {
                        listUsers.map((user) => {
                            return (
                                <div key={user.id} className={+user.age > 20 ? "green" : "red"}>
                                    <div>
                                        My name's {user.name}
                                    </div>
                                    <div>
                                        My age's {user.age}
                                    </div>
                                    <div>
                                        My address's {user.address}
                                    </div>
                                    <button onClick={() => props.handleDelete(user.id)}>Delete</button>
                                    <hr></hr>
                                </div>
                            )
                        })
                    }
                </>
            }
        </div >
    )
}
export default DisplayInfo
