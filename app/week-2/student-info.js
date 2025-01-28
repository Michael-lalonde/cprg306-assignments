export default function StudentInfo({ name, github }) {
    return (
        <div>
           <h1>{name}</h1>
            <a href={github}>{github}</a>
        </div>
    );
}
