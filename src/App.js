import "./App.css";
import LoginPage from "./components/Login/login";
import MainPage from "./Admin/MainPage";

// import RegisterPage from './components/Register/Register';
// import WhiteBoard from './components/Whiteboard'
// import WhiteBoard from "./components/Whiteboard";
// import { ReviewCard } from './components/Reviews/ReviewCard';
// import { ReviewForm } from './components/Reviews/ReviewForm';
// import Reviews from "./components/Reviews/reviews";

import RegisterPage from "./components/Register/Register";
// import StudentList from "./components/StudentList/StudentList";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
// import CreateAssessment from "./components/Assement/CreateAssement";
// import InvitationForm from "./components/Assement/InvitationForm";
import { Route, Routes } from "react-router-dom";
import Timer from "./components/Timer/timer";
import StudentMainPage from "./Student/StudentMainPage";

function App() {
  return (
    <div className="App">
      {/* <UserProfile /> */}

      {/* <Dashboard /> */}
      {/* <Index /> */}
      <Timer />

      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/registerPage" element={<RegisterPage />} />
      </Routes>
      <MainPage />
      <StudentMainPage />
    </div>
  );
}

export default App;
