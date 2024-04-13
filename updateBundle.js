const fs = require("fs").promises;
const Mustache = require("mustache");
const { dialects } = require("@cucumber/gherkin");

function extractKeywords(dialects, ...properties) {
  return Object.values(dialects)
    .flatMap((dialect) => properties.flatMap((property) => dialect[property]))
    .map((keyword) => keyword.trim())
    .filter((keyword) => keyword !== "*")
    .join("|");
}

const featureNames = extractKeywords(dialects, "feature");
const headerNames = extractKeywords(
  dialects,
  "background",
  "rule",
  "scenario",
  "scenarioOutline",
  "examples"
);
const functionNames = extractKeywords(
  dialects,
  "given",
  "when",
  "then",
  "and",
  "but"
);

async function renderHello() {
  try {
    const template = await fs.readFile("./tmlanguage_template.plist", "utf8");
    return Mustache.render(template, {
      features: featureNames,
      headers: headerNames,
      steps: functionNames,
    });
  } catch (err) {
    console.error(err);
  }
}

async function main() {
  try {
    const rendered = await renderHello();
    await fs.writeFile("syntaxes/gherkin.tmLanguage", rendered);
    console.log("File has been created");
  } catch (err) {
    console.error(err);
  }
}

main();
