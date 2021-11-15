import React from "react";

export default function Showitems(props) {
    return (
        <>
            {
                props.ShowitemsMethods.items.map((elemnt, index) => {
                    return (
                        <div className="Show_items" key={index}>
                            <h3>{elemnt}</h3>
                            <button className="delete_list_btn" onClick={() => props.ShowitemsMethods.deleteItems(index)} >Delete Items</button>
                        </div>
                    )
                })
            }
        </>
    );
}