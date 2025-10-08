import React from "react";
import { useNavigate } from "react-router-dom";

const Confirmation = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <>
      <style>{`
        .confirmation-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #3e2b1f, #ff9800);
          color: #fff;
          padding: 20px;
          text-align: center;
        }

        h1 {
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 1rem;
          color: #ffd580;
        }

        p {
          font-size: 1.1rem;
          margin: 0.5rem 0;
          max-width: 600px;
          line-height: 1.6;
        }

        .btn-home {
          margin-top: 30px;
          padding: 12px 30px;
          background-color: #ff8000;
          color: white;
          border: none;
          border-radius: 6px;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }

        .btn-home:hover {
          background-color: #ffa500;
          box-shadow: 0 8px 20px rgba(0,0,0,0.3);
          transform: translateY(-2px);
        }

        @media (max-width: 600px) {
          h1 {
            font-size: 2rem;
          }
          p {
            font-size: 1rem;
          }
          .btn-home {
            padding: 10px 24px;
            font-size: 0.95rem;
          }
        }
      `}</style>

      <div className="confirmation-container">
        <h1><b>Thank You for Registering!</b></h1>
        <p>Your registration is presently under review.</p>
        <p>Upon confirmation, a formal email will be sent from <strong>marketing@ckonnect.in</strong>.</p>
        <p>Only confirmed registrations can attend Innovation Day. We look forward to your participation!</p>
        <button className="btn-home" onClick={handleGoHome}>
          Back to Home
        </button>
      </div>
    </>
  );
};

export default Confirmation;
