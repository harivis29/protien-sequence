import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { nextPage, previousPage } from '../../actions';
import Button from "../Button";
import { PREVIOUS_LABEL, NEXT_LABEL } from '../../common/constants';
import './styles/index.css';

const Navigation = () => {
    const dispatch = useDispatch();
    const page = useSelector(state => state.navigation.page);
    const filteredIds = useSelector(state => state.transcripts.filteredIds);
    
    const onNextClick = () => {
        dispatch(nextPage(page + 1));
    };

    const onPrevClick = () => {
        dispatch(previousPage(page - 1));
    };

    const prevBtnProps = {
        buttonLabel: PREVIOUS_LABEL,
        handleClick: onPrevClick,
        ariaLabel: PREVIOUS_LABEL,
        disabled: (page <= 1)
    };

    const nextBtnProps = {
        buttonLabel: NEXT_LABEL,
        handleClick: onNextClick,
        ariaLabel: NEXT_LABEL,
        disabled: (page >= filteredIds.length)
    };

    return (
        <div className="navigation-container">
            <Button {...prevBtnProps} />
            <Button {...nextBtnProps} />
        </div>
    )
};

export default Navigation;