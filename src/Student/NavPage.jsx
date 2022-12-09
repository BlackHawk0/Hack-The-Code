import React from "react";
import {Route, Routes} from "react-router-dom";
import Dashboard from "./Dashboard";
import StudentList from "../components/StudentList/StudentList";
import Reviews from "../components/Reviews/reviews";
import CreateAssessment from "../components/Assement/CreateAssement";
import InvitationForm from "../components/Assement/InvitationForm";

// import MainPage from "./MainPage"
// import Admin from "./Admin";

function NavPage() {
    return (


            <Routes>
                <Route path="/*" element={<Dashboard/>}/>
                <Route path="/createassessment" element={<CreateAssessment/>}/>
                <Route  path="/studentlist" element={<StudentList/>}/>
                <Route  path="/invitationform" element={<InvitationForm />}/>
                <Route  path="/reviews" element={<Reviews/>}/>
            </Routes>

    )
}
export default NavPage;
