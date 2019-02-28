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

    render() {
        return (
            <div>
                <div className="container">
                    <SearchContainer
                        title={'The New York Times'}
                        searchBarName={'Keywords'}
                        selectName={'Type of material'}
                        handleChange={this.props.handleChange}
                        searchNews={() => { }}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        news: state.newsState
    };
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)