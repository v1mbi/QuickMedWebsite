import React,{useEffect,useState} from "react";
import MultiStepForm from "../../components/multiform";
import HealthInsuranceSteps from "../../components/steps";
import HealthTitle from "../../components/healthTitle";
import WhyChooseUsHealth from "../../components/whychooseusHealth";
import ProviderResources from "../../components/waitnservice";
import Footer from "../../components/footer";
import {
  Stethoscope,
  Wallet,
  Coins,
  Gift,
  Users,
  Briefcase,
  ShieldCheck,
} from "lucide-react";
import {getSanityData} from "../../functions/outsource_media";

export default function HealthInsurance() {
    const [limits, setLimits] = useState([]);
  
    useEffect(() => {
      const fetchLimits = async () => {
      try {
      setLimits(((await getSanityData('plans')).filter(plan => plan.variation === 'Health').map(item => {return item.allowance})).sort((a, b) => a - b).filter((value, index, self) => self.indexOf(value) === index));
      } catch (error) {
        console.error("Error fetching limits:", error);
      }};
      fetchLimits();
        document.title = "Health Insurance - QuickMed Connections";
    }, []);
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center ">
      <HealthTitle />
      <div className="flex flex-col space-y-20 lg:space-y-0 lg:flex-row items-center justify-center w-full py-2">
        <div className="w-11/12 lg:w-3/5">
          <MultiStepForm limits={limits} />
        </div>
        <div className="lg:w-2/5">
          <HealthInsuranceSteps />{" "}
        </div>
      </div>
      <WhyChooseUsHealth
        points={[
          {
            title: "Access to Top Doctors",
            desc: "Use the best private hospitals and see specialist doctors when you need them.",
            icon: <Stethoscope className="w-6 h-6 text-red-600" />,
          },
          {
            title: "Cheap Options",
            desc: "Get basic cover for as little as $0.75 a month, perfect for tight budgets.",
            icon: <Wallet className="w-6 h-6 text-red-600" />,
          },
          {
            title: "Currency Choice",
            desc: "Pay for your plan in USD or local currency (ZWG) depending on what works for you.",
            icon: <Coins className="w-6 h-6 text-red-600" />,
          },
          {
            title: "Money Back Rewards",
            desc: "Get cash back for low claims or a daily rate while in the hospital to help with costs.",
            icon: <ShieldCheck className="w-6 h-6 text-red-600" />,
          },
          {
            title: "Free Extras",
            desc: "Includes bonus features like funeral cover, wellness programs, or mobile data.",
            icon: <Gift className="w-6 h-6 text-red-600" />,
          },
          {
            title: "Made for Your Needs",
            desc: "Specific packages designed for growing families, students, or seniors.",
            icon: <Users className="w-6 h-6 text-red-600" />,
          },
          {
            title: "Corporate Benefits",
            desc: "Cheaper rates for work groups with easy paperwork handled by your company.",
            icon: <Briefcase className="w-6 h-6 text-red-600" />,
          },
        ]}
      />
      <ProviderResources />

    </div>
  );
}
