import { useState } from 'react';
import expand from "../../assets/expand.svg";
import collapse from "../../assets/collapse.svg";

const submissionHistory = [
    ['Assignment 1', true, true],
    ['Assignment 2', false, true],
    ['Assignment 3', false, true],
    ['Assignment 4', true, true],
]

const assignments = [
    ['Assignment 5', true, false],
    ['Assignment 6', false, false],
    ['Assignment 7', false, false],
    ['Assignment 8', true, false],
]

function SubmittedIndicator({valid}: {valid: string}) {
    return (
        <div className="flex justify-between items-center w-2/5">
            {/* Indicates verification status on submitted works */}
            {valid ? (
                // Indicates a succesfully verified submission
                <div className="text-lg font-semibold text-green-400 mr-4">
                    &#10003;
                </div>) : (
                // Indicates an unsuccesfully verified submission
                <div className="text-lg font-semibold text-red-400 mr-4">
                    X
                </div>)
            }
            <button className="custom-view-submission-button w-full">
                View Results
            </button>
        </div>
    )
}

function NotSubmittedIndicator() {
    return (
        <div className="flex justify-center items-center w-2/5">
            <div className="text-lg font-semibold mr-4">
                -
            </div>
            <button className="custom-view-submission-button w-full">
                Submit
            </button>
        </div>
    )
}

// Allows dynamically adding elements for previous submissions
function SubmissionRowElement({title, valid, submitted}: {title: string, valid: boolean, submitted: boolean}) {
    return (
        <li className="flex justify-between w-full py-2 border-x-2 border-b-2 pl-8 pr-4">
            <div className="flex justify-center items-center">
                <div>
                    { title }
                </div>
            </div>
            {/* Changes action button and verification indicator based on whether assignment has been submitted or not */}
            {submitted ? (
                <SubmittedIndicator valid={valid}/>) : (
                <NotSubmittedIndicator/>)
            }
        </li>
    )
}

// Creates the list of previously submitted assignments
function SubmissionList({title}: {title: string}) {
    return (
        <>
        <div>
            <ul>
                {/* TODO: Remove this washed logic check when implementing backend */}
                {title==="Unsubmitted Assignments" ? (
                    assignments.map((assignment) => (
                        <SubmissionRowElement title={assignment[0]} valid={assignment[1]} submitted={assignment[2]} />))) : (
                    submissionHistory.map((submission) => (
                        <SubmissionRowElement title={submission[0]} valid={submission[1]} submitted={submission[2]} />
                    )))
                }
            </ul>
        </div>
        <div className="border-x-2 border-b-2 rounded-b-lg w-full h-4">
        </div>
        </>
    )
}

// Creates a submission history table for dynamically displaying works based on the selected student
export default function SubmissionTable({title}: {title: string}) {
    const [showDropdown, setShowDropdown] = useState(true);

    {/* Opens and closes the submission history menu */}
    const handleDropdownClick = () => {
        console.log('clicked')
        setShowDropdown(!showDropdown)
    };

    return (
        <div className="flex justify-center align-center flex-col text-sm font-semibold w-5/6">
            <button 
                onClick={handleDropdownClick} 
                className={`border-2 pl-8 flex justify-center items-center uppercase font-semibold w-full px-3 py-2 text-sm
                ${showDropdown ? "rounded-t-lg" : "rounded-lg"} `}>
                { title }
                {/* Reactive dropdown arrow */}
                {showDropdown ? (
                    <img src={ collapse } alt="Collapse Icon"/>) : (
                    <img src={ expand } alt="Expand Icon"/>)
                }
            </button>
            {/* The list of previous works */}
            {showDropdown ? (
                <SubmissionList title={ title }/>) : (null)
            }
        </div>
    )
}