import { useState } from "react";
import Logo from "./Logo";
import Homepage from "./Homepage";
import Building from "./Building";

export default function App() {
    const [startedBuilding, setStartedBuilding] = useState(false);

    return (
        <>
            <Logo
                onClick={() => {
                    setStartedBuilding(false);
                }}
            />
            {startedBuilding===false ?
                <Homepage buildResumeFunction={()=>setStartedBuilding(true)}></Homepage>
                :
                <Building/>
                }
        </>
    );
}
