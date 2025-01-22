import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLawyers } from "../features/lawyers/lawyerSlice";
import lawyersData from "../mock/lawyers.json";
import { Link } from "react-router-dom";




const HomePage = () => {
  const dispatch = useDispatch();
  const lawyers = useSelector((state) => state.lawyers.lawyers);

  useEffect(() => {
    // Load mock data into Redux state
    dispatch(setLawyers(lawyersData));
  }, [dispatch]);

  return (
    <div className="container my-4" style={{height:"70vh"}}>
      <h1>Available Lawyers</h1>
      <div className="row">
        {lawyers.map((lawyer) => (
          <div className="col-md-4 mb-3" key={lawyer.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{lawyer.name}</h5>
                <p className="card-text">Specialty: {lawyer.specialty}</p>
                <p className="card-text">Cost: ${lawyer.costPerAppointment}</p>
                {/* <a href={`/lawyer/${lawyer.id}`} className="btn btn-primary">
                  View Details
                </a> */}
                <Link to={`/lawyer/${lawyer.id}`} className="btn btn-primary">
  View Details
</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
