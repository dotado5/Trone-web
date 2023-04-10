import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AdminAccount from "./components/admin/AdminAccount";
import AdminHome from "./components/admin/AdminHome";
import PendingKyc from "./components/admin/PendingKyc";
import PendingPay from "./components/admin/PendingPay";
import UserActions from "./components/admin/EditUser";
import CreateAccForm from "./components/auth/CreateAccForm";
import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";
import Account from "./components/dashboard/Account";
import Home from "./components/dashboard/Home";
import Invest from "./components/dashboard/Invest";
import Payment from "./components/dashboard/Payment";
import Homepage from "./components/Homepage";
import ChangePass from "./components/midpages/ChangePass";
import ChangeUsername from "./components/midpages/ChangeUsername";
import CheckEmail from "./components/midpages/CheckEmail";
import EmailCon from "./components/midpages/EmailCon";
import EmailVerified from "./components/midpages/EmailVerified";
import ForgotPassword from "./components/midpages/ForgotPassword";
import PassReset from "./components/midpages/PassReset";
import SetNewPass from "./components/midpages/SetNewPass";
import AddUser from "./components/admin/AddUser";
import EditUser from "./components/admin/EditUser";
import BugTest from "./components/BugTest";
import UsernameReset from "./components/midpages/UsernameReset";
import AdminSignin from "./components/admin/AdminSignin";
import Faq from "./components/Faq";
import AccStatement from "./components/dashboard/AccStatement";
import { Helmet } from "react-helmet";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Trone Web</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <link rel="icon" href="/trone logo.png" />
      </Helmet>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/faq" element={<Faq />} />
          <Route exact path="/about" element={<About />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/createacc" element={<CreateAccForm />} />
          <Route path="/confirm-email" element={<EmailCon />} />
          <Route path="/verify-email/:id" element={<EmailVerified />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/check-email" element={<CheckEmail />} />
          <Route path="/set-new-password/:id" element={<SetNewPass />} />
          <Route path="/pass-reset" element={<PassReset />} />
          <Route path="/username-reset" element={<UsernameReset />} />
          <Route path="/change-pass" element={<ChangePass />} />
          <Route path="/change-username" element={<ChangeUsername />} />

          {/* user dashboard */}
          <Route path="/dashboard/home" element={<Home />} />
          <Route path="/dashboard/invest" element={<Invest />} />
          <Route path="/dashboard/account" element={<Account />} />
          <Route path="/dashboard/payment" element={<Payment />} />
          {/* <Route path="/dashboard/acc-statement" element={<AccStatement />} /> */}

          {/* admin dashboard */}

          <Route path="/admin/signin" element={<AdminSignin />} />
          <Route path="/admin/home" element={<AdminHome />} />
          <Route path="/admin/pending-pay" element={<PendingPay />} />
          <Route path="/admin/pending-kyc" element={<PendingKyc />} />
          <Route path="/admin/account" element={<AdminAccount />} />
          <Route path="/admin/edituser" element={<EditUser />} />
          <Route path="/admin/adduser" element={<AddUser />} />

          {/* for debugging */}
          <Route path="/bugtest" element={<BugTest />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
