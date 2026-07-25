const STORAGE_KEY = 'study-notebook:visited-topics';

function readAll() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function writeAll(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // localStorage unavailable (private browsing etc.) — fail silently
  }
}

export function markTopicVisited(subjectId, topicId) {
  const data = readAll();
  if (!data[subjectId]) data[subjectId] = [];
  if (!data[subjectId].includes(topicId)) {
    data[subjectId].push(topicId);
    writeAll(data);
  }
}

export function isTopicVisited(subjectId, topicId) {
  const data = readAll();
  return Boolean(data[subjectId]?.includes(topicId));
}

export function getSubjectProgress(subjectId, totalTopics) {
  if (!totalTopics) return 0;
  const data = readAll();
  const visited = data[subjectId]?.length || 0;
  return Math.min(100, Math.round((visited / totalTopics) * 100));
}
