const AdminPage = () => {
    return (
        <>
            <div className="grid grid-cols-7 w-full h-auto p-2">
                <div className="flex flex-col gap-4">
                    <a
                        href="/localDB"
                        className="mx-2 bg-violet-500 shadow-md rounded-md flex justify-center items-center"
                    >
                        <h1 className="text-lg p-2">local DB</h1>
                    </a>
                    <a
                        href="/globalDB"
                        className="mx-2 bg-violet-500 shadow-md rounded-md flex justify-center items-center"
                    >
                        <h1 className="text-lg p-2">Global DB</h1>
                    </a>
                </div>
                <div className="col-span-6 bg-orange-600">
                    {/* Global DB */}
                    <form
                        action=""
                        className="bg-blue-500 p-6 rounded-lg shadow-md flex flex-wrap"
                    >
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label htmlFor="name" className="text-white block">
                                File Name (Optional)
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="bg-white rounded-md px-3 py-2 mt-1 w-full"
                            />
                        </div>

                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label htmlFor="sem" className="text-white block">
                                Semester
                            </label>
                            <select
                                name="sem"
                                id="sem"
                                className="bg-white rounded-md px-3 py-2 mt-1 w-full"
                            >
                                <option value="">Select Semester</option>
                                <option value="1">1st Semester</option>
                                <option value="2">2nd Semester</option>
                                <option value="3">3rd Semester</option>
                                <option value="4">4th Semester</option>
                                Add more options as needed
                            </select>
                        </div>

                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label htmlFor="sem" className="text-white block">
                                Year
                            </label>
                            <select
                                name="sem"
                                id="sem"
                                className="bg-white rounded-md px-3 py-2 mt-1 w-full"
                            >
                                <option value="">Select Year</option>
                                <option value="1">1st Semester</option>
                                <option value="2">2nd Semester</option>
                                <option value="3">3rd Semester</option>
                                <option value="4">4th Semester</option>
                                Add more options as needed
                            </select>
                        </div>

                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label
                                htmlFor="subName"
                                className="text-white block"
                            >
                                Subject Name
                            </label>
                            <select
                                name="subName"
                                id="subName"
                                className="bg-white rounded-md px-3 py-2 mt-1 w-full"
                            >
                                <option value="">Select Subject</option>
                                <option value="Math">Math</option>
                                <option value="Science">Science</option>
                                <option value="English">English</option>
                                Add more options as needed
                            </select>
                        </div>

                        <div className="w-full px-3">
                            <label
                                htmlFor="branch"
                                className="text-white block"
                            >
                                Branch Name
                            </label>
                            <select
                                name="branch"
                                id="branch"
                                className="bg-white rounded-md px-3 py-2 mt-1 w-full"
                            >
                                <option value="">Select Branch</option>
                                <option value="Computer Science">
                                    Computer Science
                                </option>
                                <option value="Electrical Engineering">
                                    Electrical Engineering
                                </option>
                                <option value="Mechanical Engineering">
                                    Mechanical Engineering
                                </option>
                                Add more options as needed
                            </select>
                        </div>

                        <div className="w-full px-3 mt-6">
                            <label htmlFor="file" className="text-white block">
                                Upload File
                            </label>
                            <input
                                type="file"
                                name="file"
                                id="file"
                                className="mt-1 w-full"
                            />
                        </div>

                        <div className="w-full px-3 mt-6">
                            <input
                                type="submit"
                                value="Submit"
                                className="bg-white text-blue-500 hover:bg-blue-400 py-2 px-4 rounded-md cursor-pointer"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default AdminPage;
