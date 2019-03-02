import React from 'react';
import PropTypes from 'prop-types';
import KeywordsList from '../keywordsList';
import { Services } from '../../services';
import './styles.css';

const NewInfo = (
    { headline,
        snippet,
        source,
        publicationDate,
        keywords,
        link,
        searchByKeyword,
        thumbnail
    }
) => {
    return (
        <div className="card my-2">
            <div className="row card-body">
                <div className="col-lg-2 col-sm-3 d-md-block d-none">
                    <img src={thumbnail} className="img-fluid w-100 thumbnail" alt="article thumbnail" />
                </div>
                <div className="col">
                    <a href={link}>{headline}</a>
                    <p className="d-sm-block d-none">{snippet}</p>
                    <p><b>{'Source:'}</b> {source}</p>
                    <p><b>{'Published: '}</b>{`${Services.formatDate(publicationDate)} GMT`}</p>
                    {keywords.length > 0 && <div className="d-md-flex d-none">
                        <i className="fas fa-tags mt-1"></i>
                        <KeywordsList keywords={keywords} searchByKeyword={searchByKeyword} />
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
    searchByKeyword: PropTypes.func,
}
export default NewInfo;

