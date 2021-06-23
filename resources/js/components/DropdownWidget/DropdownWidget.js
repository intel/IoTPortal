import React from 'react'
import { withRouter } from 'react-router-dom';

import CIcon from '@coreui/icons-react'
import { CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle, CWidgetDropdown } from '@coreui/react'

import ChartLineSimple from '../ChartLineSimple/ChartLineSimple';

const DropdownWidget = ({
                          history,
                          color,
                          header,
                          text,
                          dataPoints,
                          pointHoverBackgroundColor,
                          label,
                          labels,
                          createUrl,
                          viewUrl
                        }) => {
  return (
    <CWidgetDropdown
      color={color}
      header={header}
      text={text}
      footerSlot={
        <ChartLineSimple
          pointed
          borderColor="rgba(255,255,255,.55)"
          backgroundColor="transparent"
          className="c-chart-wrapper mt-3 mx-3"
          style={{height: '70px'}}
          dataPoints={dataPoints}
          pointHoverBackgroundColor={pointHoverBackgroundColor}
          label={label}
          labels={labels}
        />
      }
    >
      <CDropdown>
        <CDropdownToggle color="transparent">
          <CIcon name="cil-settings"/>
        </CDropdownToggle>
        <CDropdownMenu className="pt-0" placement="bottom-end">
          <CDropdownItem onClick={() => history.push(createUrl)}>Create</CDropdownItem>
          <CDropdownItem onClick={() => history.push(viewUrl)}>View</CDropdownItem>
        </CDropdownMenu>
      </CDropdown>
    </CWidgetDropdown>
  );
};

export default withRouter(DropdownWidget);
