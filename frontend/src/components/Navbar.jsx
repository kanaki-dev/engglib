const Navbar = () => {
    return (
        <>
            <nav class="text-gray-400 bg-gray-900 body-font">
                <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                        <img className="w-16 h-16 text-white p-2 rounded-full" src="https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2024-04/240422-topeka-zoo-ostrich-death-wm-354p-b40c32.jpg" alt="Logo" />
                        <span class="ml-3 text-xl">Tailblocks</span>
                    </a>
                    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <a class="mr-5 hover:text-white">About</a>
                    </nav>
                    <button class="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
                        Login
                        <svg
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            class="w-4 h-4 ml-1"
                            viewBox="0 0 24 24"
                        >
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
