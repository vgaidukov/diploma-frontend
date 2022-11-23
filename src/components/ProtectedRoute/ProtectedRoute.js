import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ isLoggedIn, children, wait }) => {

	return (
		<Route>
			{() => isLoggedIn ? children : <Redirect to="/" />}
		</Route>
	);
};

export default ProtectedRoute;