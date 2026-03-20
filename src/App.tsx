import './App.css';
import { Routes, Route } from 'react-router';
import MainLayout from './components/MainLayout';
import Home from './components/Home';
import Test from './components/Test';

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="test" element={<Test />} />
      </Route>
    </Routes>
  );
}

export default App;
