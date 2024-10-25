import Dashbaord from "../Pages/Dashbaord";
import Expenses from "../Pages/Expenses/Expenses";
import AddNewReport from "../Pages/Report/AddNewReport";
// import ReportsHistory from "../Pages/Report/ReportsHistory";
import Report from "../Pages/Report/Report";
import Requests from "../Pages/Requests/Requests";
import Benefit from "../Pages/Benefit/Benefit";
import Gifts from "../Pages/Gifts/Gifts";
import HelpAndSupport from "../Pages/HelpAndSupport/HelpAndSupport";
import Profile from "../Pages/Profile/Profile";
import EditProfile from "../Pages/Profile/EditProfile";
import Home from "../Pages/Home/Home";
import ContactUs from "../Pages/ContactUs/ContactUs";
import YourWallet from "../Pages/YourWallet/YourWallet";
import BuyVoucherCard from "../Pages/Gifts/SelectDenomination";
import ForWhom from "../Pages/Gifts/ForWhom";
import WelcomeToOptifiiComponent from "../Pages/Onboarding/WelcomeFrame";
import RequestReimbursement from "../Pages/Expenses/RequestReimbursement";
import ReportsHistory from "../Pages/Report/ReportsHistory";



export const RouteLink = [

  { path: "/", Component: WelcomeToOptifiiComponent },
  { path: "/home", Component: Home },
  { path: "/expenses", Component: Expenses },
  { path: "/reports", Component: Report },
  { path: "/reports/history", Component: ReportsHistory },
  { path: "/reports/add-new-report", Component: AddNewReport },
  // { path: "/reports/reports-history", Component: ReportsHistory },
  { path: "/requests", Component: Requests },
  { path: "/benefit", Component: Benefit },
  { path: "/gifts", Component: Gifts },
  { path: "/help-support", Component: HelpAndSupport },
  { path: "/profile", Component: Profile },
  { path: "/profile/edit-profile", Component: EditProfile },
  { path: "/contact-us", Component: ContactUs },
  { path: "/buy-voucher-card", Component: BuyVoucherCard },
  { path: "/for-whom-card", Component: ForWhom },
  { path: "/log-in", Component: WelcomeToOptifiiComponent },
  { path: "/request-reimbursement", Component: RequestReimbursement },
];
