import _ from "lodash";

export const transformIconName = (iconName = "", prefix = "") =>
  prefix +
  iconName
    .split("-")
    .map((v) => v.replace(/^./, (m) => m.toUpperCase()))
    .join("");

export const extractQuasarSvg = (path = "") => {
  const pathChunks = path.split("|");
  const svgPath = _.chain(pathChunks[0] || "")
    .replace(/^.*(?=@@)@@[^&]*&&/giu, "")
    .replace(/&&/giu, "")
    .value();
  const viewBox = pathChunks[1] || "";
  return { svgPath, viewBox };
};
