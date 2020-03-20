/**
 * Returns formatted string: pref + valF + suff
 * valF, pref, suff - newValue, preffix, suffix
 */
export function returnFormatter(valF, prefix, suff) {
  let formatter;
  if (prefix === "$") {
    // https://stackoverflow.com/a/16233919
    /* return valF.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    }); */
    formatter = `${prefix} ${Number(valF).toFixed(0)}`.replace(
      /\B(?=(\d{3})+(?!\d))/g,
      ","
    );
  } else {
    formatter = `${valF} ${suff}`;
  }
  return formatter;
}

export function returnParcer(valP, prefix, suffix) {
  let parcer;
  if (prefix === "$") {
    parcer = valP.replace(/\$\s?|(,*)/g, "");
  } else {
    parcer = valP.replace(`${suffix}`, "");
  }
  parcer = parcer.replace(/\s+/g, "");
  return parcer;
}

export function formattedData(valF, prefix, suffix) {
  const formatter = new Intl.NumberFormat("en-EN").format(valF);
  const result = `${prefix || ""}${formatter}${suffix || ""}`;
  return result;
}

export function returnMoneyValue(a, b) {
  let result = (b / 100) * a;
  if (typeof a === "object") result = (b / 100) * parseFloat(a.target.value);
  return result;
}

export function returnPercentValue(a, b) {
  const result = (a / b) * 100;
  return result;
}
// returnPercentValue
// export function formattedDataPercent(valF) {
//   const formatter = new Intl.NumberFormat("en-EN").format(valF);
//   const result = `${formatter} %`;
//   return result;
// }

// export function returnFormatterPercent(valF) {
//   let abs = parseFloat(valF);
//   abs = abs.toFixed(2);
//   const formatter = `${abs} %`;
//   return formatter;
// }
// export function returnParcerPercent(valP) {
//   let parcer = valP.replace("%", "");
//   parcer = parcer.replace(/\s+/g, "");
//   parcer = parcer.toFixed(2);
//   return parcer;
// }
