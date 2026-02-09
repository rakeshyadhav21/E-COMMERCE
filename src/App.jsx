import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import UserLayout from "./components/Layout/UserLayout"
import Home from './pages/Home';


function App() {
  return (
    <BrowserRouter>
      <Routes>
            {/* User Layout */}
            <Route index path="/" element={<UserLayout/>}> 
            </Route>
            {/* Home */}
            <Route element={<Home/>}> 
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
