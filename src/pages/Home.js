import { useEffect } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

// components
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";

const Home = () => {
    // useWorkoutsContext custom hook destructures:
    // 1) workouts array which holds the workout objects
    // 2) dispatch function which carries the action (type, and if needed, payload)
    const { workouts, dispatch } = useWorkoutsContext();

    // useState option
    // state is holding workouts being fetched from our database
    // const [workouts, setWorkouts] = useState(null);

    // using a useEffect to only fetch the data once
    useEffect(() => {
        // an async function to make a request to our backend
        const fetchWorkouts = async () => {
            // request promise binded to 'response'
            const response = await fetch("/api/workouts");
            // response is converted to an object which can be used in React
            const json = await response.json();
            // if the response is tested for success and contains expected data
            if (response.ok) {
                // useState option
                // if so, updates the useState setWorkouts with the array of objects
                // setWorkouts(json)

                // this dispatch will display all workouts from db, it requires the json array of workouts
                dispatch({ type: "SET_WORKOUTS", payload: json });
            }
        };
        // invoked function
        fetchWorkouts();
        // old
        // dependency array of useEffect only runs on first render <-- need to update

        // added 'dispatch' function to dependency array
    }, [dispatch]);

    return (
        <div className="home">
            <div className="workouts">
                {/* maps through workouts from useState using
                MongoDB's generated ObjectId value for the _id field as the key */}
                {workouts &&
                    workouts.map((workout) => (
                        <WorkoutDetails key={workout._id} workout={workout} />
                    ))}
            </div>
            {/* form component shares the page using className "home"'s grid layout */}
            <WorkoutForm />
        </div>
    );
};

export default Home;
