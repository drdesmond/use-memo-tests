import React from "react";

export interface TestComponentProps {
    title?: string;
    isMemoized?: boolean;
    count?: number;
    stateChangeCounter?: number;
    propsChangeCounter?: number;
}

// Test component
export const TestComponent: React.FC<TestComponentProps> = ({
    title,
    isMemoized,
    count = 0,
    stateChangeCounter = 0,
    propsChangeCounter = 0,
}) => {
    return (
        <div
            className={`${isMemoized ? "bg-green-100" : "bg-yellow-200"}  p-4 mb-4`}
        >
            <strong>{title}:</strong>
            <h1>Render Count: {count}</h1>
            <h1>State Update Count: {stateChangeCounter}</h1>
            {propsChangeCounter > 0 && <h1>Props Updates: {propsChangeCounter}</h1>}
        </div>
    );
};
