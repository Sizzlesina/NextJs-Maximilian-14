"use client";
import { useFormStatus } from "react-dom";

function FormSubmit() {
  const status = useFormStatus();

  if (status.pending) {
    return <>Creating post...</>;
  }

  return (
    <>
      <button type='reset'>Reset</button>
      <button>Create Post</button>
    </>
  );
}
export default FormSubmit;
