/**
 * Shared methods for component use
 */

/**
 * @description Convert an object of camelCase CSS to a string  of kebab-case CSS
 * - This allows for easy objectCSS-to-CSS conversion.
 */
export const convertToCSS = (config: any): string => {
  const styleObj = config?.style;

  const result = Object.keys(styleObj)
    .map(key => `${camelToKebab(key)}: ${styleObj[key]};`)
    .join(' ');

  return result;
}

function camelToKebab(str: string) {
  return str.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`);
}

/**
 * @description Deeply merge an object with differing values into a single object.
 * - Specifcally meant for combining default configurations with partially filled configurations, on deeply nested configs
 */
export const deepMerge = (target: any, source: any) => {
  for (const key in source) {
    if (source[key] instanceof Object) {
      Object.assign(source[key], deepMerge(target[key], source[key]));
    }
  }
  Object.assign(target || {}, source);
  return target;
} 