// Tailwind CSS utility functions

/**
 * Combine multiple class names, filtering out falsy values
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Conditional class application
 */
export function conditionalClass(
  condition: boolean,
  trueClass: string,
  falseClass: string = ""
): string {
  return condition ? trueClass : falseClass;
}

/**
 * Responsive class builder
 */
export function responsiveClass(
  base: string,
  sm?: string,
  md?: string,
  lg?: string,
  xl?: string
): string {
  const classes = [base];
  if (sm) classes.push(`sm:${sm}`);
  if (md) classes.push(`md:${md}`);
  if (lg) classes.push(`lg:${lg}`);
  if (xl) classes.push(`xl:${xl}`);
  return classes.join(" ");
}

/**
 * Common button styles
 */
export const buttonStyles = {
  primary:
    "bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors",
  secondary:
    "bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors",
  outline:
    "border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold py-2 px-4 rounded-lg transition-colors",
  danger:
    "bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors",
};

/**
 * Common layout styles
 */
export const layoutStyles = {
  container: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  card: "bg-white rounded-lg shadow-md p-6",
  section: "py-8",
};

/**
 * Common spacing utilities
 */
export const spacing = {
  p: (size: number) => `p-${size}`,
  px: (size: number) => `px-${size}`,
  py: (size: number) => `py-${size}`,
  m: (size: number) => `m-${size}`,
  mx: (size: number) => `mx-${size}`,
  my: (size: number) => `my-${size}`,
};
