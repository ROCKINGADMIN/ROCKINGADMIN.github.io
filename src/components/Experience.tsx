
"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const jobs = [
  {
    company: "DisplaySweet India Pty Ltd",
    role: "System Engineer / DevOps Engineer",
    range: "Sep 2022 - Present",
    url: "#",
    descriptions: [
      "Manage and secure AWS cloud infrastructure supporting production and internal systems.",
      "Implement and maintain GitLab CI/CD pipelines; tune performance and improve deployment reliability.",
      "Deploy and troubleshoot Docker containers; support containerized services on AWS ECS.",
      "Manage infrastructure changes using CloudFormation; standardize and version infrastructure updates.",
      "Optimize AWS resources and costs; implement lifecycle and retention practices for snapshots and S3.",
      "Administer AWS security and visibility services: GuardDuty, CloudTrail, and CloudWatch.",
      "Configure WAF, firewall controls, CloudFront; manage domains and SSL/TLS certificates.",
      "Operate and optimize Amazon RDS PostgreSQL; support database reliability and performance.",
      "Run backup processes, snapshot lifecycle management, and disaster recovery drills (DR).",
      "Build automation using Lambda and EventBridge to remove manual tasks and reduce operational load.",
    ],
  },
  {
    company: "DisplaySweet Pty Ltd",
    role: "System Administrator / DevOps Consultant",
    range: "Jan 2022 - Sep 2022",
    url: "#",
    descriptions: [
      "Supported ISO and SOC compliance activities: security controls, operational readiness, and documentation.",
      "Managed IT-infrastructure security and policy governance; assisted with VAPT and patch management.",
      "Administered JumpCloud and SSO for centralized user management and access control.",
      "Worked with developers on DevOps-related issues, deployments, and environment troubleshooting.",
      "Maintained IT asset management and onboarding processes.",
    ],
  },
  {
    company: "MKCL",
    role: "System Administrator / Technical Support",
    range: "2014 - 2021",
    url: "#",
    descriptions: [
      "Administered Windows Server and Ubuntu environments for web and database applications.",
      "Managed IIS, Tomcat, and Nginx servers; performed hardening, tuning, monitoring, and log analysis.",
      "Administered MS SQL Server and MySQL; supported performance and operational troubleshooting.",
      "Supported AWS and Azure servers; assisted with backups and disaster recovery practices.",
      "Managed Active Directory, Group Policy, DHCP, WSUS, WDS, and file services.",
      "Provided Level 2/3 support for desktops, hardware, network/VOIP issues; maintained ticketing and documentation.",
    ],
  },
  {
    company: "Industrial Training Institutes",
    role: "Technical Instructor",
    range: "2012 - 2014",
    url: "#",
    descriptions: [
      "Delivered training on computer fundamentals, Windows, Ubuntu Linux, and MS Office.",
      "Installed and configured exam servers as per NIELIT guidelines; maintained LAN/WAN infrastructure.",
      "Performed hardware assembly, OS installation, antivirus setup, printer management, and basic networking.",
    ],
  },
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="jobs" className="max-w-3xl mx-auto py-24 px-6 md:px-12">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-lightest-slate whitespace-nowrap">
            <span className="text-green font-mono text-xl mr-2">02.</span>
            Where I've Worked
          </h2>
          <div className="h-[1px] w-full max-w-xs bg-lightest-navy/50"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          {/* Tab List */}
          <div className="flex md:flex-col overflow-x-auto md:overflow-visible relative border-b md:border-b-0 md:border-l border-lightest-navy font-mono text-sm max-w-max md:w-40">
            {jobs.map((job, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`px-4 py-3 md:py-2 md:pl-4 md:pr-0 border-b-2 md:border-b-0 md:border-l-2 text-left whitespace-nowrap transition-all hover:bg-light-navy/30 hover:text-green ${activeTab === i
                    ? "border-green text-green bg-light-navy/10"
                    : "border-transparent text-slate"
                  }`}
                style={{ marginBottom: -2, marginLeft: -2 }}
              >
                {job.company}
              </button>
            ))}
          </div>

          {/* Job Details */}
          <div className="py-2 w-full">
            <h3 className="text-xl font-bold text-lightest-slate">
              {jobs[activeTab].role}{" "}
              <span className="text-green">@ {jobs[activeTab].company}</span>
            </h3>
            <p className="font-mono text-sm text-slate mb-4 mt-1">
              {jobs[activeTab].range}
            </p>
            <ul className="space-y-2">
              {jobs[activeTab].descriptions.map((desc, i) => (
                <li key={i} className="flex items-start gap-2 text-slate text-base">
                  <span className="text-green mt-1.5 text-xs">▹</span>
                  {desc}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
