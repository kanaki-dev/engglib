import { db } from "../models/index.js";

export class DB {
    constructor() {
        this.db = db;
    }

    addBranch(data) {
        if (data.length <= 0) {
            return;
        }

        const branch = this.getBranch().filter((name) => name == data);
        if (branch && branch.length > 0) {
            return false;
        }
        this.db.update(({ branch }) => branch.push(data));
        return true;
    }

    addSem(data) {
        if (data.length <= 0) {
            return;
        }

        const sem = this.getSem().filter((name) => name == data);
        if (sem && sem.length > 0) {
            return false;
        }
        this.db.update(({ sem }) => sem.push(data));
        return true;
    }

    addYear(data) {
        if (data.length <= 0) {
            return false;
        }

        const sem = this.getYear()?.filter((name) => name == data);
        if (sem && sem.length > 0) {
            return false;
        }
        this.db.update(({ year }) => year?.push(data));
        return true;
    }

    addSub(subject, sem, branch) {
        if (subject.length <= 0 && sem.length <= 0) {
            return;
        }

        try {
            const semesterRes = this.getSub()
                .filter((s) => s.sem === sem)
                .filter((s) => s.branch === branch);
            if (semesterRes.length === 0) {
                this.db.update(({ sub }) => sub.push({ subject, sem, branch }));
                return true;
            } else {
                const responseSem = this.getSub()
                    .filter((d) => d.sem == sem)
                    .filter((d) => d.branch === branch);

                const responseSub = subject.every((val) =>
                    responseSem[0].subject.includes(val)
                );

                if (!responseSub) {
                    subject = subject.filter(
                        (sb) => !responseSem[0].subject.includes(sb)
                    );
                } else {
                    return "All subject is already present";
                }

                this.db.update(({ sub }) =>
                    sub.forEach((el) => {
                        if (el.sem === sem) {
                            el.subject.push(...subject);
                        }
                    })
                );
                return true;
            }
        } catch (error) {
            console.error("Error Message From local db", error);
            return false;
        }
    }

    // delte data
    deleteABranch(data) {
        this.db.update(({ branch }) => branch.pop(data));
        return true;
    }

    deleteASem(data) {
        this.db.update(({ sem }) => sem.pop(data));
        return true;
    }

    deleteASub(data) {
        this.db.update(({ sub }) => sub.pop(data));
        return true;
    }

    deleteAYear(data) {
        this.db.update(({ year }) => year.pop(data));
        return true;
    }

    // get All Data
    getBranch() {
        const { branch } = this.db.data;
        return branch;
    }

    getSem() {
        const { sem } = this.db.data;
        return sem;
    }

    getSub() {
        const { sub } = this.db.data;
        return sub;
    }

    getYear() {
        const { year } = this.db.data;
        return year;
    }
}

const localDB = new DB();

export default localDB;
