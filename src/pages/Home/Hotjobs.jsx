import { useEffect, useState } from "react";
import HotJobCart from "./HotJobCart";

const Hotjobs = () => {
      const [jobs, setJobs] = useState([]);

      useEffect(() => {
        fetch('http://localhost:3000/jobs')
          .then(res => res.json())
          .then(data => setJobs(data))  
      }, []);
    return (
        <div>
            <div>
                {
                    jobs.map(job => <HotJobCart key={job._id} job={job} />)
                }
            </div>
        </div>
    );
};

export default Hotjobs;