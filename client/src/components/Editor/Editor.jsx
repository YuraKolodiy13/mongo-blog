import React, {useState} from "react";
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import quillEmoji from 'quill-emoji';
import './Editor.scss'
import "quill-emoji/dist/quill-emoji.css";

const Editor = (props) => {

  const { EmojiBlot, ShortNameEmoji, ToolbarEmoji } = quillEmoji;

  Quill.register({
    'formats/emoji': EmojiBlot,
    'modules/emoji-shortname': ShortNameEmoji,
    'modules/emoji-toolbar': ToolbarEmoji,
  }, true);


  const [formats] = useState([
    'bold', 'italic', 'underline', 'strike',
    'size',
    'emoji',
    'image'
  ]);

  const [modules] = useState({
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'size': ['small', false, 'large'] }],
      ['emoji'],
      ['image'],
    ],
    'emoji-toolbar': true,
    "emoji-shortname": true,
  });

  return (
    <ReactQuill
      onChange={props.onTextFieldChange}
      value={props.textAreaInput}
      modules={modules}
      formats={formats}
      placeholder={props.placeholder}
    />
  )
};

export default Editor;