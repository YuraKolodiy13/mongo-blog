import {useState} from "react";
import {useDispatch} from "react-redux";
import {addPostRequest} from "../../actions/posts";
import Editor from "../../components/Editor/Editor";

const Add = () => {

  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const addPost = (e) => {
    e.preventDefault();
    dispatch(addPostRequest({title, text}));
  };


  return (
    <div className="Add">
      <form onSubmit={addPost}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
        {/*<input type="text" name='text' value={state.text} onChange={onHandleChange}/>*/}
        <Editor
          textAreaInput={text}
          onTextFieldChange={setText}
          placeholder="Leave a reply..."
        />
        <button type='submit'>save</button>
      </form>
    </div>
  );
};

export default Add;
