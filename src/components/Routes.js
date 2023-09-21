import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import AboutPage from '../pages/AboutPage';
import HomePage from '../pages/HomePage'
import ContactPage from "../pages/ContactPage";
import ForumPage from "../pages/ForumPage";
import PrivatePage from '../pages/PrivatePage';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { LoginPage } from '../pages/login/LoginPage';
import { ProfilPage } from '../pages/ProfilPage';
export const Routes = () => {
    return (
            <Switch>
                <GuestRoute path="/login" exact><LoginPage /></GuestRoute>
                <Route path="/" exact><HomePage /></Route>
                <Route path="/forum" exact><ForumPage /></Route>
                <Route path="/hakkimizda" ><AboutPage /></Route>
                <Route path="/iletisim" ><ContactPage /></Route>
                <Route path="/profil" ><ProfilPage /></Route>
                <PrivateRoute>
                    <PrivatePage />
                </PrivateRoute>
            </Switch> 
    );
}
function PrivateRoute({ children, ...rest }) {
    const [user] = useLocalStorage("user");
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user ? (
                    children
                ) : (
                    <Redirect to={{ pathName: "/login", state: { from: location } }} />
                )
            }
        />
    )
}
function GuestRoute({ children, ...rest }) {
    const [user] = useLocalStorage("user");
    return (
        <Route
            {...rest}
            render={({ location }) =>
                !user ? (
                    children
                ) : (
                    <Redirect to={{ pathName: "/", state: { from: location } }} />
                )
            }
        />
    )
}