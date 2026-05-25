import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const InsuranceSteps = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      id: 1,
      title: "Fill IN FORM",
      desc: "Fill in your basic information and contact data. Simple and secure.",
    },
    {
      id: 2,
      title: "SUBMIT FORM",
      desc: "We will receive the information you provided and start processing your application right away.",
    },
    {
      id: 3,
      title: "GET COVERED",
      desc: "Once approved, you will receive your insurance details and coverage information. Welcome to the family!",
    },
  ];

  return (
    <div className="w-full h-full min-h-fit bg-white p-6 md:p-10 flex flex-col items-center">
      <div className="w-full max-w-3xl flex flex-col relative">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <div
              className={`
                relative z-10 w-full sm:w-[85%] p-8 border-2 rounded-2xl transition-all duration-700 ease-in-out
                ${index === 1 ? "md:self-end" : "md:self-start"}
                ${
                  activeStep === index
                    ? "border-red-600 bg-red-50/40 shadow-xl scale-[1.02]"
                    : "border-slate-100 bg-white opacity-90 shadow-sm"
                }
              `}
            >
              {/* Number Badge */}
              <div
                className={`
                absolute -top-5 -left-5 w-12 h-12 rounded-full flex items-center justify-center 
                font-bold text-lg transition-all duration-500 border-4 border-white shadow-md
                ${activeStep === index ? "bg-red-600 text-white animate-pulse" : "bg-slate-200 text-slate-500"}
              `}
              >
                {step.id}
              </div>

              <div className="space-y-2">
                <h3
                  className={`text-xl font-jakarta font-bold transition-colors duration-500 ${activeStep === index ? "text-red-600" : "text-slate-400"}`}
                >
                  {step.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-[7px] sm:text-sm md:text-base">
                  {step.desc}
                </p>
              </div>
            </div>

            {/* SMOOTH ARROW SECTION */}
            {index < steps.length - 1 && (
              <div className="relative w-full h-24 md:h-40 flex justify-center items-center -my-4 md:-my-8">
                <div
                  className={`w-full h-full transition-opacity duration-1000 ${activeStep === index ? "opacity-100" : "opacity-30"}`}
                >
                  {/* Mobile Arrow: Centered Smooth Line */}
                  <svg
                    className="w-full h-full block md:hidden"
                    viewBox="0 0 100 100"
                  >
                    <path
                      d="M 50 0 C 50 40, 50 60, 50 85"
                      fill="none"
                      stroke="#dc2626"
                      strokeWidth="3"
                      strokeDasharray="8,10"
                      strokeLinecap="round"
                      className={
                        activeStep === index
                          ? "animate-[dash_2s_linear_infinite]"
                          : ""
                      }
                    />
                    <path d="M 44 80 L 50 92 L 56 80 Z" fill="#dc2626" />
                  </svg>

                  {/* Desktop Arrow: Smooth Cubic "S" Curve */}
                  <svg
                    className="w-full h-full hidden md:block"
                    viewBox="0 0 500 150"
                    preserveAspectRatio="none"
                  >
                    <path
                      d={
                        index === 0
                          ? "M 150 10 C 150 100, 400 50, 400 140" // S-Curve from Left to Right
                          : "M 350 10 C 350 100, 100 50, 100 140" // S-Curve from Right to Left
                      }
                      fill="none"
                      stroke="#dc2626"
                      strokeWidth="2.5"
                      strokeDasharray="12,12"
                      strokeLinecap="round"
                      className={
                        activeStep === index
                          ? "animate-[dash_2s_linear_infinite]"
                          : ""
                      }
                    />
                    {/* Centered Arrowhead at the end of the curve */}
                    <path
                      d={
                        index === 0
                          ? "M 392 130 L 400 145 L 408 130 Z"
                          : "M 92 130 L 100 145 L 108 130 Z"
                      }
                      fill="#dc2626"
                    />
                  </svg>
                </div>
              </div>
            )}
          </React.Fragment>
        ))}

        <Link to="/contact" onClick={() => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}} className="self-center mt-12 group relative justify-center items-center sm:px-14 py-4 bg-red-600 text-white font-bold rounded-full overflow-hidden transition-all hover:bg-red-700 active:scale-95 shadow-2xl shadow-red-200">
          <span className="relative z-10 uppercase tracking-widest text-center text-sm">
            Contact Us Today!
          </span>
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        </Link>
      </div>

      <style jsx>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -24;
          }
        }
      `}</style>
    </div>
  );
};

export default InsuranceSteps;
