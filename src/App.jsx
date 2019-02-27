import React, { Component } from 'react';
import './App.css';
import SearchContainer from './components/SearchContainer';
import NewInfo from './components/NewInfo';
import { Services } from './services'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      news: [],
      keyword: '',
      material: 'News',
      page: 1
    }
  }

  handleChange = async (event) => {
    const { target: { name, value } } = event
    await this.setState({ [name]: value })
  }

  searchNews = async () => {
    const data = await Services.searchNews(this.state.material, this.state.keyword, this.state.page);
    const { news, newsLength, error } = data;
    this.setState({ news })
  }

  render() {
    return (
      <div>
        <div className="container">
          <SearchContainer
            title={'The New York Times'}
            searchBarName={'Keywords'}
            selectName={'Type of material'}
            handleChange={this.handleChange}
            searchNews={this.searchNews}
          />
        </div>
        {this.state.news.length > 0 &&
          this.state.news.map((currentNew, index) =>
            <NewInfo
              headline={currentNew.headline.main}
              snippet={currentNew.snippet}
              source={currentNew.source}
              publicationDate={currentNew.pub_date}
              keywords={currentNew.keywords}
              link={currentNew.web_url}
            />
          )
        }
      </div>
    );
  }
}

export default App;
