function CustomInput(props) {
    const [value, setValue] = useState("");
  
    return (
      <input
        {...props}
      />
    );
  }
  