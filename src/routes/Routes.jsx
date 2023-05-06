import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Category from "../pages/Category/Category";
import NewsLayout from "../layout/NewsLayout";
import News from "../pages/News/News";
import LoginLayout from "../LoginLayout/LoginLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register.jsx/Register";
import PrivateRoute from "./PrivateRoute";
import Terms from "../Shared/Terms";

const router = createBrowserRouter([
	{
		path: "/",
		element: <LoginLayout />,
		children: [
			{
				path: "/",
				element: <Navigate to="/category/0"></Navigate>,
			},
			{
				path: "login",
				element: <Login />,
			},
			{
				path: "register",
				element: <Register />,
			},
			{
				path: "terms",
				element: <Terms />,
			},
		],
	},
	{
		path: "category",
		element: <Main />,
		children: [
			{
				path: ":id",
				element: <Category />,
				loader: ({ params }) =>
					fetch(
						`https://the-news-dragon-server-shariful10.vercel.app/category/${params.id}`
					),
			},
		],
	},
	{
		path: "/news",
		element: <NewsLayout />,
		children: [
			{
				path: ":id",
				element: (
					<PrivateRoute>
						<News />
					</PrivateRoute>
				),
				loader: ({ params }) =>
					fetch(`https://the-news-dragon-server-shariful10.vercel.app/news/${params.id}`),
			},
		],
	},
]);

export default router;
