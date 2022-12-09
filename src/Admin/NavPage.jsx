import React from "react";
import {Route, Routes} from "react-router-dom";
import Dashboard from "./Dashboard";
import StudentList from "../components/StudentList/StudentList";
import Reviews from "../components/Reviews/reviews";

import MainPage from "./MainPage"
// import Admin from "./Admin";

function NavPage() {
    return (


            <Routes>
                <Route path="/*" element={<Dashboard/>}/>
                {/* <Route path="/assesment" element={<Assesment/>}/> */}
                <Route  path="/studentlist" element={<StudentList/>}/>
                {/* <Route  path="/invitation" element={<Invitations />}/> */}
                <Route  path="/reviews" element={<Reviews/>}/>
            </Routes>

    )
}
export default NavPage;
