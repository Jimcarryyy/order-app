import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import BrowseMenu from './pages/browseMenu';
import Home from './pages/Home';
import Restaurants from './pages/restaurants';

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
