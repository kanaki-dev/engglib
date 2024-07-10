import services from "../appwrite/store.js";
import { ApiError } from "../utlis/ApiError.js";
import { ApiResponse } from "../utlis/ApiResponse.js";
import { asyncHandler } from "../utlis/asyncHandler.js";
import path from "path";
import { __dirname } from "../file.js";
import { File } from "buffer";
import fs from "fs";
import localDB from "../db/index.js";

let fileBuffer = "";
let actualFile = "";

const uploadFile = asyncHandler(async (req, res) => {
    try {
        let { year, name, branch, sem } = req.body;

        let pdfLocalPath = await req?.file?.path;
        if (pdfLocalPath) {
            pdfLocalPath = path.join(__dirname, pdfLocalPath);

            fileBuffer = fs.readFileSync(pdfLocalPath);
            actualFile = new File([fileBuffer], req?.file.originalname);
        }

        const file = await services.uploadFile(actualFile, pdfLocalPath, {
            name,
            year,
            branch: branch.toLowerCase(),
            sem,
            uploadedBy: "ankan",
        });

        return res.status(200).json(new ApiResponse(200, file));
    } catch (error) {
        console.log("Error: uploadFiles Admin", error);
        return new ApiError(500, "not working", error);
    }
});

const deleteFile = asyncHandler(async (req, res) => {
    try {
        const { id } = await req.params;

        const deleteInfo = await services.deleteFile(id);
        return res.status(200).json(new ApiResponse(200, deleteInfo));
    } catch (error) {
        console.log("Error Controller :: deletFile :: errors", error);
        return res
            .status(500)
            .json(new ApiResponse(500, "something went wrong"));
    }
});

const localFormReg = async (req, res) => {
    let { sem, year, subName, branch, semester, branchName } = req.query;
    branch.split(",").map((b) => localDB.addBranch(b));
    sem.split(",").map((s) => localDB.addSem(s));
    subName = subName.split(",").map((s) => s.trim());
    year.split(",").map((y) => localDB.addYear(y));

    localDB.addSub(subName, semester, branchName);
    return res.redirect("/admin/localDB");
};

const globalFormReg = async (req, res) => {
    try {
        const { name, sem, year, branch, subName } = req.body;
        const uploadedBy = req?.user?.email;
        const fileLists = await req?.files;

        if (
            sem === "" &&
            year === "" &&
            branch === "" &&
            subName === "" &&
            fileLists.length === 0
        ) {
            return;
        }

        if (fileLists && fileLists.length !== 0) {
            fileLists.forEach(async (file) => {
                let pdfLocalPath = path.join(__dirname, file?.path);

                fileBuffer = fs.readFileSync(pdfLocalPath);
                actualFile = new File([fileBuffer], file.originalname);

                await services.uploadFile(actualFile, pdfLocalPath, {
                    name,
                    year,
                    branch: branch.toLowerCase(),
                    sem,
                    subName,
                    uploadedBy,
                });
            });

            if (req.headers["content-type"] === "application/json") {
                // API call scenario: Return JSON response
                return res
                    .status(200)
                    .json(
                        new ApiResponse(200, "file being uploaded successfully")
                    );
            } else {
                // Regular form submission: Render HTML response
                return res.redirect("/admin/globalDB?error=true"); // Render a success page
            }
        }
        if (req.headers["content-type"] === "application/json") {
            // API call scenario: Return JSON response
            return res
                .status(500)
                .json(new ApiResponse(500, "Error while uploading"));
        } else {
            // Regular form submission: Render HTML response
            return res.redirect("/admin/globalDB?error=false"); // Render a success page
        }
    } catch (error) {
        console.error(
            "ERROR ON APPWRITE :: WHILE UPLOADING THE FILE :: ",
            error
        );
    }
};

export { uploadFile, deleteFile, localFormReg, globalFormReg };
