import React, { useState } from 'react'
import Select from 'react-select'
import { APP_OPTIONS, COMMAND_OPTIONS, REBOOT_OPTIONS, DOCKER_COMMAND_OPTIONS, COMPOSE_COMMAND_OPTIONS, APP_COMMAND_OPTIONS } from '../../data/options';


import { CCard, CCardBody, CCardHeader, CFormGroup, CInput, CLabel, CButton, CCardFooter } from '@coreui/react'
import CIcon from '@coreui/icons-react'

const AotaCard = () => {
  const [appOptions, setAppOptions] = useState(APP_OPTIONS);
  const [commandOptions, setCommandOptions] = useState(COMMAND_OPTIONS);
  const [rebootOptions, setRebootOptions] = useState(REBOOT_OPTIONS);

  const handleAppInputChange = (selectedOption) => {
    console.log(selectedOption.value)
    if (selectedOption.value === 'docker') {
      const newCommandOptions = COMMAND_OPTIONS.filter(commandOption => DOCKER_COMMAND_OPTIONS.includes(commandOption.value));
      setCommandOptions(newCommandOptions);
    } else if (selectedOption.value === 'compose') {
      const newCommandOptions = COMMAND_OPTIONS.filter(commandOption => COMPOSE_COMMAND_OPTIONS.includes(commandOption.value));
      setCommandOptions(newCommandOptions);
    } else if (selectedOption.value === 'app') {
      const newCommandOptions = COMMAND_OPTIONS.filter(commandOption => APP_COMMAND_OPTIONS.includes(commandOption.value));
      setCommandOptions(newCommandOptions);
    }
  }

  return (
    <CCard>
      <CCardHeader>
        Application OTA Update
      </CCardHeader>
      <CCardBody>
        <CFormGroup>
          <CLabel htmlFor="app">App (docker, compose, application)</CLabel>
          <Select id="app" placeholder="Enter your application type" options={appOptions} onChange={handleAppInputChange}/>
        </CFormGroup>
        <CFormGroup>
          <CLabel htmlFor="command">Command (down, import, load, pull, up, list, stats, remove, update)</CLabel>
          <Select id="command" placeholder="down, import, load, pull, up, list, stats, remove, update" options={commandOptions}/>
        </CFormGroup>
        <CFormGroup>
          <CLabel htmlFor="tag">Container Tag</CLabel>
          <CInput id="tag" placeholder="Enter container tag"/>
        </CFormGroup>
        <CFormGroup>
          <CLabel htmlFor="reboot">Device Reboot</CLabel>
          <Select id="reboot" placeholder="Enter device reboot" options={rebootOptions}/>
        </CFormGroup>
        <CFormGroup>
          <CLabel htmlFor="fetch_link">Fetch</CLabel>
          <CInput id="fetch_link" placeholder="Enter fetch link"/>
        </CFormGroup>
        <CFormGroup>
          <CLabel htmlFor="signature">Signature</CLabel>
          <CInput id="signature" placeholder="Enter signature"/>
        </CFormGroup>
        <CFormGroup>
          <CLabel htmlFor="version">Version</CLabel>
          <CInput id="version" placeholder="Enter version"/>
        </CFormGroup>
        <CFormGroup>
          <CLabel htmlFor="server_username">Server Username</CLabel>
          <CInput id="server_username" placeholder="Enter server username"/>
        </CFormGroup>
        <CFormGroup>
          <CLabel htmlFor="server_password">Server Password</CLabel>
          <CInput id="server_password" placeholder="Enter server password"/>
        </CFormGroup>
        <CFormGroup>
          <CLabel htmlFor="docker_registry">Docker Registry</CLabel>
          <CInput id="docker_registry" placeholder="Enter Docker registry"/>
        </CFormGroup>
        <CFormGroup>
          <CLabel htmlFor="docker_username">Docker Username</CLabel>
          <CInput id="docker_username" placeholder="Enter Docker username"/>
        </CFormGroup>
        <CFormGroup>
          <CLabel htmlFor="docker_password">Docker Password</CLabel>
          <CInput id="docker_password" placeholder="Enter Docker password"/>
        </CFormGroup>
        <CFormGroup>
          <CLabel htmlFor="docker_compose_file">Docker Compose File</CLabel>
          <CInput id="docker_compose_file" placeholder="Enter Docker Compose file"/>
        </CFormGroup>
      </CCardBody>
      <CCardFooter>
        <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Submit</CButton> <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton>
      </CCardFooter>
    </CCard>
  )
}

export default AotaCard