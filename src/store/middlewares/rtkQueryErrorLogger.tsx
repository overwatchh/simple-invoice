import { isFulfilled, isRejectedWithValue } from "@reduxjs/toolkit";
import type { Middleware } from "@reduxjs/toolkit";
import { notification } from "antd";
import { clearAuthInfo } from "@/utils/localStorage/auth";
/**
 * Log a warning and show a toast!
 */
export const rtkQueryErrorLogger: Middleware = () => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    //handle 401
    //remove auth info to trigger redirect to login page if 401 error
    if (action.payload.originalStatus === 401) {
      clearAuthInfo();
      notification.error({
        message: "Unauthorized",
        description: "You may need to login to use the application",
        placement: "topRight",
      });
      //reloadPage to redirect to login
      window.location.reload();
    }
    const errorDescription =
      action.payload.data.error_description ??
      action.payload.data.errors[0].message;

    notification.error({
      message: action.error.message,
      description: errorDescription,
      placement: "topRight",
    });
  }
  if (isFulfilled(action)) {
    //display notification when login success
    if (action.type === "profile/executeQuery/fulfilled") {
      notification.success({
        message: "Logged in successfully",
        description: action.payload.status.message,
        placement: "topRight",
      });
    }
  }
  return next(action);
};
