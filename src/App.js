import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <> 
      <Router>
        <Route path="/" exact component={HomePage}/>
      </Router>
    </>
  );
}

export default App;
