import localDB from "../db/index.js";
import { ApiResponse } from "../utlis/ApiResponse.js";

const addDataToBranch = async (req, res) => {
    const { branch } = req.body;

    const response = localDB.addBranch(branch);

    if (req.headers["content-type"] === "application/json") {
        return res
            .status(200)
            .json(
                new ApiResponse(
                    200,
                    response,
                    `${
                        response
                            ? "Branch is Added"
                            : "Branch is already present"
                    }`
                )
            );
    } else {
        res.end();
    }
};

const getBranchData = (req, res) => {
    return res
        .status(200)
        .json(new ApiResponse(200, localDB.getBranch(), "All branch data"));
};

const deleteABranch = (req, res) => {
    const { branch } = req.body;

    const response = localDB.deleteABranch(branch);

    return res
        .status(200)
        .json(
            new ApiResponse(
                200,
                response,
                `${response ? "Branch is Deleted" : "some error occur"}`
            )
        );
};

const addDataToSem = async (req, res) => {
    const { sem } = req.body;

    const response = localDB.addSem(sem);
    return res
        .status(200)
        .json(
            new ApiResponse(
                200,
                response,
                `${response ? "Sem is Added" : "Semester is already present"}`
            )
        );
};

const getSemData = (req, res) => {
    return res
        .status(200)
        .json(new ApiResponse(200, localDB.getSem(), "all branch data"));
};

const deleteASem = (req, res) => {
    const { sem } = req.body;

    const response = localDB.deleteASem(sem);

    return res
        .status(200)
        .json(
            new ApiResponse(
                200,
                response,
                `${response ? "Sem is Deleted" : "some error occur"}`
            )
        );
};

const addDataToSub = async (req, res) => {
    const { sub, sem, branch} = req.body;

    const response = localDB.addSub(sub, sem, branch);

    if (req.headers["content-type"] === "application/json") {
        return res
            .status(200)
            .json(
                new ApiResponse(
                    200,
                    response,
                    `${
                        response ? "Sub is Added" : "Subject is already present"
                    }`
                )
            );
    }
};

const getSubData = (req, res) => {
    const { sem } = req.query;
    return res
        .status(200)
        .json(new ApiResponse(200, localDB.getSub(sem), "all Sem data"));
};

const deleteASub = (req, res) => {
    const { sub } = req.body;

    const response = localDB.deleteASub(sub);

    return res
        .status(200)
        .json(
            new ApiResponse(
                200,
                response,
                `${response ? "sub is Deleted" : "some error occur"}`
            )
        );
};

export {
    addDataToBranch,
    getBranchData,
    getSemData,
    addDataToSem,
    addDataToSub,
    getSubData,
    deleteABranch,
    deleteASem,
    deleteASub,
};
