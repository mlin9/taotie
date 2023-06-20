import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import Layout from 'pages/Layout';

function App() { //TODO: implement 404 page
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Layout}>
          <Route index Component={Home}/>
        </Route>;
      </Routes>
    </BrowserRouter>
  );
}

export default App;
