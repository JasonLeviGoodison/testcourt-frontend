import { useState } from 'react';
import logo from './logo.svg';
import DocsList from './components/DocsList'
import './App.css';
import DocumentViewer from './components/DocumentViewer';
import CheckList from './components/CheckList';

function App() {
  const [docUrl, setDocUrl] = useState("");
  return (
    <div className="App" style={{'display': 'flex', backgroundColor: "#EEEEEE"}}>
      <DocsList/>
      <DocumentViewer/>
      <CheckList/>
    </div>
  );
}

export default App;
