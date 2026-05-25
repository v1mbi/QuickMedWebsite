import React from "react";
import {
  Shield,
  FileText,
  Lock,
  Users,
  UserCheck,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="w-full bg-slate-50/50 min-h-screen py-16 px-4 sm:px-6 lg:px-8 font-sans antialiased text-slate-600">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
        {/* Elegant Minimalist Header */}
        <div className="relative p-8 sm:p-12 border-b border-slate-100 bg-gradient-to-b from-slate-50/50 to-white">
          <div className="absolute top-8 right-8 text-rose-600/5 pointer-events-none">
            <Shield size={140} strokeWidth={1} />
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold tracking-wide uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
            Regulatory Compliance
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-none mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm font-medium text-rose-700 tracking-wide uppercase mb-6">
            QuickMed Connections
          </p>
          <p className="text-slate-500 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
            At QuickMed Connections, we are committed to protecting your privacy
            and ensuring the security of your personal information. This policy
            explains how we collect, use, and safeguard your data.
          </p>
        </div>

        {/* Content Body */}
        <div className="p-8 sm:p-12 space-y-12">
          {/* Section 1: Information We Collect */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <FileText size={18} className="text-rose-600" />
              <h2 className="text-lg font-bold text-slate-900 tracking-tight">
                1. Information We Collect
              </h2>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              In order to provide our comprehensive services, we may collect the
              following categories of personal metrics:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
              {[
                "Full Name & Identification",
                "Contact Info (Email, Phone, Address)",
                "Date of Birth",
                "Medical Aid Plan Information",
                "Secure Payment Details",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-50 border border-slate-100/80 hover:border-slate-200 transition-all duration-200"
                >
                  <ArrowRight
                    size={14}
                    className="text-blue-500 flex-shrink-0"
                  />
                  <span className="text-slate-700 text-sm font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Section 2: How We Use Your Information */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <UserCheck size={18} className="text-rose-600" />
              <h2 className="text-lg font-bold text-slate-900 tracking-tight">
                2. Operational Data Usage
              </h2>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Your data allows us to maintain a secure and functional ecosystem.
              Specifically, we process information to:
            </p>
            <ul className="space-y-3 pt-1">
              {[
                "Provide, operate, and manage your custom medical aid plan",
                "Seamlessly process active payments and legal claims",
                "Communicate time-sensitive updates regarding your plan status",
                "Continuously optimize our UI workflow and customer experience",
                "Comply fully with regional healthcare regulatory frameworks",
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-slate-600 text-sm"
                >
                  <span className="flex-shrink-0 w-5 h-5 rounded-md bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs mt-0.5">
                    ✓
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 3: How We Protect Your Information */}
          <section className="p-6 rounded-2xl bg-rose-50/40 border border-rose-100/70 relative overflow-hidden">
            <div className="absolute -right-4 -bottom-4 text-rose-200/20">
              <Lock size={80} />
            </div>
            <div className="flex items-center gap-3 mb-3">
              <Lock size={18} className="text-rose-700" />
              <h2 className="text-base font-bold text-slate-900 tracking-tight">
                Data Protection & Infrastructure Security
              </h2>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed max-w-2xl">
              Security is foundational to our operations. We implement advanced
              technical and organizational guardrails to ensure your personal
              documentation remains entirely immune to unauthorized access,
              breach, alteration, or loss.
            </p>
          </section>

          {/* Section 4: Disclosure of Your Information */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <button className="text-rose-600">
                <Users size={18} />
              </button>
              <h2 className="text-lg font-bold text-slate-900 tracking-tight">
                3. Authorized Data Sharing
              </h2>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              We do not sell your personal data. Sharing only occurs under
              strict compliance protocols with the following entities:
            </p>
            <div className="space-y-2 pt-1">
              {[
                {
                  label: "Providers",
                  text: "Medical aid operators and certified healthcare professionals (strictly with your explicit consent).",
                },
                {
                  label: "Subprocessors",
                  text: "Vetted third-party service providers bound by NDAs who assist our core technical architecture.",
                },
                {
                  label: "Legal",
                  text: "Verified regulatory bodies or law enforcement strictly when mandated by statutory law.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="text-sm leading-relaxed text-slate-600 flex items-start gap-2"
                >
                  <span className="font-semibold text-slate-900 min-w-[90px] inline-block text-xs uppercase tracking-wider text-blue-600 mt-1">
                    {item.label} —
                  </span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5: Your Rights */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <Shield size={18} className="text-rose-600" />
              <h2 className="text-lg font-bold text-slate-900 tracking-tight">
                4. User Rights & Data Autonomy
              </h2>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Under modern privacy standards, you maintain absolute control over
              your global footprint:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {[
                {
                  title: "Full Information Access",
                  desc: "Request absolute transparency into the exact data metrics we securely archive.",
                },
                {
                  title: "Rectification & Updates",
                  desc: "Instantly update or correct old or inaccurate information records.",
                },
                {
                  title: "Right to Erasure",
                  desc: "Request data deletion, subject to overriding financial or legal compliance duties.",
                },
                {
                  title: "Processing Restrictions",
                  desc: "Object to specific data operations or revoke previously granted consent.",
                },
              ].map((right, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-slate-100 bg-slate-50/30 hover:bg-white hover:shadow-sm hover:border-slate-200 transition-all duration-200"
                >
                  <h4 className="font-bold text-slate-900 text-sm mb-1">
                    {right.title}
                  </h4>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    {right.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Premium Minimalist Contact Footer */}
          <section className="pt-8 border-t border-slate-100">
            <div className="bg-slate-950 text-slate-400 rounded-2xl p-6 sm:p-8 relative overflow-hidden">
              <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                Corporate Registry & Support
              </h3>
              <p className="text-xs text-slate-400 mb-6 max-w-xl">
                For formal inquiries regarding legal infrastructure, algorithmic
                processing, or to execute your user data rights, reach our
                global compliance office:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs border-t border-slate-800/80 pt-6">
                {/* Physical Hubs */}
                <div className="space-y-4">
                  <div className="flex items-start gap-2.5">
                    <MapPin
                      className="text-rose-500 mt-0.5 flex-shrink-0"
                      size={14}
                    />
                    <div>
                      <strong className="text-slate-200 block mb-0.5">
                        United Kingdom
                      </strong>
                      <span className="text-slate-400 font-light">
                        3 Wordsworth Road, Daventry, NN11 9BE
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <MapPin
                      className="text-rose-500 mt-0.5 flex-shrink-0"
                      size={14}
                    />
                    <div>
                      <strong className="text-slate-200 block mb-0.5">
                        South Africa
                      </strong>
                      <span className="text-slate-400 font-light">
                        Spaces Fourways, 128 Leslie Ave, Magaliessig, JHB
                      </span>
                    </div>
                  </div>
                </div>

                {/* Comms Network */}
                <div className="space-y-3 md:pl-4 md:border-l border-slate-800/80">
                  <div className="flex items-center gap-2.5">
                    <Phone className="text-blue-400 flex-shrink-0" size={14} />
                    <span className="text-slate-300 font-light">
                      UK:{" "}
                      <a
                        href="tel:+447859292790"
                        className="text-slate-400 hover:text-white transition-colors ml-1"
                      >
                        +44 7859 292790
                      </a>
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="text-blue-400 flex-shrink-0" size={14} />
                    <span className="text-slate-300 font-light">
                      SA:{" "}
                      <a
                        href="tel:+276543456765"
                        className="text-slate-400 hover:text-white transition-colors ml-1"
                      >
                        +27 6543 456765
                      </a>
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5 pt-2 border-t border-slate-900">
                    <Mail className="text-blue-400 flex-shrink-0" size={14} />
                    <a
                      href="mailto:info@quickmedconnections.com"
                      className="text-rose-400 font-medium hover:text-rose-300 transition-colors"
                    >
                      info@quickmedconnections.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Meta Stamp */}
            <div className="mt-6 flex flex-col sm:flex-row justify-between items-center text-[11px] font-medium text-slate-400 px-2 gap-2">
              <span>
                © {new Date().getFullYear()} QuickMed Connections Ltd.
              </span>
              <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md text-[10px]">
                Revision Date: 12-05-24
              </span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
