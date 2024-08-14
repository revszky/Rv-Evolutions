interface DataID {
  id: string;
  check: string;
  valid: string
}

const urlCheck = "checking"
const urlValid = "found"
const Identifier: DataID[] = [
  { check: urlCheck, valid: urlValid, id: "813-210-023" },
  { check: urlCheck, valid: urlValid, id: "756-482-981" },
  { check: urlCheck, valid: urlValid, id: "301-587-690" },
  { check: urlCheck, valid: urlValid, id: "586-789-452" },
  { check: urlCheck, valid: urlValid, id: "268-494-635" },
];

export default Identifier;
