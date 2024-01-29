export function isEmpty(res,value) {
  // string vacío
  if (typeof value === "string" && value.trim() === "") {
    const jsonResponse = {
      message: "The value cannot be an empty string",
      status: 400,
    }
    res.status(400).json(jsonResponse);
    return false;
  }

  // number
  if (typeof value === "number" && value === 0) {
    const jsonResponse = {
      message: "The value cannot be zero",
      status: 400,
    }
    res.status(400).json(jsonResponse);
    return false;
  }

  // array vacío
  if (Array.isArray(value) && value.length === 0) {
    const jsonResponse = {
      message: "The value cannot be an empty array",
      status: 400,
    }
    res.status(400).json(jsonResponse);
    return false;
  }

  // object vacío
  if (typeof value === "object" && Object.keys(value).length === 0) {
    const jsonResponse = {
      message: "The value cannot be an empty object",
      status: 400,
    }
    res.status(400).json(jsonResponse);
    return false;
  }

  // null 
  if (value === null) {
    const jsonResponse = {
      message: "The value cannot be null",
      status: 400,
    }
    return false;
  }

  // undefined
  if (value === undefined) {
    const jsonResponse = {
      message: "The value cannot be undefined",
      status: 400,
    }
    return false;
  }

  return true;
}
