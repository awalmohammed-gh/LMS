import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import SystemLayout from "../layout/SystemLayout"
import Home from "../pages/Home";
import EducatorLayout from "../layout/EducatorLayout";
import Overview from "../pages/Educator/Overview";
import AddCourse from "../pages/Educator/AddCourse";
import MyCourses from "../pages/Educator/MyCourses";
import StudentEnrollment from "../pages/Educator/StudentEnrollment";
import CoursesDetails from "../pages/CoursesDetails";
import Courses from "../pages/Courses";
import PaymentPage from "../pages/PaymentPage";
import ResourcesPage from "../pages/ResourcesPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* system layout */}
      <Route path="/" element={<SystemLayout />}>
         <Route index element={<Home/>}/>
         <Route path="courses-details/:id" element={<CoursesDetails/>}/>
         <Route path="courses" element={<Courses/>}/>
         <Route path="payment/:id" element={<PaymentPage/>}/>
         <Route path="resource" element={<ResourcesPage/>}/>
      </Route>


      {/* educator dashboard */}
      <Route path="/educator" element={<EducatorLayout/>}>
         <Route index element={<Overview/>}/>
         <Route path="add-course" element={<AddCourse/>}/>
         <Route path="my-course" element={<MyCourses/>}/>
         <Route path="student-enroll" element={<StudentEnrollment/>}/>
      </Route>
    </>,
  ),
);

export default router;