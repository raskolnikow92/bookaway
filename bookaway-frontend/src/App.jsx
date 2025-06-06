import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import { MainPage } from './components/MainPage/MainPage';
import { Routes, Route } from 'react-router-dom';
import { GenrePage } from './components/GenrePage/GenrePage';


function App() {

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/genre/:genreName" element={<GenrePage/>}/>
      </Routes>
    </>
  )
}

export default App
