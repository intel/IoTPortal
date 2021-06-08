import React from 'react';
import classNames from 'classnames';


const Duration = ({style, className, hours, minutes, seconds}) => {

  console.log(`hours: ${hours}, minutes: ${minutes}, seconds: ${seconds}`);

  const durationClass = 'd-flex flex-row';

  const durationHeaderClass = 'd-flex flex-column mx-3';

  const durationContentClass = 'display-4';

  const durationSubHeaderClass = 'text-center';

  const pad = (str, max = 2) => str.length < max ? `0${str}` : str;

  const Content = ({value, subHeader}) => (
    <div className={durationHeaderClass}>
      <span className={durationContentClass}>{pad(value.toString())}</span>
      <span className={durationSubHeaderClass}>{subHeader}</span>
    </div>
  );

  const Separator = ({clockSeparator, shouldShow = true, isHidden = true}) => {
    if (isHidden) return null;
    return (
      <div className={durationHeaderClass}>
        <span className={durationContentClass}> {shouldShow ? (clockSeparator ? clockSeparator : ':') : ''} </span>
      </div>
    );
  };

  const Hours = ({value, subHeader = 'Hours'}) => {
    return value
      ? <Content value={value} subHeader={subHeader}/>
      : null;
  };

  const Minutes = ({value, subHeader = 'Minutes'}) => {
    return value
      ? <Content value={value} subHeader={subHeader}/>
      : (hours
        ? <Content value={0} subHeader={subHeader}/>
        : null);
  };

  const Seconds = ({value, subHeader = 'Seconds'}) => {
    return value
      ? <Content value={value} subHeader={subHeader}/>
      : <Content value={0} subHeader={subHeader}/>;
  };

  return (
    <div className={classNames(durationClass, className)} style={{...style}}>
      <Hours value={hours}/>
      <Separator isHidden={!hours}/>
      <Minutes value={minutes}/>
      <Separator isHidden={!minutes}/>
      <Seconds value={seconds}/>
    </div>
  );
};

export default Duration;