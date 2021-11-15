import * as React from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { height } from '@mui/system';


const Textareastyle = {
    width: "100%",
    height: "100px",
    overflow: "hidden"
}

const css = {
    addButton: {
        backgroundcolor: "green"
    },
    deleteButton: {
        backgroundcolor: "red"
    }
}

const buttons = {
    add: () => {
        return (
            <button style={css.addButton}>Add Todo List</button>
        );
    },

    delete: () => {
        return (
            <button style={css.deleteButton}>delete</button>
        );
    }
}

export default function Textarea(props) {
    return (
        <>
            <TextareaAutosize style={Textareastyle}
                value={props.inputData}
                aria-label="empty textarea"
                placeholder="Create Todo List"
                onChange={(e) => props.setInputdata(e.target.value)}
            />
        </>
    );
}