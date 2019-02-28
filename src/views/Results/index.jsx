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
        }
    }

    render() {
        return (
            <div>
                {'Results'}
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

export default connect(mapStateToProps, mapDispatchToProps)(Results)