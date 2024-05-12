"use client";

function FilterError({ error }) {
  return (
    <div id='error'>
      <h2>An Error occurred!</h2>
      <p>{error.message}</p>
    </div>
  );
}

export default FilterError;
