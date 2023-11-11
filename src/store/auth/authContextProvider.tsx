import { createContext, useReducer, useCallback, useEffect } from "react";
import { useRouter } from "expo-router";
import { AuthActionEnum } from "./authActions";
import authReducer, { AuthState, defaultAuthState } from "./authReducer";

export type UserData = {
    authToken: string;
    userId: string;
    name: string;
    email: string;
};

export interface AuthContext {
    authState: AuthState;
    globalLogInDispatch: (props: UserData) => void;
    globalLogOutDispatch: () => void;
}


const authCtx = createContext<AuthContext>({
    authState: defaultAuthState,
    globalLogInDispatch: () => {},
    globalLogOutDispatch: () => {},
});

export const AuthContextProvider = ({children}: {children: React.ReactElement}) => {

const [authState, authDispatch] = useReducer(authReducer, defaultAuthState);
const router = useRouter();

// Check if user detail is persisted, mostly catering for refreshing of the browser
useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
        const userData: UserData = JSON.parse(user);
        authDispatch({ type: AuthActionEnum.LOG_IN, payload: userData });
    }
}, []);

const globalLogInDispatch = useCallback(
    (props: UserData) => {
    const { authToken, email, name, userId } = props;
    authDispatch({
        type: AuthActionEnum.LOG_IN,
        payload: {
        authToken,
        userId,
        name,
        email,
        },
    });
    router.push("/initialPage");
    },
    [router]
);

const globalLogOutDispatch = useCallback(() => {
    authDispatch({ type: AuthActionEnum.LOG_OUT, payload: null });
    router.push("/login");
}, [router]);

// context values to be passed down to children
const ctx = {
    authState,
    globalLogInDispatch,
    globalLogOutDispatch,
};

return <authCtx.Provider value={ctx}>{children}</authCtx.Provider>;
};

export default authCtx;