const Sem = () => {
    const data = [
        {
            year: "2024",
            name: "abc.pdf",
            id: 2,
        },
    ];

    return (
        <>
            {/* <section className="text-gray-400 bg-gray-900 body-font flex justify-center">
                <div className="flex w-full h-full justify-center gap-4">
                    <a
                        href="#"
                        className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-green-500 border-0 py-4 px-10 focus:outline-none hover:bg-green-600 rounded"
                    >
                        7th sem
                    </a>
                    <a
                        href="#"
                        className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-green-500 border-0 py-4 px-10 focus:outline-none hover:bg-green-600 rounded"
                    >
                        7th sem
                    </a>
                    <a
                        href="#"
                        className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-green-500 border-0 py-4 px-10 focus:outline-none hover:bg-green-600 rounded"
                    >
                        7th sem
                    </a>
                    <a
                        href="#"
                        className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-green-500 border-0 py-4 px-10 focus:outline-none hover:bg-green-600 rounded"
                    >
                        7th sem
                    </a>
                </div>
            </section> */}
            <div className="px-6 grid grid-cols-7 grid-flow-col gap-1 bg-gray-900 text-gray-400 ">
                <aside className="hidden md:block md:col-span-2 lg:col-span-1">
                    <div className="flex flex-col gap-3 px-4 overflow-y-auto">
                        <a
                            href="#"
                            className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-green-500 border-0 py-4 px-10 focus:outline-none hover:bg-green-600 rounded"
                        >
                            7th sem
                        </a>
                        <a
                            href="#"
                            className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-green-500 border-0 py-4 px-10 focus:outline-none hover:bg-green-600 rounded"
                        >
                            7th sem
                        </a>
                        <a
                            href="#"
                            className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-green-500 border-0 py-4 px-10 focus:outline-none hover:bg-green-600 rounded"
                        >
                            7th sem
                        </a>
                        <a
                            href="#"
                            className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-green-500 border-0 py-4 px-10 focus:outline-none hover:bg-green-600 rounded"
                        >
                            7th sem
                        </a>
                    </div>
                </aside>
                <section className="sm:col-span-5 lg:col-span-6">
                    <table className="md:w-full md:text-sm md:text-left md:rtl:text-right text-gray-500 md:dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Year
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    View
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td className="px-6 py-4">Laptop</td>
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    Apple MacBook Pro 17"
                                </th>
                                <td className="px-6 py-4">$2999</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </div>
        </>
    );
};

export default Sem;
