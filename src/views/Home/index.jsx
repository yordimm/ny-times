import React, { Component } from 'react';
import SearchContainer from '../../components/SearchContainer';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        const { handleChange, materials } = this.props;
        return (
            <div className="container mt-5">
                <SearchContainer
                    title={'The New York Times'}
                    searchBarName={'Keywords'}
                    selectName={'Type of material'}
                    handleChange={handleChange}
                    searchNews={() => { }}
                    materials={materials}
                />
            </div>
        );
    }
}

export default Home;