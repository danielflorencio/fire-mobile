import { createContext, useReducer, useCallback, useEffect } from "react";
import { useRouter } from "expo-router";
import { AuthActionEnum } from "./authActions";
import authReducer, { AuthState, defaultAuthState } from "./authReducer";
import { createUsersTableIfNotExists, getLoggedUser, logoutCurrentUser } from "../../database/usersTable";

export type UserData = {
    authToken: string;
    userId: number;
    name: string;
    email: string;
};

export interface AuthContext {
    authState: AuthState;
    globalLogInDispatch: (props: UserData) => void;
    globalLogOutDispatch: () => void;
}


export const authCtx = createContext<AuthContext>({
    authState: defaultAuthState,
    globalLogInDispatch: () => {},
    globalLogOutDispatch: () => {},
});

export const AuthContextProvider = ({children}: {children: React.ReactNode}) => {

const [authState, authDispatch] = useReducer(authReducer, defaultAuthState);
const router = useRouter();


// Check user's login state.
useEffect(() => {
    (async () => {

        let user: UserData | null | undefined = null;

        const isTableCreated: any = await createUsersTableIfNotExists();

        if(isTableCreated){
            user = await getLoggedUser();
        }

        if (user) {
            authDispatch({ type: AuthActionEnum.LOG_IN, payload: user });
        } else {
            authDispatch({ type: AuthActionEnum.LOG_OUT, payload: null})
        }

    })();
}, []);

const globalLogInDispatch = useCallback((props: UserData) => {

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

const globalLogOutDispatch = useCallback(async () => {
    if(authState.userId){
        const logout = await logoutCurrentUser(authState.userId);
        authDispatch({ type: AuthActionEnum.LOG_OUT, payload: null });
        router.push("/login");
    } else {
        // Call an alert or activate a toast in the user screen. 
    }
}, [router]);

// context values to be passed down to children
const ctx = {
    authState,
    globalLogInDispatch,
    globalLogOutDispatch,
};

return( 
    <authCtx.Provider value={ctx}>
        {children}
    </authCtx.Provider>)
};

export default authCtx;