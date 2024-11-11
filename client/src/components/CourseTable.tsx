import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CourseTable.scss';

interface Course {
  courseName: string;
  startDate: string;
  lessonsCompleted: string;
  duration: string;
}

const CourseTable: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/courses')
      .then(response => setCourses(response.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="course-table">
      <h2>My Courses</h2>
      <table>
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Start Date</th>
            <th>Lesson Completed</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr key={index}>
              <td>{course.courseName}</td>
              <td>{course.startDate}</td>
              <td>{course.lessonsCompleted}</td>
              <td>{course.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CourseTable;
