"use client";
import { DataPovider } from "@/context";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
  <DataPovider>
    {children}
  </DataPovider>);
}
