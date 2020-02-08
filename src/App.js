import React from 'react';
import projects from './projects.json';
import packageInfo from '../package.json';
import ListView from './ListView';
import TableView from './TableView';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isListView: false
    };
  }
  
  render () {
    return (
      <div className="container">
        <div className="float-right"><small><a href="https://github.com/simpixelated/sd-dev-list">View on GitHub</a></small></div>
        <h1 className="mt-4">San Diego Development List</h1>
        <p>Major development projects in planning or under construction in San Diego (mostly downtown)</p>
        <p>
          <button
            className="btn btn-link"
            type="button"
            onClick={() => this.setState({ isListView: !this.state.isListView })}
            >Switch to {this.state.isListView ? 'table' : 'list'} view
          </button>
        </p>

        {this.state.isListView && <ListView projects={projects} />}
        {!this.state.isListView && <TableView projects={projects} />}

        <hr />
        <p>More resources:</p>
        <ul>
          <li><a href="https://www.skyscrapercenter.com/compare-data/submit?type%5B%5D=building&status%5B%5D=COM&status%5B%5D=UC&status%5B%5D=UCT&status%5B%5D=STO&status%5B%5D=PRO&base_region=0&base_country=0&base_city=1677&base_height_range=0&base_company=All&base_min_year=2017&base_max_year=9999&comp_region=0&comp_country=0&comp_city=0&comp_height_range=4&comp_company=All&comp_min_year=1960&comp_max_year=2021&skip_comparison=on&output%5B%5D=list&dataSubmit=Show+Results">The Skyscraper Center</a></li>
          <li><a href="https://coolsandiegosights.com/">Cool San Diego Sights</a></li>
          <li><a href="https://twitter.com/i/lists/778983544047538176?s=20">San Diego Urbanists Twitter List</a></li>
          <li><a href="https://www.instagram.com/realportfolio/?hl=en">San Diego Crane Watch Instagram</a></li>
        </ul>
        <p className="text-right"><small>Built by <a href="https://simpixelated.com">Simpixelated</a>, inspired by <a href="https://sandiego.urbdezine.com/development-map/">San Diego UrbDeZine</a>. Version {packageInfo.version} (<a href="https://github.com/simpixelated/sd-dev-list/blob/master/CHANGELOG.md">changelog</a>)</small></p>
      </div>
    );
  }
}

export default App;
