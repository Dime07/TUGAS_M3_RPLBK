import "./main.css"
import LeftChat from "../components/leftChat"
import RightChat from "../components/rightChat"
import { useState } from "react"

export default function Main(props){

    return(
        <div className="main-wrapper">
            {props.chat.map((item, index) => {
                return(
                    <div key={index} >
                        {item.type === 'left' && (
                            <LeftChat message={item.message}/>
                        )}
                        {item.type === 'right' && (
                             <RightChat  message={item.message}/>
                        )}
                    </div>
                )
            })}
        </div>
    )
}