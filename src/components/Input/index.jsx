import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';


class Input extends React.PureComponent {

    render() {
        const { title, styleClasses, children } = this.props;
        return (
            <div className={`col-sm-12 ${styleClasses}`}>
                <p className="sectionTitle">{title}</p>
                {children}
            </div>
        );
    }
}

Input.propTypes = {
    title: PropTypes.string,
    styleClasses: PropTypes.string
}

export default Input;