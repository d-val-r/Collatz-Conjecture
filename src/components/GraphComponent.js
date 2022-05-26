import React from 'react';
import "../../node_modules/react-vis/dist/style.css";
import "../css/GraphComponent.css"
import {XYPlot, LineSeries} from 'react-vis';
import { HorizontalGridLines, VerticalGridLines, XAxis, YAxis } from 'react-vis/dist';

const GraphComponent = ({data}) => {
    const dummyData = [
        {x: 0, y: 0},
        {x: 1, y: 1},
        {x: 2, y: 2}
    ];



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