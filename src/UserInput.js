import React from 'react';
import {MarkdownPreview} from "./MarkdownPreview";





export class UserInput extends React.Component {
    constructor() {
        super();
        this.state = {
            markdown: `# React Marcdown Preview!

## This is a sub-heading...

### Sub-sub heading...

Heres some code: \`<h1>Hello</h1>\`.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
Some  **bold text**... 
Or _italic text_.
~~Cross out some text.~~    

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!


To do list:
* Drink coffee
* Write some code
* Sleep
* Dream about...



![React Logo w/ Text](https://goo.gl/Umyytc)
`
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            markdown: e.target.value
        });
    }

        render() {
            console.log(this.state);
            return (
                <div className="row">
                    <div className="col-md-6">
                        <h3 className="text-center">Enter Markdown:</h3>
                        <textarea type="text" id="editor" onChange={this.handleChange} value={this.state.markdown}/>
                    </div>
                    <div className="col-md-6">
                        <h3 className="text-center">Result:</h3>
                        <MarkdownPreview markdown={this.state.markdown}/>
                    </div>
                </div>
            )
        }
    }
