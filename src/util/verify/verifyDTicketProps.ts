import DTaskProps from "../../components/board/DTicket.types";

/*
* Takes an object as parameter, verifies its properties 
* and return a verification if the object is of type DTaskProps.
* 
* @param maybeTask: unknown - Potential object of type DTaskProps to be verifed
*/
export default function verifyDTaskProps(maybeTask: unknown) : maybeTask is DTaskProps {
    return (
        typeof maybeTask === "object" &&
        maybeTask !== null &&
        "id" in maybeTask &&
        typeof (maybeTask as DTaskProps).id === "number" &&
        "task" in maybeTask &&
        typeof (maybeTask as DTaskProps).task === "string" &&
        "type" in maybeTask &&
        typeof (maybeTask as DTaskProps).type === "string" &&
        "columnId" in maybeTask &&
        typeof (maybeTask as DTaskProps).columnId === "number" 
    );
}