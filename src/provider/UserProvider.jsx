import React, { createContext, useState } from 'react';

export const UserContext = createContext(null);

const { Provider } = UserContext;

const UserProvider = ({children}) => {

    const [userCtx, setUserCtx] = useState("teste@teste.com");

    return (
        <Provider value={[userCtx, setUserCtx]}>{children}</Provider>
    )
};

UserProvider.context = UserContext;

export default UserProvider;