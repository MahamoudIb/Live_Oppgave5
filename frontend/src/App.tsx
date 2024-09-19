import Grid from "./componets/Grid";
import Student from "./componets/Student";

const students = [
  { id: "1", name: "Ola Normann" },
  { id: "2", name: "Kari Normann" },
];

function App() {
  return (<>
  <main>
    {/*<Student name="Marius" id="123" />*/}
    <Grid students = {students} />
    </main>
    </>
  );
}
export default App;