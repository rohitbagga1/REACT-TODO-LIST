import React, { useState } from 'react';
import '../../index.css';
import Maininner from './Maininner';

export default function Main() {
    /**
     * Returns inputdata an empty string and setInputdata to modify 
     * empty value of inputdata
     *
     * @param {string} '' The blank string as inputdata.
     */  
    const [inputData, setInputdata] = useState('');
    
    /**
     * Returns items an empty array and setitems to modify 
     * empty value of items array
     *
     * @param {array} '' The empty array as items.
     */
    const [items, setItems] = useState([]);
   
    /**
     *  method to add Todo list items
     */
    const addItems = () => {

        if (inputData) {
            setItems([...items, inputData]);
            setInputdata('');
            return true;
        } else {
            alert('please fill the input field');
        }
    }

    /**
     *  method to delete Todo list items
     */
    const deleteItems = (id) => {

        const result = items.filter((ele, index) => {
            return index != id;
        });
        setItems(result);
    }
    /**
     *  passing all required methods to maininner component as a prop
     */
    const maininnerMethods = {
        inputData: inputData,
        setInputdata: setInputdata,
        items: items,
        deleteItems: deleteItems,
        addItems: addItems
    }

    return (
        <div className="main">
            <Maininner  maininnerMethods={maininnerMethods}  />
        </div>
    );
}