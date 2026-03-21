import './App.css';
import { Routes, Route } from 'react-router';
import MainLayout from './components/MainLayout';
import Home from './components/Home';
import Test from './components/Test';
import SingleRecipe from './components/SingleRecipe'

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="recipes">
          <Route index element={<Test />} />
          <Route path=":recipeId" element={<SingleRecipe />}/>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
