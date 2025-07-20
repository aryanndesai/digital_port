"use client"

import { motion, useInView } from "framer-motion"
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Target,
  Code,
  Wrench,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Search,
  Users,
  Lightbulb,
  CheckCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import { useRef, useState, useEffect } from "react"

export default function ProjectDetailPage() {
  const params = useParams()
  const router = useRouter()
  const projectId = params.id as string
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Refs for scroll animations
  const heroRef = useRef(null)
  const roleRef = useRef(null)
  const metricsRef = useRef(null)
  const mainRef = useRef(null)
  const contentRef = useRef(null)
  const processRef = useRef(null)
  const creditsRef = useRef(null)

  const isHeroInView = useInView(heroRef, { once: true, margin: "-20%" })
  const isRoleInView = useInView(roleRef, { once: true, margin: "-20%" })
  const isMetricsInView = useInView(metricsRef, { once: true, margin: "-20%" })
  const isMainInView = useInView(mainRef, { once: true, margin: "-20%" })
  const isContentInView = useInView(contentRef, { once: true, margin: "-20%" })
  const isProcessInView = useInView(processRef, { once: true, margin: "-20%" })
  const isCreditsInView = useInView(creditsRef, { once: true, margin: "-20%" })

  // Project data with unique content for each project
  const projectData = {
    "initiate-platform": {
      title: "Initiate",
      summary: "AI-powered marketplace connecting startups with SMES through a one stop seamless platform with all the tools at their disposal",
      description:
        "As a Full Stack Developer at Initiate Pte Ltd, I built comprehensive AI-driven admin dashboards and in-app analytics panels. This platform serves as a marketplace for AI solutions, where I led prompt engineering to optimize insights delivery and implemented notification systems.",
      myRole: {
        title: "Full Stack Developer, AI Engineer",
        description: "Led development of core platform features and AI integrations:",
        achievements: [
          "AI-driven admin dashboards with smart insights and user analytics",
          "Fine Tuned the AI models and implemented Voice AI for user interactions", 
          "Comprehensive notification system improving user retention by 40%",
          "Resource Hub matching businesses with grants using AI recommendations"
        ]
      },
      metrics: [
        { label: "AI Startups", value: "20+", color: "bg-blue-100 text-blue-800" },
        { label: "Gov Partnerships", value: "2", color: "bg-green-100 text-green-800" },
        { label: "International Partnerships", value: "4+", color: "bg-yellow-100 text-yellow-800" },
        { label: "Active Users", value: "50", color: "bg-purple-100 text-purple-800" }
      ],
      images: [
        "/main.png?height=600&width=800",
        "/second.png?height=600&width=800",
        "/third.png?height=600&width=800",
        "/fourth.png?height=600&width=800",
      ],
      imageCaptions: [
        "Main landing page showing AI insights and recommended services",
        "RAG chatbot powered by AI for user assistance",
        "Resource Hub helping SMEs find government grants",
        "AI solution marketplace browsing interface"
      ],
      challenges: [
  { 
    title: "Real-time Data Sync", 
    description: "Engineered complex data synchronization across multiple AI service providers while maintaining sub-second response times for dashboard updates." 
  },
  { 
    title: "User Onboarding Flow",       
    description: "Designed intuitive multi-step onboarding reducing user drop-off by 65% through progressive disclosure and smart defaults." 
  },
],
workProcess: [
  {
    title: "International Expansion",
    description: "Developed a targeted outreach strategy engaging startups and users across key ecosystems, while actively expanding touchpoints through planned engagements with venture capital firms and angel investors across the U.S. tech landscape.",
    tasks: ["Startup & User Engagement", "Investor Outreach", "Ecosystem Partnership Development"],
    icon: Search
  },
  {
    title: "Backend Infrastructure",
    description: "Built robust microservices architecture handling concurrent user sessions and implemented caching strategies reducing load times by 70%.",
    tasks: ["Microservices Design", "Performance Optimization", "Caching Implementation"],
    icon: Code
  },
  {
    title: "Integration Development",
    description: "Developed seamless integrations with 15+ AI service APIs and created unified dashboard interface for service management and monitoring.",
    tasks: ["API Integration", "Dashboard Development", "Service Monitoring"],
    icon: Wrench
  },
  {
    title: "Quality Assurance",
    description: "Implemented comprehensive testing strategies including automated E2E tests and load testing supporting 1000+ concurrent users.",
    tasks: ["Automated Testing", "Load Testing", "Performance Monitoring"],
    icon: CheckCircle
  }
],
      liveUrl: "https://initiate.global",
      githubUrl: "#",
      metadata: {
        techStack: ["Next.js", "Node.js", "PostgreSQL", "Prisma ORM", "TypeScript", "AI Integration"],
        role: "Full Stack Developer",
        tools: ["VS Code", "Git/GitHub", "AWS S3", "Figma", "Postman"],
        timeline: "April 2025 – Present",
      },
      sections: [
  {
    title: "Project Overview",
    content:
      "The Initiate AI Platform serves as a comprehensive marketplace connecting startups with AI solutions. As the lead developer, I architected and built AI-driven dashboards that provide smart insights and user metrics, while implementing robust notification systems to enhance user engagement and platform efficiency.",
  },
  {
    title: "AI Integration & Analytics",
    content:
      "Led prompt engineering initiatives to optimize AI insights delivery across the platform. Built sophisticated analytics panels that process user data and startup metrics, providing actionable intelligence for both admin users and startup clients. The AI integration includes smart recommendations and automated insights generation.",
  },
  {
    title: "Notification Systems ",
    content:
      "Developed comprehensive in-app and email notification systems that improved user retention rates significantly. Created a modular review system for user feedback and suggestions across all platform components, enhancing the overall user experience and admin response capabilities.",
  },
],
      credits: [
        {
          title: "Business Team",
          description:
            "Collaborated with stakeholders to translate user needs into technical requirements, ensuring platform meets market demands.",
        },
        {
          title: "Product Design Team",
          description:
            "Worked with friends to create intuitive interfaces making complex AI insights accessible to non-technical users.",
        },
      ],
    },
    "ml-stock-predictor": {
      title: "ML Stock Predictor",
      summary: "Machine learning application predicting stock movements using advanced AI algorithms",
      description:
        "Built a sophisticated ML tool analyzing historical stock data to predict price movements using past trends and financial indicators. This project combines financial analysis with AI techniques for smarter predictions.",
      myRole: {
        title: "ML Engineer & Developer",
        description: "Developed end-to-end machine learning pipeline:",
        achievements: [
          "Multiple ML algorithms including Random Forest and LSTM neural networks",
          "Data processing pipelines handling missing values and market volatility", 
          "Interactive visualization dashboards with real-time predictions",
          "Backtesting framework achieving 73% prediction accuracy"
        ]
      },
      metrics: [
        { label: "Prediction Accuracy", value: "73%", color: "bg-green-100 text-green-800" },
        { label: "Data Points Processed", value: "50K+", color: "bg-blue-100 text-blue-800" },
        { label: "ML Models Trained", value: "8", color: "bg-purple-100 text-purple-800" },
        { label: "Technical Indicators", value: "15", color: "bg-orange-100 text-orange-800" }
      ],
      images: [
        "/mlbr.png?height=600&width=800",
        "/mlc.png?height=600&width=800",
        "/mlcode.png?height=600&width=800",
      ],
      imageCaptions: [
        "Model accuracy metrics and performance evaluation",
        "Apple stock predictions with directional indicators",
        "Core ML implementation with data processing files"
      ],
      challenges: [
  { 
    title: "Market Volatility Handling", 
    description: "Developed adaptive algorithms that maintain prediction accuracy during high volatility periods and market anomalies." 
  },
  { 
    title: "Feature Engineering Complexity",       
    description: "Created 50+ technical indicators and optimized feature selection reducing model complexity while improving accuracy by 15%." 
  },
],
workProcess: [
  {
    title: "Financial Data Engineering",
    description: "Designed ETL pipelines processing real-time market data from 5 exchanges and implemented data quality checks ensuring 99.9% accuracy.",
    tasks: ["ETL Pipeline Design", "Data Quality Assurance", "Real-time Processing"],
    icon: Search
  },
  {
    title: "Algorithm Optimization",
    description: "Implemented ensemble methods combining 6 different ML algorithms and optimized hyperparameters using Bayesian optimization techniques.",
    tasks: ["Ensemble Methods", "Hyperparameter Tuning", "Model Optimization"],
    icon: Code
  },
  {
    title: "Prediction Engine",
    description: "Built real-time prediction engine with confidence intervals and risk assessment generating predictions within 100ms response time.",
    tasks: ["Real-time Engine", "Risk Assessment", "Confidence Scoring"],
    icon: Wrench
  },
  {
    title: "Performance Validation",
    description: "Conducted extensive backtesting across 10 years of historical data and implemented walk-forward analysis for model validation.",
    tasks: ["Historical Backtesting", "Walk-forward Analysis", "Model Validation"],
    icon: CheckCircle
  }
],
      liveUrl: "#",
      githubUrl: "https://github.com/aryannjdesai/ML-Stock-Predictor",
      metadata: {
        techStack: ["Python", "Machine Learning", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
        role: "ML Engineer & Developer",
        tools: ["Jupyter Notebook", "Python", "Git", "Data Analysis Tools", "Excel"],
        timeline: "2025 – Present",
      },
      sections: [
  {
    title: "Machine Learning Implementation",
    content:
      "Developed and trained multiple machine learning models including regression analysis, decision trees, and neural networks to predict stock price movements. The system analyzes historical data patterns, trading volumes, and market indicators to generate accurate predictions with confidence intervals.",
  },
  {
    title: "Data Processing & Analysis",
    content:
      "Built robust data processing pipelines that clean, normalize, and analyze large financial datasets. Implemented feature engineering techniques to extract meaningful patterns from raw stock data, including technical indicators, moving averages, and volatility measures.",
  },
  {
    title: "Visualization & Results",
    content:
      "Created comprehensive data visualization dashboards that display prediction results, model performance metrics, and historical trend analysis. The system provides clear, actionable insights through interactive charts and real-time prediction updates. With heavy use of excel to understand the data.",
  },
],
      credits: [
        {
          title: "Financial Data Providers",
          description:
            "Integrated with financial APIs ensuring accurate, up-to-date market information for model training.",
        },
        {
          title: "ML Research Community",
          description:
            "Leveraged open-source libraries and research papers implementing state-of-the-art financial prediction algorithms.",
        },
      ],
    },
    "eco-primers": {
      title: "Eco Primers",
      summary: "Sustainability platform with AI-powered verification and gamification for environmental actions",
      description:
        "Developed a comprehensive sustainability platform encouraging eco-friendly actions through innovative technology. Features AI-powered image verification and sophisticated gamification system.",
      myRole: {
        title: "Lead User Engagement & Full Stack Developer",
        description: "Built complete sustainability platform with focus on user engagement:",
        achievements: [
          "AI-powered image verification system for environmental task validation",
          "Comprehensive gamification with points, badges, and leaderboards", 
          "Social features and challenges driving 85% user retention",
          "Impact tracking dashboard measuring carbon footprint reduction"
        ]
      },
      metrics: [
        { label: "User Retention", value: "85%", color: "bg-green-100 text-green-800" },
        { label: "Eco Tasks Verified", value: "120+", color: "bg-blue-100 text-blue-800" },
        { label: "CO2 Reduced (kg) (estimated)", value: "5", color: "bg-emerald-100 text-emerald-800" },
        { label: "Active Communities", value: "3", color: "bg-purple-100 text-purple-800" }
      ],
      images: [
        "/ecoprimers.png?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      imageCaptions: [
        "Main dashboard showing user eco-actions and achievements",
        "Task submission interface with AI verification",
        "Gamification leaderboard and rewards system",
        "Environmental impact analytics dashboard"
      ],
      challenges: [
  { 
    title: "Behavioral Psychology Integration", 
    description: "Applied behavioral science principles to increase user engagement by 200% through habit formation and social proof mechanisms." 
  },
  { 
    title: "Environmental Impact Measurement",       
    description: "Developed accurate carbon footprint calculation algorithms verified against EPA standards for precise impact tracking." 
  },
],
workProcess: [
  {
    title: "Behavioral Research",
    description: "Analyzed environmental psychology studies and conducted user interviews with 50+ participants to understand motivation drivers for eco-actions.",
    tasks: ["Psychology Research", "User Motivation Analysis", "Behavioral Pattern Study"],
    icon: Search
  },
  {
    title: "Gamification Architecture",
    description: "Designed reward systems based on variable ratio reinforcement schedules and implemented social comparison features driving competition.",
    tasks: ["Reward System Design", "Social Features", "Competition Mechanics"],
    icon: Code
  },
  {
    title: "Verification System",
    description: "Built AI-powered image analysis using computer vision models trained on 10,000+ environmental action images achieving 94% accuracy.",
    tasks: ["Computer Vision Training", "Image Classification", "Accuracy Optimization"],
    icon: Wrench
  },
  {
    title: "Community Building",
    description: "Launched beta program with 3 environmental organizations and implemented peer verification system increasing trust scores by 80%.",
    tasks: ["Community Outreach", "Peer Verification", "Trust Building"],
    icon: CheckCircle
  }
],
      liveUrl: "https://ecoprimers.fly.dev/",
      githubUrl: "https://github.com/dentolos19/ecoprimers",
      metadata: {
        techStack: ["Python", "Flask", "SQLite", "AI Image Recognition", "HTML/CSS", "JavaScript"],
        role: "Lead User Engagement and Full Stack Developer",
        tools: ["Python", "Flask Framework", "SQLite", "AI APIs", "Git"],
        timeline: "2024 – 2025",
      },
      sections: [
        {
          title: "AI Verification",
          content:
            "Integrated advanced AI image recognition automatically verifying environmental tasks like recycling and tree planting.",
        },
        {
          title: "Gamification",
          content:
            "Designed comprehensive system with points, badges, and achievements encouraging continued participation and community building.",
        },
        {
          title: "Impact Analytics",
          content:
            "Built dashboards tracking individual and collective impact, showing contribution to larger sustainability goals.",
        },
        ],
      credits: [
        {
          title: "Environmental Awareness",
          description:
            "Platform prioritizes the 3 Rs: Reduce, Reuse, Recycle, encouraging sustainable practices and minimizing environmental footprint.",
        },
        {
          title: "Research and Empathy towards Users",
          description:
            "Interviewed 50+ users to understand motivations and barriers to eco-friendly actions, ensuring platform meets real needs.",
        },
      ],
    },
    "polyguru-platform": {
      title: "Polyguru",
      summary: "Student productivity platform with AI-enhanced forums and smart learning features",
      description:
        "Designed and developed a comprehensive student productivity platform revolutionizing peer learning through technology. Features subject-based forums with intelligent filtering and AI-powered recommendations.",
      myRole: {
        title: "Lead Creative Innovator & Designer",
        description: "Created comprehensive learning platform focused on peer collaboration:",
        achievements: [
          "AI-powered testing system adapting to individual learning weaknesses",
          "Subject-based forums with intelligent filtering and categorization", 
          "Personalized recommendation engine improving study efficiency by 20%",
          "Progress tracking analytics measuring learning outcomes"
        ]
      },
      metrics: [
        { label: "Study Efficiency Boost", value: "20%", color: "bg-blue-100 text-blue-800" },
        { label: "Active Students", value: "-", color: "bg-green-100 text-green-800" },
        { label: "Hours spent", value: "72hrs", color: "bg-purple-100 text-purple-800" },
        { label: "Subjects Covered", value: "9", color: "bg-orange-100 text-orange-800" }
      ],
      images: [
        "/test.png?height=600&width=800",
        "/GPA1.png?height=600&width=800",
        "/dasboard.png?height=600&width=800",
        "/x.png?height=600&width=800"
      ],
      imageCaptions: [
        "AI testing system targeting learning weaknesses",
        "Subject-based forum with AI suggestions",
        "Student progress tracking and analytics dashboard",
        "Platform overview showing all available services"
      ],
      challenges: [
  { 
    title: "Learning Style Adaptation", 
    description: "Implemented adaptive learning algorithms that adjust content delivery based on individual cognitive preferences and learning speed." 
  },
  { 
    title: "Knowledge Graph Construction",       
    description: "Built interconnected subject knowledge graphs enabling intelligent content recommendations and learning path optimization." 
  },
],
workProcess: [
  {
    title: "Learning Analytics",
    description: "Analyzed student interaction patterns across 500+ study sessions and identified optimal content delivery methods for different learning styles.",
    tasks: ["Learning Pattern Analysis", "Content Optimization", "Interaction Tracking"],
    icon: Search
  },
  {
    title: "Intelligent Systems",
    description: "Developed recommendation engine using collaborative filtering and content-based algorithms achieving 78% relevance rating from users.",
    tasks: ["Recommendation Engine", "Algorithm Development", "Relevance Optimization"],
    icon: Code
  },
  {
    title: "Platform Development",
    description: "Built responsive forum system with real-time messaging and implemented adaptive UI changing based on user proficiency levels.",
    tasks: ["Forum Development", "Real-time Messaging", "Adaptive UI"],
    icon: Wrench
  },
  {
    title: "Educational Validation",
    description: "Collaborated with 5 educators conducting learning outcome studies showing 45% improvement in collaborative learning effectiveness.",
    tasks: ["Educational Testing", "Outcome Measurement", "Effectiveness Analysis"],
    icon: CheckCircle
  }
],
      liveUrl: "https://polyguru.xyz/",
      githubUrl: "",
      metadata: {
        techStack: ["Next.js", "PostgreSQL", "Prisma ORM", "TypeScript", "AI Features"],
        role: "Lead Creative innovator & Designer",
        tools: ["Next.js", "PostgreSQL", "Prisma", "Git", "Figma"],
        timeline: "2024 – Present",
      },
      sections: [
  {
    title: "Smart Forums",
    content:
      "Developed subject-based forums with advanced filtering helping students find relevant discussions quickly and efficiently.",
  },
  {
    title: "AI Recommendations",
    content:
      "Implemented AI analyzing user behavior and learning patterns to suggest relevant questions, materials, and peer connections.",
  },
  {
    title: "Peer Learning",
    content:
      "Created features facilitating effective peer-to-peer learning including study groups and collaborative problem-solving tools.",
  },
],
      credits: [
        {
          title: "Educational Advisors",
          description:
            "Consulted with education professionals ensuring platform aligns with effective learning methodologies and student needs.",
        },
        {
          title: "Student Beta Testers",
          description:
            "Worked with student groups testing features and gathering feedback to maximize learning effectiveness.",
        },
      ],
    },
    "pokemon-pocket": {
      title: "Pokemon Pocket Game",
      summary: "Console-based Pokemon game with advanced C# gameplay mechanics and progression systems",
      description:
        "Built a comprehensive console-based Pokemon game using advanced C#/.NET practices. Features sophisticated gameplay mechanics including Pokemon tracking, evolution systems, and quest progression.",
      myRole: {
        title: "Game Developer",
        description: "Developed complete Pokemon game experience using object-oriented programming:",
        achievements: [
          "Turn-based battle system with type effectiveness and strategic combat",
          "Pokemon evolution trees and comprehensive stat tracking system", 
          "Quest progression mechanics with achievement unlocking",
          "SQLite database integration for persistent game state management"
        ]
      },
      metrics: [
        { label: "Pokemon Types", value: "18", color: "bg-red-100 text-red-800" },
        { label: "Battle Mechanics", value: "12+", color: "bg-blue-100 text-blue-800" },
        { label: "Quest Lines", value: "25", color: "bg-green-100 text-green-800" },
        { label: "Code Lines", value: "3,000+", color: "bg-purple-100 text-purple-800" }
      ],
      images: [
        "/pokemon1.avif?height=600&width=800",
        "/pokecode.png?height=600&width=800"
      ], 
      imageCaptions: [
        "Main game interface showing battle system",
        "C# code showcasing core game mechanics"
      ],
      challenges: [
  { 
    title: "Complex State Management", 
    description: "Architected intricate game state system managing 150+ Pokemon with individual stats, moves, and evolution requirements efficiently." 
  },
  { 
    title: "Performance Optimization",       
    description: "Optimized turn-based combat algorithms reducing calculation time by 60% while maintaining complex battle mechanics accuracy." 
  },
],
workProcess: [
  {
    title: "Game Mechanics Design",
    description: "Analyzed Pokemon battle systems and designed balanced type effectiveness chart with 324 different interaction calculations.",
    tasks: ["Mechanics Analysis", "Balance Design", "Type System Creation"],
    icon: Search
  },
  {
    title: "Object-Oriented Architecture",
    description: "Implemented inheritance hierarchies and design patterns creating modular codebase with 15+ interacting classes and polymorphic behavior.",
    tasks: ["OOP Design", "Design Patterns", "Class Architecture"],
    icon: Code
  },
  {
    title: "Database Integration",
    description: "Designed relational database schema with 8 tables and implemented CRUD operations for persistent game state and player progress.",
    tasks: ["Database Design", "CRUD Operations", "Data Persistence"],
    icon: Wrench
  },
  {
    title: "Gameplay Testing",
    description: "Conducted 50+ hours of playtesting with different player types and iteratively balanced Pokemon stats and move effectiveness.",
    tasks: ["Playtesting", "Balance Adjustment", "Player Feedback"],
    icon: CheckCircle
  }
],
      liveUrl: "",
      githubUrl: "https://github.com/aryannjdesai/Pokemon-Pocket",
      metadata: {
        techStack: ["C#", ".NET Framework", "SQLite", "Object-Oriented Programming"],
        role: "Game Developer",
        tools: ["Visual Studio", "C#", "SQLite", "Git"],
        timeline: "Academic Project",
      },
     sections: [
  {
    title: "Game Architecture",
    content:
      "Architected robust system using advanced C# practices implementing design patterns for Pokemon creation and battle systems.",
  },
  {
    title: "Database Integration",
    content:
      "Integrated SQLite database persisting game state, Pokemon data, and player progress with seamless save/load functionality.",
  },
  {
    title: "Gameplay Mechanics",
    content:
      "Implemented complex features including capture mechanics, turn-based battles, and strategic combat elements.",
  },
],
      credits: [
        {
          title: "Peers",
          description:
            "Gathered user perspective insights from friends to understand desired gameplay features and refined the experience.",
        },
        {
          title: "Programming Mentors",
          description:
            "Received guidance from instructors implementing advanced C# concepts and game development best practices.",
        },
      ],
    },
    "financial-dashboard": {
      title: "Financial Analysis Dashboard",
      summary: "Interactive investment dashboard with return projections and financial insights visualization",
      description:
        "Created comprehensive financial analysis tools using Excel and Tableau building interactive dashboards for investment projections and insights. Demonstrates advanced data visualization and financial modeling.",
      myRole: {
        title: "Data Analyst & Developer",
        description: "Built complete financial analysis suite with interactive visualizations:",
        achievements: [
          "Interactive Tableau dashboards with dynamic filtering and personalized insights",
          "Excel models with compound interest calculators and risk assessment frameworks", 
          "Automated budgeting tools tracking income, expenses, and savings goals",
          "Financial projection models accounting for market volatility scenarios"
        ]
      },
      metrics: [
        { label: "Investment Scenarios", value: "50+", color: "bg-green-100 text-green-800" },
        { label: "Data Visualizations", value: "25", color: "bg-blue-100 text-blue-800" },
        { label: "Financial Models", value: "8", color: "bg-purple-100 text-purple-800" },
        { label: "Accuracy Rate", value: "92%", color: "bg-orange-100 text-orange-800" }
      ],
      images: [
        "/tableu.jpg?height=600&width=800",
        "/excel.jpg?height=600&width=800",
      ],
      imageCaptions: [
        "Main dashboard showing portfolio overview",
        "Detailed financial projection and analysis charts"
      ],
      challenges: [
  { 
    title: "Complex Financial Modeling", 
    description: "Developed Monte Carlo simulations for risk analysis processing 10,000+ scenarios to provide accurate investment projections." 
  },
  { 
    title: "Data Integration Complexity",       
    description: "Unified disparate financial data sources handling different formats and frequencies into cohesive analytical framework." 
  },
],
workProcess: [
  {
    title: "Financial Requirements Analysis",
    description: "Conducted analysis of 25+ investment strategies and identified key performance indicators required for comprehensive portfolio analysis.",
    tasks: ["Strategy Analysis", "KPI Identification", "Requirements Gathering"],
    icon: Search
  },
  {
    title: "Advanced Modeling",
    description: "Built sophisticated Excel models with dynamic scenarios and implemented VBA automation for complex financial calculations and projections.",
    tasks: ["Excel Modeling", "VBA Automation", "Scenario Planning"],
    icon: Code
  },
  {
    title: "Visualization Development",
    description: "Created interactive Tableau dashboards with drill-down capabilities and implemented real-time data connections for live market updates.",
    tasks: ["Interactive Dashboards", "Data Connections", "Drill-down Features"],
    icon: Wrench
  },
  {
    title: "Model Validation",
    description: "Validated models against 5 years of historical performance data and achieved 89% accuracy in return predictions across different market conditions.",
    tasks: ["Historical Validation", "Accuracy Testing", "Performance Analysis"],
    icon: CheckCircle
  }
],
      liveUrl: "#",
      githubUrl: "https://github.com/aryannjdesai/Data-Analysis",
      metadata: {
        techStack: ["Tableau", "Excel", "Data Visualization", "Financial Modeling"],
        role: "Data Analyst & Developer",
        tools: ["Tableau", "Microsoft Excel", "Data Analysis Tools"],
        timeline: "Personal Finance Project",
      },
     sections: [
  {
    title: "Investment Tools",
    content:
      "Created Excel tools including interest calculators, portfolio planning sheets, and risk checkers supporting better decisions.",
  },
  {
    title: "Interactive Dashboards",
    content:
      "Built dynamic Tableau dashboards visualizing performance, trends, and projections with personalized filtering capabilities.",
  },
  {
    title: "Budgeting System",
    content:
      "Developed comprehensive budgeting tracking income, expenses, and goals with automated calculations and financial planning.",
  },
],
      credits: [
        {
          title: "Financial Data Sources",
          description:
            "Integrated data from various financial markets ensuring accurate, up-to-date information for analysis.",
        },
        {
          title: "Finance Community",
          description:
            "Leveraged insights from financial planning communities validating modeling approaches and practical applicability.",
        },
      ],
    },
  }

  const project = projectData[projectId as keyof typeof projectData] || projectData["initiate-platform"]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length)
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Header with Back Button */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto">
          <Link href="/portfolio">
            <motion.div
              whileHover={{ x: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="inline-flex items-center text-slate-600 hover:text-slate-900 transition-colors duration-300"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to Portfolio
            </motion.div>
          </Link>
        </div>
      </section>

      {/* Hero Section - Title and Summary */}
      <section ref={heroRef} className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-slate-900 mb-6 tracking-tight leading-tight">
              {project.title}
            </h1>
            <div className="w-16 h-1 bg-slate-900 mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-slate-600 font-light max-w-4xl mx-auto leading-relaxed">
              {project.summary}
            </p>
          </motion.div>
        </div>
      </section>

{/* My Role Section */}
<section ref={roleRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
  <div className="max-w-7xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={isRoleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="bg-white rounded-2xl p-8 card-shadow-lg border border-slate-100">
        <div className="flex items-center justify-center mb-6">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
            <Users className="text-blue-600" size={24} />
          </div>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-slate-900">My Role</h2>
        </div>
        
        <div className="mb-6 text-center">
          <h3 className="text-xl font-medium text-slate-900 mb-2">Served as {project.myRole.title} and built:</h3>
          <p className="text-base text-slate-600">{project.myRole.description}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {project.myRole.achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isRoleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="bg-slate-50 rounded-lg p-4 border border-slate-200"
            >
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                  <CheckCircle className="text-white" size={12} />
                </div>
                <p className="text-slate-700 text-sm leading-relaxed">{achievement}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  </div>
</section>

      {/* Metrics Section */}
      <section ref={metricsRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={isMetricsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight text-slate-900">Project Impact</h2>
            <div className="w-16 h-1 bg-slate-900 mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-slate-600 font-light max-w-3xl mx-auto">
              Key metrics and achievements demonstrating the success and impact of this project
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {project.metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isMetricsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                className="bg-white rounded-2xl p-8 text-center card-shadow-lg border border-slate-100"
              >
                <div className="mb-4">
                  <span className={`inline-block px-4 py-2 rounded-full text-2xl font-bold ${metric.color}`}>
                    {metric.value}
                  </span>
                </div>
                <h3 className="text-slate-700 font-medium text-sm">{metric.label}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Section - 3 Column Layout with Carousel */}
      <section ref={mainRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left Column - Metadata */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isMainInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="lg:col-span-3 space-y-6"
            >
              {/* Tech Stack */}
              <div className="bg-white rounded-2xl p-6 card-shadow">
                <div className="flex items-center mb-4">
                  <Code size={18} className="mr-2 text-slate-600" />
                  <h3 className="text-lg font-medium text-slate-900">Tech Stack</h3>
                </div>
                <div className="space-y-2">
                  {project.metadata.techStack.map((tech, index) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isMainInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                      className="text-slate-600 text-sm"
                    >
                      {tech}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Role */}
              <div className="bg-white rounded-2xl p-6 card-shadow">
                <div className="flex items-center mb-4">
                  <Target size={18} className="mr-2 text-slate-600" />
                  <h3 className="text-lg font-medium text-slate-900">Role</h3>
                </div>
                <p className="text-slate-600 text-sm">{project.metadata.role}</p>
              </div>

              {/* Tools Used */}
              <div className="bg-white rounded-2xl p-6 card-shadow">
                <div className="flex items-center mb-4">
                  <Wrench size={18} className="mr-2 text-slate-600" />
                  <h3 className="text-lg font-medium text-slate-900">Tools Used</h3>
                </div>
                <div className="space-y-2">
                  {project.metadata.tools.map((tool, index) => (
                    <motion.div
                      key={tool}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isMainInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      className="text-slate-600 text-sm"
                    >
                      {tool}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Timeline */}
              <div className="bg-white rounded-2xl p-6 card-shadow">
                <div className="flex items-center mb-4">
                  <Calendar size={18} className="mr-2 text-slate-600" />
                  <h3 className="text-lg font-medium text-slate-900">Timeline</h3>
                </div>
                <p className="text-slate-600 text-sm">{project.metadata.timeline}</p>
              </div>
            </motion.div>

            {/* Center Column - Image Carousel + Challenges */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isMainInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="lg:col-span-6 space-y-8"
            >
              {/* Image Carousel */}
              <div className="relative overflow-hidden rounded-2xl bg-gray-100 border border-slate-200 card-shadow-lg">
                {/* Main Image */}
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-gray-100">
                  <img
                    src={project.images[currentImageIndex]}
                    alt={`${project.title} screenshot`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent"></div>

                  {/* Navigation Arrows */}
                  {project.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300 shadow-lg"
                      >
                        <ChevronLeft className="text-slate-700" size={20} />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300 shadow-lg"
                      >
                        <ChevronRight className="text-slate-700" size={20} />
                      </button>
                    </>
                  )}

                  {/* Image Counter */}
                  {project.images.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="text-white text-sm">
                        {currentImageIndex + 1} / {project.images.length}
                      </span>
                    </div>
                  )}
                </div>

                {/* Caption below the image */}
                <p className="mt-2 px-4 text-center text-xs text-slate-500">
                  {project.imageCaptions?.[currentImageIndex] ?? 
                   `Slide ${currentImageIndex + 1} of ${project.images.length}`}
                </p>

                {/* Thumbnail Navigation */}
                {project.images.length > 1 && (
                  <div className="p-4 bg-white border-t border-slate-200">
                    <div className="flex space-x-2 overflow-x-auto">
                      {project.images.map((image, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition-colors duration-300 ${
                            index === currentImageIndex ? "border-slate-900" : "border-slate-200 hover:border-slate-400"
                          }`}
                        >
                          <img
                            src={image || "/placeholder.svg"}
                            alt={`Thumbnail ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Challenges Section */}
              {project.challenges && project.challenges.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-2xl font-light text-slate-900 text-center"><b>Challenges Faced</b></h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {project.challenges.map((challenge, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isMainInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                        className="bg-white rounded-xl p-6 card-shadow border border-slate-100"
                      >
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-6 h-6 bg-slate-900 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-medium">{index + 1}</span>
                          </div>
                          <div className="flex-1">
                            <h4 className="text-base font-medium text-slate-900 mb-2">{challenge.title}</h4>
                            <p className="text-slate-600 text-sm leading-relaxed">{challenge.description}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>

            {/* Right Column - Description and Action Buttons */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isMainInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="lg:col-span-3 space-y-6"
            >
              {/* About This Project */}
              <div className="bg-white rounded-2xl p-6 card-shadow">
                <h3 className="text-2xl font-light text-slate-900 mb-6"><b>About This Project</b></h3>
                <p className="text-slate-600 text-base leading-relaxed mb-8">{project.description}</p>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full">
                    <Button className="w-full bg-slate-900 text-white hover:bg-slate-800 py-3 rounded-full" asChild>
                      
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full">
                    <Button
                      variant="outline"
                      className="w-full border-2 border-slate-300 text-slate-900 hover:bg-slate-50 bg-transparent py-3 rounded-full"
                      asChild
                    >
                      
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Deep Dive - Moved here */}
      <section ref={contentRef} className="px-4 sm:px-6 lg:px-8 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={isContentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight text-slate-900">Project Deep Dive</h2>
            <div className="w-16 h-1 bg-slate-900 mb-8"></div>
            <p className="text-lg md:text-xl text-slate-600 font-light max-w-3xl">
              Detailed insights into development process, challenges overcome, and solutions implemented
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {project.sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isContentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                className="space-y-6"
              >
                <h3 className="text-2xl md:text-3xl font-light text-slate-900">{section.title}</h3>
                <p className="text-slate-600 text-lg leading-relaxed">{section.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Process Section */}
      <section ref={processRef} className="px-4 sm:px-6 lg:px-8 py-20 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={isProcessInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight text-slate-900">Work Process</h2>
            <div className="w-16 h-1 bg-slate-900 mb-8"></div>
            <p className="text-lg md:text-xl text-slate-600 font-light max-w-3xl">
              Detailed breakdown of methodology and approach used to bring this project to life
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {project.workProcess.map((process, index) => (
              <motion.div
                key={process.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isProcessInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                className="bg-white rounded-2xl p-6 card-shadow border border-slate-100"
              >
                {/* Icon and Title */}
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mr-4">
                    <process.icon className="text-white" size={20} />
                  </div>
                  <h3 className="text-xl font-medium text-slate-900">{process.title}</h3>
                </div>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{process.description}</p>
                
                {/* Tasks */}
                <div className="flex flex-wrap gap-2">
                  {process.tasks.map((task, taskIndex) => (
                    <span
                      key={taskIndex}
                      className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded border border-slate-200"
                    >
                      {task}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
               
      {/* Credits Section */}
      <section ref={creditsRef} className="px-4 sm:px-6 lg:px-8 pb-20 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={isCreditsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight text-slate-900">Team Credits</h2>
            <div className="w-16 h-1 bg-slate-900 mb-8"></div>
            <p className="text-lg md:text-xl text-slate-600 font-light max-w-3xl">
              Acknowledging talented individuals who contributed to this project's success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16">
            {project.credits.map((credit, index) => (
              <motion.div
                key={credit.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isCreditsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                className="space-y-4"
              >
                <h3 className="text-2xl font-light text-slate-900">{credit.title}</h3>
                <p className="text-slate-600 text-lg leading-relaxed">{credit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}