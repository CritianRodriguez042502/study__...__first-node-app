export function isString(res, value) {
  if (typeof value === "string") {
    return true;
  } else {
    const jsonResponse = {
      message: "The value must be a string",
      status: 400,
    };
    res.status(400).json(jsonResponse);
    return false;
  }
}

export function isNumber(res,value) {
  if (typeof value === "number") {
    return true;
  } else {
    const jsonResponse = {
      message: "The value must be a number",
      status: 400,
    };
    res.status(400).json(jsonResponse);
    return false;
  }
}

export function isBoolean(res,value) {
  if (typeof value === "boolean") {
    return true;
  } else {
    const jsonResponse = {
      message: "The value must be a boolean",
      status: 400,
    };
    res.status(400).json(jsonResponse);
    return false;
  }
}

export function isDecimal(res,value) {
  if (typeof value === "number" && !isNaN(value) && Number.isInteger(value)) {
    return true;
  } else {
    const jsonResponse = {
      message: "The value must be a decimal",
      status: 400,
    };
    res.status(400).json(jsonResponse);
    return false;
  }
}
