// conditional rendering 1
/* export default function Todo({ task, isDone }) {

    if (isDone) {
        return (
            <li>Task: {task}</li>
        )
    } else {
        return (
            <li>Work on: {task}</li>
        )
    }  
} */

// conditional rendering 2
/* export default function Todo({ task, isDone }) {
    return (
        <li>{isDone ? "Finished" : "Work On"} {task}</li>
    )
} */

// conditional rendering 3
/* export default function Todo({ task, isDone }) {
    return (
        <li>{task} {isDone && ": Done"}</li>
    )
} */

// conditional rendering 4
/* export default function Todo({ task, isDone }) {
    return (
        <li>{task} {isDone || ": Do It"}</li>
    )
} */

// conditional rendering 5
export default function Todo({ task, isDone }) {
    let listItem;
    if (isDone) {
        listItem = <li>Finished: {task}</li>
    } else {
        listItem = <li>Work on: {task}</li>
    }
    return listItem;
}





