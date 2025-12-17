import React from "react";
import { FaBriefcase } from "react-icons/fa";

const works = [
    {
        role: "IT Support",
        company: "On-site & Office Environment",
        period: "2024 – Present",
        description:
            "Provided on-site IT support for office and gaming systems. Handled Windows troubleshooting, printer and folder sharing, network setup using MikroTik, CCTV configuration, and basic hardware maintenance.",
        responsibilities: [
            "Installed and configured Windows (drivers, updates, system reset)",
            "Shared network printers and folders for finance and office departments",
            "Configured MikroTik routers (DHCP, NAT, Hotspot, basic firewall)",
            "Set up and tested CCTV systems using SADP and iVMS-4200",
            "Troubleshot hardware issues (RAM upgrade, boot issues, display ports)",
            "Provided daily IT support and solved issues independently",
        ],
        tech: ["Windows", "MikroTik", "Networking", "CCTV", "Printers", "IT Support"],
    },
];

const Works = () => {
    return (
        <section id="works" className="py-24 px-8 md:px-20">
            {/* Title */}
            <h2
                data-aos="fade-up"
                className="text-4xl md:text-5xl font-bold text-center mb-20"
            >
                Work <span className="text-accent">Experience</span>
            </h2>

            {/* Timeline */}
            <div className="max-w-4xl mx-auto space-y-20 relative">
                {/* Vertical line */}
                <div className="absolute left-3 top-0 bottom-0 w-[2px] bg-gray-300 dark:bg-gray-700"></div>

                {works.map((work, index) => (
                    <div
                        key={index}
                        data-aos="fade-up"
                        data-aos-delay={index * 150}
                        className="relative pl-16"
                    >
                        {/* Dot */}
                        <div className="absolute left-0 top-2 w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white">
                            <FaBriefcase />
                        </div>

                        {/* Content */}
                        <div className="flex flex-col gap-2 text-sm text-gray-700 dark:text-gray-300">
                            <h3 className="text-2xl font-semibold">
                                {work.role}
                            </h3>

                            <span className="text-sm text-gray-500 whitespace-nowrap">
                                {work.company} • {work.period}
                            </span>
                        </div>

                        <p className="mb-4 leading-relaxed">
                            {work.description}
                        </p>

                        {/* Responsibilities */}
                        <ul className="list-disc list-inside space-y-1 mb-4">
                            {work.responsibilities.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>

                        {/* Tech stack */}
                        <div className="flex flex-wrap gap-2">
                            {work.tech.map((t, i) => (
                                <span
                                    key={i}
                                    className="text-xs px-3 py-1 rounded-full border border-gray-400 dark:border-gray-600"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Works;
