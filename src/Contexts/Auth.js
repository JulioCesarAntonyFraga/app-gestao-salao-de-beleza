import React, { createContext, useState } from 'react';
// import ApiService from '../Services/Api';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [refreshToken, setRefreshToken] = useState(null);
    // const [messageApi, contextHolder] = message.useMessage();

    // const RefreshToken = async () => {
    //     return ApiService.post(`/auth/refreshToken?userId=${user.Id}&refreshToken=${refreshToken}`).then((response) => {
    //         localStorage.setItem("Token", response.token);
    //         localStorage.setItem("RefreshToken", response.refreshToken);

    //         setUser(response.user);
    //         setToken(response.token);
    //         setRefreshToken(response.refreshToken);
    //     });
    // }

    // const successMessage = (text) => {
    //     messageApi.open({
    //         type: 'success',
    //         content: text,
    //     });
    // };

    // const errorMessage = (text) => {
    //     messageApi.open({
    //         type: 'error',
    //         content: text,
    //     });
    // };
    
    return (
        <AuthContext.Provider value={{ user, token, refreshToken, signed: !!user, setUser, setToken, setRefreshToken }}>
            {/* {contextHolder} */}
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;