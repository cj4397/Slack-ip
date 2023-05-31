'use client';

import { createContext, useContext, useMemo } from "react";

import useLocalStorage from "@/app/Storage";




// type AuthContextType = any;
// const AuthContext = createContext<AuthContextType>(null)

// export const useAuth = () => {
//     return useContext(AuthContext);
// };

// export default function Datas(props: {
//     children: React.ReactNode

// }) {


//     const [user, setUser] = useLocalStorage("User", null)
//     const [user_data, setUserData] = useLocalStorage("UserData", null)

//     const login = (data: any) => {
//         type data = {
//             user_info?: object;
//             user_data?: object;
//         };
//         console.log(data)
//         const { user_info, user_data } = data
//         setUser(user_info)
//         setUserData(user_data)
//     };

//     const signup = (data: any) => {
//         type data = {
//             user_info?: object;
//             user_data?: object;
//         };
//         const { user_info, user_data } = data
//         setUser(user_info)
//         setUserData(user_data)
//     };

//     const logout = () => {
//         setUser(null);
//         setUserData(null);
//     };

//     const value = useMemo(
//         () => ({
//             user_data,
//             user,
//             signup,
//             login,
//             logout,
//         }),
//         [user]
//     );

//     console.log('hi')

//     return (
//         <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
//     )
// }

export function datas() {


    const [user, setUser] = useLocalStorage("User", null)
    const [user_data, setUserData] = useLocalStorage("UserData", null)

    const login = (data: any) => {
        type data = {
            user_info?: object;
            user_data?: object;
        };
        console.log(data)
        const { user_info, user_data } = data
        setUser(user_info)
        setUserData(user_data)
    };

    const signup = (data: any) => {
        type data = {
            user_info?: object;
            user_data?: object;
        };
        const { user_info, user_data } = data
        setUser(user_info)
        setUserData(user_data)
    };

    const logout = () => {
        setUser(null);
        setUserData(null);
    };

    const value = useMemo(
        () => ({
            user_data,
            user,
            signup,
            login,
            logout,
        }),
        [user]
    );

    console.log('hi')

    return value

}