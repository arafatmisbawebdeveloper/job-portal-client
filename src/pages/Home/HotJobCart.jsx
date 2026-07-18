import { FaDollarSign, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const HotJobCart = ({ job }) => {
  const {_id, title, company, company_logo, description, salaryRange, location, requirements } =
    job;
  return (
    <div className="card bg-base-100 shadow-sm">
      <div className="flex items-center gap-4 p-4">
        <figure>
        <img className="w-16"
          src={company_logo}
          alt={company}
        />
      </figure>
      <div>
        <h4 className = "text-2xl">{company}</h4>
        <p className = "flex items-center gap-2"> <FaMapMarkerAlt /> {location}</p>
      
      </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">{title}
            <div className = "badge badge-secondary">New</div>
        </h2>
        
        <p>{description}</p>
        <div className="flex flex-wrap gap-2">
            {
                requirements.map(skill => <p className = 'border  rounded-md hover:text-blue-700 hover:bg-blue-100' key={skill}>{skill}</p>)
            }
        </div>
        <div className="card-actions justify-end items-center">
            <p className = "flex items-center">Salary: <FaDollarSign></FaDollarSign> {salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>
          <Link to={`/jobs/${_id}`} className="btn btn-primary">Apply</Link>
        </div>
      </div>
    </div>
  );
};

export default HotJobCart;
