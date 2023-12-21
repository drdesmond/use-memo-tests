import React from "react";
import { StatesChangesTest, PropsChangesTest } from "../Experiments";

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto my-8 text-center max-w-3xl">
      <h1 className="text-4xl font-bold mb-4">
        ReactMemo Re-rendering Experiments
      </h1>
      <div className="flex flex-col md:flex-row gap-6 justify-center mx-3">
        <StatesChangesTest />
        <PropsChangesTest />
      </div>
      <button
        onClick={() => window.location.reload()}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 w-full"
      >
        Reset
      </button>
    </div>
  );
};

export default HomePage;
