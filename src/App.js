import React, { Component } from 'react';

// Components
import EditToggle from './components/EditToggle';
import ColorChanger from './components/ColorChanger';
import SizeChanger from './components/SizeChanger';
import FamilyChanger from './components/FamilyChanger';
import TextContainer from './components/TextContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      fontColor: "black",
      fontSize: 12,
      fontFamily: "monospace",
      allowEdit: "true"
    };
    this.updateEditStatus = this.updateEditStatus.bind(this);
    this.updateColor = this.updateColor.bind(this);
    this.updateSize = this.updateSize.bind(this);
    this.updateFamily = this.updateFamily.bind(this);
  }

  // updateColor

  updateSize(e) {
    this.setState({
      fontSize: e.target.value
    });
  }

  updateFamily(e){
    this.setState({
      fontFamily:e.target.value
    })
  }

  updateEditStatus(e) {
    this.setState({
      allowEdit: e.target.value
    });
  }
  updateColor(e) {
    this.setState({
      fontColor: e.target.value
    });
  }

  render() {
    return <div>
        <div className="headerBar">
          {<EditToggle allowEdit={this.state.allowEdit} updateEditStatus={this.updateEditStatus} />}
          {<ColorChanger allowEdit={this.state.allowEdit} updateColor={this.updateColor} />}
          {<SizeChanger allowEdit={this.state.allowEdit}r updateSize={this.updateSize} />}
          {<FamilyChanger allowEdit={this.state.allowEdit} updateFamily={this.updateFamily}/>}
        </div>
        <div className="textArea">
          {<TextContainer myStyles={{ color: this.state.fontColor, fontSize: this.state.fontSize, fontFamily: this.state.fontFamily }} />}
        </div>
      </div>;
  }
}

export default App;
