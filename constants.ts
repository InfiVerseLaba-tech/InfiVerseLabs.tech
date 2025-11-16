
import { NavLink, Service, Project, TeamMember, TimelineEvent, WorkflowStep } from './types';
import { Code, Cpu, Database, Droplets, GitBranch, Layers, ShieldCheck, TrendingUp, Zap, Search, Bot, BrainCircuit, Cable, Cloud, CloudCog, Container, Server, SlidersHorizontal, BarChart, FileLock, Monitor, FileCode, Handshake } from './components/icons/Icons';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Services',
    href: '/services',
    subLinks: [
      { label: 'Cloud & DevOps', href: '/services/cloud-devops' },
      { label: 'AI & Machine Learning', href: '/services/ai-ml' },
      { label: 'Web & App Development', href: '/services/web-app-dev' },
      { label: 'Data Analytics', href: '/services/data-analytics' },
      { label: 'Security & Monitoring', href: '/services/security' },
    ],
  },
  { label: 'Projects', href: '/projects' },
  { label: 'Workflow', href: '/workflow' },
  { label: 'Contact', href: '/contact' },
];

export const SERVICES: { [key: string]: Service } = {
  cloudDevops: {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    tagline: 'Scale Smarter. Deploy Faster.',
    description: 'Automate infrastructure, streamline deployments, and optimize for performance with our elite cloud and DevOps solutions.',
    href: '/services/cloud-devops',
    hero: {
      title: 'Scale Smarter. Deploy Faster.',
      subtitle: 'Harness the power of the cloud with robust DevOps practices for unparalleled efficiency and scalability.',
    },
    problemSolution: {
      problem: 'Manual deployments, scaling challenges, and high operational costs are hindering your growth.',
      solution: 'We implement automated CI/CD pipelines, containerization with Kubernetes, and Infrastructure as Code (IaC) to create a resilient, scalable, and cost-effective cloud environment.',
      result: 'Achieve up to 90% faster deployment cycles, 45% reduction in cloud spend, and near-zero downtime.',
    },
    features: [
      { icon: Cloud, title: 'Multi-Cloud Strategy (AWS, Azure, GCP)', description: 'Architect solutions on the right cloud platform for your needs, ensuring performance and cost-efficiency.' },
      { icon: Container, title: 'Kubernetes Orchestration', description: 'Deploy, manage, and scale containerized applications with industry-standard Kubernetes.' },
      { icon: FileCode, title: 'Terraform & IaC', description: 'Define and provision your entire infrastructure as code for consistency and repeatability.' },
      { icon: GitBranch, title: 'CI/CD Pipelines', description: 'Automate your build, test, and deployment processes to release features faster and more reliably.' },
      { icon: Monitor, title: 'Observability & Monitoring', description: 'Gain deep insights into your systems with comprehensive monitoring, logging, and tracing.' },
      { icon: SlidersHorizontal, title: 'Cloud Cost Optimization', description: 'Analyze and optimize your cloud spending without compromising on performance.' },
    ],
    visual: () => null, // Placeholder, will be implemented in page
    faqs: [
      { question: 'Which cloud provider is right for me?', answer: 'We help you choose based on your specific needs, considering factors like existing tech stack, performance requirements, and budget. We are experts in AWS, Azure, and GCP.' },
      { question: 'How does Infrastructure as Code (IaC) benefit my business?', answer: 'IaC eliminates manual configuration, reduces human error, and allows you to create identical environments for development, testing, and production, speeding up your entire workflow.' },
    ],
  },
  aiMl: {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    tagline: 'Transform Data Into Decisions.',
    description: 'Leverage artificial intelligence to unlock predictive insights, automate processes, and create intelligent applications.',
    href: '/services/ai-ml',
    hero: {
      title: 'Transform Data Into Decisions.',
      subtitle: 'Integrate cutting-edge AI and Machine Learning models to unlock insights and automate complex tasks.',
    },
    problemSolution: {
        problem: 'Your business is rich in data but poor in insights, missing opportunities for growth and efficiency.',
        solution: 'We design and deploy custom machine learning models, from large language models (LLMs) to computer vision systems, that turn your data into a strategic asset.',
        result: 'Increase operational efficiency by 30%, boost customer engagement with personalization, and uncover new revenue streams through predictive analytics.',
    },
    features: [
      { icon: Bot, title: 'LLMs & Chatbots', description: 'Build intelligent conversational agents and content generation tools powered by state-of-the-art Large Language Models.' },
      { icon: Search, title: 'Computer Vision', description: 'Analyze and interpret visual data from images and videos to automate tasks like object detection and quality control.' },
      { icon: TrendingUp, title: 'Predictive Analytics', description: 'Forecast future trends, customer behavior, and business outcomes with powerful predictive models.' },
      { icon: BrainCircuit, title: 'MLOps', description: 'Implement robust MLOps pipelines to streamline the deployment, monitoring, and management of your machine learning models.' },
      { icon: Handshake, title: 'Recommendation Systems', description: 'Deliver personalized experiences and increase user engagement with sophisticated recommendation engines.' },
    ],
    visual: () => null, // Placeholder
    faqs: [
        { question: 'What kind of data do I need for an AI project?', answer: 'The type and amount of data depend on the problem you\'re solving. We start with a data audit to assess your current assets and identify what\'s needed for a successful project.' },
        { question: 'How long does it take to see results from an AI implementation?', answer: 'While a proof-of-concept can be developed in weeks, a full-scale production system can take a few months. However, the insights and efficiencies gained provide a rapid and substantial ROI.' },
    ]
  },
  webAppDev: {
    id: 'web-app-dev',
    title: 'Web & App Development',
    tagline: 'Build Fast, Scale Faster.',
    description: 'From sleek websites to complex SaaS platforms and mobile apps, we build digital experiences that perform and scale.',
    href: '/services/web-app-dev',
    hero: {
        title: 'Build Fast. Scale Faster.',
        subtitle: 'Crafting high-performance, scalable web and mobile applications with modern, future-proof technologies.',
    },
    problemSolution: {
        problem: 'Your current digital presence is slow, outdated, and unable to keep up with user expectations and business growth.',
        solution: 'We use modern frameworks like React and Next.js for lightning-fast frontends, coupled with robust backends (Node.js, Django) and scalable architectures, to build products that delight users.',
        result: 'Achieve sub-second page loads, improve user retention rates by 50%, and build a platform that can scale to millions of users.',
    },
    features: [
        { icon: Layers, title: 'React & Next.js', description: 'Build interactive, SEO-friendly, and high-performance web applications with the industry\'s leading frontend frameworks.' },
        { icon: Server, title: 'Node.js & Django Backends', description: 'Power your applications with fast, scalable, and secure server-side logic and APIs.' },
        { icon: Zap, title: 'Cross-Platform Flutter Apps', description: 'Develop beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.' },
        { icon: Cable, title: 'API Development & Integration', description: 'Design and build robust RESTful and GraphQL APIs to connect your services and data.' },
        { icon: CloudCog, title: 'SaaS Platform Development', description: 'From concept to launch, we build multi-tenant, scalable, and secure Software-as-a-Service platforms.' },
    ],
    visual: () => null, // Placeholder
    faqs: [
        { question: 'Which technology stack is best for my project?', answer: 'We recommend a stack based on your project\'s specific requirements, scalability needs, and budget. Our goal is to choose the right tools for the job, not just the trendiest ones.' },
        { question: 'Do you offer maintenance and support after launch?', answer: 'Yes, we offer flexible support and maintenance packages to ensure your application remains secure, updated, and performs optimally as your business grows.' },
    ]
  },
  dataAnalytics: {
    id: 'data-analytics',
    title: 'Data Analytics',
    tagline: 'From Raw Data to Intelligence.',
    description: 'Structure, analyze, and visualize your data to uncover actionable insights that drive strategic business decisions.',
    href: '/services/data-analytics',
    hero: {
        title: 'From Raw Data to Intelligence.',
        subtitle: 'Unlock the value hidden in your data with end-to-end analytics solutions, from pipelines to dashboards.',
    },
    problemSolution: {
        problem: 'Data is scattered across multiple systems, making it impossible to get a clear, unified view of your business performance.',
        solution: 'We build automated ETL pipelines to centralize your data into a modern data warehouse, then create powerful, interactive dashboards using tools like Power BI and Tableau.',
        result: 'Gain a single source of truth for your data, reduce reporting time by 95%, and empower your teams to make data-driven decisions with confidence.',
    },
    features: [
        { icon: Droplets, title: 'ETL/ELT Pipelines', description: 'Design and build automated, reliable data pipelines to extract, transform, and load data from any source.' },
        { icon: Database, title: 'Cloud Data Warehousing', description: 'Implement scalable and cost-effective data warehouses like BigQuery, Redshift, and Snowflake.' },
        { icon: BarChart, title: 'Power BI & Tableau Dashboards', description: 'Create stunning, interactive visualizations and dashboards that make your data easy to understand.' },
        { icon: TrendingUp, title: 'Real-time Analytics', description: 'Set up streaming data architectures to monitor business KPIs and react to changes as they happen.' },
    ],
    visual: () => null, // Placeholder
    faqs: [
        { question: 'What is the difference between a data warehouse and a data lake?', answer: 'A data warehouse stores structured, processed data for specific analysis and reporting. A data lake stores vast amounts of raw data in its native format. We help you determine the right strategy for your needs, often involving both.' },
        { question: 'How can we ensure data quality?', answer: 'We implement data governance and quality checks throughout the pipeline, including validation, cleaning, and monitoring, to ensure the insights you derive are based on accurate and reliable data.' },
    ]
  },
  security: {
    id: 'security',
    title: 'Security & Monitoring',
    tagline: 'Secure. Scalable. Smart.',
    description: 'Protect your applications and infrastructure with proactive security measures and intelligent monitoring.',
    href: '/services/security',
    hero: {
        title: 'Secure. Scalable. Smart.',
        subtitle: 'Embed security into every layer of your infrastructure and applications for end-to-end protection.',
    },
    problemSolution: {
        problem: 'Your infrastructure is vulnerable to threats, and you lack the visibility to detect and respond to incidents quickly.',
        solution: 'We implement a "DevSecOps" approach, integrating automated security scanning, proactive threat monitoring, and robust compliance frameworks into your development lifecycle.',
        result: 'Reduce security vulnerabilities by over 80%, achieve compliance with standards like SOC 2 and ISO 27001, and minimize incident response time.',
    },
    features: [
        { icon: ShieldCheck, title: 'Vulnerability Scanning', description: 'Automate the detection of security weaknesses in your code, dependencies, and infrastructure.' },
        { icon: Monitor, title: '24/7 Monitoring & Alerting', description: 'Implement sophisticated monitoring dashboards and alerting systems to detect threats in real-time.' },
        { icon: FileLock, title: 'Compliance Automation', description: 'Streamline the process of meeting industry compliance standards like HIPAA, GDPR, and SOC 2.' },
        { icon: Zap, title: 'Incident Response Automation', description: 'Develop automated playbooks to rapidly respond to and contain security incidents, minimizing impact.' },
    ],
    visual: () => null, // Placeholder
    faqs: [
        { question: 'What is DevSecOps?', answer: 'DevSecOps is a cultural shift that integrates security practices within the DevOps process. It means thinking about security at every stage of the software development lifecycle, from design to deployment.' },
        { question: 'How can we protect against ransomware?', answer: 'Our multi-layered approach includes robust access controls, regular backups, employee training, and advanced endpoint detection and response (EDR) systems to protect against ransomware and other malware.' },
    ]
  },
};

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'AI-Powered Logistics Platform',
    client: 'Stark Industries',
    description: 'Developed a real-time logistics and supply chain management platform using predictive analytics to optimize routes and reduce delivery times.',
    tags: ['AI & ML', 'Data Analytics', 'Web & App Dev'],
    imageUrl: 'https://picsum.photos/seed/project1/1000/800',
    metric: '35% Reduction in Fuel Costs',
    details: 'Leveraged machine learning models to analyze traffic patterns, weather conditions, and delivery constraints, providing drivers with optimized routes in real-time. The platform included a web dashboard for dispatchers and a mobile app for drivers, built with React and Flutter.'
  },
  {
    id: 2,
    title: 'Cloud Infrastructure Automation',
    client: 'Wayne Enterprises',
    description: 'Migrated legacy infrastructure to a scalable, serverless architecture on AWS and automated all deployments using Terraform and CI/CD.',
    tags: ['Cloud & DevOps', 'Security'],
    imageUrl: 'https://picsum.photos/seed/project2/1000/800',
    metric: '45% Reduction in Cloud Spend',
    details: 'Conducted a full audit of existing infrastructure, designed a new serverless architecture using AWS Lambda and API Gateway, and wrote Terraform scripts to manage over 200 cloud resources. Implemented a full GitOps workflow with GitHub Actions for automated, secure deployments.'
  },
  {
    id: 3,
    title: 'SaaS Customer Analytics Dashboard',
    client: 'Cyberdyne Systems',
    description: 'Built a multi-tenant SaaS platform providing e-commerce businesses with deep customer analytics and behavior tracking.',
    tags: ['Web & App Dev', 'Data Analytics'],
    imageUrl: 'https://picsum.photos/seed/project3/1000/800',
    metric: '99.9% Uptime',
    details: 'The platform was built on a microservices architecture with Node.js and React (Next.js). Data was processed through a real-time ETL pipeline using Kafka and stored in a Snowflake data warehouse, with dashboards powered by Power BI Embedded.'
  },
  {
    id: 4,
    title: 'Computer Vision for Quality Control',
    client: 'Oscorp',
    description: 'Implemented a computer vision system on the manufacturing line to automatically detect defects in products with 99.5% accuracy.',
    tags: ['AI & ML', 'Security'],
    imageUrl: 'https://picsum.photos/seed/project4/1000/800',
    metric: '99.5% Defect Detection Rate',
    details: 'Trained a custom YOLOv8 model on a dataset of thousands of product images. The model was deployed on edge devices using NVIDIA Jetson and integrated with the existing manufacturing execution system (MES) to automatically flag defective items.'
  }
];


