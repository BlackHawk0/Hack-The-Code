import React, { useEffect, useState } from "react";
import "./App.css";
import LoginPage from "./components/Login/login";

import RegisterPage from "./components/Register/Register";
// import { ReviewCard } from './components/Reviews/ReviewCard';
// import { ReviewForm } from './components/Reviews/ReviewForm';
import Reviews from "./components/Reviews/reviews";
import StudentList from "./components/StudentList/StudentList";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import FeedBack from "./components/FeedBack/FeedBack";
import CreateAssessment from "./components/Assement/CreateAssement";
import InvitationForm from "./components/Assement/InvitationForm";
import { Route, Routes } from "react-router-dom";
import Timer from "./components/Timer/timer";
import MainPage from "./Admin/MainPage";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <div className="App">
      {/* <UserProfile /> */}

      {/* <Dashboard /> */}
      {/* <Index /> */}
      {/* <Timer /> */}
      {/* <LoginPage /> */}
      {/* <RegisterPage /> */}
      {/* <ReviewCard />
      <ReviewForm /> */}
      {/* <Reviews /> */}

      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/register" element={<RegisterPage />} />
        <Route exact path="/dashboard" element={<MainPage />} />
        <Route exact path="/studentList" element={<StudentList />} />
        <Route exact path="/feedBack" element={<FeedBack />} />
        <Route exact path="/createAssessment" element={<CreateAssessment />} />
        <Route exact path="/invitation" element={<InvitationForm />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
