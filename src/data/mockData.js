// Real person photos from randomuser.me
const realPhotos = {
  mentor1: "https://randomuser.me/api/portraits/men/32.jpg",
  mentor2: "https://randomuser.me/api/portraits/women/44.jpg",
  mentor3: "https://randomuser.me/api/portraits/men/75.jpg",
  mentor4: "https://randomuser.me/api/portraits/women/68.jpg",
  mentor5: "https://randomuser.me/api/portraits/men/22.jpg",
  mentor6: "https://randomuser.me/api/portraits/women/65.jpg",
  mentor7: "https://randomuser.me/api/portraits/men/46.jpg",
  mentor8: "https://randomuser.me/api/portraits/women/33.jpg",
  mentor9: "https://randomuser.me/api/portraits/men/11.jpg",
  mentor10: "https://randomuser.me/api/portraits/women/17.jpg",
  mentor11: "https://randomuser.me/api/portraits/men/52.jpg",
  mentor12: "https://randomuser.me/api/portraits/men/36.jpg",
  // Review avatars
  review1: "https://randomuser.me/api/portraits/men/85.jpg",
  review2: "https://randomuser.me/api/portraits/women/21.jpg",
  review3: "https://randomuser.me/api/portraits/men/91.jpg",
  review4: "https://randomuser.me/api/portraits/women/56.jpg",
  review5: "https://randomuser.me/api/portraits/men/64.jpg",
  review6: "https://randomuser.me/api/portraits/women/29.jpg",
  review7: "https://randomuser.me/api/portraits/men/43.jpg",
  review8: "https://randomuser.me/api/portraits/women/88.jpg",
  review9: "https://randomuser.me/api/portraits/men/19.jpg",
  review10: "https://randomuser.me/api/portraits/women/72.jpg",
};

