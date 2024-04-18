import Link from "next/link";
import { Calendar } from "lucide-react";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  return (
    <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40 h-[100vh]">
      <div className="flex h-full flex-col gap-2">
        <div className="flex h-[60px] items-center border-b px-6">
          <Link className="flex items-center gap-2 font-semibold" href="#">
            {/* <Package2Icon className="h-6 w-6" /> */}
            <span className="">Zoodoo</span>
          </Link>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid items-start px-4 text-sm font-medium">
            <Link
              className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900 transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
              href="/admin"
            >
              <Calendar />
              Bookings
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
