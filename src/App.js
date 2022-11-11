import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeView from './assets/views/HomeView';
import './assets/scss/main.scss'

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<HomeView />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
