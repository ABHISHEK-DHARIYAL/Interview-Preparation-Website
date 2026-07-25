import subjects from '../data/subjects.js';
import SubjectCard from '../components/SubjectCard.jsx';
import './Home.css';

export default function Home() {
  return (
    <div className="home container">
      <div className="home__hero">
        <h1 className="home__title">Your Placement Notebook</h1>
        <p className="home__subtitle">
          Visual, bite-sized notes for CN, OS, DBMS &amp; OOP — built to revise fast, not read slow.
        </p>
      </div>

      <div className="home__grid">
        {subjects.map((subject) => (
          <SubjectCard key={subject.id} subject={subject} />
        ))}
      </div>
    </div>
  );
}
