// src/components/admin-panel/content-layout.tsx
import React from "react";

interface ContentLayoutProps {
  title: string;
  children: React.ReactNode;
}

export const ContentLayout = ({ title, children }: ContentLayoutProps) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
      <div className="mt-4">{children}</div>
    </div>
  );
};
