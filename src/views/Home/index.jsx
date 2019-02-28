import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchContainer from '../../components/SearchContainer';
import NewInfo from '../../components/NewInfo';
import { Services } from '../../services'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            news: [],
            keyword: '',
            material: 'News',
            page: 1,
            newsLength: 0,
            error: false
        }
    }

    handleChange = async (event) => {
        const { target: { name, value } } = event
        await this.setState({ [name]: value })
    }

    searchNews = async () => {
        const data = await Services.searchNews(this.state.material, this.state.keyword, this.state.page);
        const { news, newsLength, error } = data;
        this.setState({ news: [...this.state.news, ...news], newsLength, error })
    }

    searchByKeyword = async (keyword) => {
        await this.setState({ keyword, page: 1, news: [], newsLength: 0 })
        await this.searchNews()
    }



    getMoreNews = async () => {
        await this.setState({ page: this.state.page + 1 })
        await this.searchNews()
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
                    <div>
                        {this.state.news.map((currentNew, index) =>
                            <NewInfo
                                headline={currentNew.headline.main ? currentNew.headline.main : ''}
                                snippet={currentNew.snippet}
                                source={currentNew.source}
                                publicationDate={currentNew.pub_date}
                                keywords={currentNew.keywords}
                                link={currentNew.web_url}
                                searchByKeyword={this.searchByKeyword}
                            />
                        )}
                        <p>{`Displaying ${this.state.news.length} results of ${this.state.newsLength} found`} </p>
                        <button type="button" className="btn btn-primary" onClick={this.getMoreNews}>{'Get more news'}</button>
                    </div>
                }
            </div>
        );
    }
}

export default Home;
