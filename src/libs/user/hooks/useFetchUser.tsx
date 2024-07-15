    import { useState, useEffect } from "react";
    import axios from "axios";
    import { WebAppUser } from "@twa-dev/types";
    import { UserInterface } from "../interfaces/user.interface";

    const useFetchUser = (webAppUser: WebAppUser | undefined): UserInterface | null => {
    const [user, setUser] = useState<UserInterface | null>(null);

    useEffect(() => {
        console.log(webAppUser);
        if (!webAppUser?.id) return;

        const getUser = async () => {
        try {
            // change url to backend api
            const base = 'https://wk6kk7s8-300.euw.devtunnels.ms';
            const response = await axios.get(
            `${base}${webAppUser.id}`
            );
            setUser(response.data);
        } catch (error) {
            console.error(error);
        }
        };

        getUser();
    }, [webAppUser]);

    return user;
    };

    export default useFetchUser;
