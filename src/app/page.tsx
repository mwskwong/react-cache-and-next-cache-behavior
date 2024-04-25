import {
  cacheWrapsUnstableCacheReturns3,
  cacheWrapsUnstableCacheReturns4,
  unstableCacheWrapsCacheReturns1,
  unstableCacheWrapsCacheReturns2,
} from "./queries";

export default async function Home() {
  const [one, two, three, four] = await Promise.all([
    unstableCacheWrapsCacheReturns1(),
    unstableCacheWrapsCacheReturns2(),
    cacheWrapsUnstableCacheReturns3(),
    cacheWrapsUnstableCacheReturns4(),
  ]);

  return (
    <main>
      <h1>
        <code>unstable_cache</code> wraps <code>cache</code>
      </h1>
      <p>This should be 1: {one}</p>
      <p>This should be 2: {two}</p>
      <h1>
        <code>cache</code> wraps <code>unstable_cache</code>
      </h1>
      <p>This should be 3: {three}</p>
      <p>This should be 4: {four}</p>
    </main>
  );
}
