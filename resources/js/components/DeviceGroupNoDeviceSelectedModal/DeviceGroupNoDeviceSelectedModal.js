import React from 'react';

import Modal from '../Modal/Modal';

const DeviceGroupNoDeviceSelectedModal = ({
                                            show,
                                            onClose,
                                            onConfirm,
                                          }) => {

  return (
    <Modal show={show}
           modalTitle="No Device Selected"
           modalMessage="Please select at least a device by checking the checkbox to create a device group"
           onClose={onClose}
           onConfirm={onConfirm}
           primaryButtonText="Ok"
           hideSecondaryButton
    />
  );
};

export default DeviceGroupNoDeviceSelectedModal;