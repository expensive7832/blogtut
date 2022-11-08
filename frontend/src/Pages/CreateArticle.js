import React, { Component } from 'react'
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';

export class CreateArticle extends Component {

    constructor(props) {
        super(props);
        this.state = {
          editorState: EditorState.createEmpty(),
        };
      }

      handleStateChange = (editorState) => {
        this.setState({
            editorState,
          });
      };


  render() {
    return (
        <div className="article">
        <div>
            <label htmlFor="" className="form-label">Title</label>
            <input type="text" className="form-control" name='title' />
        </div>
    
        <div>
            <label htmlFor="" className="form-label d-block">Category</label>
            <select name="cat" className='form-control'>
                <option className='form-control' value="">testing 1</option>
                <option className='form-control' value="">testing 2</option>
            </select>
        </div>
    
        <div>
        <Editor
        editorState={this.state.editorState}
            wrapperClassName="border-bottom border-start border-end border-white border-2"
            editorClassName=""
           onEditorStateChange={this.handleStateChange}
          />
        </div>
       </div>
    )
  }
}

export default CreateArticle