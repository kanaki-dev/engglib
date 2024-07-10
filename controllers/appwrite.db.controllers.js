import services from "../appwrite/store.js";
import { ApiResponse } from "../utlis/ApiResponse.js";
import localDB from "../db/index.js";

let branchArray = localDB.getBranch();
let semArray = localDB.getSem().sort();
let data;

export const getUser = async (req, res) => {
    const response = await services.retrievedUser("kanwaanir00@gmail.com");
    return res.status(200).json(new ApiResponse(200, response["documents"][0]));
};

export const getFileData = async (req, res) => {
    let { branch, sem, sub } = req.params;
    sem = sem.toLowerCase().replace("_", " ");
    data = await services.retrieveStoreData(branch, sem, sub);
    data = (await data?.documents) || "";

    data = await data.map((d) => {
        const response = `/api/v1/download/${d.fileID}`;
        d["link"] = response;
        return d;
    });

    return res.status(200).json(
        new ApiResponse(200, {
            semArray,
            branch,
            sem,
            sub,
            data,
        })
    );
};
