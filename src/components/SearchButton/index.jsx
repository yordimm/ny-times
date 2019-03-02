import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.css';


class SearchButton extends React.PureComponent {

    render() {
        const { styleClasses, children } = this.props;
        return (
            <div className={`col-sm-12 col-lg-2 ${styleClasses}`}>
                <Link to={'/results'}>
                    {children}
                </Link>
            </div>
        );
    }
}

SearchButton.propTypes = {
    styleClasses: PropTypes.string
}

export default SearchButton;