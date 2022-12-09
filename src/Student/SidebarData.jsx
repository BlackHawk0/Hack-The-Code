import * as FaIcons from "react-icons/fa";
import * as FcIcons from "react-icons/fc";
import * as MdIcons from "react-icons/md";
// import * as AiIcons from "react-icons/ai";




export const SidebarData=[
    {
        title: "Home",
        path: "../home",
        icon: <FaIcons.FaHome />,
      },
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdIcons.MdDashboard />,
      },

      {
        title: "Assessment",
        path: "/createassessment",
        icon: <FcIcons.FcDepartment />,
      },
      // {
      //   title: "StudentList",
      //   path: "/studentlist",
      //   icon: <FaIcons.FaUsers />,
      // },
      {
        title: "Invitation",
        path: "/studentinvitationform",
        icon: <MdIcons.MdInsertInvitation />,
      },
      {
        title: "Reviews",
        path: "/studentReviews",
        icon: <MdIcons.MdOutlineReviews />,
      },
      // {
      //   title: "Routes",
      //   path: "/mainPageroutes",
      //   icon: <MdIcons.MdRequestPage />,
      // },
      {
        title: "Logout",
        path: "/logout",
        icon: <MdIcons. MdLogout />,
      },
]









