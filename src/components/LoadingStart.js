import React from 'react';
import classnames from 'classnames';

class LoadingStart extends React.Component {
  state = {
    classname: 'sinir',
  }

  componentDidMount() {
    setTimeout(() => {
        this.setState({
          classname: 'end-loader',
        })
      }
    , 2500);
  }

  render() {
    const {classname} = this.state;

    return (
      <div className={classname}>
        <div className='block-uber'>
          <div className="box white" id="box1">U</div>
          <div className="box white" id="box2">b</div>
          <div className="box white" id="box3">e</div>
          <div className="box white" id="box4">r</div>
        </div>
        <div className='block-eats'>
          <div className="box green" id="box1">E</div>
          <div className="box green" id="box2">a</div>
          <div className="box green" id="box3">t</div>
          <div className="box green" id="box4">s</div>
        </div>
      </div>
    )
  }
}

export default LoadingStart;
