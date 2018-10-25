import React from 'react';
import marked from 'marked';

export class MarkdownPreview extends React.Component {

    createMarkup() {
        return { __html: marked(this.props.markdown) }
    }

    render() {
        return (
            <div id="preview" className="well" dangerouslySetInnerHTML={this.createMarkup()}>
            </div>
        );
    }
};