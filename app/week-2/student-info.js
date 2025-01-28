export default function StudentInfo({ name, github }) {
    return (
        <div>
            <p>{name}</p>
            <a href={github} target="_blank" rel="noopener noreferrer"> {github} </a>

        </div>
    );
}
