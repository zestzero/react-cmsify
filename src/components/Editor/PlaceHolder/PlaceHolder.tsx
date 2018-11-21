import * as React from 'react';

interface IProps {
    onAddClick: () => void
}

const PlaceHolder = ({ onAddClick }: IProps) => {
    return (
        <div className="PlaceHolder">
            <button className="PlaceHolder__plus-btn" onClick={onAddClick}>+</button>
        </div>
    )
}

export default PlaceHolder
