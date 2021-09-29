/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

import { useState } from 'react';
import moment from 'moment';

import { Knob } from 'primereact/knob';
import Chart from 'react-apexcharts';
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react';

import { roundToTwoDecimalPlaces } from '../../utils/utils';
import useDeviceJobStatusRenderer from '../../hooks/useDeviceJobStatusRenderer';

import Duration from '../../components/Duration/Duration';
import StartTimeEndTime from '../../components/StartTimeEndTime/StartTimeEndTime';

const DeviceJobStatusCard = ({
                               deviceJob,
                               completedPercentage,
                               successfulDevicesCount,
                               failedDevicesCount,
                               processingDevicesCount,
                               pendingDevicesCount,
                               startedAt,
                               completedAt,
                               durationInMs,
                             }) => {

  const renderDeviceJobStatus = useDeviceJobStatusRenderer()

  const [chartOptions, setChartOptions] = useState({
    chart: {
      width: 200,
      type: 'pie',
    },
    labels: ['Success', 'Failure', 'Processing', 'Pending'],
    colors: ['#00e396', '#ff4560', '#bbc6c2', '#2196F3'],
    legend: {
      position: 'top'
    },
  });

  const series = [
    successfulDevicesCount,
    failedDevicesCount,
    processingDevicesCount,
    pendingDevicesCount
  ];

  const duration = moment.duration(durationInMs);

  return (
    <CCard>
      <CCardHeader>
        Device job status
      </CCardHeader>
      <CCardBody>
        <CRow className="m-3">
          <CCol md="6">
            <div>
              <h4 className="mr-3 d-inline-block">Results</h4>
              {renderDeviceJobStatus(deviceJob)}
            </div>
            <div className="d-flex flex-row align-items-center">
              <div className="mt-3 mr-5 text-center">
                <h6>Completed %</h6>
                <Knob value={roundToTwoDecimalPlaces(completedPercentage)} valueTemplate={"{value}%"} strokeWidth={5}
                      valueColor="#00e396" size={250} readOnly
                />
              </div>
              <Chart
                options={chartOptions}
                series={series}
                type="pie"
                height={200}
              />
            </div>
          </CCol>
          <CCol md="6">
            <div>
              <h4>Duration</h4>
            </div>
            <div className="d-flex flex-column justify-content-center" style={{height: '250px'}}>
              <Duration className="mb-5" hours={duration.hours()} minutes={duration.minutes()}
                        seconds={duration.seconds()}/>
              <StartTimeEndTime startTime={startedAt} endTime={completedAt}/>
            </div>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
  );
};

export default DeviceJobStatusCard;