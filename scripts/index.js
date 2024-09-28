const fs = require("fs");
const path = require("path");

function extractColors(data) {
  const colorTokens = data.find((item) => "Color Tokens" in item)[
    "Color Tokens"
  ];
  const lightMode = colorTokens.modes.Light;
  const darkMode = colorTokens.modes.Dark;

  const result = {
    light: {},
    dark: {},
  };

  const categories = [
    "backgrounds",
    "foregrounds",
    "borders",
    "buttons",
    "contrast",
    "tag",
  ];

  [
    ["light", lightMode],
    ["dark", darkMode],
  ].forEach(([mode, modeData]) => {
    categories.forEach((category) => {
      if (category in modeData) {
        Object.entries(modeData[category]).forEach(([key, value]) => {
          if (value && typeof value === "object" && "$value" in value) {
            result[mode][`${category}-${key}`] = value["$value"];
          } else if (value && typeof value === "object") {
            Object.entries(value).forEach(([subkey, subvalue]) => {
              if (
                subvalue &&
                typeof subvalue === "object" &&
                "$value" in subvalue
              ) {
                result[mode][`${category}-${key}-${subkey}`] =
                  subvalue["$value"];
              }
            });
          }
        });
      }
    });
  });

  return result;
}

function generateTailwindConfig(colors) {
  const tailwindColors = {};

  Object.entries(colors.light).forEach(([key, value]) => {
    tailwindColors[key] = {
      DEFAULT: value,
      dark: colors.dark[key] || value,
    };
  });

  return tailwindColors;
}

// Read the JSON file
const inputPath = path.join(__dirname, "export.json");
const outputPath = path.join(__dirname, "tailwind.config.js");

fs.readFile(inputPath, "utf8", (err, jsonString) => {
  if (err) {
    console.log("Error reading file:", err);
    return;
  }
  try {
    const data = JSON.parse(jsonString);
    const colors = extractColors(data);
    const tailwindColors = generateTailwindConfig(colors);

    // Create Tailwind CSS configuration string
    const configString = `
module.exports = {
  theme: {
    extend: {
      colors: ${JSON.stringify(tailwindColors, null, 6)}
    }
  }
}`;

    // Save the result to a new JavaScript file
    fs.writeFile(outputPath, configString, (err) => {
      if (err) {
        console.log("Error writing file", err);
      } else {
        console.log(
          `Tailwind CSS colors configuration saved to '${outputPath}'`
        );
      }
    });
  } catch (err) {
    console.log("Error parsing JSON string:", err);
  }
});
