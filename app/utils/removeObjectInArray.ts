// Remove object in an Array if part of the key is not present.
// Usage: createPerformanceStandard

import { isArray } from 'radash'

export const removeObjectInArray = (items: Array<any>) => {
  let newArray = items;
  if (isArray(items)) {
    newArray = items.filter((item: any) => item.id);
  }
  return newArray;
}