export const mentors = [
  {
    id: 1,
    name: "Ahmed Hassan",
    title: "Senior Software Engineer",
    company: "Google",
    avatar: realPhotos.mentor1,
    rating: 5.0,
    reviews: 127,
    price: 150,
    skills: ["React", "Node.js", "System Design", "TypeScript"],
    category: "Engineering",
    bio: "10+ years building scalable web applications. Passionate about mentoring the next generation of developers and helping them land their dream roles at top tech companies.",
    sessions: 340,
    responseTime: "< 1 hour",
    experience: "10+ years",
    languages: ["English", "Arabic"],
    availability: "Weekdays & Weekends"
  },
  {
    id: 2,
    name: "Sarah Chen",
    title: "Product Design Lead",
    company: "Airbnb",
    avatar: realPhotos.mentor2,
    rating: 4.9,
    reviews: 98,
    price: 120,
    skills: ["UI/UX", "Figma", "Design Systems", "User Research"],
    category: "Design",
    bio: "Leading design at Airbnb for 6 years. I help designers level up their craft and build portfolios that stand out.",
    sessions: 256,
    responseTime: "< 2 hours",
    experience: "8 years",
    languages: ["English", "Mandarin"],
    availability: "Weekdays"
  },
  {
    id: 3,
    name: "Omar Ali",
    title: "Startup Founder & CEO",
    company: "TechVentures",
    avatar: realPhotos.mentor3,
    rating: 4.8,
    reviews: 76,
    price: 200,
    skills: ["Startups", "Fundraising", "Product Strategy", "Leadership"],
    category: "Startup",
    bio: "Serial entrepreneur with 3 successful exits. I guide founders through the journey from idea to Series A and beyond.",
    sessions: 180,
    responseTime: "< 4 hours",
    experience: "12 years",
    languages: ["English", "Arabic", "French"],
    availability: "Weekdays"
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    title: "ML Engineering Manager",
    company: "Meta",
    avatar: realPhotos.mentor4,
    rating: 5.0,
    reviews: 112,
    price: 180,
    skills: ["Machine Learning", "Python", "AI", "Data Science"],
    category: "AI",
    bio: "Leading ML teams at Meta. Specialized in NLP and recommendation systems. Passionate about making AI accessible.",
    sessions: 290,
    responseTime: "< 2 hours",
    experience: "9 years",
    languages: ["English", "Spanish"],
    availability: "Weekdays & Weekends"
  },
  {
    id: 5,
    name: "James Park",
    title: "Senior Product Manager",
    company: "Stripe",
    avatar: realPhotos.mentor5,
    rating: 4.9,
    reviews: 89,
    price: 140,
    skills: ["Product Management", "Strategy", "Analytics", "Agile"],
    category: "Product",
    bio: "Shipped products used by millions at Stripe. I help aspiring and current PMs sharpen their product thinking.",
    sessions: 210,
    responseTime: "< 1 hour",
    experience: "7 years",
    languages: ["English", "Korean"],
    availability: "Weekdays"
  },
  {
    id: 6,
    name: "Nadia Petrova",
    title: "Growth Marketing Director",
    company: "Shopify",
    avatar: realPhotos.mentor6,
    rating: 4.7,
    reviews: 64,
    price: 110,
    skills: ["Growth", "SEO", "Content Marketing", "Analytics"],
    category: "Marketing",
    bio: "Scaled Shopify's content marketing from 0 to 10M monthly visitors. Expert in growth strategies for SaaS companies.",
    sessions: 145,
    responseTime: "< 3 hours",
    experience: "8 years",
    languages: ["English", "Russian"],
    availability: "Weekdays"
  },
  {
    id: 7,
    name: "Daniel Kim",
    title: "VP of Engineering",
    company: "Netflix",
    avatar: realPhotos.mentor7,
    rating: 5.0,
    reviews: 156,
    price: 250,
    skills: ["Leadership", "Engineering Management", "Architecture", "Career Growth"],
    category: "Leadership",
    bio: "20+ years in tech, currently VP at Netflix. I help engineers transition into leadership and scale their impact.",
    sessions: 410,
    responseTime: "< 6 hours",
    experience: "20+ years",
    languages: ["English"],
    availability: "Weekends"
  },
  {
    id: 8,
    name: "Lina Mahmoud",
    title: "Career Coach & Recruiter",
    company: "LinkedIn",
    avatar: realPhotos.mentor8,
    rating: 4.9,
    reviews: 203,
    price: 90,
    skills: ["Career Coaching", "Resume Review", "Interview Prep", "Networking"],
    category: "Career",
    bio: "Former tech recruiter at LinkedIn. I've reviewed 10,000+ resumes and helped hundreds land their dream jobs.",
    sessions: 520,
    responseTime: "< 1 hour",
    experience: "6 years",
    languages: ["English", "Arabic"],
    availability: "Weekdays & Weekends"
  },
  {
    id: 9,
    name: "Alex Turner",
    title: "Full Stack Developer",
    company: "Spotify",
    avatar: realPhotos.mentor9,
    rating: 4.8,
    reviews: 71,
    price: 100,
    skills: ["JavaScript", "React", "PostgreSQL", "DevOps"],
    category: "Engineering",
    bio: "Building music streaming features at Spotify. I love teaching full-stack development from scratch.",
    sessions: 160,
    responseTime: "< 2 hours",
    experience: "5 years",
    languages: ["English"],
    availability: "Weekdays & Weekends"
  },
  {
    id: 10,
    name: "Priya Sharma",
    title: "Data Engineer",
    company: "Amazon",
    avatar: realPhotos.mentor10,
    rating: 4.9,
    reviews: 88,
    price: 130,
    skills: ["Data Engineering", "AWS", "Spark", "Python"],
    category: "Engineering",
    bio: "Building data pipelines at scale in Amazon. Expert in cloud-native data architectures and big data technologies.",
    sessions: 195,
    responseTime: "< 3 hours",
    experience: "7 years",
    languages: ["English", "Hindi"],
    availability: "Weekdays"
  },
  {
    id: 11,
    name: "Marco Bianchi",
    title: "Mobile Dev Lead",
    company: "Uber",
    avatar: realPhotos.mentor11,
    rating: 4.8,
    reviews: 59,
    price: 135,
    skills: ["React Native", "iOS", "Android", "Flutter"],
    category: "Engineering",
    bio: "Leading mobile development at Uber. Shipped apps with 100M+ downloads. Passionate about mobile UX.",
    sessions: 130,
    responseTime: "< 2 hours",
    experience: "8 years",
    languages: ["English", "Italian"],
    availability: "Weekdays"
  },
  {
    id: 12,
    name: "Yuki Tanaka",
    title: "Cybersecurity Architect",
    company: "Microsoft",
    avatar: realPhotos.mentor12,
    rating: 4.9,
    reviews: 45,
    price: 170,
    skills: ["Cybersecurity", "Cloud Security", "Ethical Hacking", "DevSecOps"],
    category: "Engineering",
    bio: "Securing cloud infrastructure at Microsoft. I help professionals break into cybersecurity and earn certifications.",
    sessions: 110,
    responseTime: "< 4 hours",
    experience: "11 years",
    languages: ["English", "Japanese"],
    availability: "Weekends"
  }
];

