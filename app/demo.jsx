import { Button, Input, Row, Grid } from 'react-bootstrap';
import React from 'react';
import ReactDOM from 'react-dom';

const ThisPage = React.createClass({
    getInitialState() {
    return {
      text:"",
    };
  },
    render() {
        return(
          <div>
        <p>{this.state.text}</p>
        <Button bsStyle="primary" onClick={e=>this.setState({text:"123"})}>Primary</Button>
      </div>
        );
    }
});

ReactDOM.render(<ThisPage />, document.getElementById('page'));