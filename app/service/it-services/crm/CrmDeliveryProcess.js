import React from 'react';

const CrmDeliveryProcess = () => {
    const steps = [
        {
            title: "Discovery & Requirements",
            desc: "We map your current lead-to-cash workflow, data sources, pain points, and success metrics. Then we define a realistic scope."
        },
        {
            title: "Selection or Architecture",
            desc: "We help select the best-fit platform or design custom architecture and modules based on your business priorities."
        },
        {
            title: "Configuration & Customization",
            desc: "We configure fields, pipelines, automation, roles, and build deep custom extensions and modules when needed."
        },
        {
            title: "Data Migration & Cleanup",
            desc: "We deduplicate, normalize, and migrate data securely from spreadsheets or legacy tools, validating records before go-live."
        },
        {
            title: "Testing, Training & Go-live",
            desc: "We rigorously test workflows, train users by role, and support your launch with a clear, seamless cutover plan."
        },
        {
            title: "Post-launch Optimization",
            desc: "After launch, we review adoption, refine dashboards, and provide ongoing support so your CRM keeps improving."
        }
    ];

    return (
        <section className="relative w-full py-24 px-6 md:px-12 lg:px-20 bg-[#020617] overflow-hidden border-t border-white/5">
            <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-gradient-to-r from-red-600/10 to-transparent rounded-full blur-[120px] pointer-events-none -translate-y-1/2"></div>

            <div className="max-w-[1400px] mx-auto relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
                        Our CRM <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">Delivery Process</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        We follow a structured approach that reduces risk and improves user adoption.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="relative bg-[#0c1322] border border-white/5 p-8 rounded-2xl group hover:border-white/20 transition-all duration-300">
                            {/* Step Number Background */}
                            <div className="absolute -top-6 -right-4 text-8xl font-black text-white/[0.03] group-hover:text-white/[0.05] transition-colors duration-300 select-none">
                                0{index + 1}
                            </div>

                            <div className="relative z-10">
                                <div className="text-red-500 font-bold mb-4 tracking-wider text-sm uppercase">Step {index + 1}</div>
                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors duration-300">{step.title}</h3>
                                <p className="text-gray-400 leading-relaxed text-[15px]">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CrmDeliveryProcess;
