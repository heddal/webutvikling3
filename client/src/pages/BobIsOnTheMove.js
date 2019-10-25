import React, { Component } from 'react';
import WordCloud from 'react-d3-cloud';
import words from './words';

const rotate = word => Math.random() *360;

class BobIsOnTheMove extends Component {

  render() {
    return (
      <div>
        <h1>This is Bob</h1>
        <WordCloud
          data={words}
          rotate={rotate}
        />
      </div>
    );
  }
}

export default BobIsOnTheMove;
