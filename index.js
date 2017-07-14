module.exports = function(babel) {
  return {
    visitor: {
      CallExpression: function(path, state) {
        if (path.node.callee.type === "Identifier" && path.node.callee.name === state.opts.filter) {
          state.opts.callback(path, state, babel);
        }
      }
    }
  };
};
