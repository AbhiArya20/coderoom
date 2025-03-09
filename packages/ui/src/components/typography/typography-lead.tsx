import { cn } from "@/lib/utils";
import { ITypographyProps } from "@/types/typography-interface";

export function TypographyLead({ children, className }: ITypographyProps) {
  return (
    <p className={cn("text-muted-foreground text-xl", className)}>{children}</p>
  );
}
