import axios from "axios";
import MockAdapter from "axios-mock-adapter";

import { Mark, Student } from "../interfaces/interfaces";

const mock = new MockAdapter(axios);

mock.onGet("/students").reply((config) => {
  const { params } = config;
  const searchTerm = params.searchTerm || "";
  const totalRecords = 1000;
  const students = generateFakeStudents(totalRecords);

  const searchRegex = new RegExp(
    searchTerm
      .split("")
      .map((char: any) => `(?=.*${char})`)
      .join(""),
    "i"
  );

  const filteredStudents = students.filter((student) =>
    searchRegex.test(student.name)
  );

  return [200, { totalRecords, students: filteredStudents }];
});

const generateFakeStudents = (count: number): Student[] => {
  const students: Student[] = [];

  for (let i = 1; i <= count; i++) {
    students.push({
      name: `Student ${i}`,
      avatarURL: require("../assets/student-avatar.png"),
      lecturesAttended: getRandomInt(1, 30),
      totalLectures: 30,
      marks: generateFakeMarks(),
    });
  }

  return students;
};

const generateFakeMarks = (): Record<string, Mark> => {
  const marks: Record<string, Mark> = {};
  const subjects = ["Math", "History", "Science", "English", "Art"];

  for (const subject of subjects) {
    marks[subject] = {
      subjectTitle: subject,
      totalMarks: 100,
      marksObtained: getRandomInt(40, 100),
    };
  }

  return marks;
};

const getRandomInt = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export default mock;
