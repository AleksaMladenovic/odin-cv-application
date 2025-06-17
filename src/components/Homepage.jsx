import '../stylesheets/homepage.css'
export default function Homepage({buildResumeFunction}) {
    return (
    <div className="homepage">
        <div className="description">
            <h1>Build a professional resume</h1>
            <p>Quickly create a standout CV that higlights your skills - no hassle, all impact.</p>
            <button onClick={buildResumeFunction}>Build Your Resume</button>
        </div>
        <div className="imgWrapper">
            <img src="/imgs/cv-example.jpeg"></img>
        </div>
    </div>);
}
