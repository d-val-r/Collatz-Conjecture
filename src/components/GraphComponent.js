import React from 'react';
// import "../../node_modules/react-vis/dist/style.css";
import {XYPlot, LineSeries} from 'react-vis';
import { HorizontalGridLines, VerticalGridLines, XAxis, YAxis } from 'react-vis/dist';

const GraphComponent = ({data}) => {
  return (
    <div id="graph-component">
      <XYPlot height={300} width={300}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <LineSeries data={data} />
      </XYPlot>
    </div>
  )
}

export default GraphComponent;