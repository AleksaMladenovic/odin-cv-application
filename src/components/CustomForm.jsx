import OpenMenuSVG from "./SVGs/OpenMenuSVG";

export default function CustomForm({ name, id, children, onOpeningMenu }) {
    return (
        <section className={"form " + id}>
            <h1>
                <button className="svgBtn noRotate"
                onClick={()=>onOpeningMenu()}>
                    <OpenMenuSVG />
                </button>
                {name}
            </h1>
            {children}
        </section>
    );
}
