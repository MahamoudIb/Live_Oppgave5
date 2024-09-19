import { useState } from "react";
import Student from "./Student";
import { Student as StudentProp } from "./Types";
import AddStudentForm from "./AddStudentForm";

type GridProps = {
    students: StudentProp[];
}

export default function Grid(props: GridProps) {
    const [students, setStudentList] = useState<StudentProp[]>(props.students ?? []);


    const onAddStudent = (student: {name: string}) => {
        setStudentList((prev) => [...prev, {id : crypto.randomUUID(), ...student}]);
    };
    return (
        <section>
            <article className="grid">
                {students.map((student) => (
                    <Student key={student.id} name={student.name} id={student.id} />
                ))}
            </article>
            <AddStudentForm onAddStudent={onAddStudent} />
        </section>
    );
}