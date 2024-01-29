export function isString(res, value, name) {
  if (typeof value === "string") {
    if (isNaN(Number(value))) {
      return true;
    } else {
      const jsonResponse = {
        message: {
          value_name : name,
          detailed_message : "The value of the string must be a letter, numeric characters are not accepted"
        },
        status: 400,
      };
      res.status(400).json(jsonResponse);
      return false;
    }
  } else {
    const jsonResponse = {
      message: {
        name : "The value must be a data type: text string"
      },
      status: 400,
    };
    res.status(400).json(jsonResponse);
    return false;
  }
}

export function isNumber(res, value) {
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

export function isBoolean(res, value) {
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

export function isDecimal(res, value) {
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
