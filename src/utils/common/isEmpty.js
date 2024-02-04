// The default way to use this function is as follows with the following parameters:
// 1.) In the first parameter we pass res - response, this data is passed from the global variable, this to be able to send personalized responses.
// 2.) The second value is the data to which we want to apply that validation - logic.
// 3.) Finally, in the last parameter we will pass the name of the key of the value that we pass in the second parameter, this to ensure that when an error occurs the response specifically specifies which field is the one that does not meet the conditions.
// if (!isEmpty(res, value, name)) {return;}

export function isEmpty(res, value, name) {
  // string vacío
  if (typeof value === "string" && value.trim() === "") {
    const jsonResponse = {
      code: 400,
      message: {
        invalid_Input: name,
        detailed_message: "The value cannot be an empty string",
      },
    };
    res.status(400).json(jsonResponse);
    return false;
  }

  // number 0
  if (typeof value === "number" && value === 0) {
    const jsonResponse = {
      code: 400,
      message: {
        invalid_Input: name,
        detailed_message: "The value cannot be zero",
      },
    };
    res.status(400).json(jsonResponse);
    return false;
  }

  // array vacío
  if (Array.isArray(value) && value.length === 0) {
    const jsonResponse = {
      code: 400,
      message: {
        invalid_Input: name,
        detailed_message: "The value cannot be an empty array",
      },
    };
    res.status(400).json(jsonResponse);
    return false;
  }

  // object vacío
  if (typeof value === "object" && Object.keys(value).length === 0) {
    const jsonResponse = {
      code: 400,
      message: {
        invalid_Input: name,
        detailed_message: "The value cannot be an empty object",
      },
    };
    res.status(400).json(jsonResponse);
    return false;
  }

  // null
  if (value === null) {
    const jsonResponse = {
      code: 400,
      message: {
        invalid_Input: name,
        detailed_message: "The value cannot be null",
      },
    };
    return false;
  }

  // undefined
  if (value === undefined) {
    const jsonResponse = {
      code: 400,
      message: {
        invalid_Input: name,
        detailed_message: "The value cannot be undefined",
      },
    };
    return false;
  }

  return true;
}
