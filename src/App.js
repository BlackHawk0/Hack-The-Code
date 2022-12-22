import React from "react";
import "./App.css";
import LoginPage from "./components/Login/login";
import MainPage from "./Admin/MainPage";
// import RegisterPage from './components/Register/Register';
// import WhiteBoard from './components/Whiteboard'
// import WhiteBoard from "./components/Whiteboard";
// import { ReviewCard } from './components/Reviews/ReviewCard';
// import { ReviewForm } from './components/Reviews/ReviewForm';
import Article from "./components/Assement/article";
import Reviews from "./components/Reviews/reviews";
import MyAssessment from "./components/Assement/MyAssessments";
import RegisterPage from "./components/Register/Register";
import StudentList from "./components/StudentList/StudentList";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import CreateAssessment from "./components/Assement/CreateAssement";
import InvitationForm from "./components/Assement/InvitationForm";
import { Route, Routes } from "react-router-dom";
// import Timer from "./components/Timer/timer";
import StudentMainPage from "./Student/StudentMainPage";
import Studentinvitationform from "./components/Assement/Studentinvitationform";

function App() {

  return (
    <div className="App">
      {/* <UserProfile /> */}
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
        <Route exact path="/student" element={<StudentMainPage />} />
        <Route exact path="/studentList" element={<StudentList />} />
        <Route exact path="/reviews" element={<Reviews />} />
        <Route exact path="/createAssessment" element={<CreateAssessment />} />
        <Route exact path="/assessment" element={<MyAssessment />} />
        <Route exact path="/invitation" element={<InvitationForm />} />
        <Route exact path="/studentinvitationform" element={<Studentinvitationform />} />
        <Route exact path="/article/:id" element={<Article />} />
        {/* <Route exact path="/invitation" element={<Revi />} /> */}
      </Routes>
    </div>
  );
}

export default App;
