import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from "../../redux/actions/types";
import SearchContainer from '../../components/SearchContainer';
import NewInfo from '../../components/NewInfo';
import { Services } from '../../services'


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            keyword: '',
            material: 'News',
            news: [],
            page: 1,
            newsLength: 0,
            error: false
        }
    }

    componentDidMount() {
        console.log(this.props)
    }
    // handleChange = async (event) => {
    //     const { target: { name, value } } = event
    //     await this.setState({ [name]: value })
    // }

    searchNews = async () => {
        // const data = await this.props.getNews(this.state.material, this.state.keyword, this.state.page);
        await this.props.getNews(this.state.material, this.state.keyword, this.state.page);
        const { error, newsLength, newsList } = this.props.news
        this.setState({ news: newsList, newsLength, error })
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
                        handleChange={this.props.handleChange}
                        searchNews={this.searchNews}
                    />
                </div>
                {/* {this.state.news.length > 0 &&
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
                } */}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        news: state.newsState,
        params: state.paramsState
    };
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)