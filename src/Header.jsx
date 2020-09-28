import React, { useContext } from "react";

import { UserContext } from "./provider/UserProvider";

export const Header = () => {
    const [userCtx] = useContext(UserContext);

    return (
        <h1>{userCtx}</h1>
    )
};