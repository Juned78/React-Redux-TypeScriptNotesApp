import { useDispatch, useSelector } from 'react-redux';
import { addNote } from './Action';
import './App.css';
import { NewNote } from './NewNote';
import { NoteState } from './noteReducer';

function App() {
  const notes = useSelector<NoteState, NoteState["notes"]>(state => state.notes)
  const dispatch = useDispatch()

  const onAddNote = (note: string) => {
    dispatch(addNote(note))
  }

  return (
    <>
      <NewNote addNote={onAddNote} />
      <hr />
      <ul>
        {
          notes.map(note => {
            return <li key={note}>{note}</li>
          })
        }
      </ul>
    </>
  );
}

export default App;
