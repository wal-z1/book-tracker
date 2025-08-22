  import React, { useState } from "react";

  function CurrentlyState() {
    const [CurrentBook, UpdateBook] = useState("No Book");
    const [CurrentPage, UpdatePage] = useState("0");
    const [AllPage, UpdateAllPage] = useState("undefined ");

    return (
      <div
        className="container   font-inter capitalize font-medium 
          
          text-shadow-blue-500 
          cursor-pointer w-fit
          text-sm
          mx-auto
          relative 
          top-12">
        <span className="text-[#8B949E]">
          {" "}
          Currently Reading: "{CurrentBook}" (Page {CurrentPage}/{AllPage}){" "}
        </span>
      </div>
    );
  }

  export default CurrentlyState;
