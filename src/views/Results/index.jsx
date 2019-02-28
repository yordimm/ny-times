import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from "../../redux/actions/types";
import SearchContainer from '../../components/SearchContainer';
import NewInfo from '../../components/NewInfo';

class Results extends Component {
    constructor(props) {
        super(props)
        this.state = {
            news: [],
            page: 1,
            newsLength: 0,
            error: false,
            keyword: this.props.keyword,
            material: this.props.material,
            newSearch: true
        }
    }

    async componentDidMount() {
        await this.searchNews()
    }

    searchNews = async () => {
        await this.props.getNews(this.state.material, this.state.keyword, this.state.page, this.state.newSearch);
        const { error, newsLength, newsList } = this.props.news
        this.setState({ news: newsList, newsLength, error, newSearch: false })
    }

    searchByKeyword = async (keyword) => {
        await this.setState({ keyword, page: 1, news: [], newsLength: 0, newSearch: true })
        await this.searchNews()
    }


    getMoreNews = async () => {
        await this.setState({ page: this.state.page + 1 })
        await this.searchNews()
    }

    render() {
        return (
            <div>
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

const mapStateToProps = state => {
    return {
        news: state.newsState,
        params: state.paramsState
    };
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Results)