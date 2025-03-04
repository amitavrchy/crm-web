'use client';
import { MdPeopleAlt, MdWork, MdHistory, MdOutlineReport, MdPerson, MdMeetingRoom, MdDashboard, MdLibraryBooks, MdCategory } from "react-icons/md";
import { BiHomeAlt, BiBriefcase, BiCheckCircle, BiXCircle, BiMessageSquareDetail, BiTask } from "react-icons/bi";
import { FaClipboardList, FaFileInvoiceDollar, FaUsers, FaBlog, FaProjectDiagram, FaUserCog } from "react-icons/fa";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { AiOutlineFieldTime } from "react-icons/ai";

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  const pathname = usePathname();

  const isActive = (route) =>
    pathname === route
      ? "bg-[#d9f3ea] text-green-700"
      : "text-gray-800 hover:bg-[#d9f3ea]";

  const commonMenuItems = [
    {
      href: "/",
      icon: <BiHomeAlt className="text-2xl mr-2" />, 
      label: "Back to Home",
    },
  ];

  const getMenuItems = () => {
    if (pathname.startsWith("/dashboard/vendor")) {
      return [
        ...commonMenuItems,
        {
          href: "/dashboard/vendor/jobManagementVendor",
          icon: <MdWork className="text-2xl mr-2" />, 
          label: "Job Management",
        },
        {
          href: "/dashboard/vendor/employeeManagement",
          icon: <MdPeopleAlt className="text-2xl mr-2" />, 
          label: "Employee Management",
        },
        {
          href: "/dashboard/vendor/reportsAnalyticsVendor",
          icon: <MdOutlineReport className="text-2xl mr-2" />, 
          label: "Reports & Analytics",
        },
        {
          href: "/dashboard/vendor/meeting",
          icon: <MdMeetingRoom className="text-2xl mr-2" />, 
          label: "Meeting",
        },
        {
          href: "/dashboard/vendor/jobProgressVendor",
          icon: <BiTask className="text-2xl mr-2" />, 
          label: "Job Progress",
        },
        {
          href: "/dashboard/vendor/viewResumeVendor",
          icon: <MdLibraryBooks className="text-2xl mr-2" />, 
          label: "View Resume",
        },
        {
          href: "/dashboard/vendor/vendorProfileManagement",
          icon: <MdPerson className="text-2xl mr-2" />, 
          label: "Profile Management",
        },
      ];
    } else if (pathname.startsWith("/dashboard/client")) {
      return [
        ...commonMenuItems,
        {
          href: "/dashboard/client/postedJobs",
          icon: <BiBriefcase className="text-2xl mr-2" />, 
          label: "Posted Jobs",
        },
        {
          href: "/dashboard/client/completedJobsClient",
          icon: <FaClipboardList className="text-2xl mr-2" />, 
          label: "Completed Jobs",
        },
        {
          href: "/dashboard/client/paymentHistory",
          icon: <FaFileInvoiceDollar className="text-2xl mr-2" />, 
          label: "Payment History",
        },
        {
          href: "/dashboard/client/vendorInteraction",
          icon: <BiMessageSquareDetail className="text-2xl mr-2" />, 
          label: "Vendor Interaction",
        },
        {
          href: "/dashboard/client/jobManagementClient",
          icon: <MdWork className="text-2xl mr-2" />, 
          label: "Job Management",
        },
        {
          href: "/dashboard/client/jobHistoryReports",
          icon: <MdHistory className="text-2xl mr-2" />, 
          label: "Job History & Reports",
        },
        {
          href: "/dashboard/client/clientProfileManagement",
          icon: <MdPerson className="text-2xl mr-2" />, 
          label: "Profile Management",
        },
      ];
    } else if (pathname.startsWith("/dashboard/admin")) {
      return [
        ...commonMenuItems,
        {
          href: "/dashboard/admin/userManagement",
          icon: <FaUsers className="text-2xl mr-2" />, 
          label: "User Management",
        },
        {
          href: "/dashboard/admin/jobManagementAdmin",
          icon: <MdDashboard className="text-2xl mr-2" />, 
          label: "Job Management",
        },
        {
          href: "/dashboard/admin/reportsAnalyticsAdmin",
          icon: <MdOutlineReport className="text-2xl mr-2" />, 
          label: "Reports & Analytics",
        },
        {
          href: "/dashboard/admin/postBlogs",
          icon: <FaBlog className="text-2xl mr-2" />, 
          label: "Post Blogs",
        },
        {
          href: "/dashboard/admin/postProjects",
          icon: <FaProjectDiagram className="text-2xl mr-2" />, 
          label: "Post Projects",
        },
        {
          href: "/dashboard/admin/jobProgressAdmin",
          icon: <BiTask className="text-2xl mr-2" />, 
          label: "Job Progress",
        },
        {
          href: "/dashboard/admin/viewResumeAdmin",
          icon: <MdLibraryBooks className="text-2xl mr-2" />, 
          label: "View Resume",
        },
        {
          href: "/dashboard/admin/createJobCategory",
          icon: <MdCategory className="text-2xl mr-2" />, 
          label: "Create Job Category",
        },
        {
          href: "/dashboard/admin/applicationManagementE",
          icon: <FaUserCog className="text-2xl mr-2" />, 
          label: "Apply Manage Employee",
        },
        {
          href: "/dashboard/admin/timeSheetJob",
          icon: <AiOutlineFieldTime className="text-2xl mr-2" />, 
          label: "Time Sheet Jobs",
        },
        {
          href: "/dashboard/admin/adminProfileManagement",
          icon: <MdPerson className="text-2xl mr-2" />, 
          label: "Profile Management",
        },
      ];
    } else if (pathname.startsWith("/dashboard/employee")) {
      return [
        ...commonMenuItems,
        {
          href: "/dashboard/employee/appliedJobs",
          icon: <BiBriefcase className="text-2xl mr-2" />, 
          label: "Applied Jobs",
        },
        {
          href: "/dashboard/employee/approvedJobs",
          icon: <BiCheckCircle className="text-2xl mr-2" />, 
          label: "Approved Jobs",
        },
        {
          href: "/dashboard/employee/rejectedJobs",
          icon: <BiXCircle className="text-2xl mr-2" />, 
          label: "Rejected Jobs",
        },
        {
          href: "/dashboard/employee/completedJobs",
          icon: <FaClipboardList className="text-2xl mr-2" />, 
          label: "Completed Jobs",
        },
        {
          href: "/dashboard/employee/jobHistory",
          icon: <MdHistory className="text-2xl mr-2" />, 
          label: "Job History",
        },
        {
          href: "/dashboard/employee/jobApplyManagement",
          icon: <MdWork className="text-2xl mr-2" />, 
          label: "Job Application & Management",
        },
        {
          href: "/dashboard/employee/profileManagement",
          icon: <MdPerson className="text-2xl mr-2" />, 
          label: "Profile Management",
        },
      ];
    } else {
      return commonMenuItems;
    }
  };

  return (
    <nav id="sidebar" className={`lg:min-w-[250px] w-max max-lg:min-w-8 transition-all duration-500 ${isSidebarOpen ? "w-max" : "max-lg:w-0 max-lg:invisible"}`}>
      <div id="sidebar-collapse-menu" className="bg-white shadow-lg h-screen fixed top-0 left-0 overflow-auto z-[99]">
        <div className="pt-8 pb-2 px-6 sticky top-0 bg-white min-h-[80px] z-[100]">
          <button type="button" onClick={toggleSidebar}> </button>
        </div>
        <div className="py-6 px-6">
          <ul className="space-y-2">{getMenuItems().map((item, index) => (<li key={index}><Link href={item.href} className={`menu-item text-sm flex items-center cursor-pointer rounded-md px-3 py-3 transition-all duration-300 ${isActive(item.href)}`}>{item.icon}<span>{item.label}</span></Link></li>))}</ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;