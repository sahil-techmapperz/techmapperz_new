const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './.env.local' });

const MONGODB_URI = process.env.MONGO_URL;

if (!MONGODB_URI) {
    console.error('Please define the MONGO_URL environment variable inside .env');
    process.exit(1);
}

const ChallengeSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true }
});

const SolutionSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    features: [{ type: String }]
});

const ResultSchema = new mongoose.Schema({
    label: { type: String, required: true },
    value: { type: String, required: true },
    description: { type: String },
    icon: { type: String }
});

const TestimonialSchema = new mongoose.Schema({
    quote: { type: String },
    author: { type: String },
    position: { type: String }
});

const ProjectDetailsSchema = new mongoose.Schema({
    year: { type: String },
    location: { type: String },
    duration: { type: String },
    teamSize: { type: String },
    industry: { type: String },
    projectType: { type: String }
});

const GalleryImageSchema = new mongoose.Schema({
    src: { type: String, required: true },
    alt: { type: String }
});

const PortfolioSchema = new mongoose.Schema({
    image: { type: String, required: true },
    category: { type: String, required: true },
    techStack: { type: String },
    name: { type: String, required: true },
    link: { type: String },
    slug: { type: String, required: true, unique: true },
    details: [{ type: String }],
    projectDetails: { type: ProjectDetailsSchema },
    challenges: [ChallengeSchema],
    solutions: [SolutionSchema],
    results: [ResultSchema],
    galleryImages: [GalleryImageSchema],
    conclusion: { type: String },
    testimonial: { type: TestimonialSchema },
    createdAt: { type: Date, default: Date.now }
});

const Portfolio = mongoose.models.portfolio || mongoose.model('portfolio', PortfolioSchema);

const newPortfolioData = {
    image: "/Photos/IT_portfolio/Expoguru/1.webp",
    category: "Interior Design / Creative Services",
    seoTitle: "Project Expo Guru Case Study | Interior Design Company Website Development | Techmapperz",
    seoDescription: "See how Techmapperz developed a dynamic informative website for Project Expo Guru to improve service presentation, brand visibility, trust, and lead generation.",
    techStack: "Dynamic Website Development, Responsive UI, Service-Focused Information Architecture, SEO-Friendly Structure, Content-Driven Business Website Design, Scalable Frontend Presentation",
    name: "Informative Dynamic Website for an Interior Design and Creative Solutions Company",
    link: "/portfolios/expoguru",
    slug: "expoguru",
    details: [
        "Techmapperz designed and developed an informative, dynamic business website for Project Expo Guru, a creative brand working across interior design and related experience-driven service areas. The goal of the project was to create a digital platform that could present the company in a more structured, professional, and convincing way while helping visitors quickly understand its service capabilities and brand identity. The live website publicly positions the company around interior design, modern home and office decor, and broader creative execution.",
        "This project was not just about launching an online presence. It was about creating a website that could communicate trust, show design-oriented business value, and support lead generation for a service company that needs strong presentation to convert interest into inquiries."
    ],
    projectDetails: {
        industry: "Interior Design / Creative Services",
        projectType: "Dynamic Informative Business Website"
    },
    challenges: [
        {
            title: "Trust and First Impression",
            description: "Project Expo Guru operates in a space where visual impression and service trust matter from the very first click. The website needed to reflect capability, professionalism, clarity, and confidence."
        },
        {
            title: "Broad Service Positioning",
            description: "Since the brand is not limited to a single narrow service, the website had to support a broader business narrative including interior design, exhibitions, events, retail, and branding without feeling fragmented."
        }
    ],
    solutions: [
        {
            title: "Business-Facing Platform",
            description: "We structured the website so visitors could quickly learn who the company is, what it does, and why it is relevant to their project needs, featuring dedicated areas such as Who We Are and What We Do.",
            features: [
                "Dynamic informative website for an interior design company",
                "Structured service presentation for better user understanding",
                "Dedicated business storytelling sections",
                "Lead-generation-ready presentation"
            ]
        },
        {
            title: "Polished and Accessible Design",
            description: "Because interior design is a trust-based service, we focused on making the website feel polished, informative, and accessible to reduce friction for first-time visitors.",
            features: [
                "Modern, design-oriented website layout",
                "Responsive browsing experience across devices",
                "Trust-building visual and content structure",
                "Scalable architecture for future expansion"
            ]
        }
    ],
    results: [
        {
            label: "Project Type",
            value: "Website",
            description: "Dynamic Informative Business Website",
            icon: "💻"
        },
        {
            label: "Industry",
            value: "Design",
            description: "Interior Design / Creative Services",
            icon: "🎨"
        },
        {
            label: "Functionality",
            value: "Brand",
            description: "Service Presentation + Brand Positioning",
            icon: "✨"
        },
        {
            label: "Goal",
            value: "Leads",
            description: "Improve digital trust, visibility, and lead generation",
            icon: "📈"
        }
    ],
    galleryImages: [
        { src: "/Photos/IT_portfolio/Expoguru/1.webp", alt: "Project Overview" },
        { src: "/Photos/IT_portfolio/Expoguru/1.webp", alt: "Technical Details" },
        { src: "/Photos/IT_portfolio/Expoguru/1.webp", alt: "Topography" },
        { src: "/Photos/IT_portfolio/Expoguru/1.webp", alt: "Execution" },
        { src: "/Photos/IT_portfolio/Expoguru/1.webp", alt: "Terrain Check" }
    ],
    conclusion: "The final website gave Project Expo Guru a more polished and business-ready digital presence. Instead of relying on fragmented communication or basic online visibility, the brand now has a website that can support clearer service explanation, stronger first impressions, and better inquiry readiness.",
    testimonial: {
        quote: "The new website successfully captures our brand's creative capabilities while functioning as a highly effective, professional tool for lead generation and client presentation.",
        author: "Project Expo Guru Team",
        position: "Management"
    }
};

async function updateDB() {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('Connected to MongoDB.');

        await Portfolio.findOneAndUpdate(
            { slug: 'expoguru' },
            newPortfolioData,
            { new: true, upsert: true }
        );

        console.log('Successfully updated/inserted portfolio: expoguru');
        process.exit(0);
    } catch (error) {
        console.error('Error updating DB:', error);
        process.exit(1);
    }
}

updateDB();
