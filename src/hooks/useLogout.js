import { useAuthContext } from "./useAuthContext";
import { useWorkoutsContext } from "./useWorkoutsContext";

export const useLogout = () => {
    // we get the dispatch function from our context
    const { dispatch } = useAuthContext();
    const { dispatch: workoutsDispatch } = useWorkoutsContext();
    const logout = () => {
        // remove localstorage
        localStorage.removeItem("user");

        // update the auth context
        dispatch({ type: "LOGOUT" });
        workoutsDispatch({ type: "SET_WORKOUTS", payload: null });
    };

    return { logout };
};
