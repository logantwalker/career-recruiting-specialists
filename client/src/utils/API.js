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
            duties: q.duties,
            qualifications: q.quals,
            location: q.location,
            salary: `${q.salaryLow} - ${q.salaryHigh}`
        }
        return axios.post("/api/jobs", jobData)
    },
    updateJob: function (q,id) {
        let jobData = {
            title: q.jobTitle,
            industry: q.industry,
            company: q.company,
            type: q.jobType,
            shift: q.shift,
            description: q.description,
            duties: q.duties,
            qualifications: q.quals,
            location: q.location,
            salary: `${q.salaryLow} - ${q.salaryHigh}`
        }
        return axios.put('/api/jobs/' + id, jobData)
    },
    deleteJob: function (id) {
        return axios.delete("/api/jobs/" + id);
    },

    getApplicants: function(){
        return axios.get("/api/applicants");
    }
};

export default API;