import { cn } from "@/lib/utils";
import { ITypographyProps } from "@/types/typography-interface";

export function TypographyP({ children, className }: ITypographyProps) {
  return (
    <p className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}>
      {children}
    </p>
  );
}
