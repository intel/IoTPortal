import React from 'react';
import classNames from "classnames";

import Chart from "react-apexcharts";
import { Button } from 'primereact/button';
import { CButton, CButtonGroup, CCard, CCardBody, CCol, CRow } from '@coreui/react';

import ChartSkeleton from '../ChartSkeleton/ChartSkeleton';

const LineChartCard = ({
                         title,
                         options,
                         series,
                         type,
                         height,
                         timeRangeFilters,
                         selectedTimeRangeFilter,
                         onTimeRangeFilter,
                         onRefresh,
                         isLoading,
                         errorMessage,
                       }) => {

  return (
    <CCard>
      <CCardBody>
        <CRow className="card-title mb-3">
          <CCol sm="5">
            <h4 className="card-title mb-0">{title}</h4>
          </CCol>
          <CCol sm="7" className="d-none d-md-block">
            <Button icon={classNames('pi', {'pi-spin': isLoading}, 'pi-refresh')}
                    iconPos="right"
                    className="float-right"
                    onClick={onRefresh}/>
            <CButtonGroup className="float-right mr-3">
              {
                timeRangeFilters.map(value => (
                  <CButton
                    color="outline-secondary"
                    key={value.value}
                    value={value.value}
                    className="mx-0"
                    active={value.value === selectedTimeRangeFilter}
                    onClick={onTimeRangeFilter}
                  >
                    {value.label}
                  </CButton>
                ))
              }
            </CButtonGroup>
          </CCol>
        </CRow>
        {isLoading ?
          (<ChartSkeleton/>) : (
            <div className="mt-3">
              <Chart
                options={options}
                series={series}
                type={type}
                height={height}
              />
            </div>)
        }
      </CCardBody>
    </CCard>
  );
};


export default LineChartCard;