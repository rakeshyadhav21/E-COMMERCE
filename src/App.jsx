import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import UserLayout from "./components/Layout/UserLayout"
import Home from './pages/Home';


function App() {
  return (
    <BrowserRouter>
      <Routes>
            {/* User Layout */}
            <Route  path="/" element={<UserLayout/>}> 
            {/* Home */}
            <Route index element={<Home/>} /> 
            </Route>
            {/* Products */}
            {/* Cart */}

        <Route>{/* Admin Layout */}

        </Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App
