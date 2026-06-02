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
    conclusion: { type: String },
    testimonial: { type: TestimonialSchema },
    createdAt: { type: Date, default: Date.now }
});

const Portfolio = mongoose.models.portfolio || mongoose.model('portfolio', PortfolioSchema);
export default Portfolio;
