import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import Portfolio from '@/app/lib/models/Portfolio';
import enhancedPortfolioData from '@/app/portfolios/PortfolioData';

export async function GET(request, { params }) {
    try {
        await connectDB();
        const { category } = await params;
        
        // Fetch all from DB
        let dbPortfolios = await Portfolio.find({}).lean();
        
        // If DB is empty, fallback to enhancedPortfolioData temporarily so site doesn't break
        if (dbPortfolios.length === 0) {
            dbPortfolios = enhancedPortfolioData;
        }

        if (!category) {
            return NextResponse.json(dbPortfolios);
        }

        const decodedCategory = decodeURIComponent(category).toLowerCase();
        
        let filteredData;
        
        if (decodedCategory === 'all') {
            // Mix the categories so the user sees a variety
            const itProjects = dbPortfolios.filter(item => item.category?.toLowerCase() === 'it');
            const gisProjects = dbPortfolios.filter(item => item.category?.toLowerCase() === 'gis');
            
            filteredData = [];
            
            // Interleave them to guarantee a mix
            const maxLength = Math.max(itProjects.length, gisProjects.length);
            for (let i = 0; i < maxLength; i++) {
                if (itProjects[i]) filteredData.push(itProjects[i]);
                if (gisProjects[i]) filteredData.push(gisProjects[i]);
            }
            
            // If neither IT nor GIS existed, just fallback to dbPortfolios
            if (filteredData.length === 0) {
                filteredData = dbPortfolios;
            }
        } else {
            // First try strict match on category
            filteredData = dbPortfolios.filter(item => 
                item.category && item.category.toLowerCase() === decodedCategory
            );
            
            // If no exact match on category, try broad match across relevant fields
            if (filteredData.length === 0) {
                filteredData = dbPortfolios.filter(item => {
                    const matchProjectType = item.projectDetails?.projectType?.toLowerCase().includes(decodedCategory);
                    const matchIndustry = item.projectDetails?.industry?.toLowerCase().includes(decodedCategory);
                    const matchName = item.name?.toLowerCase().includes(decodedCategory);
                    const matchTechStack = item.techStack?.toLowerCase().includes(decodedCategory);
                    
                    return matchProjectType || matchIndustry || matchName || matchTechStack;
                });
            }
        }
        
        return NextResponse.json(filteredData.slice(0, 3));
        
    } catch (error) {
        console.error("Error in casestudies API:", error);
        return NextResponse.json({ error: "Failed to fetch case studies" }, { status: 500 });
    }
}
