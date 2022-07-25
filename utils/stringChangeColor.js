function stringChangeColor(string, color) {
  const options = {
    reset: '\x1b[0m', // reset style
    _: '\x1b[4m', // underscore
    r: '\x1b[31m', // red
    g: '\x1b[32m', // green
    y: '\x1b[33m', // yellow
    b: '\x1b[34m', // blue
    cy: '\x1b[36m', // cyan
    mg: '\x1b[35m', // magenta
    blk: '\x1b[5m', // blink
  };
  const coloredString = options[`${color}`] + string + options.reset;
  return coloredString;
}

module.exports = {
  stringChangeColor,
};
