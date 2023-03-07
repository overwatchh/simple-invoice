/* eslint-disable no-param-reassign */
const { alias } = require("react-app-rewire-alias");
//set alias @ = src
module.exports = function override(config) {
  alias({
    "@": "src",
  })(config);

  return config;
};
