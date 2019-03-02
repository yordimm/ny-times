import React from 'react';
import PropTypes from 'prop-types';
import SearchForm from '../SearchForm';
import './styles.css';

const SearchContainer = ({
    title,
    searchBarName,
    selectName,
    handleChange,
    searchNews,
    isResult,
    materials
}) => {
    return (
        <div className="row">
            {!isResult && <div className="col-12 d-lg-flex d-none justify-content-center">
                <h1 className="col-2 text-center">{title}</h1>
            </div>}
            <SearchForm
                handleChange={handleChange}
                searchNews={searchNews}
                isResult={isResult}
                title={title}
                materials={materials}
            />
        </div>
    );
}
SearchContainer.propTypes = {
    title: PropTypes.string,
    searchBarName: PropTypes.string,
    selectName: PropTypes.string,
    handleChange: PropTypes.func,
    searchNews: PropTypes.func,
    materials: PropTypes.array
}
export default SearchContainer;

