const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './.env.local' });

const MONGODB_URI = process.env.MONGO_URL;

if (!MONGODB_URI) {
    console.error('Please define the MONGO_URL environment variable inside .env');
    process.exit(1);
}

const ChallengeSchema = new mongoose.Schema({
    title: String,
    description: String
});

const SolutionSchema = new mongoose.Schema({
    title: String,
    description: String,
    features: [{ type: String }]
});

const ResultSchema = new mongoose.Schema({
    label: String,
    value: String,
    description: String,
    icon: String
});

const TestimonialSchema = new mongoose.Schema({
    quote: String,
    author: String,
    position: String
});

const ProjectDetailsSchema = new mongoose.Schema({
    year: String,
    location: String,
    duration: String,
    teamSize: String,
    industry: String,
    projectType: String,
    coreFunctionality: String,
    businessGoal: String
});

const GalleryImageSchema = new mongoose.Schema({
    src: String,
    alt: String
});

const ExecutionStepSchema = new mongoose.Schema({
    step: String,
    title: String,
    desc: String
});

const HighlightSchema = new mongoose.Schema({
    title: String,
    description: String
});

const CtaSchema = new mongoose.Schema({
    title: String,
    heading: String,
    description: String,
    button1Text: String,
    button1Link: String,
    button2Text: String,
    button2Link: String
});

const PortfolioSchema = new mongoose.Schema({
    image: { type: String },
    category: { type: String },
    techStack: { type: String },
    name: { type: String },
    link: { type: String },
    slug: { type: String },
    details: [{ type: String }],
    projectDetails: { type: ProjectDetailsSchema },
    challenges: [ChallengeSchema],
    solutions: [SolutionSchema],
    results: [ResultSchema],
    galleryImages: [GalleryImageSchema],
    deliverables: [{ type: String }],
    executionSteps: [ExecutionStepSchema],
    highlights: [HighlightSchema],
    relatedServices: [{ type: String }],
    cta: { type: CtaSchema },
    conclusion: { type: String },
    testimonial: { type: TestimonialSchema },
    createdAt: { type: Date, default: Date.now }
}, { strict: false });

const Portfolio = mongoose.models.portfolio || mongoose.model('portfolio', PortfolioSchema);

