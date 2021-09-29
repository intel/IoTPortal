/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

import React from 'react'

import { CCard, CCardBody, CCardHeader } from '@coreui/react'

const DevicePropertyCard = ({device}) => {
  return (
    <CCard>
      <CCardHeader>
        Device Properties
      </CCardHeader>
      <CCardBody>
        <table className="table table-striped">
          <thead>
          <tr>
            <th scope="col">Property</th>
            <th scope="col">Value</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <th scope="row">BIOS Release Date</th>
            <td>{device.bios_release_date}</td>
          </tr>
          <tr>
            <th scope="row">BIOS Vendor</th>
            <td>{device.bios_vendor}</td>
          </tr>
          <tr>
            <th scope="row">BIOS Version</th>
            <td>{device.bios_version}</td>
          </tr>
          <tr>
            <th scope="row">CPU</th>
            <td>{device.cpu}</td>
          </tr>
          <tr>
            <th scope="row">Disk Information</th>
            <td>{device.disk_information}</td>
          </tr>
          <tr>
            <th scope="row">OS Information</th>
            <td>{device.os_information}</td>
          </tr>
          <tr>
            <th scope="row">System Manufacturer</th>
            <td>{device.system_manufacturer}</td>
          </tr>
          <tr>
            <th scope="row">System Product Name</th>
            <td>{device.system_product_name}</td>
          </tr>
          <tr>
            <th scope="row">Total Memory</th>
            <td>{device.total_memory}</td>
          </tr>
          </tbody>
        </table>
      </CCardBody>
    </CCard>
  )
};

export default DevicePropertyCard;