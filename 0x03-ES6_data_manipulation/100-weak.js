export const weakMap = new WeakMap();

let calls = 1;

export function queryAPI(endpoint) {
  weakMap.set(endpoint, calls);
  calls += 1;

  const queryCalls = weakMap.get(endpoint);
  if (queryCalls >= 5) {
    throw new Error('Endpoint load is high');
  }
}
