import { createContext, useContext, useState, useEffect } from "react";
import { IPokeTiers } from "@/interfaces";

const dataContext = createContext({});

export function DataPovider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<IPokeTiers | null>(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/pokeTiers.json");
      const jsonData = (await response.json()) as IPokeTiers;
      setData(jsonData);
    }
    fetchData();
  }, []);

  return (
    <dataContext.Provider value={{ data }}>
      {children}
    </dataContext.Provider>
  );
}

export const useDataContext = () => useContext(dataContext);
