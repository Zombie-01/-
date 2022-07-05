import { useState } from "react";

const Reportheader = ({ parentCallbackReport }: any):JSX.Element => {
    return(
        <>
        <button
      onClick={() => {
        parentCallbackReport("one");
      }}
    >
      Spending
    </button>
        <button
      onClick={() => {
        parentCallbackReport("two");
      }}
    >
      Net Worth
    </button>
        <button
      onClick={() => {
        parentCallbackReport("three");
      }}
    >
      Income v Expense
    </button>
        </>
    )
}

export default Reportheader