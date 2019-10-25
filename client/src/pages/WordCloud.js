import React, { Component } from 'react';
import WordCloud from 'react-d3-cloud';
import BackButton from '../components/BackButton';

const fontSizeMapper = word => Math.log2(word.value) * 5 + 15;
const rotate = word => Math.random() *360;

class d3 extends Component {
  state= {
    data: [],
  }

// when component mounts, first thing it does is fetch all existing data in our db
// then we incorporate a polling logic so that we can easily see if our db has
// changed and implement those changes into our UI
componentDidMount() {
  this.getDataFromDb();
}

// our first get method that uses our backend api to
// fetch data from our data base
getDataFromDb = () => {
  fetch('/api/wordcloudPopularity/')
    .then((data) => data.json())
    .then((res) => this.renameKeys(res.data));
};

// Capitalize words
// Eg. have cities as Rome, not rome.
capitalize(s) {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

// WordCloud needs data on the form [{text: Rome, value: 2}, {text: Paris, value: 5}]
// This function rename keys
renameKeys(data) { // list of elements [{name: Rome, popularity: 2}, {name: Paris, popularity: 5}]
  var new_data =  [];
  var i;
  for (i = 0; i < data.length; i++) {
    var d = {'text': this.capitalize(data[i]['name']), 'value': data[i]['popularity']}
    new_data.push(d);
  }
  this.setState({
    data: new_data
  })
}

  render(){
    return(
      <div style={{justifyContent:"center", display:"flex", height:"100vh", alignItems:"center"}}>
      <BackButton />

        <WordCloud
          
          data={this.state.data}
          font='Impact'
          //fontSizeMapper={fontSizeMapper}
          rotate={rotate}
        />
      </div>
    )
  }
}

export default d3;
