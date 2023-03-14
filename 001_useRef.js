import React from "react";

export default function Home() {
  const comment = React.useRef("");
  console.log("rendered");

  return (
    <div className="flex flex-col min-h-[100vh]">
      <div className="m-auto">
        <input
          className="block w-full pb-2 text-gray-900"
          placeholder="Add your comment..."
          onChange={(e) => (comment.current = e.target.value)}
        />
        <button
          onClick={() => console.log(comment.current)}
          className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 mt-2 text-sm font-semibold text-white shadow-sm"
        >
          Click Me
        </button>
      </div>
    </div>
  );
}
