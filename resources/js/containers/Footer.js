import React from 'react';
import { CFooter } from '@coreui/react';

const Footer = () => {
    return (
        <CFooter fixed={false}>
            <div>
                <a href="https://www.intel.com" target="_blank" rel="noopener noreferrer">Intel IoT Portal</a>
                <span className="ml-1">&copy; 2021 Intel.</span>
            </div>
        </CFooter>
    );
};

export default React.memo(Footer);
