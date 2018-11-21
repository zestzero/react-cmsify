import * as React from 'react';

interface IProps {
    onAddClick: () => void
}

const StarterHolder = ({ onAddClick }: IProps) => {
    return (
        <div className="StarterHolder">
            <button className="StarterHolder__plus-btn" onClick={onAddClick}>+</button>
        </div>
    )
}

export default StarterHolder
