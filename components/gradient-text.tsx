import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
}

export function GradientText({
  children,
  className,
  variant = "primary",
}: GradientTextProps) {
  const gradientClasses = {
    primary:
      "dark:bg-gradient-to-r dark:from-[#565656] dark:to-white dark:bg-clip-text dark:text-transparent bg-gradient-to-r from-[#686868] to-[#1e1e1e] bg-clip-text text-transparent",
    secondary:
      "bg-gradient-to-r dark:from-[#08e9ed] dark:to-[#03625e] from-[#10d6cf] to-[#4bcac6] bg-clip-text text-transparent",
  };

  return (
    <span className={cn(gradientClasses[variant], className)}>{children}</span>
  );
}
