import { useState } from "react";
import Grid from "./componets/Grid";
import Total from "./componets/Total";
import { Student } from "./componets/Types";

const intialStudent = [
  { id: "1", name: "Ola Normann" },
  { id: "2", name: "Kari Normann" },
];

function App() {
  
  const [students, setStudentList] = useState<Student[]>(intialStudent ?? []);

  const onAddStudent = (student: {name: string}) => {
    setStudentList((prev) => [...prev, {id : crypto.randomUUID(), ...student}]);
};

const onRemoveStudent = (id: string) => {
  setStudentList((prev) => prev.filter((students) => students.id != id));
};

  return (<>
  <main>
    {/*<Student name="Marius" id="123" />*/}
    <Grid
      students={students}
      onAddStudent={onAddStudent}
      onRemoveStudent={onRemoveStudent}
    />
    <Total total={students.length}/>
    </main>
    </>
  );
}
export default App;