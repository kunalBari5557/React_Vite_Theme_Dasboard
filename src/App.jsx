import "./App.css";
import Sidebar from "./layout/Sidebar/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Content from "./layout/Content/Content";
import BudgetList from './components/Budget/BugetList';
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Chatbot from "./components/Chatbot/Chatbot";

function App() {
  return (
    <>
      <div className="app">
        <Router>
          <Sidebar />
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/Budget" element={<BudgetList />} />
            <Route path="/Chatbot" element={<Chatbot />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
