import React from "react";
import BasicModal from "./BasicModal";
import Showitems from "./Showitems";

export default function Maininner (props){
    const ShowitemsMethods = {
        deleteItems: props.maininnerMethods.deleteItems,
        items: props.maininnerMethods.items
    }

    return (
        <div className="main-inner" >
                <h1>Todo List</h1>
                <BasicModal inputData={props.maininnerMethods.inputData} setInputdata={props.maininnerMethods.setInputdata} additems={props.maininnerMethods.addItems} />
                <Showitems ShowitemsMethods={ShowitemsMethods} />
            </div>
    );
}