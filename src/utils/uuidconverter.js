import { v5 as uuidv4, validate as validateUuid } from "uuid";

function convertStringToUuid(uuidString) {
  if (validateUuid(uuidString)) {
    return uuidv4(uuidString);
  } else {
    throw new Error("Invalid UUID string");
  }
}

export { convertStringToUuid };
