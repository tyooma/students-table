import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";

import {
  Container,
  Input,
  Button,
  ErrorMessage,
  InputContainer,
} from "./styled";
import { fetchStudents } from "../../store/studentsSlice";

const SearchBar: FC = () => {
  const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSearch = () => {
    if (searchTerm.length >= 3) {
      dispatch(fetchStudents({ searchTerm }));
      setError(null);
    } else {
      setError("Please enter at least 3 characters to search.");
    }
  };

  return (
    <Container>
      <InputContainer>
        <Input
          type="text"
          placeholder="Search students..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </InputContainer>
      <Button onClick={handleSearch}>Search</Button>
    </Container>
  );
};

export default SearchBar;
