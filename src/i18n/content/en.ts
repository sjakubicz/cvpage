import type { Content } from '../types'

export const enContent: Content = {
    profile: {
        headline: 'Machine Learning Engineer · Data Scientist',
        about: 'I design and build production AI systems end to end: LLM-powered pipelines that turn unstructured documents into knowledge graphs, real-time computer vision on edge devices, and the full-stack products around them. For over four years I have done this at Million Monkeys Software, working directly with clients from the first requirements call to production.',
    },
    skills: {
        ml: {
            category: 'Machine Learning',
            items: 'PyTorch, CNNs, GNNs, computer vision, OpenCV, NLP, statistical learning, reinforcement learning, multi-object tracking (FairMOT)',
        },
        llm: {
            category: 'LLMs & GenAI',
            items: 'information extraction, RAG, AI agents, OpenAI API, Llama, Qwen',
        },
        graphs: {
            category: 'Knowledge Graphs',
            items: 'graph data modeling, entity and relationship extraction, Cypher',
        },
        edge: {
            category: 'Edge AI',
            items: 'NVIDIA Jetson AGX Xavier, real-time inference, CUDA',
        },
        software: {
            category: 'Software Engineering',
            items: 'Python, JavaScript, TypeScript, React, Node.js, REST APIs, SQL, Postgres, Git, testing, Docker',
        },
        math: {
            category: 'Mathematics',
            items: 'linear algebra, probability and statistics, numerical methods',
        },
    },
    languages: {
        pl: {
            name: 'Polish',
            level: 'native',
        },
        en: {
            name: 'English',
            level: 'fluent, professional working proficiency',
        },
    },
    experience: {
        mms: {
            role: 'Data Scientist',
            location: 'Warsaw, Poland',
            highlights: {
                clients: {
                    title: 'Client work',
                    description:
                        'Led requirements calls with Polish and international clients, turning business needs into technical specifications and client-facing documentation.',
                },
                research: {
                    title: 'Research & development',
                    description:
                        'Conducted independent research on graph-based machine learning methods, including graph neural networks, and on detecting disinformation and other problematic behaviors using graph-based methods and embedding analysis.',
                },
                quality: {
                    title: 'Quality & documentation',
                    description:
                        'Ensured code quality, maintainability and proper testing practices; prepared technical documentation and user guides for stakeholders and clients.',
                },
                review: {
                    title: 'Code review & AI-assisted development',
                    description:
                        'Reviewed code across the engineering team and used AI-assisted development (code assistants, automated review) in daily work.',
                },
                growth: {
                    title: 'From student to project owner',
                    description:
                        'Joined as an undergraduate student and grew into end-to-end ownership of projects, from research question to production.',
                },
            },
        },
    },
    projects: {
        robotControl: {
            name: 'Robot control',
            description:
                'Robot Control course assignments: camera geometry and homography estimation from scratch, vision-based car control in MuJoCo, and object tracking with a Kalman filter.',
        },
        weatherApp: {
            name: 'Weather app',
            description:
                'React weather forecast app: city search with autocomplete or by geolocation, current weather, next-hour and 3-day forecasts, a rating of whether the weather will be nice, and Tenor GIFs matching the conditions. Results are cached in Redux to avoid repeated API calls.',
        },
        integralCalculator: {
            name: 'Integral calculator',
            description:
                'Team software engineering project: a web app for evaluating integrals. React and TypeScript frontend, Django REST API, numerical methods in C++ exposed through pybind11 (trapezoid, Romberg, Gaussian quadrature, Runge-Kutta) and indefinite integrals with SymPy.',
        },
        parkingInWarsaw: {
            name: 'Parking in Warsaw',
            description:
                'Databases course app for commuters to Warsaw: ranks car parks by total cost (fees, subscriptions and fuel to get there) against the paid parking zone, computed in SQL queries.',
        },
        concurrentFolderTree: {
            name: 'Concurrent folder tree',
            description:
                'Part of a file system in C: a concurrent folder tree with create, remove and subtree move operations, using a hand-written readers-writers lock in every folder.',
        },
        polynomialsInHaskell: {
            name: 'Polynomials in Haskell',
            description:
                'Polynomial arithmetic in dense and sparse representations over any ring or field, with division with remainder and QuickCheck property tests.',
        },
        docagent: {
            name: 'docagent',
            description:
                'RAG agent over PDF documents: text extraction with OCR fallback for scans, hybrid search (BM25 + pgvector vectors fused with RRF), a LangGraph tool-use agent that cites its sources, and retrieval evaluation (hit@k, MRR). Runs fully locally via Ollama or against any OpenAI-compatible API. In progress.',
        },
        cellTyping: {
            name: 'Cell typing on imaging mass cytometry data',
            description:
                'Deep Learning for Life Sciences project on Immucan consortium data: EDA, baselines (logistic regression, XGBoost, MLP), applying the CSPOT method, and image segmentation with U-Net and BiFPN.',
        },
        cappuccinoInterpreter: {
            name: 'Cappuccino language interpreter',
            description:
                'Interpreter for my own Latte-inspired imperative language, written in Haskell: BNFC grammar, static type checking before execution, recursive functions, pass-by-value and pass-by-reference arguments, type-inferred const variables, for loops, shadowing with static binding, and runtime error handling.',
        },
        documentsToKnowledgeGraphs: {
            name: 'Documents → knowledge graphs',
            description:
                'End-to-end pipeline converting unstructured documents (PDFs, scanned images, CSVs) into knowledge graphs, using LLMs (Llama, Qwen) for entity extraction and relationship inference. Deployed in production for client projects.',
        },
        jetsonTracking: {
            name: 'Real-time multi-object tracking on NVIDIA Jetson',
            description:
                'Benchmarked multi-object tracking models on Jetson AGX Xavier. FairMOT exceeded the device’s real-time capacity, so I designed a hybrid of FairMOT and physics-based motion prediction - real-time tracking without losing detection accuracy.',
        },
        vrp: {
            name: 'Reinforcement learning for vehicle routing (CVRP)',
            description:
                'Team research project: benchmarking RL methods for CVRP (Pointer Networks, POMO, the Attention Model, DPDP and others) on the Uchoa, Christofides and real-world datasets, then extending POMO with an attention-based model that chooses starting nodes, which became the POMO+ paper. Trained on the ICM cluster.',
        },
        moocDropout: {
            name: 'Predicting online course dropout with GNNs',
            description:
                'Bachelor thesis implementation: static and temporal graphs built from MOOC user activity logs, comparing GCN and LSTM models against a baseline.',
        },
        aiTextEditor: {
            name: 'Text editor with an AI writing agent',
            description:
                'Editor with an embedded AI writing agent, used daily by a publishing house’s journalists. Frontend, backend and the LLM agent; the client’s main point of contact from requirements to delivery.',
        },
        knowledgeGraphPlatform: {
            name: 'Knowledge graph exploration platform',
            description:
                'Full-stack web platform and REST APIs for internal teams and clients to explore pipeline outputs and knowledge graphs.',
        },
        mullerMethod: {
            name: 'Müller’s method',
            description:
                'Numerical methods project: finding complex roots of nonlinear equations with Müller’s (parabola) method using divided differences, with a numerical stability analysis of the formula variants, a strategy for choosing the next point, and a report proving the formulas equivalent.',
        },
        satelliteOrbit: {
            name: 'Satellite orbit - differential equations',
            description:
                'Ordinary differential equations project: solving a periodic satellite orbit in the Earth-Moon system with the Euler, Runge-Kutta and Dormand-Prince schemes (including adaptive step size) and comparing them.',
        },
        algorithms: {
            name: 'Algorithms and data structures',
            description:
                'Solutions to algorithms course problems plus implementations of sorting and graph algorithms and data structures.',
        },
        sml: {
            name: 'Statistical machine learning',
            description:
                'Statistical analysis of salary data for 11,000 employees with a linear regression model and assumption checks, prediction with ElasticNet and random forests, and course labs.',
        },
        llmTeacher: {
            name: 'LLM teacher for robots',
            description:
                'Team NLP project: a proposal to extend Eureka (an LLM writing reward functions for reinforcement learning in Isaac Gym) with simulation images in the reward reflection step, and running Eureka on a local Llama 3 through llama.cpp instead of the OpenAI API.',
        },
        tatraPlanner: {
            name: 'Tatra hiking route planner',
            description:
                'Prolog program that loads a database of trails and finds routes between points by trail type and route length constraints.',
        },
        revnet: {
            name: 'RevNet from scratch',
            description:
                'Deep Neural Networks project: a reversible RevNet written from scratch in NumPy, with hand-derived backpropagation that reconstructs activations from the next layer instead of keeping them in memory. Trained on MNIST (about 96% accuracy) with ClearML tracking, and memory usage compared with a regular network.',
        },
    },
    studyAreas: {
        cyber: {
            introductionToCybersecurity: {
                name: 'Introduction to cybersecurity',
                description:
                    'Cyber threat awareness, attacks on organisations, cybersecurity programmes and current challenges organisations face.',
            },
            aiInCybersecurity: {
                name: 'AI in cybersecurity',
                description:
                    'AI and machine learning for threat detection, AI-related threats, and AI tools in cybersecurity.',
            },
            informationSecurityManagement: {
                name: 'Information security management',
                description:
                    'Protecting information in line with standards (ISO 27001, NIST, CIS), assessing and reducing risk, and leading a team as the threat landscape changes.',
            },
            legalAspectsOfCybercrimeAndIncidents: {
                name: 'Legal aspects of cybercrime and incidents',
                description:
                    'Criminal law analysis of cybercrime and evidence, the NIS2, CER, CRA and DORA regulations, and legal aspects of incident management.',
            },
            securityOperationsCenter: {
                name: 'Security Operations Center',
                description:
                    'The role and structure of a SOC, monitoring and incident response processes, and SOC operational maturity.',
            },
            openSourceIntelligenceOsint: {
                name: 'Open-source intelligence (OSINT)',
                description:
                    'OSINT as an intelligence technique: geographic data, social networks, public registers and data leaks, investigation methods and reporting.',
            },
            penetrationTestingAndSocialEngineering: {
                name: 'Penetration testing and social engineering',
                description:
                    'Security testing methodology, finding vulnerabilities in IT systems, and social engineering as a penetration testing tool.',
            },
            digitalForensicsAndEvidenceAcquisition: {
                name: 'Digital forensics and evidence acquisition',
                description:
                    'Digital evidence, forensic processes, and acquiring data post mortem and from live systems.',
            },
            windowsSecurity: {
                name: 'Windows security',
                description:
                    'System architecture and security model, offline attacks, and Active Directory security basics.',
            },
            devsecopsAndApplicationSecurity: {
                name: 'DevSecOps and application security',
                description:
                    'OWASP Top 10, injection and XSS attacks and defences, finding vulnerabilities in web applications.',
            },
            malwareAnalysis: {
                name: 'Malware analysis',
                description:
                    'Static, dynamic, manual and automated analysis, x86/x64 assembly basics, and reverse engineering of malware.',
            },
            incidentForensicsAndDataRecovery: {
                name: 'Incident forensics and data recovery',
                description:
                    'Extraction, interpretation and reporting; forensic analysis of FAT32 and NTFS, Windows artefacts, messengers, browsers and email, and ransomware incidents.',
            },
            redTeamingAndAptAttackSimulation: {
                name: 'Red teaming and APT attack simulation',
                description:
                    'Techniques, tactics and tools for every stage of an attack, C2 channels in practice, and PowerShell in Microsoft environments.',
            },
            cloudSecurityAws: {
                name: 'Cloud security (AWS)',
                description:
                    'Account access control, securing resources (IAM, networking, encryption, monitoring), and real-world cloud attacks.',
            },
        },
        ml: {
            machineLearningStatisticalMethods: {
                name: 'Machine Learning & Statistical Methods',
                description:
                    'Statistical learning techniques, model selection and validation. Applying supervised and unsupervised learning methods to real-world problems.',
            },
            deepLearningNeuralNetworks: {
                name: 'Deep Learning & Neural Networks',
                description:
                    'Design and training of neural network architectures. Convolutional and recurrent networks for image and sequence processing.',
            },
            reinforcementLearning: {
                name: 'Reinforcement Learning',
                description:
                    'Building systems that learn optimal decision-making strategies through interaction with environments.',
            },
            naturalLanguageProcessing: {
                name: 'Natural Language Processing',
                description:
                    'Text analysis and language models. Processing and analyzing human language data.',
            },
            computerVisionVisualRecognition: {
                name: 'Computer Vision & Visual Recognition',
                description:
                    'Image processing and object detection. Applying deep learning to image-based tasks.',
            },
            autonomousSystemsRobotControl: {
                name: 'Autonomous Systems & Robot Control',
                description:
                    'Control of robotic systems and autonomous devices with integrated machine learning.',
            },
            modelExplainabilityInterpretability: {
                name: 'Model Explainability & Interpretability',
                description:
                    'Techniques for making machine learning models transparent and interpretable.',
            },
            largeScaleMachineLearning: {
                name: 'Large-Scale Machine Learning',
                description:
                    'Scalability and optimization techniques for processing large datasets. Distributed computing approaches.',
            },
            projectManagementTeamCollaboration: {
                name: 'Project Management & Team Collaboration',
                description:
                    'Planning and execution of technical projects. Effective teamwork and communication of technical concepts.',
            },
            criticalAnalysisInnovation: {
                name: 'Critical Analysis & Innovation',
                description:
                    'Evaluating and improving machine learning solutions. Assessing limitations and proposing enhancements.',
            },
            applicationDomains: {
                name: 'Application Domains',
                description:
                    'Practical machine learning applications in life sciences, social networks and business problem-solving.',
            },
        },
        cs: {
            programmingSoftwareDevelopment: {
                name: 'Programming & Software Development',
                description:
                    'Proficiency in multiple programming paradigms. Designing, implementing and debugging software systems.',
            },
            algorithmsDataStructures: {
                name: 'Algorithms & Data Structures',
                description:
                    'Algorithm design and analysis. Implementing and optimizing data structures.',
            },
            databasesDataManagement: {
                name: 'Databases & Data Management',
                description:
                    'Design and implementation of database systems. Database modeling and query optimization.',
            },
            webApplicationsInternetTechnologies: {
                name: 'Web Applications & Internet Technologies',
                description:
                    'Developing web applications using modern frameworks and technologies.',
            },
            computerNetworksOperatingSystems: {
                name: 'Computer Networks & Operating Systems',
                description:
                    'Network protocols and operating system design. System-level programming.',
            },
            softwareEngineeringQualityAssurance: {
                name: 'Software Engineering & Quality Assurance',
                description:
                    'Applying software engineering principles to projects. Team-based development and code review.',
            },
            computerSecurity: {
                name: 'Computer Security',
                description:
                    'Cryptography, authentication and access control. Security best practices.',
            },
            programSemanticsFormalVerification: {
                name: 'Program Semantics & Formal Verification',
                description: 'Programming language semantics and formal methods.',
            },
            mathematicsComputationalTheory: {
                name: 'Mathematics & Computational Theory',
                description:
                    'Mathematical analysis, linear algebra and discrete mathematics. Automata theory and computability.',
            },
            concurrentDistributedSystems: {
                name: 'Concurrent & Distributed Systems',
                description: 'Design and implementation of concurrent and multi-threaded programs.',
            },
            numericalMethodsScientificComputing: {
                name: 'Numerical Methods & Scientific Computing',
                description: 'Applying numerical algorithms and optimization techniques.',
            },
            professionalCommunicationTeamwork: {
                name: 'Professional Communication & Teamwork',
                description: 'Collaborative development and team programming projects.',
            },
        },
        math: {
            mathematicalAnalysisCalculus: {
                name: 'Mathematical Analysis & Calculus',
                description:
                    'Real and complex analysis: limits, continuity, integration. Multivariable calculus and complex variables.',
            },
            linearAlgebraGeometry: {
                name: 'Linear Algebra & Geometry',
                description:
                    'Vector spaces, linear transformations and matrix theory. Geometric concepts and differential geometry.',
            },
            algebraAbstractStructures: {
                name: 'Algebra & Abstract Structures',
                description: 'Algebraic theory including group theory and abstract structures.',
            },
            probabilityTheoryStatistics: {
                name: 'Probability Theory & Statistics',
                description:
                    'Probability distributions and stochastic processes. Data analysis and statistical inference.',
            },
            differentialEquations: {
                name: 'Differential Equations',
                description:
                    'Ordinary differential equations and numerical methods. Modeling physical and dynamic systems.',
            },
            topologyAdvancedGeometry: {
                name: 'Topology & Advanced Geometry',
                description: 'Topological spaces and differential geometry.',
            },
            numericalMethodsComputation: {
                name: 'Numerical Methods & Computation',
                description:
                    'Numerical algorithms and approximation methods. Implementing computational solutions.',
            },
            combinatoricsDiscreteMathematics: {
                name: 'Combinatorics & Discrete Mathematics',
                description: 'Combinatorial methods and discrete structures.',
            },
            programmingComputationalMethods: {
                name: 'Programming & Computational Methods',
                description: 'Practical programming and implementing mathematical algorithms.',
            },
            decisionSupportSystemsApplications: {
                name: 'Decision Support Systems & Applications',
                description:
                    'Mathematical methods applied to real-world decision-making and business problems.',
            },
            professionalCommunicationLanguageSkills: {
                name: 'Professional Communication & Language Skills',
                description:
                    'Communicating mathematical concepts clearly. English for academic and professional contexts.',
            },
        },
    },
    coursework: {
        ml: {
            largeScaleMl: {
                name: 'Large Scale Machine Learning',
                description:
                    'Distributed PyTorch DDP training across cluster nodes with SLURM, and a Google Cloud cluster set up with Terraform and Ansible, with NFS and MPI.',
            },
        },
        cs: {
            binaryExploitation: {
                name: 'Binary exploitation',
                description:
                    'Notes and commands from security classes: analysing binaries (objdump, strings, hexdump), debugging with gdb and ret2libc attacks.',
            },
            rust: {
                name: 'Rust',
                description:
                    'An Advent of Code 2022 puzzle: rebuilding a directory tree from a terminal log and computing sizes.',
            },
            threePartition: {
                name: '3-partition in ASP',
                description:
                    'Solving the 3-partition problem with Answer Set Programming (clingo), with a simple Tkinter interface.',
            },
            modernCpp: {
                name: 'Modern C++',
                description:
                    'Assignments from the Languages and Tools for Programming course, done in pairs: templates and concepts (a treasure hunt simulation), virus genealogy as a DAG with exception safety guarantees, a planetary rover simulation, and a tri_list container with lazy C++20 ranges views.',
            },
        },
        math: {
            numericalMethods: {
                name: 'Numerical methods',
                description:
                    'Operations on tridiagonal matrices with shifted diagonals in NumPy: matrix-vector products and solving linear systems, with tests.',
            },
            statisticsInR: {
                name: 'Statistics in R',
                description:
                    'R exercises: vectors, data frames, probability distributions and an analysis of COVID data.',
            },
        },
    },
    education: {
        cyber: {
            degree: 'Postgraduate Studies, Cybersecurity and Digital Forensics',
            school: 'Lazarski University',
            url: 'https://www.lazarski.pl/en/offer/admission/postgraduate-studies-and-mba/cyber-security-and-computer-forensics-studia-podyplomowe',
        },
        ml: {
            degree: 'MSc, Machine Learning and Statistical Methods',
            school: 'University of Warsaw',
            url: 'https://www.mimuw.edu.pl/pl/studia/machine-learning-nowy-kierunek-na-studiach-ii-stopnia/',
            thesis: 'Graph-based disinformation detection using graph neural networks (GNNs)',
        },
        cs: {
            degree: 'BSc, Computer Science',
            school: 'University of Warsaw',
            url: 'https://irk.uw.edu.pl/en-gb/offer/PELNE2026/programme/S1-INF/',
            thesis: 'A system for building agent-based models - user interface',
        },
        math: {
            degree: 'BSc, Mathematics',
            school: 'University of Warsaw',
            url: 'https://irk.uw.edu.pl/en-gb/offer/PELNE2026/programme/S1-MAT/',
            thesis: 'Using graph neural networks to predict dropout of online course participants',
        },
    },
    publications: {
        pomoPlus: {
            description:
                'Extended POMO, a state-of-the-art reinforcement learning solver for vehicle routing, by introducing an attention-based agent selecting starting nodes; achieved faster convergence and lower optimality gaps on CVRPLIB benchmarks (PyTorch, RL4CO).',
        },
    },
}
