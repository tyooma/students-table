export interface Student {
  name: string;
  avatarURL: string;
  lecturesAttended: number;
  totalLectures: number;
  marks: Record<
    string,
    {
      subjectTitle: string;
      totalMarks: number;
      marksObtained: number;
    }
  >;
}

export interface StudentsState {
  students: Student[];
  loading: "idle" | "pending" | "succeeded" | "failed";
  error?: string | undefined;
}

export interface StudentRowProps {
  student: Student;
  onRowClick: () => void;
}

export interface StudentDialogProps {
  student: Student | null;
  onClose: () => void;
}

export interface Mark {
  subjectTitle: string;
  totalMarks: number;
  marksObtained: number;
}

export interface OverlayProps {
  visible: boolean;
}
