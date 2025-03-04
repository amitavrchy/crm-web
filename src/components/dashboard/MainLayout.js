'use client';
import { useState } from "react";
import { usePathname } from "next/navigation";
import Sidebar from "./SidebarLayout";
import Header from "./HeaderLayout";
import Client from "./Client";
import Vendor from "./Vendor";
import Admin from "./Admin";
import Employee from "./Employee";
import AppliedJobs from "./Employee/AppliedJobs";
import ApprovedJobs from "./Employee/ApprovedJobs";
import RejectedJobs from "./Employee/RejectedJobs";
import CompletedJobs from "./Employee/CompletedJobs";
import PostedJobs from "./Client/PostedJobs";
import CompletedJobsClient from "./Client/CompletedJobsClient";
import PaymentHistory from "./Client/PaymentHistory";
import UserManagement from "./Admin/UserManagement";
import EmployeeManagement from "./Vendor/EmployeeManagement";
import JobApplyManagement from "./Employee/JobApplyManagement";
import JobHistory from "./Employee/JobHistory";
import ProfileManagement from "./Employee/ProfileManagement";
import VendorInteraction from "./Client/VendorInteraction";
import JobHistoryReports from "./Client/JobHistoryReports";
import JobManagementAdmin from "./Admin/JobManagementAdmin";
import JobManagementClient from "./Client/JobManagementClient";
import JobManagementVendor from "./Vendor/JobManagementVendor";
import ReportsAnalyticsAdmin from "./Admin/ReportAnalyticsAdmin";
import ReportsAnalyticsVendor from "./Vendor/ReportsAnalyticsVendor";
import PostBlogs from "./Admin/PostBlogs";
import PostProjects from "./Admin/PostProjects";
import Meeting from "./Vendor/Meeting";
import JobProgressVendor from "./Vendor/JobProgressVendor";
import ViewResumeVendor from "./Vendor/ViewResumeVendor";
import ViewResumeAdmin from "./Admin/ViewResumeAdmin";
import JobProgressAdmin from "./Admin/JobProgressAdmin";
import CreateJobCategory from "./Admin/CreateJobCategory";
import ApplicationManagementE from "./Admin/ApplicationManagementE";
import TimeSheetJob from "./Admin/TimeSheetJob";
import AdminProfileManagement from "./Admin/AdminProfileManagement";
import VendorProfileManagement from "./Vendor/VendorProfileManagement";
import ClientProfileManagement from "./Client/ClientProfileManagement";


const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const pathname = usePathname();

  return (
    <div className="relative bg-[#f7f6f9] h-full min-h-screen font-[sans-serif]">
      <div className="flex items-start">
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        {/* Sidebar toggle button */}
        <button
          id="toggle-sidebar"
          onClick={toggleSidebar}
          className="lg:hidden w-8 h-8 z-[100] fixed top-[36px] left-[10px] cursor-pointer bg-[#007bff] flex items-center justify-center rounded-full outline-none transition-all duration-500"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" className="w-3 h-3" viewBox="0 0 55.752 55.752">
            <path d="M43.006 23.916a5.36 5.36 0 0 0-.912-.727L20.485 1.581a5.4 5.4 0 0 0-7.637 7.638l18.611 18.609-18.705 18.707a5.398 5.398 0 1 0 7.634 7.635l21.706-21.703a5.35 5.35 0 0 0 .912-.727 5.373 5.373 0 0 0 1.574-3.912 5.363 5.363 0 0 0-1.574-3.912z" />
          </svg>
        </button>

        {/* Main Content */}
        <section className="main-content w-full px-8">
          <Header toggleDropdown={toggleDropdown} isDropdownOpen={isDropdownOpen} />

          {/* Content based on route */}
          <div className="mt-8">

            {pathname === "/dashboard/client" && <Client />}
            {pathname === "/dashboard/client/postedJobs" && <PostedJobs />}
            {pathname === "/dashboard/client/completedJobsClient" && <CompletedJobsClient />}
            {pathname === "/dashboard/client/paymentHistory" && <PaymentHistory />}
            {pathname === "/dashboard/client/jobManagementClient" && <JobManagementClient />}
            {pathname === "/dashboard/client/vendorInteraction" && <VendorInteraction />}
            {pathname === "/dashboard/client/jobHistoryReports" && <JobHistoryReports />}
            {pathname === "/dashboard/client/clientProfileManagement" && <ClientProfileManagement />}

            {pathname === "/dashboard/vendor" && <Vendor />}
            {pathname === "/dashboard/vendor/jobManagementVendor" && <JobManagementVendor />}
            {pathname === "/dashboard/vendor/employeeManagement" && <EmployeeManagement />}
            {pathname === "/dashboard/vendor/reportsAnalyticsVendor" && <ReportsAnalyticsVendor />}
            {pathname === "/dashboard/vendor/meeting" && <Meeting />}
            {pathname === "/dashboard/vendor/jobProgressVendor" && <JobProgressVendor />}
            {pathname === "/dashboard/vendor/viewResumeVendor" && <ViewResumeVendor />}
            {pathname === "/dashboard/vendor/vendorProfileManagement" && <VendorProfileManagement />}

            {pathname === "/dashboard/admin" && <Admin />}
            {pathname === "/dashboard/admin/userManagement" && <UserManagement />}
            {pathname === "/dashboard/admin/jobManagementAdmin" && <JobManagementAdmin />}
            {pathname === "/dashboard/admin/reportsAnalyticsAdmin" && <ReportsAnalyticsAdmin />}
            {pathname === "/dashboard/admin/postBlogs" && <PostBlogs />}
            {pathname === "/dashboard/admin/postProjects" && <PostProjects />}
            {pathname === "/dashboard/admin/jobProgressAdmin" && <JobProgressAdmin />}
            {pathname === "/dashboard/admin/viewResumeAdmin" && <ViewResumeAdmin />}
            {pathname === "/dashboard/admin/createJobCategory" && <CreateJobCategory />}
            {pathname === "/dashboard/admin/applicationManagementE" && <ApplicationManagementE />}
            {pathname === "/dashboard/admin/timeSheetJob" && <TimeSheetJob />}
            {pathname === "/dashboard/admin/adminProfileManagement" && <AdminProfileManagement />}

            {pathname === "/dashboard/employee" && <Employee />}
            {pathname === "/dashboard/employee/appliedJobs" && <AppliedJobs />}
            {pathname === "/dashboard/employee/approvedJobs" && <ApprovedJobs />}
            {pathname === "/dashboard/employee/rejectedJobs" && <RejectedJobs />}
            {pathname === "/dashboard/employee/completedJobs" && <CompletedJobs />}
            {pathname === "/dashboard/employee/jobApplyManagement" && <JobApplyManagement />}
            {pathname === "/dashboard/employee/jobHistory" && <JobHistory />}
            {pathname === "/dashboard/employee/profileManagement" && <ProfileManagement />}
          </div>

        </section>
      </div>
    </div>
  );
};

export default MainLayout;
