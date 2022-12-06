
import './App.css';
import LoginPage from "./components/Login/login";
import RegisterPage from './components/Register/Register';
import WhiteBoard from './components/Whiteboard'

function App() {
  return (
    <div className="App">
      {/* <LoginPage /> */}
      <RegisterPage />
      <WhiteBoard/>
    </div>
  );
}

export default App;
