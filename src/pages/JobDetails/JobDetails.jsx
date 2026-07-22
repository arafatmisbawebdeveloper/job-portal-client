import { Link, useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const {_id, title, company, company_logo, description, salaryRange, location, requirements } = useLoaderData();
    

    return (
        <div>
            <h1>{title}</h1>
            <p>{company}</p>
            <img src={company_logo} alt={company} />
            <p>{description}</p>
            <p>Salary: {salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>
            <p>Location: {location}</p>
            <div>
                <h2>Requirements:</h2>
                <ul>
                    {requirements.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>
            <Link to={`/jobApply/${_id}`} className="btn btn-primary">Apply Now</Link>
        </div>
    );
};

export default JobDetails;