export const TEAM_MEMBERS: TeamMember[] = [
  { name: 'Alex Nova', role: 'Founder & CEO', bio: 'A visionary leader with a passion for disruptive technology and building high-performance teams.', imageUrl: 'https://picsum.photos/seed/team1/400/400' },
  { name: 'Jasmine Kira', role: 'Head of Engineering', bio: 'Expert in scalable architectures and cloud-native solutions, ensuring technical excellence in every project.', imageUrl: 'https://picsum.photos/seed/team2/400/400' },
  { name: 'Leo Vance', role: 'Lead AI Scientist', bio: 'PhD in Machine Learning, Leo pushes the boundaries of what\'s possible with data and predictive models.', imageUrl: 'https://picsum.photos/seed/team3/400/400' },
  { name: 'Sara Chen', role: 'Principal Product Designer', bio: 'Crafts intuitive and beautiful user experiences that bridge the gap between human and machine.', imageUrl: 'https://picsum.photos/seed/team4/400/400' }
];

export const TIMELINE_EVENTS: TimelineEvent[] = [
  { year: '2018', title: 'The Genesis', description: 'InfiVerseLabs.tech was founded with the mission to help businesses navigate the complexities of digital transformation.' },
  { year: '2020', title: 'First Major Partnership', description: 'Partnered with a Fortune 500 company to overhaul their cloud infrastructure, setting a new standard for excellence.' },
  { year: '2022', title: 'AI Lab Launch', description: 'Launched our dedicated AI & Machine Learning lab to focus on cutting-edge research and development.' },
  { year: '2024', title: 'Global Expansion', description: 'Opened our first international office and expanded our team to over 50 experts across the globe.' }
];

export const WORKFLOW_STEPS: WorkflowStep[] = [
    { id: 1, title: 'Discover', description: 'We dive deep into your business goals, challenges, and technical landscape to define the project scope and success metrics.', icon: Search },
    { id: 2, title: 'Design', description: 'Our architects and designers create a comprehensive blueprint, from system architecture to user interface, ensuring a scalable and user-centric solution.', icon: Layers },
    { id: 3, title: 'Develop', description: 'Following agile methodologies, our engineers build, test, and iterate on the solution, providing you with full transparency and regular demos.', icon: Code },
    { id: 4, title: 'Deploy', description: 'We implement automated CI/CD pipelines to ensure a smooth, secure, and seamless deployment to your production environment.', icon: CloudCog },
    { id: 5, title: 'Optimize', description: 'Post-launch, we monitor performance, gather user feedback, and continuously optimize the solution to drive growth and maximize ROI.', icon: TrendingUp },
];

