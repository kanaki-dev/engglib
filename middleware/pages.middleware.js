import localDB from "../db/index.js";
import { ApiError } from "../utlis/ApiError.js";

export const checkBranchRoute = (req, res, next) => {
    const branch = localDB.getBranch();
    if (branch.includes(req.originalUrl.slice(1))) {
        return next();
    }
    return next(new ApiError(404, "page not found"));
};

export const checkSemRoute = (req, res, next) => {
    const { sem } = req.params;
    const semester = localDB.getSem();
    if (semester.includes(sem.replace("_", " "))) {
        return next();
    }
    return next(new ApiError(404, "page not found"));
};

export const checkSubRoute = (req, res, next) => {
    const { sem, sub, branch } = req.params;
    const subject = localDB.getSub(sem.replace("_", " "), branch);
    if (subject.includes(sub)) {
        return next();
    }
    return next(new ApiError(404, "page not found"));
};
