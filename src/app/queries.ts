import { unstable_cache } from "next/cache";
import { cache } from "react";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const unstableCacheWrapsCacheReturns1 = unstable_cache(
  cache(async () => {
    await sleep(2000);
    return 1;
  })
);

export const unstableCacheWrapsCacheReturns2 = unstable_cache(
  cache(async () => {
    await sleep(2000);
    return 2;
  })
);

export const cacheWrapsUnstableCacheReturns3 = cache(
  unstable_cache(async () => {
    await sleep(2000);
    return 3;
  })
);

export const cacheWrapsUnstableCacheReturns4 = cache(
  unstable_cache(async () => {
    await sleep(2000);
    return 4;
  })
);
