import db from "../Database/index.js";

export function createAssignment(assignment) {
  const newAssignment = { ...assignment, _id: Date.now().toString() };
  db.assignments = [...db.assignments, newAssignment];
  return newAssignment;
}

export function findAssignmentsForCourse(courseId) {
  const { assignments } = db;
  return assignments.filter((assignment) => assignment.course === courseId);
}

export function updateAssignment(assignmentId, assignmentUpdates) {
  const { assignments } = db;
  const assignment = assignments.find((assignment) => assignment._id === assignmentId);
  Object.assign(assignment, assignmentUpdates);
  return assignment;
}

export function deleteAssignment(assignmentId) {
  const { assignments } = db;
  db.assignments = assignments.filter((assignment) => assignment._id !== assignmentId);
}