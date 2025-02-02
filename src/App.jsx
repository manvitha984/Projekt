import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./navbar";
import HeroSection from "./herosection";
import DepartmentsSection from "./DepartmentsSection";
import CampaignSection from "./CampaignSection";
import SlidesSection from "./Slides";
import Footer from "./footer";
import LoginPage from "./login";
import Signup from "./signup";
import PostLoginLayout from "./postloginlayout";
import Dashboard from "./dashboard";
import Tasks from "./taskpage";
import Calendar from "./calendar";
import Messages from "./messages";
import AdminProjectsPage from "./adminprojects";
import AdminSidebar from "./adminsidebar"; 
import Admintaskpage from "./admintaskpage";
import Adminmessages from "./adminmessages";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <HeroSection />
              <DepartmentsSection />
              <CampaignSection />
              <SlidesSection />
              <Footer />
            </>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />

        <Route element={<PostLoginLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/taskpage" element={<Tasks />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/messages" element={<Messages />} />
        </Route>

        <Route element={<AdminSidebar />}>
        <Route path="/adminprojects" element={<AdminProjectsPage />} />

           <Route path="/admintaskpage" element={<Admintaskpage />} /> 
           <Route path="/adminmessages" element={<Adminmessages/>} />
          <Route path="messaging" element={<Messages />} />  
        </Route>
      </Routes>
    </Router>
  );
}
