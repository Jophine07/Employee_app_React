import logo from './logo.svg';
import './App.css';
import AddEmp from './components/AddEmp';
import SearchEmp from './components/SearchEmp';
import DeleteEmp from './components/DeleteEmp';
import ViewAll from './components/ViewAll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddEmp/>}/>
      <Route path='/DeleteEmp' element={<DeleteEmp/>}/>
      <Route path='/SearchEmp' element={<SearchEmp/>}/>
      <Route path='/ViewAll' element={<ViewAll/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
