import React from "react";
import { MasterLayout } from "./MasterLayout";

export const Dashboard: React.FC = () => {
  return (
    <MasterLayout>
      <h1 className="container py-4 text-center text-primary">Dashboard</h1>
      <p className="text-muted text-center">
        Selamat datang di halaman dashboard!
      </p>
    </MasterLayout>
  );
};
