import React, { Component } from 'react';
import Framework from '../components/Framework'

class FrameworksContainer extends Component {

  render() {
    return(
      <div>
        <br/>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Framework</th>
              <th scope="col">Stars</th>
              <th scope="col">Watchers</th>
              <th scope="col">Forks</th>
              <th scope="col">Best</th>
            </tr>
          </thead>
          <tbody>
            {this.props.data.map((data, idx) =>
            <Framework
              key={idx}
              data={data}
              parent='stock'
              addToPortofolio={this.props.addToPortofolio}/>)}
          </tbody>
        </table>
      </div>
    );
  };
};

export default FrameworksContainer;
