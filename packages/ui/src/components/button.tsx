import { cn } from "@/lib/tw";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ className, ...props }: ButtonProps) => {
  return <button {...props} className={cn(className)} />;
};

export default Button;
