import { cn } from "@/utils/shadcn-utils";
import { Loader } from "lucide-react";
import { FC } from "react";

type SpinnerProps = {
  className?: string;
};
const Spinner: FC<SpinnerProps> = ({ className }) => (
  <Loader className={cn("mr-2 h-4 w-4 animate-spin", className)} />
);

export default Spinner;
