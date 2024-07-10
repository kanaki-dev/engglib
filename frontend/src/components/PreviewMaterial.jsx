const PreviewMaterial = () => {
    return (
        <>
            <section class="text-gray-400 body-font bg-gray-900">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-wrap w-full mb-20">
                        <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
                            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
                                Selct the PYQ
                            </h1>
                            <div class="h-1 w-20 bg-green-500 rounded"></div>
                        </div>
                    </div>
                    <div class="flex flex-wrap -m-4">
                        <div class="xl:w-1/4 md:w-1/2 p-4">
                            <div class="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                                <img
                                    class="h-40 rounded w-full object-cover object-center mb-6"
                                    src="https://dummyimage.com/720x400"
                                    alt="content"
                                />
                                <h2 class="text-lg text-white font-medium title-font mb-4">
                                    Chichen Itza
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PreviewMaterial;
