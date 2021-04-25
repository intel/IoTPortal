import React from 'react';
import { CFooter } from '@coreui/react';

const Footer = () => {
    return (
        <CFooter fixed={false}>
            <div>
                <a href="https://www.intel.com" target="_blank" rel="noopener noreferrer">Intel IoT Portal</a>
                <span className="ml-1">&copy; 2021 Intel.</span>
            </div>
            {/*<div className="mfs-auto">*/}
            {/*    <span className="mr-1">Powered by</span>*/}
            {/*    <a href="https://coreui.io/react" target="_blank" rel="noopener noreferrer">CoreUI for React</a>*/}
            {/*</div>*/}
        </CFooter>
    );
};

export default React.memo(Footer);
