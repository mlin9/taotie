import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from 'pages/Layout';
import Home from 'pages/Home';
import Catalog from 'pages/Catalog';
import News from 'pages/News';
import Downloads from 'pages/Downloads';
import About from 'pages/About';

function App() { //TODO: implement 404 page
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Layout}>
          <Route index Component={Home}/>
          <Route path='catalog' Component={Catalog}/>
          <Route path='news' Component={News}/>
          <Route path='downloads' Component={Downloads}/>
          <Route path='about' Component={About}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
