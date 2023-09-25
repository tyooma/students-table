import { FC, useState } from "react";

import { StudentRowProps } from "../../interfaces/interfaces";
import StudentDialog from "../StudentDialog/StudentDialog";
import { Row, Image, Cell } from "./styled";

const StudentRow: FC<StudentRowProps> = ({ student, onRowClick }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      <Row onClick={onRowClick}>
        <Cell>{student.name}</Cell>
        <Cell>
          <Image src={student.avatarURL} alt={student.name} />
        </Cell>
        <Cell>{student.lecturesAttended}</Cell>
        <Cell>{student.totalLectures}</Cell>
      </Row>
      {isDialogOpen && (
        <StudentDialog student={student} onClose={handleCloseDialog} />
      )}
    </>
  );
};

export default StudentRow;
