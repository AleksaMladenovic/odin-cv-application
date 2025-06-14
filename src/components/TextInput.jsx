import "../stylesheets/textInput.css";

export default function TextInput({children, ...otherProps}) {
    return (
        <div className="textInput">
            <label for={otherProps.id} className={otherProps.value !== "" ? "move" : undefined}>
                {children}
            </label>
            <input
            {...otherProps}
            ></input>
        </div>
    );
}
