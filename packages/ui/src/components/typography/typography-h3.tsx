import { cn } from "@/lib/utils";
import { ITypographyProps } from "@/types/typography-interface";

export function TypographyH3({ children, className }: ITypographyProps) {
  return (
    <h3
      className={cn(
        "text-2xl font-semibold tracking-tight scroll-m-20",
        className
      )}
    >
      {children}
    </h3>
  );
}
