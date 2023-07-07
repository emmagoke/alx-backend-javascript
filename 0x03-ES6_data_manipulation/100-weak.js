export const weakMap = new WeakMap();

let calls = 1;

export function queryAPI(endpoint) {
  weakMap.set(endpoint, calls);
  calls += 1;

  if (calls >= 5) {
    throw new Error('Endpoint load is high');
  }
}
