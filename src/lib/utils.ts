// Lightweight className joiner — no external deps.
// Accepts strings and falsy values (the result of `cond ? "a" : false` etc.).
export function cn(
  ...args: Array<string | false | null | undefined>
): string {
  return args.filter(Boolean).join(" ");
}
