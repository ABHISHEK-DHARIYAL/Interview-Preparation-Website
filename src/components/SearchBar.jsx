import { useState, useMemo, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import subjects from '../data/subjects.js';
import './SearchBar.css';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const wrapperRef = useRef(null);

  const allTopics = useMemo(() => {
    const list = [];
    subjects.forEach((subject) => {
      subject.topics.forEach((topic) => {
        list.push({ ...topic, subjectId: subject.id, subjectName: subject.name });
      });
    });
    return list;
  }, []);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return allTopics
      .filter((t) => t.title.toLowerCase().includes(q) || t.description?.toLowerCase().includes(q))
      .slice(0, 8);
  }, [query, allTopics]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const goTo = (topic) => {
    setQuery('');
    setOpen(false);
    navigate(`/subject/${topic.subjectId}/topic/${topic.id}`);
  };

  return (
    <div className="searchbar" ref={wrapperRef}>
      <span className="searchbar__icon" aria-hidden="true">⌕</span>
      <input
        className="searchbar__input"
        type="text"
        placeholder="Search topics…"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
      />
      {open && query.trim() && (
        <div className="searchbar__results">
          {results.length === 0 && <div className="searchbar__empty">No topics match "{query}"</div>}
          {results.map((topic) => (
            <button key={`${topic.subjectId}-${topic.id}`} className="searchbar__result" onClick={() => goTo(topic)}>
              <span className="searchbar__result-title">{topic.title}</span>
              <span className="searchbar__result-subject">{topic.subjectName}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
