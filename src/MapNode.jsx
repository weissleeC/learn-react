import React from 'react';
import $ from "jquery";
import './style/map.css'

export default class MapNode extends React.Component{

  componentDidMount(){

    fetch('./img/map-node.svg')
    .then(svgResult => {
      const svgFile = svgResult; // svg 文件
      const tempDotArray = [];

      $(function(){
        const $tempBox = document.createElement('div');
        $tempBox.innerHTML = svgFile;

        $tempBox.querySelectorAll('circle').forEach((circle, index) => {
            tempDotArray.push({
                cx: circle.getAttribute('cx'),
                cy: circle.getAttribute('cy'),
                color: circle.getAttribute('fill')
            });
        });

      })
    });

  };

  render(){
    return(
      <div className="map-media">
        
      </div>
    )
  }
}