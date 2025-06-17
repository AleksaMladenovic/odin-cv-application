import { cvSections } from "../data/sections";
import loadExample from "../functions/loadExample";
import "../stylesheets/sectionMenu.css";
import CloseSVG from "./SVGs/CloseSVG";

export default function SectionMenu({
    selectedIndex,
    onChangeLi,
    onClosingMenu,
    onLoadExample
}) {
    return (
        <nav className="sectionMenu">
            <h2>
                Section Menu{" "}
                <button
                    onClick={() => onClosingMenu()}
                    className="svgBtn noRotate closeSection"
                >
                    <CloseSVG />
                </button>
            </h2>
            <ul>
                {cvSections.map((section, index) => {
                    return (
                        <li
                            key={index}
                            className={
                                index === selectedIndex ? "selected" : ""
                            }
                            onClick={() => onChangeLi(index)}
                        >
                            {section}
                            {index === selectedIndex && <SvgArrow />}
                        </li>
                    );
                })}
            </ul>

            <button className="loadExample" onClick={()=>{
                onLoadExample();
                loadExample();
                }}>Load Example</button>
        </nav>
    );
}

function SvgArrow() {
    return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
            <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                    d="M6 12H18M6 12L11 7M6 12L11 17"
                    stroke="#000000"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />{" "}
            </g>
        </svg>
    );
}
