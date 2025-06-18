import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header.jsx';
import BrowseMenu from './pages/browseMenu.jsx';
import Home from './pages/home.jsx';
import Restaurants from './pages/restaurants.jsx';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browsemenu" element={<BrowseMenu />} />
        <Route path="/specialoffers" element={<BrowseMenu />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/trackorder" element={<BrowseMenu />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
