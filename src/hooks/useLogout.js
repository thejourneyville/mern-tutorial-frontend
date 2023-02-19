import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
    // we get the dispatch function from our context
    const { dispatch } = useAuthContext();
    const logout = () => {
        // remove localstorage
        localStorage.removeItem("user");

        // update the auth context
        dispatch({ type: "LOGOUT" });
    };

    return { logout };
};
