import { Key } from "react";

// Extract the SubjectCard into a separate component for better organization
export default function SubjectCard({ sub, rkey }: { sub: any, rkey: Key }) {
    return (
        <a href={sub.link}>
        <div key={rkey} className="bg-neutral-50 hover:border-button-light-blue rounded-lg shadow-md p-4 transform hover:scale-105 transition-transform duration-300 cursor-pointer border-2 border-card-border">
            <h3 className="text-base font-bold mb-1">{sub.name}</h3>
            <h2 className="text-sm font-semibold">{sub.id}</h2>
        </div>
        </a>
    );
}
