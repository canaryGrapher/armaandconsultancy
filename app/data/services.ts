const services = [
    {
        name: "Integration & Automation",
        KPIs: [
            {
                name: "Automated VM",
                targets: [
                    "Integration of CMDB with VM tools to automate asset-discovery and identification of vulnerabilities.",
                    "Integration of VM tools with Ticketing tools to automate the creation of tickets for remediation tracking and governance."
                ]
            },
            {
                name: "SOAR",
                targets: [
                    "Automating incident triaging and response to reduce the time it takes to detect and mitigate threats."
                ]
            },
            {
                name: "DevSecOps",
                targets: [
                    "Integration of application security tools in the CI/CD pipeline to automate the identification of security vulnerabilities in the DevOps pipeline and ensure a safe and sane product release."
                ]
            },
            {
                name: "SIEM",
                targets: [
                    "Prioritization of alerts and integration with SOAR tools for automatic response workflows."
                ]
            },
            {
                name: "IAM",
                targets: [
                    "Automating user provisioning, SSO, RBAC, and adaptive authentication.",
                    "Automates the enforcement of zero trust principles, such as network segmentation and identity verification."
                ]
            },
            {
                name: "Cloud Security Automation",
                targets: [
                    "Automating security tasks such as configuration checks, encryption, and threat monitoring."
                ]
            }
        ]
    },
    {
        name: "Operations & Transfer",
        KPIs: [
            {
                name: "Operations & Transfer",
                targets: [
                    "Cut-over",
                    "Follow SOPs",
                    "Critical Tasks, etc.",
                    "KPIs",
                    "Optimize BAU",
                    "Continuous Improvement",
                    "Strategic Governance"
                ]
            }
        ]
    },
    {
        name: "Transition & Transformation/Implementation",
        KPIs: [
            {
                name: "Transition",
                targets: [
                    "Understand AS-IS ecosystem of P-P-T",
                    "Transfer of current BAU and critical tasks.",
                    "BAU",
                    "Rapid Gap-Analysis",
                    "Recommendation & Roadmap"
                ]
            },
            {
                name: "Transformation/Implementation",
                targets: [
                    "Agreement on Gaps and proposed recommendations (P-P-T)",
                    "Migrate/Deploy/Implement/Establish",
                    "Create SOPs, Run-books, Cook-books, KPIs, etc.",
                    "Hand-over to Operations (Parallel-run) → Cut-over"
                ]
            }
        ]
    },
    {
        name: "Consulting",
        KPIs: [
            {
                name: "Security Consulting",
                targets: [
                    "Cybersecurity Strategic Consulting: Long & Short-term Roadmap Development",
                    "Secure Architecture Design",
                    "Cloud Security Consulting"
                ]
            },
            {
                name: "GRC Consulting",
                targets: [
                    "InfoSec Policy, Process & Framework Development",
                    "Risk Management",
                    "Regulatory Compliance Support (GDPR, NIST, PCI, ISAW, etc.)",
                    "Third party Risk Assessments",
                    "Audit & Certification Support"
                ]
            },
            {
                name: "VM + PT Consulting",
                targets: [
                    "CMDB",
                    "Vulnerability Scanning",
                    "Patch Management (Remediation)",
                    "Penetration Testing (Red Team & Blue Team)"
                ]
            },
            {
                name: "Application Security Consulting",
                targets: [
                    "Secure SDLC Consulting",
                    "Code Review (SAST)",
                    "Web App Testing (DAST)",
                    "OSS/SA",
                    "API Security",
                    "Mobile App Security",
                    "Assessment of system hardening benchmarks CIS"
                ]
            },
            {
                name: "Data Security Consulting",
                targets: [
                    "Data Encryption",
                    "Data Privacy (Masking, Redaction, De-identification, etc.)",
                    "Data Discovery",
                    "Data Classification",
                    "Data Access Governance",
                    "Digital Rights Management",
                    "DLP"
                ]
            },
            {
                name: "IAM Consulting",
                targets: [
                    "IAM Policy",
                    "RBAC, DAC, MAC, Rules-BAC",
                    "SSO, MFA, Passwordless",
                    "IGA",
                    "PAM",
                    "ZINA"
                ]
            },
            {
                name: "SOC Consulting",
                targets: [
                    "Developing playbooks for incident mgmt.",
                    "Cyber-Forensics Consulting",
                    "Threat Intelligence Consulting: Analyzing & recommending steps for mitigating emerging threats"
                ]
            },
            {
                name: "Specialized Consulting Services",
                targets: [
                    "PCI-DSS Consulting",
                    "IOT Security Consulting",
                    "Cloud Security Consulting",
                    "AI Security Consulting"
                ]
            }
        ]
    },
    {
        name: "Cybersecurity Assessment & Assurance",
        KPIs: [
            {
                name: "Security Testing",
                targets: [
                    "Vulnerability Assessments",
                    "Pen Testing (Apps, OS, NW) + BIA",
                    "Cybersecurity Architecture Assessment",
                    "Firewall Assurance",
                    "Threat Modelling"
                ]
            }
        ]
    },
    {
        name: "Compliance Assessments",
        KPIs: [
            {
                name: "Security Compliance",
                targets: [
                    "Security Audits: ISMS, GDPR, NIST, SOC2, etc.",
                    "Cybersecurity Policy and Process Review",
                    "GAP Analysis (regulatory/industry standards)"
                ]
            }
        ]
    },
    {
        name: "Cyber Risk & Resilience Assessments",
        KPIs: [
            {
                name: "Business Risk",
                targets: [
                    "Risk Assessments (Business operations)",
                    "Testing Business Continuity and DR strategies"
                ]
            }
        ]
    },
    {
        name: "Systems & Application Security Assurance",
        KPIs: [
            {
                name: "Application Security Testing",
                targets: [
                    "Code Review (SAST)",
                    "Web App Testing (DAST)",
                    "OSS/CSA",
                    "Assessment of system hardening benchmarks CIS"
                ]
            }
        ]
    },
    {
        name: "Vendor Risk Assessment",
        KPIs: [
            {
                name: "Vendor Security",
                targets: [
                    "Assessing Security controls and posture of: Vendors and Distributors",
                    "Extended supply chains"
                ]
            }
        ]
    },
    {
        name: "Specialized Assurance Services",
        KPIs: [
            {
                name: "Advanced Security Testing",
                targets: [
                    "PCI AAV Scanning Services",
                    "IOT Security Testing",
                    "Cloud Security Audits: Regulatory standards",
                    "AI security controls review"
                ]
            }
        ]
    }
];

export default services;