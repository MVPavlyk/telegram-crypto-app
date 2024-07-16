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
            const base = 'http://45.159.231.30/api';
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
