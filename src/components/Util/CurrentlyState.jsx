  import React, { useState } from "react";

  function CurrentlyState() {
    const [CurrentBook, UpdateBook] = useState("No Book");
    const [CurrentPage, UpdatePage] = useState(0);
    const [AllPage, UpdateAllPage] = useState(undefined);

    return (
      <div
        className="container   font-inter capitalize font-medium 
            w-fit
            text-md
            mx-auto
            relative 
            top-12">
        <span className="text-[#8B949E]  [text-shadow:0_0_10px_rgba(88,166,255,0.6),_1px_1px_1px_rgba(10,10,10)] ">
          {" "}
          Currently Reading: "{CurrentBook}" (Page {CurrentPage}/{AllPage}){" "}
        </span>
      </div>
    );
  }

  export default CurrentlyState;
