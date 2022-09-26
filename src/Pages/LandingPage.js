import { Outlet, Link } from "react-router-dom";

const LandingPage = () => {
    return (
        <div className="landingPage">
            <h1>Riddles For Everyone</h1>
            <p>Welcome to Round4. Here you will find riddles with a twist. All riddles have at least 3 clues.</p>
            <p>Gain fame and have fun by solving each clue before the riddle becomes ridiculously easy!!!</p>
            <Link to="/createRiddles">
                <button type="button" className="riddlesButton text-white bg-green-600 font-sans hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-green-600 dark:hover:bg-green-600 dark:focus:ring-green-800">Get Started</button>
            </Link>
        </div> 
     );
}
 
export default LandingPage;