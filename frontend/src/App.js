import logo from './logo.svg';
import './App.css';
import AboutUs from './pages/AboutUs';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <div className="App">
      <AppRoutes/>
      <AboutUs />
    </div>
  );
}

export default App;
