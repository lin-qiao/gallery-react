require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let yeomanImage = require('../images/yeoman.png');

//图片组件
class ImageModule extends React.Component{
  render(){
    return (
      <span>hello</span>
    )
  }
}
// 控制组件
class ControlModule extends React.Component {
  render() {
    return (
      <span>word</span>
    )
  }
}
class gallery extends React.Component {
  render() {
    return (
      <div className="gallery">
          <ImageModule/>
          <ControlModule/>
      </div>
    );
  }
}

gallery.defaultProps = {

};

export default gallery;