const newPortfolioData = {
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=1000",
    category: "Publishing / E-commerce / Online Bookstore",
    seoTitle: "Aaheli Publishers Case Study | E-commerce Bookstore Website Development | Techmapperz",
    seoDescription: "See how Techmapperz developed an e-commerce website for Aaheli Publishers with category-based browsing, direct book purchase, cart flow, and a scalable online bookstore experience.",
    techStack: "E-commerce Website Development, Product Catalog Architecture, Cart & Direct Purchase Flow, Responsive UI, SEO-Friendly Store Structure, Content-Driven Publishing Commerce Design",
    name: "E-commerce Website for a Growing Educational Book Publisher",
    link: "/portfolios/aaheli-publishers",
    slug: "aaheli-publishers",
    details: [
        "Techmapperz developed a complete e-commerce website for Aaheli Publishers to help the brand present its educational catalog more effectively, support direct book purchases, improve product discoverability, and build a stronger digital sales presence. The live site includes category-based browsing, featured and bestselling sections, account/cart functionality, and product pages with direct buying actions.",
        "This project was not only about building an online catalog. It was about helping a traditional publishing business establish a stronger digital sales channel, improve product discoverability, and create a smoother buying experience for customers looking for educational books across multiple segments."
    ],
    projectDetails: {
        industry: "Publishing / Educational Books",
        projectType: "E-commerce Website + Online Book Sales Platform",
        coreFunctionality: "Online Book Discovery, Cart, and Direct Purchase",
        businessGoal: "Improve online visibility, direct sales, and customer convenience"
    },
    challenges: [
        {
            title: "What the Client Needed",
            description: "Aaheli Publishers has a broad and content-rich catalog covering teacher education, university books, competitive exam books, and school books. That kind of catalog can quickly become difficult to manage and difficult for users to browse if the digital experience is not properly structured. The client needed a website that would present their books in a clear, organized, and searchable way while also making the buying process much easier for users. The live site shows category-based organization across B.Ed, D.El.Ed, M.Ed, university, competitive exam, and school book segments."
        },
        {
            title: "Direct Selling Requirement",
            description: "Another major requirement was direct selling. Instead of depending only on offline purchase channels or manual order communication, the client wanted customers to be able to select books online and proceed toward purchase from the website itself. Product pages on the live site show pricing, discount information, stock status, quantity selection, and both Add to Cart and Buy Now actions, which reflects this direct-commerce requirement."
        }
    ],
    solutions: [
        {
            title: "How Techmapperz Solved It",
            description: "Techmapperz developed an e-commerce website tailored to the needs of an education-focused publishing company. We approached the project as a blend of catalog presentation, online retail experience, and brand credibility building. The objective was to help users move naturally from browsing to buying while giving the client a scalable digital platform for ongoing sales. The live site includes storefront navigation, user account access, cart functionality, and product-led merchandising blocks that support that goal."
        },
        {
            title: "Structured Catalog Architecture",
            description: "We structured the website around how book buyers actually search and shop. Instead of presenting the catalog as a flat list, we supported browsing through relevant academic categories and merchandising sections such as featured books, bestsellers, daily deals, and new arrivals. This helps different types of buyers — including students, exam candidates, and institutional readers — discover books more efficiently."
        },
        {
            title: "Direct Purchase Journey",
            description: "We also supported a direct purchase journey. Product pages surface core buying information such as author, language, pricing, discounts, stock visibility, and purchase actions, while the storefront includes cart and account flows. The website also includes a Request a Book function, which gives the publisher an additional lead and demand-capture channel when a title is not immediately available."
        }
    ],
    deliverables: [
        "Full e-commerce website for an educational publishing business",
        "Category-based online book browsing",
        "Featured books, bestsellers, new arrivals, and deal sections",
        "Direct product purchase flow through product pages",
        "Add to Cart and Buy Now functionality",
        "Sign in, registration, and cart-based shopping experience",
        "Product pages with pricing, offers, and stock display",
        "Request a Book feature for unavailable books",
        "Structured presentation for educational and exam-oriented catalog segments"
    ],
    executionSteps: [
        {
            step: "01",
            title: "Discovery & Catalog Understanding",
            desc: "We started by understanding the client’s catalog depth, audience profile, and business requirements. Since Aaheli Publishers serves education-focused buyers and offers a wide variety of academic categories, the website needed to support both structured browsing and fast purchase intent. The live site’s category spread and merchandising sections reflect the need for this multi-layered shopping experience."
        },
        {
            step: "02",
            title: "Information Architecture & Commerce Planning",
            desc: "The next step was planning how customers would navigate the catalog. For a publishing e-commerce site, good structure is essential. We organized the storefront around meaningful academic categories and discovery sections so buyers could reach relevant books without friction. This planning also supported long-term scalability as more books, offers, and campaigns are added over time."
        },
        {
            step: "03",
            title: "UI/UX for Trust and Easy Purchase",
            desc: "We designed the website so that it feels simple to browse while still carrying the depth expected from a serious educational publisher. Clear navigation, product grouping, offer visibility, and action-oriented product pages all help users feel more confident while shopping. The live product pages showing MRP, selling price, savings, stock status, and purchase buttons reflect this conversion-oriented structure."
        },
        {
            step: "04",
            title: "E-commerce Development & Product Flow",
            desc: "Our team developed the e-commerce functionality to support listing pages, product pages, cart interactions, and direct purchase actions. The storefront includes visible account access, cart support, and transactional product components such as quantity selection and purchase actions."
        },
        {
            step: "05",
            title: "Content Readiness & Sales Support",
            desc: "We also made sure the website works as a sales-supporting platform, not just a technical storefront. Features like Request a Book help convert unmet demand into inquiries, while sections like New Arrivals and Best Seller make the site feel current and commercially active."
        }
    ],
    results: [
        { description: "improved digital visibility for the publisher’s catalog" },
        { description: "made it easier for users to browse educational books by need and category" },
        { description: "supported direct book purchase from the website" },
        { description: "created a more professional and trustworthy online brand experience" },
        { description: "reduced dependence on purely manual inquiry-based ordering" },
        { description: "built a scalable base for future offers, promotions, and catalog growth" }
    ],
    conclusion: "The final website gave Aaheli Publishers a more structured, commercially ready digital presence. Instead of functioning only as a publisher information site, the platform now supports real product discovery and direct online purchase behaviour. The live storefront presents books in multiple sales-oriented sections and gives users clear purchase actions at the product level, helping the website serve as a true digital sales channel.",
    highlights: [
        {
            title: "Commerce-Ready Publishing Platform",
            description: "Built to help an educational publisher move from static presentation to active online selling."
        },
        {
            title: "Structured Catalog Discovery",
            description: "Supports user-friendly browsing across academic, exam, and university-focused book categories."
        },
        {
            title: "Direct Purchase Experience",
            description: "Product pages include pricing, discount visibility, stock display, and direct purchase actions such as Add to Cart and Buy Now."
        }
    ],
    relatedServices: [
        "E-commerce Website Development",
        "Bookstore / Publisher Website Development",
        "Payment-Integrated Website Development",
        "Custom Admin Panel Development",
        "SEO-Friendly Website Design"
    ],
    cta: {
        title: "Need a Similar E-commerce Website for Your Business?",
        heading: "Need a Similar E-commerce Website for Your Business?",
        description: "If you run a publishing company, bookstore, education brand, or product-based business, Techmapperz can help you build a website that does more than display information. We create e-commerce platforms that improve discoverability, build trust, and support direct online sales through a smoother user journey.\nWhether you need a catalog-driven bookstore, a category-based shopping platform, or a complete custom e-commerce solution with direct purchase capability, we can help you design and develop a platform tailored to your business model.",
        button1Text: "Get a Free Quote",
        button1Link: "/contact",
        button2Text: "Explore Our Services",
        button2Link: "/services"
    },
    galleryImages: [
        { src: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=1000", alt: "Bookstore E-commerce" },
        { src: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=800", alt: "Catalog Discovery" },
        { src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800", alt: "Book Purchasing" },
        { src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800", alt: "E-commerce Flow" }
    ]
};

async function insertDB() {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('Connected to MongoDB.');

        await Portfolio.findOneAndUpdate(
            { slug: newPortfolioData.slug },
            newPortfolioData,
            { new: true, upsert: true }
        );

        console.log(`Successfully updated/inserted portfolio: ${newPortfolioData.slug}`);
        process.exit(0);
    } catch (error) {
        console.error('Error inserting DB:', error);
        process.exit(1);
    }
}

insertDB();
