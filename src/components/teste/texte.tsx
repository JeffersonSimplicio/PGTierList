"use client";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import React from "react";

export default function Teste() {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const {replace} = useRouter();
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const params = new URLSearchParams(searchParams);
    const searchString = event.currentTarget.value;
    if (searchString) {
      params.set("search", searchString);
    } else {
      params.delete("search");
    } 
    replace(`${pathName}?${params.toString()}`);
  }

  return (
    <>
      <h4>Teste</h4>
      <input onChange={handleChange} type="text" />
    </>
  );
}
