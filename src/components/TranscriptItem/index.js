import React from "react";
import PropTypes from 'prop-types';

const TranscriptItem = ({ transcriptItems }) => {
    return (
        <div className="items-wrapper">
            {transcriptItems.length > 0 && transcriptItems.map((transcriptItem, key) => (
                <div className="item" key={key} id={key}>
                    <div className="heading">{transcriptItem.heading}</div>
                    <div className="content">{transcriptItem.value}</div>
                </div>
            ))}
        </div>
    )
};

TranscriptItem.propTypes = {
    transcriptItems: PropTypes.instanceOf(Array),
};

TranscriptItem.defaultProps = {
    transcriptItems: [],
};

export default TranscriptItem;