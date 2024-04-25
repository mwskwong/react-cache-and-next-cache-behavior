# Steps to reproduce

1. Install, build and start the next app as usual
2. Observe http://localhost:3000, the displayed numbers are as expected
3. Build and start the next app again **_WITHOUT_** deleting `.next/`. This is to simulate the app being rebuilt with data cache presence
4. Observe http://localhost:3000 again, note that `1` has been replaced with `2`, or vice versa. This is due to the two functions `unstableCacheWrapsCacheReturns1` and `unstableCacheWrapsCacheReturns2` result in the same cache key. Also note that `3` and `4` are unaffected.
