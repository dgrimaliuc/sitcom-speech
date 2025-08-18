export function combineClasses(...args: string[]): string {
  const classes = Array.from(args).filter(Boolean);
  return classes.join(" ");
}
