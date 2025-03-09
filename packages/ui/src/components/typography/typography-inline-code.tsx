import { cn } from "@/lib/utils";
import { ITypographyProps } from "@/types/typography-interface";

export function TypographyInlineCode({
  children,
  className,
}: ITypographyProps) {
  return (
    <code
      className={cn(
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
        className
      )}
    >
      {children}
    </code>
  );
}
