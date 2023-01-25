import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
    return (  
        
<nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-green-400 rounded-lg dark:border-gray-600">
  <div className="container flex flex-wrap justify-between items-center mx-auto">
  <Link to="/">
  <label href="" className="flex items-center">
      <span className="self-center text-2xl text-green-600 font-sans font-semibold whitespace-nowrap dark:text-white">ROUND4</span>
  </label>
  </Link>
  <div className="flex md:order-2">
      <button type="button" className="text-green-600 bg-white font-sans focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-green-600 dark:hover:bg-green-600 dark:focus:ring-green-800">SIGN UP</button>
      <button type="button" className="text-white bg-green-600 font-sans hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-green-600 dark:hover:bg-green-600 dark:focus:ring-green-800">SIGN IN</button>
      <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-600 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        {/*<svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>*/}
    </button>
  </div>
  <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-600">
      
      {/*<Link to="/solveRiddles">
        <li>
          <a href="#" className="block py-2 pr-4 pl-3 font-sans text-gray-600 text-lg rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-600 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-600" aria-current="page">Browse Riddles</a>
        </li>
      </Link>
      
      <Link to="/createRiddles">
        <li>
          <a href="#" className="block py-2 pr-4 pl-3 font-sans text-gray-600 text-lg rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-600 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-600">Create Riddle</a>
        </li>
    </Link>*/}

    </ul>
  </div>
  </div>
</nav>

    );
}
 
export default Navbar;