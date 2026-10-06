import { PUBLIC_IMAGES, SITE_IMAGES } from './site-data'

export interface ServiceModule {
  title: string
  description: string
  details?: string
  badge?: string
}

export interface ServiceSlideData {
  id: string
  title: string
  description: string
  action: string
  badge: string
  image: string
  imagePosition?: string
}

export interface ServiceDetail {
  slug: string
  title: string
  subtitle: string
  kicker: string
  heroDescription: string
  whoThisIsForTitle: string
  whoThisIsForSubtitle: string
  whoThisIsFor: {
    title: string
    description: string
  }[]
  whatYouGetTitle: string
  whatYouGetSubtitle: string
  whatYouGet: string[]
  modulesTitle: string
  modulesSubtitle: string
  modules: ServiceModule[]
  carouselSlides: ServiceSlideData[]
  howSessionsWorkTitle: string
  howSessionsWork: {
    format: string
    duration: string
    methodology: string
    deliverables: string
    extraInfo: string
  }
  enrollmentTitle: string
  enrollmentDescription: string
  ctaText: string
  ctaHref: string
  meta: {
    title: string
    description: string
    keywords: string[]
  }
}

export const SERVICES_DATA: Record<string, ServiceDetail> = {
  'one-to-one-coaching': {
    slug: 'one-to-one-coaching',
    title: 'One-to-One Coaching',
    kicker: 'Personalized 1-on-1 Guidance',
    subtitle: 'Personalized guidance for clarity, confidence, and meaningful direction.',
    heroDescription:
      'My one-to-one coaching is a private, supportive space designed for you to understand your strengths, rebuild confidence, and create a clear path forward — professionally and personally. Every session is tailored to your story, your challenges, and your goals.',
    whoThisIsForTitle: 'Who This Coaching Is For',
    whoThisIsForSubtitle: 'Tailored specifically for individuals seeking authentic direction and personal transformation.',
    whoThisIsFor: [
      {
        title: 'Feeling Stuck or Directionless',
        description: 'Individuals wanting clarity and a concrete roadmap in their career or life.',
      },
      {
        title: 'Returning After a Career Break',
        description: 'Rebuilding professional confidence and crafting a strong return strategy.',
      },
      {
        title: 'Navigating Life Abroad',
        description: 'Integrating into international environments while staying true to your core identity.',
      },
      {
        title: 'Preparing for Transitions',
        description: 'Gearing up for job switches, executive promotions, or leadership upgrades.',
      },
      {
        title: 'Seeking Emotional Clarity',
        description: 'Developing inner confidence, self-worth, and emotional resilience.',
      },
      {
        title: 'Making Aligned Decisions',
        description: 'Learning frameworks to make high-impact personal and professional choices without burnout.',
      },
    ],
    whatYouGetTitle: 'What You Will Gain',
    whatYouGetSubtitle: 'Concrete, lasting outcomes designed to transform your mindset and career path.',
    whatYouGet: [
      'Crystal clarity on your core strengths and unique value proposition.',
      'A defined, actionable career roadmap for the next 6–12 months.',
      'Unshakable confidence in strategic decision-making and executive presence.',
      'Deep understanding of your behavioral patterns, triggers, and untapped potential.',
      'Personalized guidance and continuous feedback tailored to your journey.',
      'A safe, supportive, non-judgmental space to grow, reflect, and excel.',
    ],
    modulesTitle: 'Core Coaching Pillars',
    modulesSubtitle: 'Key strategic areas covered during our 1-on-1 coaching journey.',
    modules: [
      {
        title: 'Strengths & Identity Discovery',
        description: 'Uncover your authentic value, core drivers, and unique professional brand.',
        badge: 'Pillar 01',
      },
      {
        title: 'Career Roadmap & Goal Blueprint',
        description: 'Set ambitious, achievable milestones with milestone tracking and timelines.',
        badge: 'Pillar 02',
      },
      {
        title: 'Confidence & Mindset Shift',
        description: 'Overcome imposter syndrome, self-doubt, and fear of high-stakes transitions.',
        badge: 'Pillar 03',
      },
      {
        title: 'Strategic Decision Frameworks',
        description: 'Learn simple tools to evaluate opportunities, negotiate offers, and navigate conflict.',
        badge: 'Pillar 04',
      },
    ],
    carouselSlides: [
      {
        id: 'clarity',
        title: 'Career Direction & Core Strengths',
        description: 'Find your authentic direction and build a concrete 6–12 month action plan.',
        action: 'Book Discovery Call',
        badge: 'Pillar 01',
        image: PUBLIC_IMAGES.img1961,
        imagePosition: 'center 10%',
      },
      {
        id: 'rebuild',
        title: 'Confidence After a Break',
        description: 'Rebuild your professional identity and step back into corporate work with self-belief.',
        action: 'Learn More',
        badge: 'Pillar 02',
        image: PUBLIC_IMAGES.img1959,
        imagePosition: 'center 15%',
      },
      {
        id: 'abroad',
        title: 'Finding Yourself Abroad',
        description: 'Navigate international relocation, cross-cultural team integration, and growth.',
        action: 'Explore Roadmap',
        badge: 'Pillar 03',
        image: PUBLIC_IMAGES.img1989,
        imagePosition: 'center 5%',
      },
      {
        id: 'presence',
        title: 'Executive Decision Making',
        description: 'Make strategic, high-value career decisions with clarity and zero burnout.',
        action: 'Start Journey',
        badge: 'Pillar 04',
        image: PUBLIC_IMAGES.img2805,
        imagePosition: 'center 20%',
      },
    ],
    howSessionsWorkTitle: 'How Coaching Sessions Work',
    howSessionsWork: {
      format: '1:1 Private Sessions (Online via HD Video or In-Person in Berlin)',
      duration: '60–75 Minutes per session',
      methodology: 'Reflection exercises + practical corporate-tested action frameworks',
      deliverables: 'Customized action plans & homework exercises after every session',
      extraInfo: 'Optional continuous follow-up accountability support between sessions',
    },
    enrollmentTitle: 'Ready to Start Your Journey?',
    enrollmentDescription:
      'Schedule your complimentary 15-minute discovery call to discuss your goals and see if 1-on-1 coaching is the right fit for you.',
    ctaText: 'Schedule 15-Min Discovery Call',
    ctaHref: '/#contact',
    meta: {
      title: 'One-to-One Career & Life Coaching | Pratima R. Hegde',
      description:
        'Personalized 1-on-1 career coaching in Berlin and online. Rebuild confidence, define your career path, and navigate transitions with Pratima Hegde.',
      keywords: ['One to One Coaching', 'Career Coach Berlin', 'Executive Coaching', 'Career Transition', 'Confidence Building'],
    },
  },
  'group-sessions-workshops': {
    slug: 'group-sessions-workshops',
    title: 'Group Sessions & Workshops',
    kicker: 'Interactive Skill-Building',
    subtitle: 'Interactive, collective learning sessions for personal growth, professional development, and real-world skills.',
    heroDescription:
      'High-impact, interactive workshops designed for ambitious individuals, young professionals, early-career job seekers, and community cohorts. Gain practical tools, interview mastery, financial awareness, and executive presence in an energetic group environment.',
    whoThisIsForTitle: 'Who These Workshops Are For',
    whoThisIsForSubtitle: 'Ideal for learners who thrive in interactive, collaborative group environments.',
    whoThisIsFor: [
      {
        title: 'Interview & Career Seekers',
        description: 'Preparing for interviews, campus placements, or major job transitions.',
      },
      {
        title: 'Goal-Oriented Achievers',
        description: 'Wanting to set clear direction and build strong, consistent daily habits.',
      },
      {
        title: 'Young Professionals',
        description: 'Seeking early-career financial awareness and smart money management.',
      },
      {
        title: 'Students & Early-Career Learners',
        description: 'Building strong interpersonal communication, confidence, and personality.',
      },
      {
        title: 'Group Learning Enthusiasts',
        description: 'Anyone who learns best through group discussions, case studies, and shared experiences.',
      },
      {
        title: 'Institutions & Communities',
        description: 'Schools, colleges, and organizations wanting structured skill-building workshops.',
      },
    ],
    whatYouGetTitle: 'What Participants Gain',
    whatYouGetSubtitle: 'Practical toolkits, worksheets, and actionable skills you can apply immediately.',
    whatYouGet: [
      'Mastery in interview communication, handling difficult questions, and showcasing value.',
      'Actionable goal-setting blueprints and habit tracking systems for long-term success.',
      'Financial awareness, budgeting basics, and early-career investment decision-making.',
      'Enhanced executive presence, body language, and verbal clarity.',
      'Visual communication skills: styling, color theory, grooming, and professional dress alignment.',
      'Collaborative networking and peer learning with like-minded ambitious individuals.',
    ],
    modulesTitle: 'Signature Workshop Modules',
    modulesSubtitle: 'Explore our popular, high-demand interactive group training topics.',
    modules: [
      {
        title: 'Interview Facing Skills',
        description: 'Learn how to present yourself confidently, communicate clearly, and handle challenging interview questions with ease.',
        badge: 'Module 01',
      },
      {
        title: 'Goal Setting & Habit Architecture',
        description: 'Define your direction, create actionable plans, and build habits that support long-term professional success.',
        badge: 'Module 02',
      },
      {
        title: 'Financial & Investments at a Young Age',
        description: 'Understand money, build financial awareness, and learn how to make smart early-career investment choices.',
        badge: 'Module 03',
      },
      {
        title: 'Personality & Executive Development',
        description: 'Strengthen interpersonal communication, vocal presence, confidence, and emotional intelligence in daily interactions.',
        badge: 'Module 04',
      },
      {
        title: 'Dress the Way You Want to Be Addressed',
        description:
          'Understand visual communication and how appearance influences perception. Covers color theory, grooming, and style alignment based on your goals.',
        badge: 'Module 05',
      },
    ],
    carouselSlides: [
      {
        id: 'interview',
        title: 'Interview Facing Mastery',
        description: 'Present yourself with confidence, communicate value, and clear high-stakes interviews.',
        action: 'Enroll in Batch',
        badge: 'Module 01',
        image: PUBLIC_IMAGES.img1990,
        imagePosition: 'center 10%',
      },
      {
        id: 'goals',
        title: 'Goal Setting & Habit Architecture',
        description: 'Define ambitious targets and build systems that guarantee consistent progress.',
        action: 'Join Workshop',
        badge: 'Module 02',
        image: PUBLIC_IMAGES.img1989,
        imagePosition: 'center 5%',
      },
      {
        id: 'finance',
        title: 'Financial & Investment Awareness',
        description: 'Master money basics, financial planning, and smart early-career investing.',
        action: 'View Syllabus',
        badge: 'Module 03',
        image: PUBLIC_IMAGES.img2802,
        imagePosition: 'center 20%',
      },
      {
        id: 'style',
        title: 'Dress the Way You Want to Be Addressed',
        description: 'Visual communication, color alignment, grooming, and professional styling.',
        action: 'Explore Topic',
        badge: 'Module 04',
        image: PUBLIC_IMAGES.img1959,
        imagePosition: 'center 15%',
      },
    ],
    howSessionsWorkTitle: 'How Workshops Work',
    howSessionsWork: {
      format: 'Interactive Cohort Batches (7 to 12 participants per batch for focused learning)',
      duration: '60–120 Minutes per module',
      methodology: 'Interactive exercises, role-plays, real-life scenarios, and group discussions',
      deliverables: 'Practical worksheets, summary toolkits, and actionable checklists',
      extraInfo: 'Fully customizable for schools, colleges, community cohorts, and youth groups',
    },
    enrollmentTitle: 'Join the Next Upcoming Batch',
    enrollmentDescription:
      'Share your details along with your preferred workshop topic, and you will be added to the upcoming batch (7–10 participants for maximum interaction).',
    ctaText: 'Enroll for Upcoming Batch',
    ctaHref: 'https://docs.google.com/forms/d/e/1FAIpQLSedTLq2PdhEEbVxyENQQN4G5g_KVDhILwvMuD_35C83KT8qdA/viewform',
    meta: {
      title: 'Group Sessions & Skill Workshops | Pratima R. Hegde',
      description:
        'Interactive skill-building workshops on interview skills, goal setting, financial awareness, and visual presence for students and professionals.',
      keywords: ['Group Workshops', 'Interview Skills Training', 'Goal Setting Workshop', 'Personality Development', 'Early Career Finance'],
    },
  },
  'corporate-training': {
    slug: 'corporate-training',
    title: 'Corporate Training',
    kicker: 'Elevating Teams & Leadership',
    subtitle: 'Professional development that elevates teams, strengthens communication, and builds leadership.',
    heroDescription:
      'With 16 years of global experience in corporate training, executive communication, matrix team management, and international operations, I deliver structured, high-impact corporate training programs tailored to organizational objectives.',
    whoThisIsForTitle: 'Who Our Corporate Programs Serve',
    whoThisIsForSubtitle: 'Designed for organizations aiming for team excellence, high trust, and measurable culture impact.',
    whoThisIsFor: [
      {
        title: 'Organizations & Enterprise Teams',
        description: 'Institutions seeking structured, modern professional development modules.',
      },
      {
        title: 'Cross-Functional Teams',
        description: 'Teams needing stronger cross-border communication, empathy, and collaboration.',
      },
      {
        title: 'HR & People Operations Leaders',
        description: 'HR departments wanting high-quality training with measurable ROI reports.',
      },
      {
        title: 'Companies Scaling Culture',
        description: 'Organizations aiming to improve workplace accountability, clarity, and executive impact.',
      },
    ],
    whatYouGetTitle: 'Key Corporate Outcomes',
    whatYouGetSubtitle: 'End-to-end training delivery focused on organizational goals and team performance.',
    whatYouGet: [
      'Comprehensive Training Need Analysis (TNA) before program commencement.',
      'Customized training modules tailored specifically to your organization’s goals.',
      'Clear, measurable performance outcomes for HR leaders and executive management.',
      'Detailed Pre and Post assessment reports tracking team skill improvement.',
      'Post-training summary, executive insights, and recommendations report.',
      'Actionable toolkits, scenario role-plays, and continuous team accountability guidelines.',
    ],
    modulesTitle: 'Signature Training Modules',
    modulesSubtitle: 'Proven modules delivered across 25+ corporate topics over the last 16 years.',
    modules: [
      {
        title: 'Communication to Collaborate',
        description: 'Build clarity, empathy, and effectiveness in team communication to drive seamless cross-functional collaboration.',
        badge: 'Module 01',
      },
      {
        title: 'Ownership & Accountability',
        description: 'Empower individuals to take responsibility, lead with initiative, and deliver high-impact results with confidence.',
        badge: 'Module 02',
      },
      {
        title: 'Time & Stress Management',
        description: 'Equip teams with tools to manage workload, reduce burnout, and maintain peak productivity under pressure.',
        badge: 'Module 03',
      },
      {
        title: 'Emotional Intelligence (EQ) at Work',
        description: 'Strengthen self-awareness, interpersonal empathy, and constructive conflict resolution for healthy workplace dynamics.',
        badge: 'Module 04',
      },
      {
        title: 'Dream Team Building',
        description: 'Create high-trust, high-performance teams through connection, alignment, and shared purpose.',
        badge: 'Module 05',
      },
      {
        title: 'Executive Presence & Personal Impact',
        description:
          'A holistic module designed to elevate how employees show up, communicate, and influence. Helps teams carry themselves with clarity, confidence, and visual impact.',
        badge: 'Module 06',
      },
    ],
    carouselSlides: [
      {
        id: 'corp-comm',
        title: 'Communication to Collaborate',
        description: 'Drive clarity, empathy, and cross-functional alignment across corporate teams.',
        action: 'Request TNA Proposal',
        badge: 'Module 01',
        image: PUBLIC_IMAGES.img1989,
        imagePosition: 'center 5%',
      },
      {
        id: 'corp-ownership',
        title: 'Ownership & Accountability',
        description: 'Transform team culture from passive task completion to proactive leadership.',
        action: 'Inquire for Team',
        badge: 'Module 02',
        image: PUBLIC_IMAGES.img1990,
        imagePosition: 'center 10%',
      },
      {
        id: 'corp-stress',
        title: 'Time & Stress Management',
        description: 'Reduce workplace overwhelm, prioritize high-value work, and eliminate burnout.',
        action: 'Schedule Workshop',
        badge: 'Module 03',
        image: PUBLIC_IMAGES.img1961,
        imagePosition: 'center 10%',
      },
      {
        id: 'corp-presence',
        title: 'Executive Presence & Impact',
        description: 'Elevate workplace influence, vocal communication, posture, and visual styling.',
        action: 'View Training Details',
        badge: 'Module 04',
        image: PUBLIC_IMAGES.img2802,
        imagePosition: 'center 20%',
      },
    ],
    howSessionsWorkTitle: 'How Corporate Training Works',
    howSessionsWork: {
      format: 'On-site Corporate Workshops or Virtual Executive Training',
      duration: '60–120 minutes per module / Half-day, Full-day, or Multi-day programs',
      methodology: 'Interactive case studies, real-world scenario role-plays, and group exercises',
      deliverables: 'Training Need Analysis, Pre/Post Assessments, and Executive ROI Summary',
      extraInfo: 'Fully customizable based on organizational size, timeline, and batch requirements',
    },
    enrollmentTitle: 'Inquire for Your Organization',
    enrollmentDescription:
      'Submit an inquiry with your organization’s details and desired training topics. We will schedule an initial consultation to customize your training program.',
    ctaText: 'Submit Corporate Training Inquiry',
    ctaHref: 'https://docs.google.com/forms/d/e/1FAIpQLSedTLq2PdhEEbVxyENQQN4G5g_KVDhILwvMuD_35C83KT8qdA/viewform',
    meta: {
      title: 'Corporate Training & Executive Workshops | Pratima R. Hegde',
      description:
        'High-impact corporate training in leadership, communication, time management, and team building by Pratima R. Hegde (16+ years experience).',
      keywords: ['Corporate Training', 'Leadership Development', 'Executive Presence', 'Team Building Workshops', 'HR Employee Training'],
    },
  },
}
