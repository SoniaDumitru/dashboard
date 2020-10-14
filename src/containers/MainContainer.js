import React, { Component } from 'react';
import Filters from '../components/Filters';
import FrameworksContainer from './FrameworksContainer';

class MainContainer extends Component {
state = {
  data: [],
  sortBy: '',
}

getData = () => {
  Promise.all([
    fetch('https://api.github.com/repos/facebook/react'),
    fetch('https://api.github.com/repos/vuejs/vue'),
    fetch('https://api.github.com/repos/angular/angular'),
    fetch('https://api.github.com/repos/emberjs/ember.js'),
  ]).then(function (responses) {
  return Promise.all(responses.map(function (response) {
      return response.json();
  }));
  }).then((data) => this.setState({
  data: data,
  })).catch(function (error) {
  console.log(error);
  });
};

componentDidMount() {
  this.getData();
  setInterval(this.getData, 10000);
}

selectData = () => {
    let selectedData = [...this.state.data];
      if (this.state.sortBy === 'Alphabetically') {
        return selectedData
          .sort((prev, next) => {
            if (prev.name < next.name) return -1
            if (prev.name > next.name) return 1
            return 0})
      } else if (this.state.sortBy === 'Watchers'){
        return selectedData.sort((prev, next) => next.subscribers_count - prev.subscribers_count);
      } else if (this.state.sortBy === 'Stars'){
        return selectedData.sort((prev, next) => next.stargazers_count - prev.stargazers_count);
      } else if (this.state.sortBy === 'Forks'){
        return selectedData.sort((prev, next) => next.forks - prev.forks);
      }
      else if (this.state.sortBy === 'Best Overall') {
        return selectedData.sort((prev, next) => 
        (next.forks + next.stargazers_count + next.subscribers_count) - 
        (prev.forks + prev.stargazers_count + prev.subscribers_count))
      } else {
      return selectedData;
    };
  };

handleRadio = (event) => {
  this.setState({
    sortBy: event.target.value
  })
}
      
render() {
  return(
    <div className="standard-color">
      <Filters
        handleRadio={this.handleRadio}
        sortBy={this.state.sortBy}
      />
      <div className="row">
        <div className="col-7">
          <FrameworksContainer
            data = {this.selectData()}
          />
        </div>
      </div>
    </div>
    );
  };
};

export default MainContainer;