/**
 * Undefined checker
 * @param target Checking Target
 * @returns if target is true, return true
 */
export const isUndefined = (target: any): target is undefined =>
	typeof target === 'undefined';
