import React from "react";

export default function Spinner() {
  return (
    <div className="fixed top-0 right-0 z-10 flex items-center justify-center w-screen h-screen">
      <div className="w-32 h-32 border-t-2 border-b-2 rounded-full border-primary animate-spin" />
    </div>
  );
}
