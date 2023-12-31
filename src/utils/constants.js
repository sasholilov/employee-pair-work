const DATE_PRESENT = "NULL";
const SEPARATORS = {
  DASH: "-",
  DOT: ".",
  SLASH: "/",
  SPLITCSV: ";",
};
const SPLIT_NEW_LINE = /(\r\n|\r|\n)/g;
const ERROR_MESSAGE = {
  MISSING_DATA: "Missing data on row: ",
  WRONG_DATE_FORMAT: "Wrong date format on row: ",
  NO_FILE: "No file selected",
  NOT_CSV_FILE: "Ivalid file type. Please select a CSV file.",
};

export { DATE_PRESENT, SEPARATORS, SPLIT_NEW_LINE, ERROR_MESSAGE };
