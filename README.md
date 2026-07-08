# leaf-data encoding

```sh
# This is Leaf Data!

# Wouldn't this be nice : )
bugCount = 0

# Big Integer? No Biggie.
huge = n@"9876543210000000000000000"

# What about those public key bytes?
pubKey = B@"68KJMg9WmuadUM3dUVdiaXW7898qanhIuvtftFxCPXw="

# We gotz tablez.
tab = {
  fruit1 = apple
  fruit2 = grape
}

# Wait a sec... that'd be better as an array:
fruit = [
  apple
  grape
]
```

```ts
import { LeafObj } from '@leaf/leaf-data`;

const s = new LeafObj()
  .withBigInt('huge', 9876543210000000000000000n)
  .stringify();

// huge = n@"9876543210000000000000000"

const parsed = LeafObj.parse(s);
```
