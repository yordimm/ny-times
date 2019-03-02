import React from 'react';
import PropTypes from 'prop-types';


class KeywordsList extends React.PureComponent {

    render() {
        const { keywords, searchByKeyword } = this.props;
        return (
            <div className="d-flex">
                {keywords.map((keyword, index) => {
                    return index <= 3 &&
                        <p key={index}
                            className="mx-2 keywordLink text-primary"
                            name={'keyword'} onClick={() => searchByKeyword(keyword.value)}
                            value={keyword.value}>{keyword.value}
                        </p>
                })}
            </div>
        );
    }
}

KeywordsList.propTypes = {
    keywords: PropTypes.array,
    searchByKeyword: PropTypes.func
}

export default KeywordsList;