export const reviews = [
  {
    id: 1,
    mentorId: 1,
    userName: "Mohamed El-Sayed",
    avatar: realPhotos.review1,
    rating: 5,
    text: "Ahmed completely changed my approach to system design interviews. After 3 months of mentoring, I landed a senior role at Amazon. His feedback was always actionable and incredibly insightful.",
    date: "2026-02-15",
    helpful: 34
  },
  {
    id: 2,
    mentorId: 2,
    userName: "Jessica Liu",
    avatar: realPhotos.review2,
    rating: 5,
    text: "Sarah helped me rebuild my portfolio from the ground up. Her eye for design is phenomenal. I went from getting no callbacks to receiving 5 offers in a month!",
    date: "2026-02-10",
    helpful: 28
  },
  {
    id: 3,
    mentorId: 4,
    userName: "Raj Patel",
    avatar: realPhotos.review3,
    rating: 5,
    text: "Emily is an exceptional mentor. She broke down complex ML concepts into digestible pieces and guided me through building my first production ML pipeline. Couldn't have done it without her.",
    date: "2026-01-28",
    helpful: 41
  },
  {
    id: 4,
    mentorId: 7,
    userName: "Anna Kim",
    avatar: realPhotos.review4,
    rating: 5,
    text: "Daniel's mentorship was transformative. His guidance on engineering leadership helped me get promoted to Staff Engineer. He shares real-world scenarios that no book can teach you.",
    date: "2026-01-20",
    helpful: 52
  },
  {
    id: 5,
    mentorId: 8,
    userName: "Carlos Mendez",
    avatar: realPhotos.review5,
    rating: 4,
    text: "Lina reviewed my resume and LinkedIn profile and transformed them completely. Her industry knowledge is outstanding. The interview prep sessions were incredibly realistic and helpful.",
    date: "2026-01-15",
    helpful: 19
  },
  {
    id: 6,
    mentorId: 3,
    userName: "Sophie Martin",
    avatar: realPhotos.review6,
    rating: 5,
    text: "Omar's startup advice saved me from making expensive mistakes early on. His fundraising playbook is gold. Thanks to his guidance, we closed our seed round in 6 weeks.",
    date: "2026-01-08",
    helpful: 37
  },
  {
    id: 7,
    mentorId: 5,
    userName: "David Brooks",
    avatar: realPhotos.review7,
    rating: 5,
    text: "James helped me transition from engineering to product management. His structured approach to product thinking and stakeholder management was exactly what I needed.",
    date: "2025-12-22",
    helpful: 25
  },
  {
    id: 8,
    mentorId: 6,
    userName: "Fatima Al-Rashid",
    avatar: realPhotos.review8,
    rating: 5,
    text: "Nadia's growth marketing strategies helped us 5x our organic traffic in 4 months. She brings data-driven insights that actually move the needle. Best investment I've made.",
    date: "2025-12-15",
    helpful: 22
  },
  {
    id: 9,
    mentorId: 9,
    userName: "Tom Wilson",
    avatar: realPhotos.review9,
    rating: 4,
    text: "Alex is a fantastic teacher. He walked me through building a full-stack app from scratch, covering backend APIs, database design, and frontend. Very patient and thorough.",
    date: "2025-12-10",
    helpful: 16
  },
  {
    id: 10,
    mentorId: 1,
    userName: "Layla Abbas",
    avatar: realPhotos.review10,
    rating: 5,
    text: "Ahmed is the best mentor I've ever had. His code reviews alone taught me more than a year of self-study. He genuinely cares about your progress and pushes you to be better.",
    date: "2025-12-05",
    helpful: 30
  }
];

