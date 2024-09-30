import { API } from "../api/auth/[...nextauth]";

const user = (data: any) => API.post ('/api', data);

export const UserService = {
    user
};

