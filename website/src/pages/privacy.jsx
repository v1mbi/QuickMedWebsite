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
} from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="w-full bg-slate-50 min-h-screen py-4 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
        {/* Header Banner - Mainly Red with Blue Accents */}
        <div className="bg-gradient-to-r from-red-700 via-red-600 to-red-800 p-8 sm:p-12 text-white relative border-b-4 border-blue-600">
          <div className="absolute top-4 right-4 text-blue-200 opacity-20">
            <Shield size={120} />
          </div>
          <span className="bg-blue-600 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-blue-400">
            Legal Document
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold mt-4 tracking-tight">
            QuickMed Connections Privacy Policy
          </h1>
          <p className="text-red-100 mt-3 max-w-2xl text-base sm:text-lg leading-relaxed">
            At QuickMed Connections, we are committed to protecting your privacy
            and ensuring the security of your personal information. This Privacy
            Policy explains how we collect, use, and safeguard your information
            when you use our services.
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-10 space-y-10">
          {/* Section 1: Information We Collect */}
          <section className="group">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-red-50 text-red-600 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors duration-300">
                <FileText size={22} />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-red-700 group-hover:text-blue-700 transition-colors duration-300">
                Information We Collect
              </h2>
            </div>
            <p className="text-slate-600 mb-4 leading-relaxed">
              We may collect the following types of personal information from
              you:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-2">
              {[
                "Name",
                "Contact information (email address, phone number, address)",
                "Date of birth",
                "Medical information (relevant to the medical aid plan)",
                "Payment information (if applicable)",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 bg-red-50/40 p-3 rounded-lg border-l-4 border-blue-500"
                >
                  <div className="w-2 h-2 rounded-full bg-red-600"></div>
                  <span className="text-slate-700 text-sm font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <hr className="border-slate-100" />

          {/* Section 2: How We Use Your Information */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-red-50 text-red-600">
                <UserCheck size={22} />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-red-700">
                How We Use Your Information
              </h2>
            </div>
            <p className="text-slate-600 mb-4 leading-relaxed">
              We use your personal information to:
            </p>
            <ul className="space-y-2.5 pl-2">
              {[
                "Provide and manage your medical aid plan",
                "Process payments and claims",
                "Communicate with you about your plan and services",
                "Improve our services and customer experience",
                "Comply with legal and regulatory requirements",
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-slate-600 text-sm sm:text-base"
                >
                  <span className="text-blue-600 font-bold mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <hr className="border-slate-100" />

          {/* Section 3: How We Protect Your Information */}
          <section className="bg-gradient-to-br from-red-50/50 to-blue-50/30 p-6 rounded-xl border border-red-100">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-red-600 text-white shadow-md shadow-red-600/20">
                <Lock size={20} />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-red-700">
                How We Protect Your Information
              </h2>
            </div>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              We take the security of your personal information seriously. We
              implement appropriate technical and organizational measures to
              protect your information from unauthorized access, disclosure,
              alteration, or destruction.
            </p>
          </section>

          {/* Section 4: Disclosure of Your Information */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-red-50 text-red-600">
                <Users size={22} />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-red-700">
                Disclosure of Your Information
              </h2>
            </div>
            <p className="text-slate-600 mb-4 leading-relaxed">
              We may share your personal information with:
            </p>
            <ul className="space-y-3 pl-2">
              {[
                "Medical aid providers and healthcare professionals (with your consent)",
                "Third-party service providers who assist us in providing our services",
                "Regulatory authorities or law enforcement agencies if required by law",
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-slate-600 text-sm sm:text-base"
                >
                  <span className="inline-block w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <hr className="border-slate-100" />

          {/* Section 5: Your Rights */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-red-50 text-red-600">
                <Shield size={22} />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-red-700">
                Your Rights
              </h2>
            </div>
            <p className="text-slate-600 mb-4 leading-relaxed">
              You have the right to:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Access",
                  desc: "Access your personal information at any time.",
                },
                {
                  title: "Correct",
                  desc: "Correct any inaccuracies in your information.",
                },
                {
                  title: "Delete",
                  desc: "Request deletion of your information (subject to legal obligations).",
                },
                {
                  title: "Object / Restrict",
                  desc: "Object to or restrict the processing of your information.",
                },
              ].map((right, idx) => (
                <div
                  key={idx}
                  className="border border-slate-100 p-4 rounded-xl hover:border-blue-300 transition-colors bg-white shadow-sm"
                >
                  <h4 className="font-bold text-red-600 text-sm uppercase tracking-wider mb-1">
                    {right.title}
                  </h4>
                  <p className="text-slate-600 text-sm">{right.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 6: Contact Us Footer Card */}
          <section className="mt-12 bg-slate-900 text-white rounded-xl overflow-hidden shadow-lg border-t-4 border-blue-600">
            <div className="p-6 sm:p-8">
              <h3 className="text-xl font-bold text-red-400 mb-6 flex items-center gap-2">
                <Mail size={20} className="text-blue-400" /> Contact Us
              </h3>
              <p className="text-slate-300 text-sm sm:text-base mb-6">
                If you have any questions or concerns about our Privacy Policy
                or how we handle your personal information, please contact us
                at:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                {/* Left Column: Addresses */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin
                      className="text-red-500 mt-1 flex-shrink-0"
                      size={18}
                    />
                    <div>
                      <strong className="block text-slate-200">
                        UK Address:
                      </strong>
                      <span className="text-slate-400">
                        3 Wordsworth Road, Daventry, NN11 9BE, United Kingdom
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin
                      className="text-red-500 mt-1 flex-shrink-0"
                      size={18}
                    />
                    <div>
                      <strong className="block text-slate-200">
                        SA Address:
                      </strong>
                      <span className="text-slate-400">
                        Spaces Fourways, 128 Leslie Ave, Magaliessig,
                        Johannesburg, South Africa
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Column: Comms */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="text-blue-400 flex-shrink-0" size={18} />
                    <div>
                      <strong className="block text-slate-200">
                        UK Phone:
                      </strong>
                      <a
                        href="tel:+447859292790"
                        className="text-slate-400 hover:text-blue-300 transition-colors"
                      >
                        +44 7859 292790
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="text-blue-400 flex-shrink-0" size={18} />
                    <div>
                      <strong className="block text-slate-200">
                        SA Phone:
                      </strong>
                      <a
                        href="tel:+276543456765"
                        className="text-slate-400 hover:text-blue-300 transition-colors"
                      >
                        +27 6543 456765
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 pt-1">
                    <Mail className="text-blue-400 flex-shrink-0" size={18} />
                    <div>
                      <strong className="block text-slate-200">Email:</strong>
                      <a
                        href="mailto:info@quickmedconnections.com"
                        className="text-red-400 hover:text-red-300 font-medium transition-colors"
                      >
                        info@quickmedconnections.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Meta Bar */}
            <div className="bg-slate-950 px-6 py-4 text-xs text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-2">
              <span>
                © {new Date().getFullYear()} QuickMed Connections. All rights
                reserved.
              </span>
              <span>
                Last updated:{" "}
                <strong className="text-slate-400">12-05-24</strong>
              </span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
