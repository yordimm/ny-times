import React from 'react';
import PropTypes from 'prop-types';

const SearchContainer = ({ title, searchBarName, selectName, handleChange, searchNews }) => {
    return (
        <div className="row">
            <h1 className="col-12 text-center">{title}</h1>
            <div className="col-sm-12 col-lg-6 mb-4 mb-lg-0">
                <p>{searchBarName}</p>
                <input type="text" className="form-control" onChange={handleChange} placeholder="Username" name={'keyword'} />
            </div>
            <div className="col-sm-12 col-lg-4">
                <p>{selectName}</p>
                <select className="custom-select" onChange={handleChange} name={'material'}>
                    <option alue={'News'} defaultValue>News</option>
                    <option value={"Series"}>Series</option>
                    <option value={"Review"}>Review</option>
                    <option value={"Text"}>Text</option>
                </select>
            </div>
            <div className="d-flex col-sm-12 col-lg-2 justify-content-center justify-content-lg-start my-4 my-lg-0">
                <button onClick={searchNews} type="button" className="btn btn-primary align-self-sm-center align-self-lg-end">{'Search'}</button>
            </div>
        </div>
    );
}

SearchContainer.propTypes = {
    title: PropTypes.string,
    searchBarName: PropTypes.string,
    selectName: PropTypes.string,
    handleChange: PropTypes.func,
    searchNews: PropTypes.func
}
export default SearchContainer;

