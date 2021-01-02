import axios from "axios";

const API = {
    getJobs: function (q) {
        return axios.get("/api/jobs");
    },
    postNewJob: function (q) {
        let jobData = {
            title: q.jobTitle,
            industry: q.industry,
            company: q.company,
            type: q.jobType,
            shift: q.shift,
            description: q.description,
            location: q.location,
            salary: `${q.salaryLow} - ${q.salaryHigh}`
        }
        return axios.post("/api/jobs", jobData)
    }
};

export default API;