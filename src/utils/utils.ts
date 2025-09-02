export function combineClasses(...args: (string | undefined)[]): string {
  const classes = Array.from(args).filter(Boolean);
  return classes.join(" ");
}
