import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header.jsx';
import BrowseMenu from './pages/browseMenu.jsx';
import Home from './pages/home.jsx';
import Login from './pages/login.jsx';
import Restaurants from './pages/restaurants.jsx';
import SpecialOffers from './pages/specialOffers.jsx';
import TrackOrder from './pages/trackOrder.jsx';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browsemenu" element={<BrowseMenu />} />
        <Route path="/specialoffers" element={<SpecialOffers />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/trackorder" element={<TrackOrder />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
