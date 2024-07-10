import services from "../appwrite/store.js";
import localDB, { DB } from "../db/index.js";
import { ApiError } from "../utlis/ApiError.js";

// let data = ["cse", "civil", "mech", "ece"];
let branchArray = localDB.getBranch();
let semArray = localDB.getSem().sort();
let data;

const homePage = async (req, res) => {
    try {
        return res.status(200).render("index", {
            branchArray,
            window: {
                instance: ["Hello", "world"],
            },
        });
    } catch (error) {
        return new ApiError(500, "Couldn't render this page");
    }
};

const branchPage = async (req, res) => {
    const { branch } = req.params;
    return res.status(200).render("semPage", { branch, semArray });
};

const pyqPage = async (req, res) => {
    let { branch, sem, sub } = req.params;
    let msg = "";

    sem = sem.toLowerCase().replace("_", " ");
    data = await services.retrieveStoreData(branch, sem, sub);
    data = (await data["documents"]) || [];

    data = await data.map((d) => {
        const response = `/api/v1/download/${d.fileID}`;
        d["link"] = response;
        return d;
    });

    return res.status(200).render("semPage", {
        semArray,
        branch,
        sem,
        sub,
        data,
        msg,
    });
};

const subPage = async (req, res) => {
    let { branch, sem } = req.params;
    sem = sem.replace("_", " ");
    let subject = localDB.getSub() || undefined;

    let filteredSubjects = subject.filter(
        (el) => el.sem == sem && el.branch === branch
    );

    return res.status(200).render("semPage", {
        semArray,
        branch,
        sem,
        subject: filteredSubjects[0]?.subject,
    });
};

const downloadPdf = async (req, res) => {
    try {
        const { fileId } = req.params;
        const URI = await services.getFileDownload(fileId);
        res.redirect(URI.href);
    } catch (error) {
        res.status(500).send(new ApiError(500, "Error fetching file"));
    }
};

const aboutPage = async (req, res) => {
    res.status(200).render("aboutPage");
};

const navAuth = (req, res) => {
    if (req?.user) {
        return res.status(200).json(req?.user);
    }
    return res.status(200).json(undefined);
};

//  admin page
const adminPage = async (req, res) => {
    return res.status(200).render("admin");
};

const authorPage = async (req, res) => {
    return res.status(200).render("author");
};

export {
    aboutPage,
    branchPage,
    downloadPdf,
    homePage,
    pyqPage,
    subPage,
    navAuth,
    adminPage,
    authorPage,
};
