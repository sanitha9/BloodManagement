import logo from './logo.svg';
import './App.css';
import  { Routes,Route, BrowserRouter } from "react-router-dom"

import PublicNav from './Components/Navbar/PublicNav';
import UserNav from './Components/Navbar/UserNav';
import Userhome from './Components/PublicUserSlider/Userhome';
import Publichomepage from './Components/Pages/Publichomepage';
import Login from './Components/Login/Login';
import UserRegistration from './Components/Registration/UserRegistration';
import SupervisorRegi from './Components/Registration/SupervisorRegi';
import AdminNav from './Components/Navbar/AdminNav';
import AdminHomePage from './Components/Pages/AdminHomePage';
import UserManage from './Components/Admin/UserManage';
import AddDonorPage from './Components/Pages/AddDonorPage';
import DonorInfoList from './Components/Admin/DonorInfoList';
import DonorActivity from './Components/Admin/DonorActivity';
import ListDonorActivity from './Components/Admin/ListDonorActivity';
import AddBloodProduct from './Components/Admin/AddBloodProduct';
import ListBloodProduct from './Components/Admin/ListBloodProduct';
import EditBloodDonorInfo from './Components/Admin/EditBloodDonorInfo';
import DeleteConfirmationbox from './Components/Admin/DeleteConfirmationbox';
import ApprovedRequest from './Components/Admin/ApprovedRequest';
import CheckBloodBagsExpired from './Components/Admin/CheckBloodBagsExpired';
import SearchDonor from './Components/Admin/SearchDonor';







function App() {
  return (
    <>
    {/* <PublicNavbar/> */}
    <BrowserRouter>
    <Routes>
      
    <Route path="/" element={<Publichomepage/>} />
<Route path="/usernav" element={<UserNav/>}/> 
<Route path="/adddonor" element={<AddDonorPage/>}/> 
<Route path="/editblooddonorinfo/:id" element={<EditBloodDonorInfo/>}/>
<Route path="/login" element={<Login/>}/> 
<Route path="/publichomepage" element={<Publichomepage/>}/> 
<Route path="/userreg" element={<UserRegistration/>}/> 
<Route path="/supervisor" element={<SupervisorRegi/>}/>
<Route path="/admin" element={<AdminHomePage/>}/>  
<Route path="/usermange" element={<UserManage/>}/> 
<Route path="/donorinfo" element={<DonorInfoList/>}/> 
<Route path='/deleteconfirmation/:id' element={<DeleteConfirmationbox/>}/>

<Route path="/donoractivity" element={<DonorActivity/>}/> 
<Route path="/listdonoractivity" element={<ListDonorActivity/>}/> 
<Route path="/addbloodproduct" element={<AddBloodProduct/>}/> 
<Route path="/listbloodproduct" element={<ListBloodProduct/>}/> 
<Route path="/approverequest" element={<ApprovedRequest/>}/> 
<Route path="/bloodbagexpired" element={<CheckBloodBagsExpired/>}/> 
<Route path="/searchdonor" element={<SearchDonor/>}/> 
   </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
