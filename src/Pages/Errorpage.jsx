import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page" className="flex items-center justify-center text-white flex-col h-screen bg-gray-700 font-bold text-3xl">
            <h1>Oops!</h1>
            break
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}
