import React, {useState} from 'react';
import './App.css';
import '../node_modules/react-vis/dist/style.css';
import GraphComponent from './components/GraphComponent';
import CollatzCalculator from './components/CollatzCalculator';

function App() {
  const dummyData = [
    {x: 0, y: 8},
    {x: 1, y: 5},
    {x: 2, y: 4},
    {x: 3, y: 9},
    {x: 4, y: 1},
    {x: 5, y: 7},
    {x: 6, y: 6},
    {x: 7, y: 3},
    {x: 8, y: 2},
    {x: 9, y: 0}
  ];

  const [data, setData] = useState([]);


  return (
    <>
      <GraphComponent data={data} />
      <CollatzCalculator setData={setData}/>
    </>
  );
}

export default App;
