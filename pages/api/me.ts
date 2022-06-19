import { validateRoute } from "../../utils/auth";

export default validateRoute((req, res, user) => {
  res.json(user);
});
