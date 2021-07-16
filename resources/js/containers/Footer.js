import React from 'react';

import { CFooter } from '@coreui/react';

const Footer = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <a href="#" rel="noopener noreferrer">IoT Portal</a>
      </div>
    </CFooter>
  );
};

export default React.memo(Footer);
