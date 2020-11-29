---
title: Introduction
---

```jsx
function HelloCodeTitle(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

```rust
impl Solution {
    pub fn find_content_children(mut children: Vec<i32>, mut cookies: Vec<i32>) -> i32 {
        children.sort();
        cookies.sort();

        let mut ret = 0;

        let mut assigned = 0;
        'outer: for &req in children.iter() {
            for (c, &cookie) in cookies.iter().skip(assigned).enumerate() {
                if req <= cookie {
                    ret += 1;
                    assigned += c + 1;
                    continue 'outer;
                }
            }
            break;
        } 

        ret   
    }
}
```