# babel-plugin-call-function

```
            plugins: [
              ["call-function", {
                filter: 'url',
                callback: function (path, state, babel) {
                  var t = babel.types;
                  var arg0 = path.node.arguments[0];

                  if (t.isStringLiteral(arg0)) {
                    let v = arg0.value;
                    path.replaceWith(t.stringLiteral(bust(v)));
                  }
                }
              }]
            ]
```
