import React, { useContext } from "react";

import { UserContext } from "./provider/UserProvider";

export const Footer = () => {

    const [, setUserCtx] = useContext(UserContext);

    const handleClick = () => {
        setUserCtx("outro@user.com");
    }

    return (
        <footer>
            <button onClick={handleClick}>Change user</button>
        </footer>
    )
}