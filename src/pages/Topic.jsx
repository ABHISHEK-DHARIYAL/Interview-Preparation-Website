import { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { getSubject, getTopic } from '../data/subjects.js';
import { markTopicVisited } from '../utils/progress.js';

import DefinitionBox from '../components/DefinitionBox.jsx';
import KeyPoints from '../components/KeyPoints.jsx';
import MemoryTrick from '../components/MemoryTrick.jsx';
import VisualRenderer from '../components/visuals/VisualRenderer.jsx';
import RealWorldExample from '../components/RealWorldExample.jsx';
import InterviewQuestions from '../components/InterviewQuestions.jsx';
import CommonMistakes from '../components/CommonMistakes.jsx';
import RevisionCard from '../components/RevisionCard.jsx';
import RelatedTopics from '../components/RelatedTopics.jsx';

import './Topic.css';

const difficultyColor = { Easy: 'green', Medium: 'orange', Hard: 'purple' };

export default function Topic() {
  const { subjectId, topicId } = useParams();
  const subject = getSubject(subjectId);
  const topic = getTopic(subjectId, topicId);

  useEffect(() => {
    if (subject && topic) {
      markTopicVisited(subjectId, topicId);
    }
  }, [subjectId, topicId, subject, topic]);

  if (!subject || !topic) return <Navigate to="/" replace />;

  return (
    <div className="topic-page container">
      <div className="topic-page__crumb">
        <Link to="/">Home</Link> <span>/</span>{' '}
        <Link to={`/subject/${subject.id}`}>{subject.name}</Link> <span>/</span>{' '}
        <span>{topic.title}</span>
      </div>

      <header className="topic-page__header">
        <h1>{topic.title}</h1>
        <p className="topic-page__desc">{topic.description}</p>
        <div className="topic-page__meta">
          <span className="topic-page__time">⏱ {topic.readingTime} min read</span>
          <span className={`topic-page__difficulty topic-page__difficulty--${difficultyColor[topic.difficulty] || 'gray'}`}>
            {topic.difficulty}
          </span>
        </div>
      </header>

      {topic.comingSoon ? (
        <div className="topic-page__coming-soon">
          {topic.quickDefinition && (
            <DefinitionBox quickDefinition={topic.quickDefinition} />
          )}
          <div className="topic-page__coming-soon-note">
            <span>📝</span>
            <p>
              Full visual study notes for this topic — diagrams, memory tricks, interview questions and
              revision cards — are coming soon.
            </p>
          </div>
        </div>
      ) : (
        <>
          <DefinitionBox
            quickDefinition={topic.quickDefinition}
            easyExplanation={topic.easyExplanation}
            whyImportant={topic.whyImportant}
          />

          <KeyPoints points={topic.keyPoints} />

          <MemoryTrick trick={topic.memoryTrick} />

          {topic.visuals?.map((visual, i) => (
            <VisualRenderer key={i} visual={visual} />
          ))}

          <RealWorldExample text={topic.realWorldExample} />

          <InterviewQuestions questions={topic.interviewQuestions} />

          <CommonMistakes mistakes={topic.commonMistakes} />

          <RevisionCard points={topic.revision} />

          <RelatedTopics subjectId={subject.id} topicIds={topic.relatedTopics} />
        </>
      )}
    </div>
  );
}
