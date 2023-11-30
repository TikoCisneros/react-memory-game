// @ts-ignore
export const pipe = (...fns) => (input) => fns.reduce((chain, func) => func(chain), input);

