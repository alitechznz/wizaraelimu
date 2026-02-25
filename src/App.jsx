import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Navbar from './components/Navbar'
import ProtectedRoute from './components/ProtectedRoute'

import WelcomePage from './pages/WelcomePage.jsx'
import LoginForm from './pages/FormLogin.jsx'
import UserGuidePage from './pages/UserGuidePage.jsx'
import ForgotPasswordPage from './pages/ForgotPasswordPage.jsx'
import Dashboard from './pages/Dashboard.jsx'

import DeptSelect from './pages/planning/DeptSelect.jsx'
import DivisionSelect from './pages/planning/DivisionSelect.jsx'
import PlanningChoice from './pages/planning/PlanningChoice.jsx'
import MTEFSetup from './pages/planning/MTEFSetup.jsx'
import MTEFActivities from './pages/planning/MTEFActivities.jsx'
import MTEFActivityDetail from './pages/planning/MTEFActivityDetail.jsx'
import ActionPlanActivities from './pages/planning/ActionPlanActivities.jsx'
import ActionPlanDetail from './pages/planning/ActionPlanDetail.jsx'
import ActionPlanReview from './pages/planning/ActionPlanReview.jsx'
import ActionPlanSubmit from './pages/planning/ActionPlanSubmit.jsx'

import MEDeptSelect from './pages/me/MEDeptSelect.jsx'
import MEDivisionSelect from './pages/me/MEDivisionSelect.jsx'
import MEChoice from './pages/me/MEChoice.jsx'
import MEReportActivities from './pages/me/MEReportActivities.jsx'
import MEReportDetail from './pages/me/MEReportDetail.jsx'
import MEReportReview from './pages/me/MEReportReview.jsx'
import RipotiIlani from './pages/me/RipotiIlani.jsx'
import RipotiIlaniReview from './pages/me/RipotiIlaniReview.jsx'

const P = ({ children }) => <ProtectedRoute>{children}</ProtectedRoute>

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navbar />
        <Routes>
          {/* Public pages */}
          <Route path="/" element={<WelcomePage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/user-guide" element={<UserGuidePage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />

          {/* Protected pages */}
          <Route path="/dashboard" element={<P><Dashboard /></P>} />

          <Route path="/planning" element={<P><DeptSelect /></P>} />
          <Route path="/planning/division" element={<P><DivisionSelect /></P>} />
          <Route path="/planning/choice" element={<P><PlanningChoice /></P>} />
          <Route path="/planning/mtef/setup" element={<P><MTEFSetup /></P>} />
          <Route path="/planning/mtef/activities" element={<P><MTEFActivities /></P>} />
          <Route path="/planning/mtef/activity/:activityId" element={<P><MTEFActivityDetail /></P>} />
          <Route path="/planning/action-plan" element={<P><ActionPlanActivities /></P>} />
          <Route path="/planning/action-plan/review" element={<P><ActionPlanReview /></P>} />
          <Route path="/planning/action-plan/submit" element={<P><ActionPlanSubmit /></P>} />
          <Route path="/planning/action-plan/:shughuliId" element={<P><ActionPlanDetail /></P>} />

          <Route path="/me" element={<P><MEDeptSelect /></P>} />
          <Route path="/me/division" element={<P><MEDivisionSelect /></P>} />
          <Route path="/me/choice" element={<P><MEChoice /></P>} />
          <Route path="/me/reporting" element={<P><MEReportActivities /></P>} />
          <Route path="/me/reporting/review" element={<P><MEReportReview /></P>} />
          <Route path="/me/reporting/:shughuliId" element={<P><MEReportDetail /></P>} />
          <Route path="/me/ripoti-ilani" element={<P><RipotiIlani /></P>} />
          <Route path="/me/ripoti-ilani/review" element={<P><RipotiIlaniReview /></P>} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
