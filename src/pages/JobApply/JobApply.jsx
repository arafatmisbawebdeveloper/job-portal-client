import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const JobApply = () => {
    const {id} = useParams();
    const { user } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(); 
        const form = e.target;
        const linkedin = form.linkedin.value;
        const github = form.github.value;
        const resume = form.resume.value;
        const applicationData = {
            jobId: id,
            linkedin,
            github,
            resume,
            userEmail: user?.email,
        }
        fetch('http://localhost:3000/job-applications', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(applicationData)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId) {
               Swal.fire({
                position:"top-end",
                icon: "success",
                title: "Your job has been saved",
                showConfirmButton: false,
                timer:1500,
               })
               navigate('/myApplications');
            }
        });
    };
  return (
 
        <div className="card bg-base-100 w-full max-w-sm  shadow-2xl  ">
        
            <h1 className="text-5xl font-bold text-center">Apply for Job</h1>
            <form onSubmit={handleSubmit} className="card-body">
              <label className="label">LinkedIn URL</label>
              <input type="url" name = "linkedin" className="input" placeholder="LinkedIn URL" />
              <label className="label">Github URL</label>
              <input type="url" name = "github" className="input" placeholder="Github URL" />
               <label className="label">Resume URL</label>
              <input type="url" name = "resume" className="input" placeholder="Resume URL" />
              
              <button className="btn btn-neutral mt-4">Apply</button>
            </form>
          </div>
      
    
  );
};

export default JobApply;
