import React, { useState } from "react";
import Snackbar from "../../components/Snackbar/Snackbar";

export const Statistics = () => {
  const [open, setOpen] = useState();
  return (
    <div>
      <Snackbar open={open} setOpen={setOpen}></Snackbar>
    </div>
  );
};
