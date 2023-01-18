//import logo from './logo.svg';
import './App.css';
import MainBlock from './components/mainBlock/MainBlock.js';
import Navbar1 from './components/navbar/Navbar1';

import 'bootstrap/dist/css/bootstrap.min.css';

//const tab=["A","B","C"]
function App() {
  return (
    <div className="App">
    <Navbar1/>
      <MainBlock/>
      {/*tab.map(ele=><MainBlock/>)*/}
    </div>
  );
}

export default App;
