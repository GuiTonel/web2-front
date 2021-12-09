import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './pages/login'
import Home from './pages/home'

function Index() {
  return (
    <Router>
      <Route path="/login" component={Login} />
      <Route path="/" component={Home} />
    </Router>
  );
}

export default Index;
