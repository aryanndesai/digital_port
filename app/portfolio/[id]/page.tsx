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
  const contentRef = useRef(null)
  const mainRef = useRef(null)
  const processRef = useRef(null)
  const creditsRef = useRef(null)

  const isHeroInView = useInView(heroRef, { once: true, margin: "-20%" })
  const isContentInView = useInView(contentRef, { once: true, margin: "-20%" })
  const isMainInView = useInView(mainRef, { once: true, margin: "-20%" })
  const isProcessInView = useInView(processRef, { once: true, margin: "-20%" })
  const isCreditsInView = useInView(creditsRef, { once: true, margin: "-20%" })

  // Project data with unique content for each project
  const projectData = {
    "initiate-platform": {
      title: "Initiate",
      summary: "A startup which allows AI-powered marketplace connecting startups with solutions through intelligent dashboards and analytics",
      description:
        "As a Full Stack Developer at Initiate Pte Ltd, I built comprehensive AI-driven admin dashboards and in-app analytics panels. This platform serves as a marketplace for AI solutions, where I led prompt engineering to optimize insights delivery and implemented full in-app and email notification systems that significantly improved user retention and admin response times. The project showcases modern web development practices combined with artificial intelligence to create meaningful business solutions.",
      images: [
        "/main.png?height=600&width=800",
        "/second.png?height=600&width=800",
        "/third.png?height=600&width=800",
        "/fourth.png?height=600&width=800",
      ],
      imageCaptions: [
        "Main landing page showing AI insights and recommended services for you",
        "A RAG chatbot powered by AI",
        "Resource Hub which allows SMEs to seek for grants by governments",
        "AI solution marketplace browsing interface"
      ],
      challenges: [
        { 
          title: "Scaling Marketplace", 
          description: "Built microservices with a one stop experience and getting AI startups on board to list their services with us." 
        },
        { 
          title: "Secure Payments",       
          description: "Implemented Stripe orchestration with fraud-detection rules to support multi-currency, subscription & usage billing." 
        },
      ],
      workProcess: [
        {
          title: "Research & Discovery",
          description: "Conducted market research to understand the AI tools landscape and identified pain points in AI adoption. Interviewed 15+ startups to discover that 73% struggled with finding reliable AI solutions and 68% faced integration challenges.",
          tasks: ["Market Analysis", "User Interviews", "Competitive Research"],
          icon: Search
        },
        {
          title: "System Architecture",
          description: "Designed scalable architecture to handle complex marketplace requirements including dynamic pricing, real-time availability, multi-tenant isolation, and seamless payment processing across multiple AI service providers.",
          tasks: ["System Design", "Database Architecture", "API Development"],
          icon: Code
        },
        {
          title: "MVP Development",
          description: "Built the initial platform focusing on core marketplace functionality: service discovery, user management, and basic payment processing. Implemented vector search using Upstash for intelligent service recommendations and integrated Google Gemini for AI-powered advisory features.",
          tasks: ["Frontend Development", "Backend Integration", "Payment Systems"],
          icon: Wrench
        },
        {
          title: "Testing & Optimization",
          description: "Launched beta with 5 early adopters, gathering feedback on user experience and platform stability. Implemented automated testing, performance monitoring, and continuous deployment pipelines. Refined the AI recommendation engine based on usage patterns and user feedback.",
          tasks: ["Beta Testing", "Performance Optimization", "User Feedback Integration"],
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
          title: "Notification Systems",
          content:
            "Developed comprehensive in-app and email notification systems that improved user retention rates significantly. Created a modular review system for user feedback and suggestions across all platform components, enhancing the overall user experience and admin response capabilities.",
        },
      ],
      credits: [
        {
          title: "Business Team",
          description:
            "The team worked closely with business stakeholders to understand user needs and translate them into technical requirements, ensuring the platform meets market demands and provides real value to startups.",
        },
        {
          title: "Product Design Team",
          description:
            "Worked closely with my friends to create intuitive dashboard interfaces and user experience flows that make complex AI insights accessible to non-technical users. And have overall seamless feature integration of all the code.",
        },
      ],
    },
    "ml-stock-predictor": {
      title: "ML Stock Predictor",
      summary: "Machine learning application that predicts stock price movements using advanced AI algorithms",
      description:
        "Built a sophisticated machine learning tool that analyzes historical stock data to predict whether a stock's price will go up or down using past trends and incorporating financial indicators to predict. This project combines financial trend analysis with artificial intelligence techniques to generate smarter stock predictions which keep learning over time, featuring comprehensive data visualization through interactive charts and dashboards. The system processes large datasets and applies various ML algorithms to identify patterns and make accurate predictions.",
      images: [
        "/mlbr.png?height=600&width=800",
        "/mlc.png?height=600&width=800",
        "/mlcode.png?height=600&width=800",
      ],
      imageCaptions: [
        "Shows how accurate the model is and above",
        "Shows the stock predictions of Apple stock and yellow bar up means the stock will go up",
        "Main code with the files that save data and help train model"
      ],
      challenges: [
        { 
          title: "Data Quality Issues", 
          description: "Developed robust data cleaning pipelines to handle missing values, outliers, and inconsistent financial data formats." 
        },
        { 
          title: "Model Accuracy",       
          description: "Experimented with multiple ML algorithms and feature engineering techniques to improve prediction accuracy in volatile markets." 
        },
      ],
      workProcess: [
        {
          title: "Data Collection & Analysis",
          description: "Gathered historical stock data from multiple financial APIs and conducted extensive exploratory data analysis. Identified key patterns in market behavior and selected relevant features including technical indicators, trading volumes, and price movements.",
          tasks: ["Data Sourcing", "Feature Selection", "Pattern Recognition"],
          icon: Search
        },
        {
          title: "Model Development",
          description: "Implemented multiple machine learning algorithms including Random Forest, LSTM neural networks, and regression models. Used feature engineering techniques to create meaningful indicators and tested different model architectures to optimize prediction accuracy.",
          tasks: ["Algorithm Implementation", "Feature Engineering", "Model Training"],
          icon: Code
        },
        {
          title: "Backtesting & Validation",
          description: "Developed comprehensive backtesting framework to evaluate model performance across different market conditions. Implemented cross-validation techniques and created performance metrics to measure prediction accuracy and risk-adjusted returns.",
          tasks: ["Backtesting Framework", "Performance Metrics", "Risk Assessment"],
          icon: Wrench
        },
        {
          title: "Deployment & Monitoring",
          description: "Built real-time prediction system with automated data updates and model retraining capabilities. Created visualization dashboards to display predictions and implemented monitoring systems to track model performance and detect data drift.",
          tasks: ["Real-time Processing", "Dashboard Creation", "Performance Monitoring"],
          icon: CheckCircle
        }
      ],
      liveUrl: "#",
      githubUrl: "https://github.com/aryannjdesai/ML-Stock-Predictor",
      metadata: {
        techStack: ["Python", "Machine Learning", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
        role: "ML Engineer & Developer",
        tools: ["Jupyter Notebook", "Python", "Git", "Data Analysis Tools"],
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
            "Created comprehensive data visualization dashboards that display prediction results, model performance metrics, and historical trend analysis. The system provides clear, actionable insights through interactive charts and real-time prediction updates.",
        },
      ],
      credits: [
        {
          title: "Financial Data Providers",
          description:
            "Integrated with various financial data APIs and sources to ensure accurate and up-to-date market information for model training and predictions.",
        },
        {
          title: "ML Research Community",
          description:
            "Leveraged open-source machine learning libraries and research papers to implement state-of-the-art algorithms for financial prediction modeling.",
        },
      ],
    },
    "eco-primers": {
      title: "Eco Primers",
      summary: "Sustainability web application with AI-powered verification and gamification for environmental actions",
      description:
        "Developed a comprehensive sustainability platform that encourages eco-friendly actions through innovative technology. The application features AI-powered image verification to automatically validate user-submitted environmental tasks, ensuring authenticity and accuracy. Built a sophisticated gamification system that rewards users for eco-friendly actions, driving engagement and promoting sustainable behaviors. The platform combines environmental consciousness with modern web technologies to create meaningful impact.",
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
          title: "AI Verification Accuracy", 
          description: "Trained custom image recognition models to accurately verify diverse environmental actions with minimal false positives." 
        },
        { 
          title: "User Engagement",       
          description: "Designed gamification mechanics that balanced competition with collaboration to drive sustained eco-friendly behaviors and tried to implement games that enhance user retention." 
        },
      ],
      workProcess: [
        {
          title: "Environmental Research",
          description: "Conducted extensive research on environmental practices and sustainability initiatives. Analyzed user behavior patterns in environmental apps and identified key motivators for eco-friendly actions. Collaborated with environmental experts to validate the impact measurement framework.",
          tasks: ["Sustainability Research", "User Behavior Analysis", "Expert Consultation"],
          icon: Search
        },
        {
          title: "AI Integration Design",
          description: "Designed and implemented AI-powered image verification system to authenticate environmental actions. Integrated machine learning models for image recognition and developed classification algorithms to identify different types of eco-friendly activities.",
          tasks: ["AI Model Selection", "Image Processing", "Classification Algorithms"],
          icon: Code
        },
        {
          title: "Gamification Development",
          description: "Built comprehensive gamification system with points, badges, and leaderboards to encourage user participation. Implemented social features and challenges to create community engagement around environmental consciousness.",
          tasks: ["Gamification Mechanics", "Social Features", "Reward Systems"],
          icon: Wrench
        },
        {
          title: "Impact Tracking",
          description: "Created analytics dashboard to track individual and collective environmental impact. Implemented metrics for carbon footprint reduction, waste prevention, and other sustainability indicators with real-time updates and progress visualization.",
          tasks: ["Impact Metrics", "Dashboard Creation", "Progress Tracking"],
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
          title: "AI-Powered Verification System",
          content:
            "Integrated advanced AI image recognition technology to automatically verify user-submitted environmental tasks. The system can identify and validate various eco-friendly actions like recycling, tree planting, and waste reduction activities, ensuring the authenticity of user contributions to the platform.",
        },
        {
          title: "Gamification & User Engagement",
          content:
            "Designed and implemented a comprehensive gamification system that rewards users with points, badges, and achievements for completing eco-friendly tasks. The system includes leaderboards, challenges, and social features that encourage continued participation and community building around environmental consciousness.",
        },
        {
          title: "Impact Tracking & Analytics",
          content:
            "Built analytics dashboards that track individual and collective environmental impact, showing users how their actions contribute to larger sustainability goals. The platform provides detailed insights into carbon footprint reduction, waste prevention, and other environmental metrics.",
        },
      ],
      credits: [
        {
          title: "Environmental Awareness",
          description:
            "Our platform prioritizes and promotes the 3 Rs of recycling: Reduce, Reuse, and Recycle, to encourage sustainable practices and help users minimize their environmental footprint.",
        },
        {
          title: "AI Technology Partners",
          description:
            "Collaborated with AI service providers to implement robust image recognition and verification systems that maintain high accuracy in task validation.",
        },
      ],
    },
    "polyguru-platform": {
      title: "Polyguru",
      summary: "Student productivity platform with AI-enhanced forums and smart learning features",
      description:
        "Designed and developed a comprehensive student productivity platform that revolutionizes peer learning through technology. The platform features subject-based forums with intelligent filtering systems and AI-powered features that suggest relevant questions and resources to students. Built to boost peer learning and engagement, Polyguru creates a collaborative environment where students can share knowledge, ask questions, and learn from each other more effectively.",
      images: [
        "/test.png?height=600&width=800",
        "/GPA1.png?height=600&width=800",
        "/dasboard.png?height=600&width=800",
        "/x.png?height=600&width=800"
      ],
      imageCaptions: [
        "AI powered testing system to test you on your weaknesses",
        "Subject-based forum interface with AI suggestions",
        "Student progress tracking and analytics dashboard",
        "A overall view of all the services present"
      ],
      challenges: [
        { 
          title: "Content Moderation", 
          description: "Implemented AI-assisted moderation tools to maintain academic integrity while encouraging open discussion. And while using ai to learn better ensuring the learning process occurs." 
        },
        { 
          title: "Personalization at Scale",       
          description: "Developed recommendation algorithms that adapt to individual learning styles without compromising performance." 
        },
      ],
      workProcess: [
        {
          title: "Educational Research",
          description: "Conducted comprehensive research on peer learning methodologies and student engagement patterns. Interviewed educators and students to understand pain points in current learning systems and identified opportunities for technology-enhanced collaboration.",
          tasks: ["Learning Theory Research", "Student Interviews", "Educator Consultation"],
          icon: Search
        },
        {
          title: "Platform Architecture",
          description: "Designed scalable platform architecture to support subject-based forums, AI recommendations, and real-time collaboration. Built intelligent filtering systems and implemented AI-powered content suggestions to enhance learning experience.",
          tasks: ["System Architecture", "AI Integration", "Database Design"],
          icon: Code
        },
        {
          title: "Feature Development",
          description: "Developed core features including smart forums, progress tracking, and collaborative tools. Implemented AI-powered study recommendations and created adaptive learning paths based on individual student performance and preferences.",
          tasks: ["Forum Development", "AI Recommendations", "Progress Tracking"],
          icon: Wrench
        },
        {
          title: "User Testing & Optimization",
          description: "Conducted extensive testing with student groups to validate learning effectiveness and user engagement. Iteratively improved the platform based on feedback and implemented analytics to measure learning outcomes and platform performance.",
          tasks: ["Beta Testing", "Learning Analytics", "Performance Optimization"],
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
          title: "Smart Forum System",
          content:
            "Developed subject-based forums with advanced filtering and categorization systems that help students find relevant discussions quickly. The platform organizes content by subjects, difficulty levels, and topics, making it easy for students to navigate and contribute to meaningful conversations.",
        },
        {
          title: "AI-Powered Recommendations",
          content:
            "Implemented AI features that analyze user behavior and learning patterns to suggest relevant questions, study materials, and peer connections. The system learns from user interactions to provide increasingly personalized recommendations that enhance the learning experience.",
        },
        {
          title: "Peer Learning Enhancement",
          content:
            "Created features that facilitate effective peer-to-peer learning, including study groups, collaborative problem-solving tools, and knowledge sharing mechanisms. The platform encourages active participation and helps students learn from diverse perspectives and approaches.",
        },
      ],
      credits: [
        {
          title: "Educational Advisors",
          description:
            "Consulted with education professionals like our subject teachers to ensure the platform aligns with effective learning methodologies and student needs. Understand what it means for the learning process to occur. Essentially a empathy study.",
        },
        {
          title: "Student Beta Testers",
          description:
            "Worked closely with student groups like some of our mutual friends to test features, gather feedback, and iterate on the platform design to maximize learning effectiveness and user engagement.",
        },
      ],
    },
    "pokemon-pocket": {
      title: "Pokemon Pocket Game",
      summary: "A Individual Console-based Pokemon game with advanced C# gameplay mechanics and progression systems",
      description:
        "Built a comprehensive console-based Pokemon game using advanced C#/.NET practices, featuring sophisticated gameplay mechanics including Pokemon tracking, evolution systems, and quest progression. The game demonstrates object-oriented programming principles, database integration, and complex game state management. Players can capture, train, and evolve Pokemon while completing various quests and challenges in an immersive text-based adventure.",
      images: [
        "/pokemon1.avif?height=600&width=800",
        "/pokecode.png?height=600&width=800"
      ], 
      imageCaptions: [
        "Main game interface showing battle system",
        "Code in c# showcasing game mechanics"
      ],
      challenges: [
        { 
          title: "Game Balance", 
          description: "Designed and tuned battle mechanics to ensure fair gameplay while maintaining the Pokemon franchise feel." 
        },
        { 
          title: "State Management",       
          description: "Implemented efficient save/load systems to handle complex game state including Pokemon stats, items, and quest progress." 
        },
      ],
      workProcess: [
        {
          title: "Game Design & Planning",
          description: "Researched classic Pokemon game mechanics and RPG design principles to create authentic gameplay experience. Planned game architecture with object-oriented design patterns and defined core gameplay loops including battles, evolution, and progression systems.",
          tasks: ["Game Mechanics Research", "Architecture Planning", "Feature Design"],
          icon: Search
        },
        {
          title: "Core System Development",
          description: "Implemented fundamental game systems using C# and .NET Framework. Built Pokemon classes, battle mechanics, and database integration using SQLite for persistent game state management and player progress tracking.",
          tasks: ["Object-Oriented Programming", "Database Integration", "Core Mechanics"],
          icon: Code
        },
        {
          title: "Feature Implementation",
          description: "Developed advanced features including Pokemon evolution trees, quest progression systems, and turn-based battle mechanics. Created comprehensive type system with effectiveness calculations and strategic combat elements.",
          tasks: ["Battle System", "Evolution Mechanics", "Quest System"],
          icon: Wrench
        },
        {
          title: "Testing & Refinement",
          description: "Conducted extensive playtesting to balance gameplay mechanics and ensure engaging user experience. Refined combat systems, adjusted difficulty curves, and implemented feedback from peer testing to enhance overall game quality.",
          tasks: ["Game Balance Testing", "User Feedback", "Performance Optimization"],
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
          title: "Game Architecture & Design",
          content:
            "Architected a robust game system using advanced C# programming practices, implementing design patterns like Factory and Observer to manage Pokemon creation, evolution, and battle systems. The game features a clean separation of concerns with distinct classes for Pokemon, trainers, battles, and quest management.",
        },
        {
          title: "Database Integration",
          content:
            "Integrated SQLite database to persist game state, Pokemon data, and player progress. The system tracks Pokemon stats, evolution requirements, quest completion, and player achievements, ensuring data integrity and providing seamless save/load functionality.",
        },
        {
          title: "Gameplay Mechanics",
          content:
            "Implemented complex gameplay features including Pokemon capture mechanics, turn-based battle systems, evolution trees, and quest progression. The game includes various Pokemon types, abilities, and strategic elements that create engaging and challenging gameplay experiences.",
        },
      ],
      credits: [
        {
          title: "Peers",
          description:
            "A experience where I went outside of scope to understand users perspective of the game and how they want it to be like thanks to my friends suggestions this app was refined.",
        },
        {
          title: "Programming Mentors",
          description:
            "Received guidance from programming instructors and peers to implement advanced C# concepts and best practices in game development architecture.",
        },
      ],
    },
    "financial-dashboard": {
      title: "Financial Analysis Dashboard",
      summary: "Interactive investment dashboard with return projections and financial insights visualization",
      description:
        "Created comprehensive financial analysis tools using Excel and Tableau to build interactive dashboards for investment overview projections and financial insights. The project demonstrates advanced data visualization techniques and financial modeling capabilities, providing users with clear, actionable insights into investment performance, budgeting tools, and return projections for various financial scenarios.",
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
          title: "Data Visualization", 
          description: "Created interactive financial charts that clearly communicate complex investment concepts to non-technical users." 
        },
        { 
          title: "Model Accuracy",       
          description: "Developed robust financial models that account for market volatility while providing reliable projections." 
        },
      ],
      workProcess: [
        {
          title: "Financial Analysis Planning",
          description: "Researched investment analysis methodologies and financial modeling techniques. Identified key metrics for portfolio performance evaluation and defined requirements for interactive dashboard functionality and user experience.",
          tasks: ["Financial Research", "Requirements Analysis", "Tool Selection"],
          icon: Search
        },
        {
          title: "Data Model Development",
          description: "Built comprehensive Excel models for investment analysis including compound interest calculators, risk assessment frameworks, and portfolio diversification tools. Implemented financial formulas and automated calculations for various investment scenarios.",
          tasks: ["Excel Modeling", "Financial Formulas", "Automation"],
          icon: Code
        },
        {
          title: "Dashboard Creation",
          description: "Developed interactive Tableau dashboards that visualize investment performance, market trends, and financial projections. Created dynamic charts and graphs with filtering capabilities for personalized insights and analysis.",
          tasks: ["Tableau Development", "Data Visualization", "Interactive Features"],
          icon: Wrench
        },
        {
          title: "Testing & Validation",
          description: "Validated financial models against historical data and tested dashboard functionality with various investment scenarios. Refined calculations and visualizations based on accuracy requirements and user feedback.",
          tasks: ["Model Validation", "Accuracy Testing", "User Interface Refinement"],
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
          title: "Investment Analysis Tools",
          content:
            "Gained skills in using Excel to create helpful investment tools, such as calculators for interest growth, simple portfolio planning sheets, and basic risk checkers. These tools support better decision-making using past data and future estimates.",
        },
        {
          title: "Interactive Dashboards",
          content:
            "Built dynamic Tableau dashboards that visualize investment performance, market trends, and financial projections through interactive charts and graphs. Users can filter data by time periods, investment types, and risk levels to gain personalized insights.",
        },
        {
          title: "Excel Sheet",
          content:
            "Learnt how to use Excel effectively by creating a budgeting sheet that tracks income, expenses, and savings goals. Applied formulas and functions to automate financial calculations and generate real-time summaries. This helped me understand how to visualize personal cash flow, manage budgets better, and plan for long-term financial stability.",
        },
      ],
      credits: [
        {
          title: "Financial Data Sources",
          description:
            "Integrated data from various financial markets and investment platforms to ensure accurate and up-to-date information for analysis and projections.",
        },
        {
          title: "Finance Community",
          description:
            "Leveraged insights from financial planning communities and investment forums to validate modeling approaches and ensure practical applicability of the tools.",
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

      
      <section ref={contentRef} className="px-4 sm:px-6 lg:px-8 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={isContentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight text-slate
            text-slate-900">Project Deep Dive</h2>
           <div className="w-16 h-1 bg-slate-900 mb-8"></div>
           <p className="text-lg md:text-xl text-slate-600 font-light max-w-3xl">
             Detailed insights into the development process, challenges overcome, and solutions implemented
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

     {/* Main Content Section - 3 Column Layout with Carousel */}
     <section ref={mainRef} className="py-20 px-4 sm:px-6 lg:px-8">
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

             {/* Challenges Section - Right below the image */}
             {project.challenges && project.challenges.length > 0 && (
               <div className="space-y-4">
                 <h3 className="text-2xl font-light text-slate-900 text-center">Challenges Faced</h3>
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
               <h3 className="text-2xl font-light text-slate-900 mb-6">About This Project</h3>
               <p className="text-slate-600 text-base leading-relaxed mb-8">{project.description}</p>

               {/* Action Buttons */}
               <div className="space-y-3">
                 <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full">
                   <Button className="w-full bg-slate-900 text-white hover:bg-slate-800 py-3 rounded-full" asChild>
                     <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                       <ExternalLink size={16} className="mr-2" />
                       View Live
                     </a>
                   </Button>
                 </motion.div>
                 <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full">
                   <Button
                     variant="outline"
                     className="w-full border-2 border-slate-300 text-slate-900 hover:bg-slate-50 bg-transparent py-3 rounded-full"
                     asChild
                   >
                     <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                       <Github size={16} className="mr-2" />
                       View Code
                     </a>
                   </Button>
                 </motion.div>
               </div>
             </div>
           </motion.div>
         </div>
       </div>
     </section>

     {/* Work Process Section */}
<section ref={processRef} className="px-4 sm:px-6 lg:px-8 py-20 bg-white">
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
        A detailed breakdown of the methodology and approach used to bring this project to life
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
             Acknowledging the talented individuals who contributed to this project's success
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