export const categories = [
  { id: "all", label: "All Mentors", icon: "👥" },
  { id: "Engineering", label: "Engineering", icon: "💻" },
  { id: "Design", label: "Design", icon: "🎨" },
  { id: "Startup", label: "Startup", icon: "🚀" },
  { id: "AI", label: "AI & ML", icon: "🤖" },
  { id: "Product", label: "Product", icon: "📦" },
  { id: "Marketing", label: "Marketing", icon: "📈" },
  { id: "Leadership", label: "Leadership", icon: "👑" },
  { id: "Career", label: "Career", icon: "🎯" }
];

export const sessions = [
  {
    id: 1,
    mentorId: 1,
    mentorName: "Ahmed Hassan",
    mentorAvatar: realPhotos.mentor1,
    type: "1-on-1 Call",
    date: "2026-03-20",
    time: "14:00",
    duration: "45 min",
    status: "upcoming",
    topic: "System Design Review"
  },
  {
    id: 2,
    mentorId: 2,
    mentorName: "Sarah Chen",
    mentorAvatar: realPhotos.mentor2,
    type: "Portfolio Review",
    date: "2026-03-22",
    time: "10:00",
    duration: "60 min",
    status: "upcoming",
    topic: "Design Portfolio Feedback"
  },
  {
    id: 3,
    mentorId: 4,
    mentorName: "Emily Rodriguez",
    mentorAvatar: realPhotos.mentor4,
    type: "Chat Session",
    date: "2026-03-15",
    time: "16:00",
    duration: "30 min",
    status: "completed",
    topic: "ML Model Architecture Discussion"
  }
];

export const messages = [
  {
    id: 1,
    mentorId: 1,
    mentorName: "Ahmed Hassan",
    mentorAvatar: realPhotos.mentor1,
    lastMessage: "Great progress on the system design! Let's review the caching layer in our next session.",
    timestamp: "2 hours ago",
    unread: true
  },
  {
    id: 2,
    mentorId: 2,
    mentorName: "Sarah Chen",
    mentorAvatar: realPhotos.mentor2,
    lastMessage: "I've left detailed feedback on your portfolio. Check the shared doc!",
    timestamp: "1 day ago",
    unread: false
  },
  {
    id: 3,
    mentorId: 4,
    mentorName: "Emily Rodriguez",
    mentorAvatar: realPhotos.mentor4,
    lastMessage: "The notebook I shared has the TensorFlow examples we discussed. Let me know if you have questions.",
    timestamp: "3 days ago",
    unread: false
  }
];

export const timeSlots = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "13:00", "13:30", "14:00", "14:30", "15:00", "15:30",
  "16:00", "16:30", "17:00", "17:30"
];

export const stats = {
  mentors: "2,400+",
  sessions: "50,000+",
  satisfaction: "97%",
  countries: "120+"
};
