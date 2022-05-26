import React, {useState} from 'react';
import './App.css';
import '../node_modules/react-vis/dist/style.css';
import GraphComponent from './components/GraphComponent';
import CollatzCalculator from './components/CollatzCalculator';
import TableComponent from './components/TableComponent';

function App() {

  const [data, setData] = useState([]);


  return (
    <>
      <GraphComponent data={data} />
      <TableComponent data={data} />
      <CollatzCalculator setData={setData}/>
    </>
  );
}

export default App;
