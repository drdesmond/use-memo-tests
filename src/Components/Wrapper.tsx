import React from 'react';


interface WrapperProps {
    title: string;
    children: React.ReactNode
}

const Wrapper: React.FC<WrapperProps> = ({ title, children }) => {
    return (
        <div className="container mx-auto my-8 text-left border-yellow-200 border border-md py-5 justify-around">
            <h2 className="text-3xl font-bold mb-4 text-center">{title}</h2>
            {children}
        </div>
    );
};

export default Wrapper;
