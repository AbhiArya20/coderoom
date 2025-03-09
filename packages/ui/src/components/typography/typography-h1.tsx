import { cn } from "@/lib/utils";
import { ITypographyProps } from "@/types/typography-interface";

export function TypographyH1({ children, className }: ITypographyProps) {
  return (
    <h1
      className={cn(
        "text-4xl font-extrabold tracking-tight scroll-m-20 lg:text-5xl",
        className
      )}
    >
      {children}
    </h1>
  );
}
