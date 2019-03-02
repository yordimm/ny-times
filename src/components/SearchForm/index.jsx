import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';
import SearchButton from '../SearchButton';
import './styles.css';

const SearchForm = ({ handleChange, optionsSelect, searchNews, isResult, title, materials }) => {
    return (
        <div className="row col py-4 mx-4 formContainer">
            {isResult && <h1 className="col-2 d-none d-lg-block text-center">{title}</h1>}
            <Input title={'Keywords'} styleClasses={'col-lg-5 mb-4 mb-lg-0'}>
                <input
                    type="text"
                    className="form-control"
                    onChange={handleChange}
                    placeholder="Search for articles"
                    name={'keyword'} />
            </Input>
            <Input title={'Types of Material'} styleClasses={'col-lg-3'}>
                <select className="custom-select" onChange={handleChange} name={'material'}>
                    {materials.map((material, index) => <option key={index} value={material} >{material}</option>)}
                </select>
            </Input>
            <SearchButton styleClasses="d-flex justify-content-center">
                <button onClick={searchNews} type="button" className="btn btn-primary  topSpace">
                    {'Search'}
                </button>
            </SearchButton>
        </div>
    );
}

SearchForm.propTypes = {
    handleChange: PropTypes.func.isRequired,
    searchNews: PropTypes.func.isRequired,
    optionsSelect: PropTypes.array,
}
export default SearchForm;

