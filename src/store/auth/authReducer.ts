import { Reducer } from "react";
import { AuthAction } from "./authActions";

export interface AuthState {
    isLoggedIn: boolean;
    isLoading: boolean;
    authToken?: string;
    userId?: number;
    name?: string;
    email?: string;
};

export const defaultAuthState: AuthState = {
    isLoading: true,
    isLoggedIn: false,
};

const authReducer: Reducer<AuthState, AuthAction> = (state, action) => {
  // user successfully authenticated
    if (action.type === "LOG_IN") {
        return {
            ...state,
            isLoggedIn: true,
            isLoading: false,
            authToken: action.payload.authToken,
            userId: action.payload.userId,
            name: action.payload.name,
            email: action.payload.email,
        };
    }

    // log out user
    if (action.type === "LOG_OUT") {
        return {isLoading: false, isLoggedIn: false}
    }

    return defaultAuthState;
};

export default authReducer;