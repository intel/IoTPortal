import React, { useRef, useState } from 'react';
import { connect } from 'react-redux';

import { Form, Formik } from 'formik';
import { Toaster } from 'react-hot-toast';
import {
  CAlert,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CLabel,
  CNav,
  CNavItem,
  CNavLink,
  CRow,
  CTabContent,
  CTabPane,
  CTabs
} from '@coreui/react';

import { createSavedCommandStartAsync } from '../../redux/savedCommand/savedCommand.actions';

import IotTextInputFormGroup from '../../components/IotTextInputFormGroup/IotTextInputFormGroup';
import AotaCard from '../../components/AotaCard/AotaCard';
import FotaCard from '../../components/FotaCard/FotaCard';
import SotaCard from '../../components/SotaCard/SotaCard';
import CotaCard from '../../components/CotaCard/CotaCard';
import PrimarySecondaryButtons from '../../components/PrimarySecondaryButtons/PrimarySecondaryButtons';
import PowerControlsCard from '../../components/PowerControlsCard/PowerControlsCard';
import PayloadViewer from '../../components/PayloadViewer/PayloadViewer';
import createSavedCommandValidationSchema from '../../schemas/savedCommand/createSavedCommandValidationSchema';

const CreateSavedCommand = ({
                              history,
                              isCreatingSavedCommand,
                              createSavedCommandErrorMessage,
                              createSavedCommandStartAsync
                            }) => {

  const [savedCommandPayload, setSavedCommandPayload] = useState(null);

  const formRef = useRef();

  const resetCallback = () => {
    setSavedCommandPayload(null);
  };

  const handleSubmit = () => {
    if (formRef.current) {
      formRef.current.handleSubmit();
    }
  };

  const handleReset = () => {
    if (formRef.current) {
      formRef.current.resetForm();
    }
  };

  const handleFormSubmit = (values) => {
    if (savedCommandPayload) {
      const data = {...values, ...savedCommandPayload};
      createSavedCommandStartAsync(data, history);
    } else {
      alert('The command payload is required. Please click on the Save button to validate first.')
    }
  };

  const validationSchema = createSavedCommandValidationSchema();

  return (
    <>
      <CRow>
        <CCol xs="12" md="12" className="mb-4">
          <CCard>
            <CCardHeader>
              Create new saved command
            </CCardHeader>
            <CCardBody>
              <CAlert color="secondary">To create a new saved command, enter a command name and the payloads.</CAlert>
              <Formik
                enableReinitialize={true}
                innerRef={formRef}
                initialValues={{
                  name: '',
                }}
                validationSchema={validationSchema}
                onSubmit={(values, {setSubmitting}) => {
                  handleFormSubmit(values)
                }}
              >
                <Form>
                  <IotTextInputFormGroup
                    id="name"
                    name="name"
                    label="Command name"
                    placeholder="Enter command name"
                  />
                </Form>
              </Formik>
              <CLabel htmlFor="">Command payload</CLabel>
              <CTabs activeTab="aota">
                <CNav variant="tabs">
                  <CNavItem>
                    <CNavLink data-tab="aota">
                      Application OTA Update
                    </CNavLink>
                  </CNavItem>
                  <CNavItem>
                    <CNavLink data-tab="fota">
                      Firmware OTA Update
                    </CNavLink>
                  </CNavItem>
                  <CNavItem>
                    <CNavLink data-tab="sota">
                      Software OTA Update
                    </CNavLink>
                  </CNavItem>
                  <CNavItem>
                    <CNavLink data-tab="cota">
                      Configuration OTA Update
                    </CNavLink>
                  </CNavItem>
                  <CNavItem>
                    <CNavLink data-tab="power-control">
                      Power Controls
                    </CNavLink>
                  </CNavItem>
                </CNav>
                <CTabContent>
                  <CTabPane className="m-3" data-tab="aota">
                    <AotaCard primaryButtonText="Save" submitCallback={setSavedCommandPayload}
                              resetCallback={resetCallback}/>
                  </CTabPane>
                  <CTabPane className="m-3" data-tab="fota">
                    <FotaCard primaryButtonText="Save" submitCallback={setSavedCommandPayload}
                              resetCallback={resetCallback}/>
                  </CTabPane>
                  <CTabPane className="m-3" data-tab="sota">
                    <SotaCard primaryButtonText="Save" submitCallback={setSavedCommandPayload}
                              resetCallback={resetCallback}/>
                  </CTabPane>
                  <CTabPane className="m-3" data-tab="cota">
                    <CotaCard primaryButtonText="Save" submitCallback={setSavedCommandPayload}
                              resetCallback={resetCallback}/>
                  </CTabPane>
                  <CTabPane className="m-3" data-tab="power-control">
                    <PowerControlsCard primaryButtonText="Save" submitCallback={setSavedCommandPayload}
                                       resetCallback={resetCallback}/>
                  </CTabPane>
                </CTabContent>
              </CTabs>
              <PayloadViewer label="Resulting command payload" payload={savedCommandPayload}/>
            </CCardBody>
            <CCardFooter>
              <PrimarySecondaryButtons primaryButtonText="Create" isPrimaryLoading={isCreatingSavedCommand}
                                       onClickPrimary={handleSubmit} onClickSecondary={handleReset}
                                       isPrimaryDisabled={isCreatingSavedCommand}
                                       isSecondaryDisabled={isCreatingSavedCommand}/>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
      <Toaster/>
    </>
  );
};

const mapStateToProps = state => ({
  isCreatingSavedCommand: state.savedCommand.isCreatingSavedCommand,
  createSavedCommandErrorMessage: state.savedCommand.createSavedCommandErrorMessage,
});

const mapDispatchToProps = dispatch => ({
  createSavedCommandStartAsync: (data, history) => dispatch(createSavedCommandStartAsync(data, history)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateSavedCommand);
