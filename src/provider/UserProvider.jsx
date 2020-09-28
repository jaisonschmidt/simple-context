import React, { createContext } from 'react';

export const UserContext = createContext(null);

const { Provider } = UserContext;

const UserProvider = ({children}) => {
    return (
        <Provider value="teste@teste.com">{children}</Provider>
    )
};

UserProvider.context = UserContext;

export default UserProvider;