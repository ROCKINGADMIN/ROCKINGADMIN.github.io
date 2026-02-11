
"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const jobs = [
  {
    company: "LetsReflect",
    role: "System Administrator",
    range: "Nov 2022 - Present",
    url: "#",
    descriptions: [
      "Managed Linux-based production infrastructure supporting multiple applications, improving system availability.",
      "Designed and implemented CI/CD pipelines using GitHub Actions, reducing manual deployment effort.",
      "Containerized applications using Docker, improving deployment consistency across environments.",
      "Built and administered Kubernetes clusters using kubeadm, Helm, and Argo CD.",
      "Implemented centralized monitoring using Prometheus, Grafana, Loki, and Uptime Kuma.",
      "Administered MySQL and PostgreSQL databases including backup, restoration, and performance tuning.",
      "Configured secure reverse proxy architectures using Nginx and Nginx Proxy Manager with SSL.",
      "Automated infrastructure provisioning using Ansible and Proxmox VM templates.",
      "Implemented HashiCorp Vault for centralized secrets management integrated with CI/CD pipelines.",
    ],
  },
  {
    company: "MKCL",
    role: "Information Technology Fellow",
    range: "Sep 2018 - Oct 2022",
    url: "#",
    descriptions: [
      "Provided technical support and troubleshooting for Linux and Windows environments.",
      "Managed Apache, Nginx, Tomcat, and IIS web servers to ensure optimized performance.",
      "Administered Active Directory and Group Policy for centralized access control.",
      "Managed MSSQL, MySQL, MongoDB, and MariaDB databases with replication.",
      "Automated deployment and operational workflows using Jenkins, Ansible, and Rundeck.",
      "Performed log analysis and resolved application performance and crash issues.",
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
            Where I’ve Worked
          </h2>
          <div className="h-[1px] w-full max-w-xs bg-lightest-navy/50"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          {/* Tab List */}
          <div className="flex md:flex-col overflow-x-auto md:overflow-visible relative border-b md:border-b-0 md:border-l border-lightest-navy font-mono text-sm max-w-max md:w-32">
            {jobs.map((job, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`px-4 py-3 md:py-2 md:pl-4 md:pr-0 border-b-2 md:border-b-0 md:border-l-2 text-left whitespace-nowrap transition-all hover:bg-light-navy/30 hover:text-green ${
                  activeTab === i
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
