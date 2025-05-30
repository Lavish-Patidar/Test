import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp'
import Profile from './pages/Profile';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import AdminPanel from './pages/AdminPanel';
import ManageUsers from './pages/ManageUsers';
import ContactUs from './pages/ContactUs';
import ViewMessages from './pages/ViewMessages';
import AdminSignIn from './pages/AdminSignIn';

// Quiz
import Exam from "./pages/quiz/Exam";
import ExamWrite from "./pages/quiz/WriteExam";
import PlayQuiz from "./pages/quiz/PlayQuiz";
import AddEditExam from "./pages/quiz/AddEditExam";
import UserExamReport from "./pages/quiz/UserExamReport";
import AdminExamReports from "./pages/quiz/AdminExamReports";

// Feedback
import Feed from "./pages/feed/feedback";

// Courses
import CategoryPage from './pages/CategoryPage';

// Notes
import QuickNote from "./pages/notes/QuickNote";
import MyNotes from "./pages/notes/MyNotes";
import UpdateNote from "./pages/notes/updateNote";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>

        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/admin-signin" element={<AdminSignIn />} />

        {/* Private Routes for Authenticated Users */}
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/feedback" element={<Feed />} />
          <Route path="/notes" element={<MyNotes />} />
          <Route path="/play-quiz" element={<PlayQuiz />} />
          <Route path="/exam-write/:id" element={<ExamWrite />} />
          <Route path="/user-exam-report" element={<UserExamReport />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/courses/:category" element={<CategoryPage />} />
          <Route path="/quicknote" element={<QuickNote />} />
          <Route path="/mynotes" element={<MyNotes />} />
          <Route path="/update/:id" element={<UpdateNote />} />
        </Route>

        {/* Private Routes for Admin */}
        <Route element={<PrivateRoute adminOnly={true} />}>
          <Route path="/admin/dashboard" element={<AdminPanel />} />
          <Route path="/manage-users" element={<ManageUsers />} />
          <Route path="/messages" element={<ViewMessages />} />
          <Route path="/exam" element={<Exam />} />
          <Route path="/exam-add" element={<AddEditExam />} />
          <Route path="/exam-add/:id" element={<AddEditExam />} />
          <Route path="/admin-exam-report" element={<AdminExamReports />} />
        </Route>

        {/* 404 Route for Undefined Paths */}
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
