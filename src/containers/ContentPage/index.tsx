import React from 'react';
import Cms from '../../components/Cms';

const ContentPage = () => {
    return (
        <React.Fragment>
            <Cms id={1} />
            <Cms id={2} />
        </React.Fragment>
    );
};

export default ContentPage;
