"use client";
import { useState, useEffect } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { IPokeTier, IPokeType } from "@/interfaces";
import "./checkboxFilter.css";

type possibleTypes = IPokeTier | IPokeType;

interface props {
  listOptions: possibleTypes;
  queryName: string;
  text: string
}

export function CheckboxFilter({ listOptions, queryName, text }: props) {
  const [selectedTypes, setSelectedTypes] = useState<{
    [key: string]: boolean;
  }>({});
  const [isOpen, setIsOpen] = useState<boolean>(false);

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

  useEffect(() => {
    replace(`${pathName}`);
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        className="button-filter"
        onClick={toggleDropdown}
      >
        {text}
      </button>
      {isOpen && (
        <div className="filter-list">
          <div className="p-4">
            <div key="all" className="filter-option mb-4">
              <input
                type="checkbox"
                id="all"
                name="all"
                checked={allSelected}
                onChange={handleSelectAllChange}
                className="mr-2"
              />
              <label htmlFor="all" className="text-lg font-medium">
                Todos
              </label>
            </div>
            {Object.entries(listOptions).map(([key, value]) => (
              <div key={key} className="filter-option mb-2">
                <input
                  type="checkbox"
                  id={key}
                  name={key}
                  checked={selectedTypes[key]}
                  onChange={() => handleCheckboxChange(key)}
                  className="mr-2"
                />
                <label htmlFor={key} className="text-base">
                  {typeof value === "string" ? value : key}
                </label>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
