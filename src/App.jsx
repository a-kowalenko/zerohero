import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import User from "./pages/User";
import Kicker from "./pages/Kicker";
import Match from "./pages/Match";
import Tournament from "./pages/Tournament";
import PageNotFound from "./pages/PageNotFound";
import Rankings from "./pages/Rankings";
import GlobalStyles from "./styles/GlobalStyles";
import Shame from "./pages/Shame";
import CreateMatch from "./pages/CreateMatch";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 0,
        },
    },
});

function App() {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <ReactQueryDevtools initialIsOpen={false} />
                <GlobalStyles />
                <BrowserRouter>
                    <Routes>
                        <Route element={<AppLayout />}>
                            <Route index element={<Home />} />
                            <Route path="login" element={<Login />} />
                            <Route path="register" element={<Register />} />
                            <Route
                                path="forgotpassword"
                                element={<ForgotPassword />}
                            />
                            <Route path="rankings" element={<Rankings />} />
                            <Route path="shame" element={<Shame />} />
                            <Route path="user/:userId" element={<User />} />
                            <Route
                                path="kicker/:kickerId"
                                element={<Kicker />}
                            />
                            <Route path="matches/" element={<PageNotFound />} />
                            <Route
                                path="matches/create"
                                element={<CreateMatch />}
                            />
                            <Route
                                path="matches/:matchId"
                                element={<Match />}
                            />
                            <Route
                                path="tournament/:tourId"
                                element={<Tournament />}
                            />
                            <Route path="*" element={<PageNotFound />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </QueryClientProvider>
        </>
    );
}

export default App;
