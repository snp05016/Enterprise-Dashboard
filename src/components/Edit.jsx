import React, { useState, useRef } from 'react';
import JoditEditor from "jodit-pro-react";

const Edit = ({ setHtmlContent }) => {
  
  const [editors, setEditors] = useState([{ id: 1, content: '' }]);
  const [theme, setTheme] = useState('light');
  const editorRefs = useRef([]);

  const addEditor = () => {
    setEditors([...editors, { id: editors.length + 1, content: '' }]);
  };

  const handleEditorChange = (id, newContent) => {
    const updatedEditors = editors.map(editor => 
      editor.id === id ? { ...editor, content: newContent } : editor
    );
    setEditors(updatedEditors);
    const allContent = updatedEditors.map(editor => editor.content).join('<br/>');
    setHtmlContent(allContent);
  };

  const config = {
    theme: 'light',
    readonly: false,
    uploader: {
      url: 'https://xdsoft.net/jodit/finder/?action=fileUpload'
    },
    filebrowser: {
      ajax: {
        url: 'https://xdsoft.net/jodit/finder/'
      },
      height: 580,
    }
  };

  return (
    <div className={`editor ${theme}`}>
      {editors.map((editor, index) => (
        <JoditEditor
          key={editor.id}
          ref={el => (editorRefs.current[index] = el)}
          value={editor.content}
          config={config}
          tabIndex={1}
          onBlur={newContent => handleEditorChange(editor.id, newContent)}
          onChange={newContent => {}}
        />
      ))}
      {/* <button onClick={addEditor} className="add-editor-button">+</button> */}
    </div>
  );
};

export default Edit;
