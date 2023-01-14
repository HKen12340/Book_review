import  { RoutesPage } from './routes/routes.jsx'
import './App.css';
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
        <RoutesPage />
    </BrowserRouter>
  );
}

export default App;
