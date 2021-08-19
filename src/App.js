import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Routes from './routes/routes';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    // <Main/>
    <BrowserRouter>
        <div className="App">
          <Routes />
        </div>
    </BrowserRouter>
  );
}

export default App;
