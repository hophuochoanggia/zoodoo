import { Suspense } from "react";
import { Sidebar } from "../../../components/sidebar";
import "../../globals.css";

interface AuthenticatedLayoutProps {
  children: React.ReactNode;
}

export default function AuthenticatedLayout({
  children,
}: AuthenticatedLayoutProps) {
  return (
    <section>
      <div className="grid lg:grid-cols-5">
        <Sidebar className="hidden lg:block" />
        <div className="col-span-3 lg:col-span-4 lg:border-l">{children}</div>
      </div>
    </section>
  );
}
