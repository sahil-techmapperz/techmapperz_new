import mongoose from 'mongoose';

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
    label: { type: String },
    value: { type: String },
    description: { type: String },
    icon: { type: String }
});

const TestimonialSchema = new mongoose.Schema({
    quote: { type: String },
    author: { type: String },
    position: { type: String }
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
}, { _id: false });

const GalleryImageSchema = new mongoose.Schema({
    src: { type: String, required: true },
    alt: { type: String }
});

const ExecutionStepSchema = new mongoose.Schema({
    step: String,
    title: String,
    desc: String
});

const CtaSchema = new mongoose.Schema({
    title: { type: String },
    heading: { type: String },
    description: { type: String },
    button1Text: { type: String },
    button1Link: { type: String },
    button2Text: { type: String },
    button2Link: { type: String }
});

const HighlightSchema = new mongoose.Schema({
    title: String,
    description: String
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
    deliverables: [{ type: String }],
    executionSteps: [ExecutionStepSchema],
    highlights: [HighlightSchema],
    relatedServices: [{ type: String }],
    cta: { type: CtaSchema },
    conclusion: { type: String },
    testimonial: { type: TestimonialSchema },
    createdAt: { type: Date, default: Date.now }
});

const Portfolio = mongoose.models.portfolio || mongoose.model('portfolio', PortfolioSchema);
export default Portfolio;
