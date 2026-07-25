import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Subject from './pages/Subject.jsx';
import Topic from './pages/Topic.jsx';
import './App.css';

export default function App() {
  return (
    <>
      <Navbar />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/subject/:subjectId" element={<Subject />} />
          <Route path="/subject/:subjectId/topic/:topicId" element={<Topic />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <footer className="app-footer">
        <div className="container">
          <span>📚 Your interview notebook — built for revision, not just reading.</span>
        </div>
      </footer>
    </>
  );
}
