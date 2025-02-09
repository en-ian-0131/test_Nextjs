import React from "react";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <>
      <div>blog id is {params.id}</div>
    </>
  );
}
