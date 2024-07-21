"use client";
import { useState, useEffect } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { IPokeTier, IPokeType } from "@/interfaces";

type possibleTypes = IPokeTier | IPokeType;

interface props {
  listOptions: possibleTypes;
  queryName: string;
}

export function CheckboxFilter({ listOptions, queryName }: props) {
  const [selectedTypes, setSelectedTypes] = useState<{
    [key: string]: boolean;
  }>({});

  const handleCheckboxChange = (type: string) => {
    setSelectedTypes((prevState) => {
      const newState = { ...prevState, [type]: !prevState[type] };

      const allSelectedAfterChange = Object.keys(listOptions).every(
        (key) => newState[key]
      );
      newState["all"] = allSelectedAfterChange;

      return newState;
    });
  };

  const allSelected = Object.keys(listOptions).every(
    (key) => selectedTypes[key]
  );

  const handleSelectAllChange = () => {
    const newState = Object.keys(listOptions).reduce(
      (acc, key) => ({ ...acc, [key]: !allSelected }),
      {}
    );
    setSelectedTypes({ ...newState, all: !allSelected });
  };

  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  useEffect(() => {
    const queryParams = Object.keys(selectedTypes)
      .filter(
        (key) => selectedTypes[key as keyof possibleTypes] && key !== "all"
      )
      .map((key) => encodeURIComponent(key.replace(" ", "")))
      .join("&");

    const params = new URLSearchParams(searchParams);
    if (!selectedTypes.all) {
      if (queryParams) {
        params.set(queryName, queryParams);
      }
    } else {
      params.delete(queryName);
    }
    replace(`${pathName}?${params.toString()}`);
  }, [selectedTypes]);

  useEffect(()=> {
    replace(`${pathName}`);
  }, []);

  return (
    <>
      <div key="all">
        <input
          type="checkbox"
          id="all"
          name="all"
          checked={allSelected}
          onChange={handleSelectAllChange}
        />
        <label htmlFor="all">Todos</label>
      </div>
      {Object.entries(listOptions).map(([key, value]) => (
        <div key={key}>
          <input
            type="checkbox"
            id={key}
            name={key}
            checked={selectedTypes[key]}
            onChange={() => handleCheckboxChange(key)}
          />
          <label htmlFor={key}>{typeof value === "string" ? value : key}</label>
        </div>
      ))}
    </>
  );
}
