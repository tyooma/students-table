import { FC } from "react";

import StudentsList from "./components/StudentsList/StudentsList";
import SearchBar from "./components/SearchBar/SearchBar";

const App: FC = () => (
  <>
    <SearchBar />
    <StudentsList />
  </>
);

export default App;
