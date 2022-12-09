import "./App.css";
import LoginPage from "./components/Login/login";

<<<<<<< HEAD
import MainPage from "./Admin/MainPage";
import Reviews from "./components/Reviews/reviews";
=======

// import RegisterPage from './components/Register/Register';
import WhiteBoard from './components/Whiteboard'
// import { ReviewCard } from './components/Reviews/ReviewCard';
// import { ReviewForm } from './components/Reviews/ReviewForm';
import Reviews from './components/Reviews/reviews';
>>>>>>> 6da7058a34e9434476cad9d96940c8beb4f4f4b4

import RegisterPage from "./components/Register/Register";
import StudentList from "./components/StudentList/StudentList";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Timer from "./components/Timer/timer";

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
=======
      <Timer />
      {/* <LoginPage /> */}
      <RegisterPage />
      <WhiteBoard/>
      {/* <ReviewCard />
      <ReviewForm /> */}
      <Reviews />

>>>>>>> 6da7058a34e9434476cad9d96940c8beb4f4f4b4
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/registerPage" element={<RegisterPage />} />
          <Route exact path="/studentList" element={<StudentList />} />
        </Routes>
        <MainPage />
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
