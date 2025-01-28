export default function StudentInfo({ name, github }) {
    return (
        <div>
            <p>{name}</p>
            <a href={github}>{github}</a>
        </div>
    );
}
