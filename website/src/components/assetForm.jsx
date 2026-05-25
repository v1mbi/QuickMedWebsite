import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  Minus,
  Check,
  ShieldCheck,
  ChevronDown,
  Car,
  Home,
  Plane,
  Smartphone,
  Briefcase,
  Sprout,
  Beef,
  Monitor,
} from "lucide-react";
import { Textifier } from "../functions/textifier";
import { sendEmailNotification } from "../components/email";
import Swal from "sweetalert2";

const AssetQuoteForm = () => {
  // 1. Configuration & Constants (Moovah categories)
  const INSURANCE_TYPES = [
    {
      id: "business",
      label: "Business",
      icon: Briefcase,
      subtitle: "Commercial Protection",
    },
    {
      id: "mobile",
      label: "Mobile",
      icon: Smartphone,
      subtitle: "Handset & Gadget Cover",
    },
    {
      id: "livestock",
      label: "Livestock",
      icon: Beef,
      subtitle: "Herd & Pedigree Insurance",
    },
    {
      id: "crop",
      label: "Crop",
      icon: Sprout,
      subtitle: "Yield & Harvest Cover",
    },
    {
      id: "travel",
      label: "Travel",
      icon: Plane,
      subtitle: "Global Travel Protection",
    },
    {
      id: "vehicle",
      label: "Vehicle",
      icon: Car,
      subtitle: "Comprehensive Motor Quote",
    },
    {
      id: "electronic",
      label: "Electronic Equipment",
      icon: Monitor,
      subtitle: "IT & Hardware Assets",
    },
    {
      id: "home",
      label: "Home",
      icon: Home,
      subtitle: "Building & Property Cover",
    },
  ];

  const COUNTRY_CODES = [
    { code: "+263", country: "ZW", name: "Zimbabwe" },
    { code: "+27", country: "ZA", name: "South Africa" },
    { code: "+44", country: "GB", name: "United Kingdom" },
  ];

  // 2. State Management
  const [step, setStep] = useState(1);
  const [insuranceType, setInsuranceType] = useState("vehicle");
  const [submitted, setSubmitted] = useState(false);
  const [selectedDialCode, setSelectedDialCode] = useState("+263");

  const [formData, setFormData] = useState({
    // Step 1: Core Info
    country: "Zimbabwe",
    name: "",
    email: "",
    cellphone: "",
    allowance: "",
    sourceOfFunds: "",
    valueOfAssets: "",
    privacy: false,

    // Step 2: Dynamic Fields
    regNumber: "",
    vehicleValue: "",
    address: "",
    deviceModel: "",
    serialNumber: "",
    cropType: "",
    livestockCount: 1,
  });

  // 3. Progress Calculation
  const totalFields = 9;
  const filledCount = [
    formData.name,
    formData.email,
    formData.sourceOfFunds,
    formData.allowance,
    formData.valueOfAssets,
    formData.cellphone,
    formData.privacy,
    formData.regNumber ||
      formData.deviceModel ||
      formData.address ||
      formData.cropType,
  ].filter(Boolean).length;

  const progress = (filledCount / totalFields) * 100;

  // 4. Handlers
  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log("Asset Quote Submission:", {
      ...formData,
      type: insuranceType,
    });
    Swal.fire({
      title: "Sending...",
      didOpen: () => {
        Swal.showLoading();
      },
      allowOutsideClick: false,
    });

    try {
      await sendEmailNotification(
        "Asset Insurance Application Submission",
        "Asset Insurance",
        Textifier({
          ...formData,
          type: insuranceType,
        }),
      );
    } catch (error) {
      console.error(error);
    }
  };

  const currentType = INSURANCE_TYPES.find((t) => t.id === insuranceType);

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 overflow-hidden">
      <motion.div
        initial={{ opacity: 1, y: 50, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-3xl bg-white/80 backdrop-blur-3xl border border-white/50 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] rounded-[3rem] overflow-hidden"
      >
        {/* Progress Bar */}
        <div className="absolute top-0 left-0 w-full h-2 bg-slate-100/50 z-20">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-400"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ type: "spring", stiffness: 40, damping: 15 }}
          />
        </div>

        <div className="p-4 sm:p-12 pt-14">
          <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-10">
            <div>
              <h1 className="text-xl sm:text-3xl font-jakarta font-black text-slate-800 tracking-tight leading-tight">
                {currentType.label} Quote
              </h1>
              <p className="text-blue-500 font-bold text-[0.45rem] sm:text-[10px] uppercase tracking-[0.2em] mt-1">
                Asset Portal • {currentType.subtitle}
              </p>
            </div>

            <div className="relative flex items-center bg-slate-200/50 p-1 rounded-2xl w-44 h-12 border border-slate-100">
              <motion.div
                className="absolute h-10 w-[calc(50%-4px)] bg-white rounded-xl shadow-sm"
                animate={{ x: formData.country === "Zimbabwe" ? 0 : "100%" }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
              <button
                onClick={() => handleInputChange("country", "Zimbabwe")}
                className={`relative z-10 flex-1 text-[10px] font-black transition-colors duration-500 ${formData.country === "Zimbabwe" ? "text-blue-600" : "text-slate-400"}`}
              >
                🇿🇼 ZIM
              </button>
              <button
                onClick={() => handleInputChange("country", "South Africa")}
                className={`relative z-10 flex-1 text-[10px] font-black transition-colors duration-500 ${formData.country === "South Africa" ? "text-blue-600" : "text-slate-400"}`}
              >
                🇿🇦 RSA
              </button>
            </div>
          </header>

          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.div
                key={`${step}-${insuranceType}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
              >
                {step === 1 ? (
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-slate-100/60 p-2 rounded-[2.5rem] mb-8">
                      {INSURANCE_TYPES.map((type) => {
                        const Icon = type.icon;
                        const isSelected = insuranceType === type.id;
                        return (
                          <button
                            key={type.id}
                            onClick={() => setInsuranceType(type.id)}
                            className={`flex flex-col items-center py-4 rounded-2xl transition-all gap-2 ${isSelected ? "bg-white text-blue-600 shadow-md scale-105" : "text-slate-400 hover:text-slate-600"}`}
                          >
                            <Icon size={20} />
                            <span className="text-[9px] font-black uppercase text-center tracking-tighter">
                              {type.label}
                            </span>
                          </button>
                        );
                      })}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FloatingInput
                        label="Full Name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                      />
                      <FloatingInput
                        label="Email Address"
                        type="email"
                        placeholder="john@domain.com"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FloatingSelect
                        label="Source of Funds"
                        options={["Salary", "Business", "Savings"]}
                        value={formData.sourceOfFunds}
                        onChange={(e) =>
                          handleInputChange("sourceOfFunds", e.target.value)
                        }
                      />
                      <FloatingSelect
                        label="Payout Limit (USD)"
                        options={[
                          "100",
                          "200",
                          "500",
                          "2000",
                          "5000",
                          "10000",
                          "20000",
                          "40000",
                          "50000+",
                        ]}
                        value={formData.allowance}
                        onChange={(e) =>
                          handleInputChange("allowance", e.target.value)
                        }
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FloatingInput
                        label="Total Asset Value ($)"
                        type="number"
                        placeholder="15000"
                        value={formData.valueOfAssets}
                        onChange={(e) =>
                          handleInputChange("valueOfAssets", e.target.value)
                        }
                      />
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
                          Contact Number
                        </label>
                        <div className="flex gap-2">
                          <select
                            value={selectedDialCode}
                            onChange={(e) =>
                              setSelectedDialCode(e.target.value)
                            }
                            className="w-24 sm:w-20  md:w-24 h-[58px] bg-white/50 border border-slate-100 rounded-2xl text-base md:text-xs font-bold px-2 appearance-none cursor-pointer duration-500 transition-all focus:ring-4 focus:ring-blue-100 focus:outline-none"
                          >
                            {COUNTRY_CODES.map((c) => (
                              <option key={c.code} value={c.code}>
                                {c.country} {c.code}
                              </option>
                            ))}
                          </select>
                          <input
                            type="tel"
                            placeholder="771234567"
                            value={formData.cellphone}
                            onChange={(e) =>
                              handleInputChange("cellphone", e.target.value)
                            }
                            className="flex-1 w-full h-[58px] px-4 bg-white/50 border border-slate-100 rounded-2xl text-base md:text-sm font-bold focus:ring-4 focus:ring-blue-100 focus:outline-none transition-all duration-500"
                          />
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => setStep(2)}
                      className="w-full py-5 bg-blue-600 text-white rounded-[2rem] font-black text-sm uppercase tracking-widest shadow-xl hover:bg-blue-700 hover:shadow-blue-200 transition-all duration-500"
                    >
                      Next Details
                    </button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {insuranceType === "vehicle" && (
                        <>
                          <FloatingInput
                            label="Reg Number"
                            placeholder="AGE-1234"
                            value={formData.regNumber}
                            onChange={(e) =>
                              handleInputChange("regNumber", e.target.value)
                            }
                          />
                          <FloatingInput
                            label="Market Value"
                            type="number"
                            value={formData.vehicleValue}
                            onChange={(e) =>
                              handleInputChange("vehicleValue", e.target.value)
                            }
                          />
                        </>
                      )}
                      {(insuranceType === "mobile" ||
                        insuranceType === "electronic") && (
                        <>
                          <FloatingInput
                            label="Make & Model"
                            placeholder="iPhone 15 / MacBook"
                            value={formData.deviceModel}
                            onChange={(e) =>
                              handleInputChange("deviceModel", e.target.value)
                            }
                          />
                          <FloatingInput
                            label="Serial / IMEI"
                            placeholder="SN-123456"
                            value={formData.serialNumber}
                            onChange={(e) =>
                              handleInputChange("serialNumber", e.target.value)
                            }
                          />
                        </>
                      )}
                      {(insuranceType === "business" ||
                        insuranceType === "home") && (
                        <FloatingInput
                          label="Physical Address"
                          placeholder="123 Samora Machel Ave"
                          value={formData.address}
                          onChange={(e) =>
                            handleInputChange("address", e.target.value)
                          }
                        />
                      )}
                      {insuranceType === "crop" && (
                        <FloatingSelect
                          label="Crop Type"
                          options={["Maize", "Tobacco", "Wheat"]}
                          value={formData.cropType}
                          onChange={(e) =>
                            handleInputChange("cropType", e.target.value)
                          }
                        />
                      )}
                      {insuranceType === "livestock" && (
                        <Counter
                          label="Herd Count"
                          value={formData.livestockCount}
                          onAdd={() =>
                            handleInputChange(
                              "livestockCount",
                              formData.livestockCount + 1,
                            )
                          }
                          onSub={() =>
                            handleInputChange(
                              "livestockCount",
                              Math.max(1, formData.livestockCount - 1),
                            )
                          }
                        />
                      )}
                    </div>

                    <div className="pt-4 border-t border-slate-100">
                      <label className="flex items-start gap-4 cursor-pointer group">
                        <div
                          className={`mt-0.5 w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all duration-500 ${formData.privacy ? "bg-blue-600 border-blue-600" : "bg-white border-slate-200"}`}
                        >
                          <input
                            type="checkbox"
                            className="hidden"
                            checked={formData.privacy}
                            onChange={(e) =>
                              handleInputChange("privacy", e.target.checked)
                            }
                          />
                          <AnimatePresence>
                            {formData.privacy && (
                              <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.5 }}
                                transition={{ duration: 0.5 }}
                              >
                                <Check size={16} className="text-white" />
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                        <span className="text-[11px] text-slate-500 font-medium italic">
                          I authorize this request to be processed under the
                          current Data Protection terms.
                        </span>
                      </label>
                    </div>

                    <div className="flex gap-3">
                      <button
                        onClick={() => setStep(1)}
                        className="px-8 py-5 text-slate-400 font-black text-xs uppercase hover:text-slate-600 transition-colors duration-500"
                      >
                        Back
                      </button>
                      <button
                        disabled={!formData.privacy}
                        onClick={handleSubmit}
                        className={`flex-1 py-5 rounded-[2rem] font-black text-sm uppercase text-white shadow-2xl transition-all duration-500 ${!formData.privacy ? "bg-slate-200" : "bg-blue-600 hover:bg-blue-700"}`}
                      >
                        Submit Quote
                      </button>
                    </div>
                  </div>
                )}
              </motion.div>
            ) : (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-center py-6"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 0.3,
                    duration: 1,
                    type: "spring",
                    stiffness: 50,
                    damping: 15,
                  }}
                  className="w-20 h-20 bg-blue-50 text-blue-600 rounded-3xl mb-6 mx-auto flex items-center justify-center"
                >
                  <ShieldCheck size={40} />
                </motion.div>
                <h2 className="text-3xl font-black text-slate-800 tracking-tight">
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

// Sub-components optimized with text-base mobile defaults (16px) to eliminate Safari dynamic zoom thresholds
const FloatingInput = ({ label, ...props }) => (
  <div className="space-y-1.5 flex-1">
    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
      {label}
    </label>
    <input
      {...props}
      className="w-full h-[58px] px-5 bg-white/50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:outline-none transition-all duration-500 text-base md:text-sm font-bold text-slate-700"
    />
  </div>
);

const FloatingSelect = ({ label, options, ...props }) => (
  <div className="space-y-1.5 flex-1 relative">
    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
      {label}
    </label>
    <div className="relative">
      <select
        {...props}
        className="w-full h-[58px] px-5 bg-white/50 border border-slate-100 rounded-2xl appearance-none cursor-pointer text-base md:text-sm font-bold text-slate-700 transition-all duration-500 focus:ring-4 focus:ring-blue-100 focus:outline-none"
      >
        <option value="" disabled hidden>
          Select...
        </option>
        {options.map((o) => (
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
  <div className="flex-1 flex flex-col items-center gap-2 bg-slate-50/50 p-4 rounded-2xl border border-slate-100/60 duration-500 transition-all">
    <span className="text-[9px] font-black text-slate-400 uppercase">
      {label}
    </span>
    <div className="flex items-center gap-6 bg-white p-1.5 rounded-xl border border-slate-100 shadow-sm">
      <button
        onClick={onSub}
        className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-50 text-slate-400 hover:text-red-500 transition-all duration-500"
      >
        <Minus size={14} />
      </button>
      <span className="text-base font-black text-slate-700">{value}</span>
      <button
        onClick={onAdd}
        className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-50 text-slate-400 hover:text-blue-500 transition-all duration-500"
      >
        <Plus size={14} />
      </button>
    </div>
  </div>
);

export default AssetQuoteForm;
