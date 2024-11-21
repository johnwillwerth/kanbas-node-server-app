import db from "../Database/index.js";

export function findAllCourses() {
  return db.courses;
}

export function findCoursesForEnrolledUser(userId) {
  const { courses, enrollments } = db;
  const enrolledCourses = courses.filter((course) =>
    enrollments.some((enrollment) => enrollment.user === userId && enrollment.course === course._id));
  return enrolledCourses;
}

export function createCourse(course) {
  const newCourse = { ...course, _id: Date.now().toString() };
  db.courses = [...db.courses, newCourse];
  return newCourse;
}

export function updateCourse(courseId, courseUpdates) {
  const { courses } = db;
  const course = courses.find((course) => course._id === courseId);
  Object.assign(course, courseUpdates);
  return course;
}

export function deleteCourse(courseId) {
  const { courses, enrollments, assignments } = db;
  db.courses = courses.filter((course) => course._id !== courseId);
  db.enrollments = enrollments.filter(
    (enrollment) => enrollment.course !== courseId);
  db.assignments = assignments.filter(
    (assignment) => assignment.course !== courseId);
}