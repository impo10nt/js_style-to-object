'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const result = {};
  const declarations = sourceString.split(';');

  for (let i = 0; i < declarations.length; i++) {
    const declaration = declarations[i].trim();

    if (declaration.length === 0) {
      continue;
    }

    const colonIndex = declaration.indexOf(':');

    const key = declaration.slice(0, colonIndex).trim();

    const value = declaration.slice(colonIndex + 1).trim();

    result[key] = value;
  }

  return result;
}

module.exports = convertToObject;
