import React from 'react';
import { FaDatabase, FaBolt, FaChartPie, FaExchangeAlt, FaUserCheck } from 'react-icons/fa';

const CrmWorkflows = () => {
    const benefits = [
        {
            icon: <FaDatabase className="text-3xl text-blue-500" />,
            title: "Single Source of Truth",
            description: "A centralized platform for leads, customers, deals, projects, and key communications."
        },
        {
            icon: <FaBolt className="text-3xl text-purple-500" />,
            title: "Automated Follow-ups",
            description: "Automated follow-ups and reminders so nothing slips through the cracks."
        },
        {
            icon: <FaChartPie className="text-3xl text-green-500" />,
            title: "Clear Dashboards",
            description: "Clear dashboards for pipeline, forecasting, and team performance metrics."
        },
        {
            icon: <FaExchangeAlt className="text-3xl text-orange-500" />,
            title: "Cleaner Handoffs",
            description: "Smoother transitions between sales, operations, finance, and support teams."
        },
        {
            icon: <FaUserCheck className="text-3xl text-red-500" />,
            title: "Better Customer Experience",
            description: "Faster response times and consistent context for every customer interaction."
        }
    ];

    return (
        <section className="relative w-full py-20 px-6 md:px-12 lg:px-20 bg-[#060b14] border-t border-white/5">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-blue-600/10 to-transparent rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-[1400px] mx-auto relative z-10">
                <div className="text-center md:text-left mb-16 max-w-3xl">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
                        What you get with a CRM <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                            built for your workflows
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        A CRM should not feel like "another system to update." It should remove friction from your day-to-day work. We focus on outcomes that matter:
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {benefits.map((item, index) => (
                        <div key={index} className="bg-white/[0.02] border border-white/5 p-8 rounded-2xl hover:bg-white/[0.04] transition-all duration-300 hover:-translate-y-1">
                            <div className="bg-black/40 w-16 h-16 rounded-xl flex items-center justify-center mb-6 border border-white/10">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                            <p className="text-gray-400 leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CrmWorkflows;
