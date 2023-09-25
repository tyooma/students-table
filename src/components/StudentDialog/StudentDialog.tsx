import { FC } from "react";
import { StudentDialogProps } from "../../interfaces/interfaces";

import {
  Container,
  Header,
  Text,
  CloseButton,
  MarksList,
  MarkItem,
  Image,
  Info,
  Content,
} from "./styled";

const StudentDialog: FC<StudentDialogProps> = ({ student, onClose }) => {
  if (!student) {
    return null;
  }

  return (
    <Container>
      <Header>{student.name}</Header>
      <Content>
        <Image src={student.avatarURL} alt={student.name} />
        <Info>
          <Text children={`Lectures Attended: ${student.lecturesAttended}`} />
          <Text children={`Total Lectures: ${student.totalLectures}`} />
          {Object.keys(student.marks).length > 0 && (
            <MarksList>
              {Object.entries(student.marks).map(([subject, mark]) => (
                <MarkItem key={subject}>
                  <strong>{subject}:</strong> {mark.marksObtained}/
                  {mark.totalMarks}
                </MarkItem>
              ))}
            </MarksList>
          )}
        </Info>
      </Content>
      <CloseButton onClick={onClose}>Close</CloseButton>
    </Container>
  );
};

export default StudentDialog;
