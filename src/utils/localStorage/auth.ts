import { removeItem } from "@/utils/localStorage";
import { ELocalItem } from "./types";

export const clearAuthInfo = () => {
  removeItem(ELocalItem.Auth);
  removeItem(ELocalItem.Membership);
};
