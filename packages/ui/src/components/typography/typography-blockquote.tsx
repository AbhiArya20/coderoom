import { cn } from "@/lib/utils";
import { ITypographyProps } from "@/types/typography-interface";

export function TypographyBlockquote({
  children,
  className,
}: ITypographyProps) {
  return (
    <blockquote className={cn("pl-6 mt-6 italic border-l-2", className)}>
      {children}
    </blockquote>
  );
}
