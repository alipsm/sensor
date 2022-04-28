import React, { Fragment, useContext } from 'react'
import GaugeChart from 'react-gauge-chart/dist/GaugeChart'
import { context } from '../contextApi/context';
import { create_fluid } from './Script';

export default function ListSensors() {

    const { sensors } = useContext(context)
    // debugger
    return (
        <div id='sensor-container'>
            <div className="cards">
                {sensors ? sensors.map(sensor => (

                    <div className="card card-1">
                        <div className='chart-container'>
                            {sensor.sensortype == 1 ? (
                                <GaugeChart id="gauge-chart3"
                                    nrOfLevels={25}
                                    arcWidth={0.3}
                                    percent={`0.${sensor.sensordata}`}
                                    formatTextValue={(value) => value}
                                />
                            ) : (
                                <Fragment>
                                    <div className="col  text-center">
                                        <div id={`fluid-meter-${sensor.sensorid}`}></div>
                                    </div>
                                    {create_fluid(sensor.sensorid,sensor.sensordata)}
                                </Fragment>
                            )}
                        </div>
                        <div className='information-sensor'>
                            <h4>{sensor.sensorname}</h4>
                        </div>
                    </div>
                )) : null}
            </div>
        </div>
    )
}
