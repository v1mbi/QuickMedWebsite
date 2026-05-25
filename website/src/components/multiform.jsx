import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Check, ShieldCheck, ChevronDown } from "lucide-react";
import {Textifier} from "../functions/textifier"
import {sendEmailNotification} from "../components/email"
import Swal from "sweetalert2";

const MultiStepForm = ({ limits = [10, 20, 30, 40] ,title="Health Insurance"}) => {
  const COUNTRY_CODES = [
    { code: "+263", country: "ZW", name: "Zimbabwe" },
    { code: "+27", country: "ZA", name: "South Africa" },
    { code: "+44", country: "GB", name: "United Kingdom" },
    { code: "+1", country: "US", name: "USA" },
    { code: "+254", country: "KE", name: "Kenya" },
    { code: "+234", country: "NG", name: "Nigeria" },
  ];

  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [selectedDialCode, setSelectedDialCode] = useState("+263");

  const [formData, setFormData] = useState({
    country: "Zimbabwe",
    firstName: "",
    surname: "",
    email: "",
    allowance: "",
    cellphone: "",
    sourceOfFunds: "",
    gpName: "",
    conditions: [],
    type: "individual",
    children: 0,
    adults: 1,
    dependents: 0,
    privacy: false,
  });

  const conditionList = [
    "Asthma",
    "Diabetes",
    "Hypertension",
    "Arthritis",
    "Heart Disease",
    "None",
  ];

  const totalFields = 11;
  const filledCount =
    [
      formData.firstName,
      formData.surname,
      formData.email,
      formData.allowance,
      formData.cellphone,
      formData.sourceOfFunds,
      formData.gpName,
      formData.conditions.length > 0,
      formData.privacy,
      formData.type,
    ].filter(Boolean).length +
    (formData.children + formData.adults > 0 ? 1 : 0);

  const progress = (filledCount / totalFields) * 100;

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleCondition = (condition) => {
    setFormData((prev) => {
      const isSelected = prev.conditions.includes(condition);
      const newConditions = isSelected
        ? prev.conditions.filter((c) => c !== condition)
        : [...prev.conditions, condition];
      return { ...prev, conditions: newConditions };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    const finalData = {
      ...formData,
      fullPhone: `${selectedDialCode}${formData.cellphone}`,
    };
    console.log("Submission JSON:",  Textifier(finalData));

    Swal.fire({
        title: 'Sending...',
        didOpen: () => { Swal.showLoading() },
        allowOutsideClick: false
      });
    
      try {
        await sendEmailNotification("Funeral Insurance Application Submission","Funeral Insurance",Textifier(finalData));
      } catch (error) {
        console.error(error);
      }
    
        // Trigger the success UI state
        setIsSubmitted(true);
    
        // Reset success message after 4 seconds
        setTimeout(() => setIsSubmitted(false), 4000);
    
  };

  const isSubmitDisabled =
    formData.country === "South Africa" || !formData.privacy;

  return (
    <div className="min-h-screen w-full flex items-center justify-center  bg-gradient-to-tr ">
      <motion.div
        layout
        className="relative w-full  bg-white/70 backdrop-blur-3xl border border-white/50 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] rounded-[3rem] overflow-hidden"
      >
        {/* Progress Bar */}
        <div className="absolute top-0 left-0 w-full h-1.5 bg-blue-50/50">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-600 to-blue-400"
            animate={{ width: `${progress}%` }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
          />
        </div>

        <div className="p-4 pt-7 sm:p-12 sm:pt-12">
          <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-10">
            <div>
              <h1 className="text-xl sm:text-3xl font-jakarta font-black text-slate-800 tracking-tight leading-tight">
                {title}
              </h1>
              <p className="text-blue-500 font-bold text-[6px] sm:text-[10px] uppercase tracking-[0.2em] mt-1">
                Policy Registration
              </p>
            </div>

            <div className="relative flex items-center bg-slate-200/50 backdrop-blur-md p-1 rounded-2xl w-full sm:w-48 h-12 border border-slate-100">
              <motion.div
                className="absolute h-10 w-[calc(50%-4px)] bg-white rounded-xl shadow-sm"
                animate={{ x: formData.country === "Zimbabwe" ? 0 : "100%" }}
              />
              <button
                onClick={() => handleInputChange("country", "Zimbabwe")}
                className={`relative z-10 flex-1 text-[10px] font-black transition-colors ${formData.country === "Zimbabwe" ? "text-blue-600" : "text-slate-400"}`}
              >
                🇿🇼 ZIM
              </button>
              <button
                onClick={() => handleInputChange("country", "South Africa")}
                className={`relative z-10 flex-1 text-[10px] font-black transition-colors ${formData.country === "South Africa" ? "text-blue-600" : "text-slate-400"}`}
              >
                🇿🇦 RSA
              </button>
            </div>
          </header>

          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                {step === 1 ? (
                  <div className="space-y-5">
                    {/* Names Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FloatingInput
                        label="First Name"
                        placeholder="John"
                        value={formData.firstName}
                        onChange={(e) =>
                          handleInputChange("firstName", e.target.value)
                        }
                        className="text-[16px] sm:text-sm"
                      />
                      <FloatingInput
                        label="Surname"
                        placeholder="Doe"
                        value={formData.surname}
                        onChange={(e) =>
                          handleInputChange("surname", e.target.value)
                        }
                        className="text-[16px] sm:text-sm"
                      />
                    </div>

                    <FloatingInput
                      label="Email Address"
                      type="email"
                      placeholder="john@doe.com"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      className="text-[16px] sm:text-sm"
                    />

                    {/* Allowance Row */}
                    <FloatingSelect
                      label="Payout Allowance"
                      options={limits}
                      value={formData.allowance}
                      onChange={(e) =>
                        handleInputChange("allowance", e.target.value)
                      }
                      className="text-[16px] sm:text-sm"
                    />

                    {/* Cellphone Row - Expanded Layout */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
                        Cellphone Number
                      </label>
                      <div className="flex flex-col sm:flex-row h-fit gap-3">
                        <div className="relative w-32 shrink-0">
                          <select
                            value={selectedDialCode}
                            onChange={(e) =>
                              setSelectedDialCode(e.target.value)
                            }
                            className="w-full h-[58px] px-4 bg-white/50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-blue-100 appearance-none text-xs text-blue-600 font-bold cursor-pointer transition-all"
                          >
                            {COUNTRY_CODES.map((item) => (
                              <option key={item.country} value={item.code}>
                                {item.country} ({item.code})
                              </option>
                            ))}
                          </select>
                          <ChevronDown
                            size={14}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                          />
                        </div>
                        <input
                          type="tel"
                          placeholder="771 234 567"
                          value={formData.cellphone}
                          onChange={(e) =>
                            handleInputChange("cellphone", e.target.value)
                          }
                          className="sm:flex-1 h-[58px] px-6 bg-white/50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:outline-none text-[16px] sm:text-sm text-slate-700 font-bold placeholder:text-slate-300 transition-all"
                        />
                      </div>
                    </div>

                    <div className="pt-6">
                      <button
                        onClick={() => setStep(2)}
                        className="w-full py-5 bg-blue-600 text-white rounded-[2rem] font-black text-[10px]  sm:text-sm uppercase tracking-widest shadow-xl shadow-blue-100 hover:bg-blue-700 hover:scale-[1.01] active:scale-[0.99] transition-all"
                      >
                        Continue Application
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FloatingInput
                        label="GP Full Name"
                        placeholder="Dr. Smith"
                        value={formData.gpName}
                        onChange={(e) =>
                          handleInputChange("gpName", e.target.value)
                        }
                        className="text-[16px] sm:text-sm"
                      />
                      <FloatingSelect
                        label="Source of Funds"
                        options={["Salary", "Business", "Savings"]}
                        value={formData.sourceOfFunds}
                        onChange={(e) =>
                          handleInputChange("sourceOfFunds", e.target.value)
                        }
                      />
                    </div>

                    <div>
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 block ml-1">
                        Medical Conditions
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {conditionList.map((c) => (
                          <button
                            key={c}
                            onClick={() => toggleCondition(c)}
                            className={`py-3.5 px-2 rounded-2xl text-[10px] font-black border-2 transition-all ${formData.conditions.includes(c) ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-100" : "bg-white/50 border-slate-100 text-slate-500 hover:border-blue-200"}`}
                          >
                            {c.toUpperCase()}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="bg-slate-100/50 p-1.5 rounded-2xl flex gap-1">
                      {["individual", "corporate", "government"].map((t) => (
                        <button
                          key={t}
                          onClick={() => handleInputChange("type", t)}
                          className={`flex-1 py-2.5 text-[9px] font-black uppercase rounded-xl transition-all ${formData.type === t ? "bg-white text-blue-600 shadow-sm" : "text-slate-400 hover:text-slate-500"}`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 p-5 bg-blue-50/40 rounded-[2.5rem] border border-blue-100/30">
                      <Counter
                        label="Children"
                        value={formData.children}
                        onAdd={() =>
                          handleInputChange("children", formData.children + 1)
                        }
                        onSub={() =>
                          handleInputChange(
                            "children",
                            Math.max(0, formData.children - 1),
                          )
                        }
                      />
                      <div className="hidden sm:block w-px bg-blue-100/50 my-2" />
                      <Counter
                        label="Adults"
                        value={formData.adults}
                        onAdd={() =>
                          handleInputChange("adults", formData.adults + 1)
                        }
                        onSub={() =>
                          handleInputChange(
                            "adults",
                            Math.max(1, formData.adults - 1),
                          )
                        }
                      />
                    </div>

                    <div className="space-y-6 pt-2">
                      <label className="flex items-start gap-4 group cursor-pointer">
                        <div
                          className={`mt-0.5 shrink-0 w-6 h-6 rounded-lg border-2 transition-all flex items-center justify-center ${formData.privacy ? "bg-red-500 border-red-500" : "bg-white border-slate-200 group-hover:border-red-200"}`}
                        >
                          <input
                            type="checkbox"
                            className="hidden"
                            checked={formData.privacy}
                            onChange={(e) =>
                              handleInputChange("privacy", e.target.checked)
                            }
                          />
                          {formData.privacy && (
                            <Check
                              size={16}
                              className="text-white stroke-[3px]"
                            />
                          )}
                        </div>
                        <span className="text-[11px] text-slate-500 font-medium italic leading-relaxed">
                          I confirm that all provided information is accurate
                          and I agree to the health data processing terms.
                        </span>
                      </label>

                      <div className="flex gap-3">
                        <button
                          onClick={() => setStep(1)}
                          className="px-8 py-5 text-slate-400 font-black text-xs uppercase tracking-widest hover:text-slate-600 transition-colors"
                        >
                          Back
                        </button>
                        <button
                          disabled={isSubmitDisabled}
                          onClick={handleSubmit}
                          className={`flex-1 py-5 rounded-[2rem] font-black text-xs sm:text-sm uppercase tracking-widest text-white transition-all ${isSubmitDisabled ? "bg-slate-200 text-slate-400 cursor-not-allowed" : "bg-gradient-to-r from-blue-600 to-red-500 shadow-2xl shadow-blue-100"}`}
                        >
                          {formData.country === "South Africa"
                            ? "ZIM Restricted"
                            : "Confirm & Submit"}
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ) : (
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-6"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-50 text-blue-600 rounded-3xl mb-6 shadow-inner shadow-blue-100/50">
                  <ShieldCheck size={40} />
                </div>
                <h2 className="text-xl sm:text-3xl font-black text-slate-800 tracking-tight">
                  Application Processed
                </h2>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

function FloatingInput({ label, ...props }) {
  return (
    <div className="space-y-1.5 flex-1">
      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
        {label}
      </label>
      <input
        {...props}
        className="w-full h-[58px] px-6 bg-white/50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:outline-none transition-all text-sm text-slate-700 font-bold placeholder:text-slate-200" />
    </div>
  );
}

const FloatingSelect = ({ label, options, ...props }) => (
  <div className="space-y-1.5 flex-1 relative">
    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
      {label}
    </label>
    <div className="relative">
      <select
        {...props}
        className="w-full h-[58px] px-6 bg-white/50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-blue-100 appearance-none cursor-pointer text-sm text-slate-700 font-bold transition-all"
      >
        <option value="" disabled>
          Choose option...
        </option>
        {options?.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      <ChevronDown
        size={16}
        className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
      />
    </div>
  </div>
);

const Counter = ({ label, value, onAdd, onSub }) => (
  <div className="flex-1 flex flex-col items-center gap-3">
    <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">
      {label}
    </span>
    <div className="flex items-center gap-6 bg-white/80 p-1.5 rounded-2xl border border-blue-50/50 shadow-sm">
      <button
        onClick={onSub}
        className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-50 text-slate-400 hover:text-red-500 hover:bg-red-50 transition-all"
      >
        <Minus size={16} strokeWidth={3} />
      </button>
      <span className="text-xl font-black text-slate-700 w-6 text-center tabular-nums">
        {value}
      </span>
      <button
        onClick={onAdd}
        className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-50 text-slate-400 hover:text-blue-500 hover:bg-blue-50 transition-all"
      >
        <Plus size={16} strokeWidth={3} />
      </button>
    </div>
  </div>
);

export default MultiStepForm;
