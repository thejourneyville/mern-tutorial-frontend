import { useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

const WorkoutForm = () => {
    const { dispatch } = useWorkoutsContext();

    const [title, setTitle] = useState("");
    const [load, setLoad] = useState("");
    const [reps, setReps] = useState("");
    // state to display error from form
    const [error, setError] = useState(null);
    // state to hold array of which create workout fields are empty
    const [emptyFields, setEmptyFields] = useState([]);

    // submission for form invokes aynchronous function to add workout (post)
    const handleSubmit = async (e) => {
        // prevents from refreshing the screen when the form is cleared
        e.preventDefault();
        // creating object from state(s)
        const workout = {
            title,
            load,
            reps,
        };
        // calling db with POST request
        const response = await fetch("/api/workouts", {
            method: "POST",
            // body is converted into JSON object
            body: JSON.stringify(workout),
            // header explains the type of the content
            headers: {
                "Content-Type": "application/json",
            },
        });
        // we then also 'await' for the response from the POST request
        const json = await response.json();

        // if the response is not correct, update error state with error in json
        if (!response.ok) {
            setError(json.error);
            // updated empty field state with array of empty fields
            setEmptyFields(json.emptyFields);
        }
        // if the response is good, clear all form states,
        // reset error state to null
        if (response.ok) {
            setTitle("");
            setLoad("");
            setReps("");
            setError(null);
            setEmptyFields([]);
            console.log("new workout added", json);

            // updates frontend state context with new workout
            dispatch({ type: "CREATE_WORKOUT", payload: json });
        }
    };

    return (
        // controlled form with onSubmit invoking handleSubmit
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Workout</h3>

            <label>Exercise Title:</label>
            <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                // if empty array include 'title' use 'error' classname
                className={emptyFields.includes('title') ? 'error' : ''}
            />
            <label>Load (in kg):</label>
            <input
                type="number"
                onChange={(e) => setLoad(e.target.value)}
                value={load}
                className={emptyFields.includes('load') ? 'error' : ''}
            />
            <label>Reps:</label>
            <input
                type="number"
                onChange={(e) => setReps(e.target.value)}
                value={reps}
                className={emptyFields.includes('reps') ? 'error' : ''}
            />
            <button>Add Workout</button>
            {/* display error if true with error state */}
            {error && <div className="error">{error}</div>}
        </form>
    );
};

export default WorkoutForm;
