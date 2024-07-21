"use client";
import React, { useState } from 'react';
import { IPokeType, IPokeTiers } from "@/interfaces";

type Props = IPokeTiers | IPokeType;

function TypeCheckboxList({ typeDictionary }: {typeDictionary: Props}) {
  const [selectedTypes, setSelectedTypes] = useState<{ [key: string]: boolean }>({});
  

  // Função para verificar se todos os tipos estão selecionados
  const allSelected = Object.keys(typeDictionary).every((key) => selectedTypes[key]);

  // Função para lidar com a mudança de seleção
  const handleCheckboxChange = (type: string) => {
    setSelectedTypes((prevState) => {
      const newState = { ...prevState, [type]: !prevState[type] };

      // Se todos os tipos foram selecionados, marca ou desmarca "Todos"
      const allSelectedAfterChange = Object.keys(typeDictionary).every((key) => newState[key]);
      newState["all"] = allSelectedAfterChange;

      return newState;
    });
  };

  // Função para lidar com a mudança de seleção da opção "Todos"
  const handleSelectAllChange = () => {
    const newState = Object.keys(typeDictionary).reduce(
      (acc, key) => ({ ...acc, [key]: !allSelected }),
      {}
    );
    setSelectedTypes({ ...newState, all: !allSelected });
  };

  return (
    <form>
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
      {Object.entries(typeDictionary).map(([key, value]) => (
        <div key={key}>
          <input
            type="checkbox"
            id={key}
            name={key}
            checked={!!selectedTypes[key]}
            onChange={() => handleCheckboxChange(key)}
          />
          <label htmlFor={key}>{typeof(value) === "string" ? value : key}</label>
        </div>
      ))}
    </form>
  );
};

export default TypeCheckboxList;
