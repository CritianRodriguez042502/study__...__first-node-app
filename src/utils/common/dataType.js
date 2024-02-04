// The default way to use this function is as follows with the following parameters:
// 1.) In the first parameter we pass res - response, this data is passed from the global variable, this to be able to send personalized responses.
// 2.) The second value is the data to which we want to apply that validation - logic.
// 3.) Finally, in the last parameter we will pass the name of the key of the value that we pass in the second parameter, this to ensure that when an error occurs the response specifically specifies which field is the one that does not meet the conditions.
// if (!isString(res, title, "title")) {return;}


export function isString(res, value, name) {
  if (typeof value === "string") {
    if (isNaN(Number(value))) {
      return true;
    } else {
      const jsonResponse = {
        code: 400,
        message: {
          invalid_Input: name,
          detailed_message:
            "The value of the string must be a letter, numeric characters are not accepted",
        },
      };
      res.status(400).json(jsonResponse);
      return false;
    }
  } else {
    const jsonResponse = {
      code: 400,
      message: {
        invalid_Input: name,
        detailed_message: "The value must be a data type: text string",
      },
    };
    res.status(400).json(jsonResponse);
    return false;
  }
}

export function isNumber(res, value, name) {
  if (typeof value === "number") {
    return true;
  } else {
    const jsonResponse = {
      code: 400,
      message: {
        invalid_Input: name,
        detailed_message: "The value must be a number",
      },
    };

    res.status(400).json(jsonResponse);
    return false;
  }
}

export function isBoolean(res, value, name) {
  if (typeof value === "boolean") {
    return true;
  } else {
    const jsonResponse = {
      code: 400,
      message: {
        invalid_Input: name,
        detailed_message: "The value must be a boolean",
      },
    };
    res.status(400).json(jsonResponse);
    return false;
  }
}

export function isDecimal(res, value, name) {
  if (typeof value === "number" && !isNaN(value) && Number.isInteger(value)) {
    return true;
  } else {
    const jsonResponse = {
      code: 400,
      message: {
        invalid_Input: name,
        detailed_message: "The value must be a decimal",
      },
    };
    res.status(400).json(jsonResponse);
    return false;
  }
}
