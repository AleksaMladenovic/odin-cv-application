export default function CustomForm({ name, id, children }) {
    return <section className={"form " + id}>
        <h1>{name}</h1>
        {children}
    </section>;
}
