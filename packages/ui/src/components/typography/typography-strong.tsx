import { cn } from "@/lib/utils";
import { ITypographyProps } from "@/types/typography-interface";

export function TypographyStrong({ children, className }: ITypographyProps) {
  return <strong>{children}</strong>;
}
