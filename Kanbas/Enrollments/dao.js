import db from "../Database/index.js";

export function enrollUserInCourse(userId, courseId) {
  const { enrollments } = db;
  enrollments.push({ _id: Date.now(), user: userId, course: courseId });
}

export function unenrollUserInCourse(userId, courseId) {
  const { enrollments } = db;
  const index = enrollments.findIndex(
    (enrollment) => enrollment.user === userId && enrollment.course === courseId
  );
  if (index !== -1) {
    enrollments.splice(index, 1);
  }
}
