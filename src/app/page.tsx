import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedin, FaUserCircle, FaTools, FaAws, FaInfinity, FaShieldAlt, FaServer, FaChartLine, FaStar, FaCubes, FaBriefcase, FaCertificate, FaGraduationCap } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen p-8 max-w-5xl mx-auto bg-slate-900 text-slate-100 font-sans">
      {/* Header */}
      <header className="text-center py-16 animate-fade-in">
        <h1 className="text-5xl font-extrabold mb-2 bg-gradient-to-r from-slate-50 to-slate-400 bg-clip-text text-transparent">WASIM A. R. SHEKH</h1>
        <h2 className="text-2xl text-sky-400 font-semibold mb-6 tracking-widest">DEVOPS ENGINEER</h2>
        <div className="inline-block px-4 py-2 border border-slate-700 rounded-full bg-slate-800/50 backdrop-blur-sm text-slate-400 text-sm mb-6">
          AWS | CI/CD | CLOUD SECURITY | AUTOMATION | ISO/SOC COMPLIANCE
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-4 text-sm text-slate-400">
          <span className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg hover:bg-white/10 hover:text-sky-400 transition-all cursor-default">
            <FaMapMarkerAlt /> Pune, Maharashtra, India
          </span>
          <a href="tel:+919145487741" className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg hover:bg-white/10 hover:text-sky-400 transition-all hover:-translate-y-1">
            <FaPhone /> +91 9145487741
          </a>
          <a href="mailto:vertualserver@gmail.com" className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg hover:bg-white/10 hover:text-sky-400 transition-all hover:-translate-y-1">
            <FaEnvelope /> vertualserver@gmail.com
          </a>
          <a href="https://linkedin.com/in/sheikh-wasim" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg hover:bg-white/10 hover:text-sky-400 transition-all hover:-translate-y-1">
            <FaLinkedin /> linkedin.com/in/sheikh-wasim
          </a>
        </div>
      </header>

      {/* Professional Summary */}
      <section className="mb-12 animate-fade-in-up delay-100">
        <h3 className="text-xl text-slate-100 mb-6 pb-2 border-b border-slate-700 flex items-center gap-3 uppercase tracking-wide">
          <FaUserCircle className="text-sky-400" /> Professional Summary
        </h3>
        <p className="text-slate-400 leading-relaxed">
          DevOps Engineer / System Engineer with 10+ years of experience across Linux/Windows administration, AWS cloud
          infrastructure, CI/CD, container deployments, monitoring, security hardening, and compliance (ISO/SOC). Skilled in
          optimizing cloud resources, automating routine operations using AWS services, improving deployment reliability with
          GitLab pipelines, and partnering with developers to deliver stable, secure, and scalable environments.
        </p>
      </section>

      {/* Tool Stack */}
      <section className="mb-12 animate-fade-in-up delay-200">
        <h3 className="text-xl text-slate-100 mb-6 pb-2 border-b border-slate-700 flex items-center gap-3 uppercase tracking-wide">
          <FaTools className="text-sky-400" /> Tool Stack
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-slate-800/50 border border-slate-700 rounded-xl hover:border-sky-400 hover:-translate-y-1 transition-all">
            <h4 className="flex items-center gap-2 text-sky-400 font-semibold mb-3"><FaAws /> AWS</h4>
            <p className="text-slate-400 text-sm">ECS, CloudFormation, RDS (PostgreSQL), S3, CloudWatch, CloudTrail, GuardDuty, WAF, CloudFront, Lambda, EventBridge, IAM</p>
          </div>
          <div className="p-6 bg-slate-800/50 border border-slate-700 rounded-xl hover:border-sky-400 hover:-translate-y-1 transition-all">
            <h4 className="flex items-center gap-2 text-sky-400 font-semibold mb-3"><FaInfinity /> CI/CD & Containers</h4>
            <p className="text-slate-400 text-sm">GitLab CI/CD, Jenkins, Docker</p>
          </div>
          <div className="p-6 bg-slate-800/50 border border-slate-700 rounded-xl hover:border-sky-400 hover:-translate-y-1 transition-all">
            <h4 className="flex items-center gap-2 text-sky-400 font-semibold mb-3"><FaShieldAlt /> Security & Compliance</h4>
            <p className="text-slate-400 text-sm">ISO/SOC, VAPT, Patch Management, IAM Policies, Audit Logging</p>
          </div>
          <div className="p-6 bg-slate-800/50 border border-slate-700 rounded-xl hover:border-sky-400 hover:-translate-y-1 transition-all">
            <h4 className="flex items-center gap-2 text-sky-400 font-semibold mb-3"><FaServer /> OS/Servers</h4>
            <p className="text-slate-400 text-sm">Ubuntu Linux, Windows Server; Nginx, IIS, Tomcat</p>
          </div>
        </div>
      </section>

      {/* Impact & Highlights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <section className="animate-fade-in-up delay-300">
          <h3 className="text-xl text-slate-100 mb-6 pb-2 border-b border-slate-700 flex items-center gap-3 uppercase tracking-wide">
            <FaChartLine className="text-sky-400" /> Impact Snapshot
          </h3>
          <p className="text-slate-400 leading-relaxed">
            DevOps + Cloud Ops on AWS (ECS/RDS/CloudFormation), CI/CD (GitLab), security (WAF/GuardDuty/CloudTrail) and
            automation (Lambda/EventBridge) - delivering faster releases, improved reliability, and cloud cost optimization.
          </p>
        </section>

        <section className="animate-fade-in-up delay-300">
          <h3 className="text-xl text-slate-100 mb-6 pb-2 border-b border-slate-700 flex items-center gap-3 uppercase tracking-wide">
            <FaStar className="text-sky-400" /> Selected DevOps Highlights
          </h3>
          <ul className="space-y-3">
            {[
              "Cut CI/CD build time from ~1 hour to ~20 minutes by optimizing GitLab CI/CD pipelines, improving release turnaround.",
              "Reduced incidents by ~60% through stronger monitoring/alerting using CloudWatch, proactive troubleshooting, and operational improvements.",
              "Managed ~22 servers, ~50 repositories, and ~30 deployments/week, ensuring stable access control and reliable delivery.",
              "Reduced AWS cost by ~40% by optimizing AWS resources and applying lifecycle strategies (snapshots/S3) to improve utilization and governance.",
              "Automated repeatable operational tasks using AWS Lambda + EventBridge, reducing manual effort and improving consistency.",
              "Improved security posture using GuardDuty, CloudTrail, and least-privilege IAM policies aligned with compliance expectations.",
              "Enhanced edge security and delivery using WAF, firewall controls, CloudFront, plus domain and SSL/TLS certificate management.",
              "Increased recovery readiness via backup strategy, snapshot lifecycle management, S3 lifecycle policies, and conducting DR drills."
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-slate-400 text-sm">
                <span className="text-sky-400 font-bold">▹</span> {item}
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* Core Skills */}
      <section className="mb-12 p-8 bg-slate-800/30 rounded-2xl border border-slate-700/50 animate-fade-in-up delay-300">
        <h3 className="text-xl text-slate-100 mb-6 pb-2 border-b border-slate-700 flex items-center gap-3 uppercase tracking-wide">
          <FaCubes className="text-sky-400" /> Core Skills
        </h3>
        <div className="space-y-3 text-sm">
          {[
            { label: "Cloud", value: "AWS, Azure, IBM Cloud, Multi-Cloud" },
            { label: "DevOps/Automation", value: "GitLab CI/CD, Jenkins, Docker, ECS, CloudFormation, Lambda, EventBridge, Shell Scripting" },
            { label: "Monitoring", value: "CloudWatch, Infrastructure & Application Monitoring, Logging/Alerting" },
            { label: "Security/Compliance", value: "ISO, SOC, VAPT, Patch Management, IAM, GuardDuty, CloudTrail, WAF, Firewalls" },
            { label: "Web/Delivery", value: "Nginx, IIS, Tomcat, CloudFront, SSL/TLS, Domain Management" },
            { label: "Databases", value: "RDS PostgreSQL, MySQL, MS SQL Server" },
            { label: "Operations", value: "Backup & DR, Snapshot Lifecycle, S3 Lifecycle, IT Asset Management, Documentation" }
          ].map((skill, i) => (
            <div key={i} className="grid grid-cols-1 sm:grid-cols-[200px_1fr] border-b border-slate-700/50 pb-2 last:border-0 last:pb-0">
              <span className="text-sky-400 font-semibold">{skill.label}:</span>
              <span className="text-slate-400">{skill.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Professional Experience */}
      <section className="mb-12 animate-fade-in-up delay-300">
        <h3 className="text-xl text-slate-100 mb-8 pb-2 border-b border-slate-700 flex items-center gap-3 uppercase tracking-wide">
          <FaBriefcase className="text-sky-400" /> Professional Experience
        </h3>

        <div className="space-y-12 border-l-2 border-slate-800 ml-3 pl-8">
          {[
            {
              role: "System Engineer / DevOps Engineer",
              company: "DisplaySweet India Pty Ltd (Remote)",
              date: "Sep 2022 – Present",
              details: [
                "Manage and secure AWS cloud infrastructure supporting production and internal systems.",
                "Implement and maintain GitLab CI/CD pipelines; tune performance and improve deployment reliability.",
                "Deploy and troubleshoot Docker containers; support containerized services on AWS ECS.",
                "Manage infrastructure changes using CloudFormation; standardize and version infrastructure updates.",
                "Optimize AWS resources and costs; implement lifecycle and retention practices for snapshots and S3.",
                "Administer AWS security and visibility services: GuardDuty, CloudTrail, and CloudWatch.",
                "Configure WAF, firewall controls, CloudFront; manage domains and SSL/TLS certificates.",
                "Operate and optimize Amazon RDS PostgreSQL; support database reliability and performance.",
                "Run backup processes, snapshot lifecycle management, and disaster recovery drills (DR).",
                "Build automation using Lambda and EventBridge to remove manual tasks and reduce operational load."
              ]
            },
            {
              role: "System Administrator / DevOps Consultant",
              company: "DisplaySweet Pty Ltd (Prahran, VIC, Australia)",
              date: "Jan 2022 – Sep 2022",
              details: [
                "Supported ISO and SOC compliance activities: security controls, operational readiness, and documentation.",
                "Managed IT-infrastructure security and policy governance; assisted with VAPT and patch management.",
                "Administered JumpCloud and SSO for centralized user management and access control.",
                "Worked with developers on DevOps-related issues, deployments, and environment troubleshooting.",
                "Maintained IT asset management and onboarding processes."
              ]
            },
            {
              role: "System Administrator / Technical Support",
              company: "MKCL (Pune, India)",
              date: "2014 – 2021",
              details: [
                "Administered Windows Server and Ubuntu environments for web and database applications.",
                "Managed IIS, Tomcat, and Nginx servers; performed hardening, tuning, monitoring, and log analysis.",
                "Administered MS SQL Server and MySQL; supported performance and operational troubleshooting.",
                "Supported AWS and Azure servers; assisted with backups and disaster recovery practices.",
                "Managed Active Directory, Group Policy, DHCP, WSUS, WDS, and file services.",
                "Provided Level 2/3 support for desktops, hardware, network/VOIP issues; maintained ticketing and documentation."
              ]
            },
            {
              role: "Technical Instructor",
              company: "Industrial Training Institutes, Govt. of Maharashtra (India)",
              date: "2012 – 2014",
              details: [
                "Delivered training on computer fundamentals, Windows, Ubuntu Linux, and MS Office.",
                "Installed and configured exam servers as per NIELIT guidelines; maintained LAN/WAN infrastructure.",
                "Performed hardware assembly, OS installation, antivirus setup, printer management, and basic networking."
              ]
            }
          ].map((job, i) => (
            <div key={i} className="relative group">
              <div className="absolute -left-[41px] top-1 w-5 h-5 bg-slate-900 border-2 border-sky-500 rounded-full group-hover:bg-sky-500 group-hover:shadow-[0_0_10px_rgba(14,165,233,0.5)] transition-all"></div>
              <div className="mb-2">
                <h4 className="text-xl font-bold text-slate-100">{job.role}</h4>
                <span className="text-sky-400 font-medium block">{job.company}</span>
                <span className="text-slate-500 text-sm italic">{job.date}</span>
              </div>
              <ul className="space-y-2">
                {job.details.map((detail, j) => (
                  <li key={j} className="text-slate-400 text-sm pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-sky-500">
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications & Education */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <section className="animate-fade-in-up delay-300">
          <h3 className="text-xl text-slate-100 mb-6 pb-2 border-b border-slate-700 flex items-center gap-3 uppercase tracking-wide">
            <FaCertificate className="text-sky-400" /> Certifications
          </h3>
          <ul className="space-y-2">
            {[
              "Microsoft Certified: Azure Data Fundamentals",
              "IBM Cloud Essentials V3",
              "Microsoft Certified Professional (MCP)",
              "Aviatrix Certified Engineer - Multi-Cloud Network Associate",
              "ACA: Cloud Computing, Cloud Security, Cloud Native",
              "Certified Network Security Specialist (ICSI)",
              "CI/CD with Jenkins",
              "Ensuring Network Security with Zeek (EC-Council)",
              "Practical Penetration Testing with BackBox (EC-Council)"
            ].map((cert, i) => (
              <li key={i} className="p-3 bg-white/5 rounded-lg border-l-2 border-sky-500 text-slate-400 text-sm hover:translate-x-1 hover:bg-white/10 transition-all">
                {cert}
              </li>
            ))}
          </ul>
        </section>

        <section className="animate-fade-in-up delay-300">
          <h3 className="text-xl text-slate-100 mb-6 pb-2 border-b border-slate-700 flex items-center gap-3 uppercase tracking-wide">
            <FaGraduationCap className="text-sky-400" /> Education
          </h3>
          <div className="space-y-6">
            <div className="pb-4 border-b border-slate-700/50 last:border-0">
              <h4 className="text-slate-100 font-semibold">B.Sc. (2012–2015)</h4>
              <p className="text-slate-400 text-sm mt-1">Shobhit University (Distance Education), Pune</p>
            </div>
            <div className="pb-4 border-b border-slate-700/50 last:border-0">
              <h4 className="text-slate-100 font-semibold">Diploma in Computer Technology (2009–2011)</h4>
              <p className="text-slate-400 text-sm mt-1">Maharashtra Board of Technical Education, India</p>
            </div>
            <div className="pb-4 border-b border-slate-700/50 last:border-0">
              <h4 className="text-slate-100 font-semibold">HSC (2006–2008)</h4>
              <p className="text-slate-400 text-sm mt-1">SSC–HSC Board, Pune, Maharashtra</p>
            </div>
          </div>
        </section>
      </div>

      <footer className="text-center pt-8 border-t border-slate-800 text-slate-500 text-sm">
        <p>&copy; 2026 Wasim A. R. Shekh. All rights reserved.</p>
      </footer>
    </main>
  );
}
