import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Services } from '../../services';
import './styles.css';

const NewInfo = ({ headline, snippet, source, publicationDate, keywords, link, searchByKeyword }) => {
    return (
        <div className="card">
            <div className="row card-body">
                <div className="col-lg-2 col-sm-3 d-md-block d-none">
                    <img src="https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png" className="img-fluid w-100 h-100" alt="Responsive image" />
                </div>
                <div className="col">
                    <a href={link}>{headline}</a>
                    <p className="d-sm-block d-none">{snippet}</p>
                    <p><b>{'Source:'}</b> {source}</p>
                    <p><b>{'Published: '}</b>{`${Services.formatDate(publicationDate)} GMT`}</p>
                    {keywords.length > 0 && <div className="d-md-flex d-none">
                        <i className="fas fa-tags mt-1"></i>
                        {keywords.map((keyword, index) => { return index <= 3 && <p className="mx-2" name={'keyword'} onClick={() => searchByKeyword(keyword.value)} value={keyword.value}>{keyword.value}</p> })}
                    </div>}
                </div>
            </div>
        </div>
    );
}

NewInfo.propTypes = {
    thumbnail: PropTypes.string,
    headline: PropTypes.string.isRequired,
    snippet: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
    publicationDate: PropTypes.string.isRequired,
    keywords: PropTypes.arrayOf(PropTypes.string).isRequired,
    link: PropTypes.string,
    searchByKeyword: PropTypes.func
}
export default NewInfo;

