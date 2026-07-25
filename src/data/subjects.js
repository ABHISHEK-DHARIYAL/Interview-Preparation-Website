import cnTopics from './CN/topics.js';
import osTopics from './OS/topics.js';
import dbmsTopics from './DBMS/topics.js';
import oopTopics from './OOP/topics.js';
import javaOopTopics from './JavaOOP/topics.js';

// To add a new subject later: create src/data/<SUBJECT>/topics.js exporting
// an array of topic objects, then add one entry below. No other code changes needed.

const subjects = [
  {
    id: 'cn',
    name: 'Computer Networks',
    shortName: 'CN',
    icon: '🌐',
    color: 'blue',
    description: 'Topologies, OSI model, TCP/UDP, DNS, routing & more.',
    topics: cnTopics,
  },
  {
    id: 'os',
    name: 'Operating System',
    shortName: 'OS',
    icon: '⚙️',
    color: 'green',
    description: 'Scheduling, threads, synchronization, memory & deadlocks.',
    topics: osTopics,
  },
  {
    id: 'dbms',
    name: 'DBMS',
    shortName: 'DBMS',
    icon: '🗄️',
    color: 'orange',
    description: 'ER diagrams, keys, normalization, transactions & SQL.',
    topics: dbmsTopics,
  },
  {
    id: 'oop',
    name: 'Object-Oriented Programming',
    shortName: 'OOP',
    icon: '🧩',
    color: 'purple',
    description: 'Classes, inheritance, encapsulation, abstraction & polymorphism.',
    topics: oopTopics,
  },
  {
    id: 'java-oop',
    name: 'OOPS in Java',
    shortName: 'Java OOP',
    icon: '☕',
    color: 'red',
    description: 'Java-specific OOP: constructors, no destructor, packages, access modifiers, interfaces & static.',
    topics: javaOopTopics,
  },
];

export const getSubject = (id) => subjects.find((s) => s.id === id);

export const getTopic = (subjectId, topicId) => {
  const subject = getSubject(subjectId);
  if (!subject) return null;
  return subject.topics.find((t) => t.id === topicId) || null;
};

export const findTopicAnywhere = (topicId) => {
  for (const subject of subjects) {
    const topic = subject.topics.find((t) => t.id === topicId);
    if (topic) return { subject, topic };
  }
  return null;
};

export default subjects;
