import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Dashboard from './pages/dashboard/Dashboard';
import Todo from './pages/todo/Todo';
import MainResume from './pages/resume/main/MainResume';
import TemplateOne from './pages/resume/template1/TemplateOne';
import TemplateTwo from './pages/resume/main/template2/TemplateTwo';
import TemplateThree from './pages/resume/main/template3/TemplateThree';
import TemplateFour from './pages/resume/main/template4/TemplateFour';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Dashboard/>} />
      <Route path="/todo" element={<Todo/>} />

        <Route path="/resume" element={<MainResume/>} />
        <Route path="/resume/template1" element={<TemplateOne/>} />
        <Route path="/resume/template2" element={<TemplateTwo/>} />
        <Route path="/resume/template3" element={<TemplateFour/>} />
        <Route path="/resume/template4" element={<TemplateThree/>} />

        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;