import StudentInfo from "./student-info";

export default function Page() {
    return (
        <main>
            <h1>Shopping List</h1>
             <StudentInfo 
                name="Michael Lalonde" 
                github="https://github.com/Michael-lalonde/cprg306-assignments" 
             />
        </main>
    );
}
