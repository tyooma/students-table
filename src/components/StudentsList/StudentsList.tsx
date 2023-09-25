import { FC, useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";

import {
  Container,
  Header,
  Overlay,
  Table,
  TableBody,
  TableHead,
  Th,
  Tr,
} from "./styled";
import { fetchStudents } from "../../store/studentsSlice";
import StudentRow from "../StudentRow/StudentRow";
import StudentDialog from "../StudentDialog/StudentDialog";
import { Student } from "../../interfaces/interfaces";

const StudentsList: FC = () => {
  const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch();
  const students = useSelector((state: any) => state.students.students);
  const isLoading = useSelector(
    (state: any) => state.students.loading === "pending"
  );
  const [loadedStudents, setLoadedStudents] = useState<number>(20);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const totalStudents = 1000;
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    dispatch(fetchStudents({}));
  }, [dispatch]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading]);

  const loadMoreStudents = () => {
    if (loadedStudents < totalStudents) {
      const remainingStudents = totalStudents - loadedStudents;
      const batchSize = Math.min(20, remainingStudents);

      setLoadedStudents((prevLoaded) => prevLoaded + batchSize);
      dispatch(
        fetchStudents({
          searchTerm: "",
          skip: loadedStudents,
          limit: batchSize,
        })
      );
    }
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      isLoading
    ) {
      return;
    }
    loadMoreStudents();
  };

  const openStudentDialog = (student: Student) => {
    setSelectedStudent(student);
    setIsDialogOpen(true);
  };

  return (
    <Container ref={containerRef}>
      <Header children="Student List" />
      <Table>
        <TableHead>
          <Tr>
            <Th>Name</Th>
            <Th>Avatar</Th>
            <Th>Lectures Attended</Th>
            <Th>Total Lectures</Th>
          </Tr>
        </TableHead>
        <TableBody>
          {students.slice(0, loadedStudents).map((student: Student) => (
            <StudentRow
              key={student.name}
              student={student}
              onRowClick={() => openStudentDialog(student)}
            />
          ))}
        </TableBody>
      </Table>
      <Overlay visible={isDialogOpen}>
        {isDialogOpen && selectedStudent && (
          <StudentDialog
            student={selectedStudent}
            onClose={() => setIsDialogOpen(false)}
          />
        )}
      </Overlay>
    </Container>
  );
};

export default StudentsList;
