import React, {Component} from 'react';

class Home extends Component {
  constructor() {
    super()

    this.state = {poem: ""}
  }

  componentDidMount() {
    var base = this
    const url = "http://shakeitspeare.com/api/poem"
    fetch(url)
    .then(results => {
      return results.json();
    }).then(data => {
      base.setState({poem: data.poem})
    }).catch(ex => {
      console.log("An error occured!", ex);
    })
  }

  render () {
    if (this.state.poem && this.state.poem != "") {
      return (
        <div>
          <h3>Here's a joke I like:</h3>
          <p>How do cows do math?</p>
          <p>On a cow-culator.</p>
          <img src="http://i0.kym-cdn.com/entries/icons/mobile/000/002/149/wook-_17.jpg" alt="Wookerson picture" width="250px"/>
          <h3>Here's a random Shakespeare poem:</h3>
          <p>{this.state.poem}</p>
        </div>
      )
    } else {
        return (
          <div>
            <h2>Loading</h2>
          </div>
        )
    }
  }
}


export default Home
