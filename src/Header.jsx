import React, { useContext } from "react";

import { UserContext } from "./provider/UserProvider";

export const Header = () => {
    const usuario = useContext(UserContext);

    return (
        <h1>{usuario}</h1>
    )
};