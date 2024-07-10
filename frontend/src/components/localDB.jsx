<form
action=""
className="bg-blue-500 p-6 rounded-lg shadow-md flex flex-wrap"
>
<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
    <label htmlFor="sem" className="text-white block">
        Semester (example: 1st sem)
    </label>
    <input
        type="text"
        name="sem"
        id="sem"
        className="bg-white rounded-md px-3 py-2 mt-1 w-full"
    />
</div>

<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
    <label htmlFor="year" className="text-white block">
        Year
    </label>
    <input
        type="text"
        name="year"
        id="year"
        className="bg-white rounded-md px-3 py-2 mt-1 w-full"
    />
</div>

<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
    <label
        htmlFor="subName"
        className="text-white block"
    >
        Subject Name
    </label>
    <input
        type="text"
        name="subName"
        id="subName"
        className="bg-white rounded-md px-3 py-2 mt-1 w-full"
    />
</div>

<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
    <label
        htmlFor="branch"
        className="text-white block"
    >
        Branch Name
    </label>
    <input
        type="text"
        name="branch"
        id="branch"
        className="bg-white rounded-md px-3 py-2 mt-1 w-full"
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