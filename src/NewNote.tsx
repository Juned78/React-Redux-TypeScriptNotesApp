import React, { ChangeEvent } from 'react'

interface NewNoteProps {
    addNote(note:string):void;
}

export const NewNote:React.FC<NewNoteProps>=({ addNote })=> {
    const [note ,setNote] = React.useState("");

const updateNote = (event:ChangeEvent<HTMLInputElement>) => {
    setNote(event.target.value);
};

const onAddNoteClick = () =>{
    addNote(note);
    setNote("");
};

    return (
        <>
            <div>
                <input
                onChange={updateNote}
                value={note} 
                type="text" 
                name="note" 
                placeholder="Note" />
                <button onClick={onAddNoteClick}>Add notes</button>
            </div>
        </>
    )
}

