import React from 'react';
import HeroButtons from '../_Components/HeroButtons';

const CheckIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
    <circle cx="12" cy="12" r="10" fill="#05D7DE"/>
    <path d="M8 12.5L11 15.5L16 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PortfolioPage = () => {
  return (
    <div className="bg-[#070A11] text-white relative overflow-hidden font-sans">
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center p-6 md:p-12 relative">
      
      {/* Background subtle glow effects */}
      <div className="absolute top-1/4 left-10 w-[30rem] h-[30rem] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[30rem] h-[30rem] bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">
        
        {/* Left Column */}
        <div className="space-y-8">
          
          {/* Badge */}
          <div className="inline-block px-5 py-2 rounded-full bg-[#18212F] border border-[#233549]">
            <span className="text-[#05D7DE] text-sm font-semibold tracking-wide">
              Case Study, Drone Survey/LiDAR Mapping
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] tracking-tight">
            High-Precision LiDAR Survey <br className="hidden md:block" /> for Railway Corridor <br className="hidden md:block" /> Mapping.
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-xl font-light">
            Techmapperz Conducted A Drone-Based LiDAR And Aerial Imaging Survey For A Railway Corridor Project In Uttar Pradesh. Covering A 173 Km Alignment Within A 100-Metre Corridor, The Project Was Designed To Generate A Dependable High-Resolution Terrain Dataset For Railway Planning, Design, And Engineering Decisions.
          </p>

          {/* Buttons */}
          <HeroButtons />
        </div>

        {/* Right Column (Cards) */}
        <div className="relative w-full">
          {/* Gradient Border Container effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#285D8B] via-[#0D243B] to-[#12A0AD] rounded-[2rem] transform scale-[1.01] -z-10 opacity-80 blur-[2px]"></div>
          
          <div className="bg-[#090E17]/95 backdrop-blur-xl rounded-[2rem] p-6 sm:p-8 h-full border border-white/5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              
              {/* Card 1 */}
              <div className="bg-[#1C232E] border border-white/5 rounded-2xl p-6 hover:bg-[#222A36] transition-colors">
                <h3 className="text-[#05D7DE] text-xs font-bold tracking-widest uppercase mb-3">Survey Length</h3>
                <p className="text-white text-lg font-semibold tracking-wide">173Km Railways <br/> Corridor</p>
              </div>

              {/* Card 2 */}
              <div className="bg-[#1C232E] border border-white/5 rounded-2xl p-6 hover:bg-[#222A36] transition-colors">
                <h3 className="text-[#05D7DE] text-xs font-bold tracking-widest uppercase mb-3">Survey Length</h3>
                <p className="text-white text-lg font-semibold tracking-wide">100M Survey <br/> Corridor</p>
              </div>

              {/* Card 3 */}
              <div className="bg-[#1C232E] border border-white/5 rounded-2xl p-6 hover:bg-[#222A36] transition-colors">
                <h3 className="text-[#05D7DE] text-xs font-bold tracking-widest uppercase mb-3">Location</h3>
                <p className="text-white text-lg font-semibold tracking-wide">Uttar Pradesh, India</p>
              </div>

              {/* Card 4 */}
              <div className="bg-[#1C232E] border border-white/5 rounded-2xl p-6 hover:bg-[#222A36] transition-colors">
                <h3 className="text-[#05D7DE] text-xs font-bold tracking-widest uppercase mb-3">Data Accuracy</h3>
                <p className="text-white text-lg font-semibold tracking-wide">GSD &lt; 3m</p>
              </div>

              {/* Card 5 (Full Width) */}
              <div className="bg-[#1C232E] border border-white/5 rounded-2xl p-6 sm:col-span-2 hover:bg-[#222A36] transition-colors mt-1">
                <h3 className="text-[#05D7DE] text-xs font-bold tracking-widest uppercase mb-3">Business Goal</h3>
                <p className="text-white text-[1.1rem] font-medium leading-relaxed tracking-wide">
                  Improve Planning Accuracy, Speed Up <br className="hidden sm:block" /> Corridor-Level Survey Execution, And Deliver <br className="hidden sm:block" /> Engineering-Ready Geospatial Outputs
                </p>
              </div>

            </div>
          </div>
        </div>

      </div>
      </section>

      {/* Section 2: What the Project Needed & The Solution */}
      <section className="max-w-7xl mx-auto w-full px-6 md:px-12 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 relative z-10 pt-8 md:pt-16">
        
        {/* Left Column - What the Project Needed */}
        <div className="space-y-6">
          <h3 className="text-[#05D7DE] text-xs font-bold tracking-widest uppercase mb-2">Business Goal</h3>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">What the Project Needed.</h2>
          <p className="text-gray-400 text-[15px] leading-relaxed pb-2">
            Railway Corridor Projects Require Continuous, High-Accuracy Terrain Informa-
            Tion Across Long Distances. Traditional Methods Can Be Slower And Less
            Scalable When Engineering Teams Need Reliable Elevation Data, Terrain
            Understanding, And Corridor-Wide Consistency.
          </p>

          <div className="space-y-4">
            {[
              "Map a 173 km alignment efficiently.",
              "Map a 173 km alignment efficiently.",
              "Generate elevation, gradient, and terrain data",
              "Deliver outputs ready for engineering design teams"
            ].map((text, idx) => (
              <div key={idx} className="flex items-center gap-4 bg-[#161C26] border border-white/5 rounded-xl p-4 hover:bg-[#1E2532] transition-colors">
                <CheckIcon />
                <span className="text-white text-[15px] font-medium">{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - The Solution */}
        <div className="space-y-6">
          <h3 className="text-[#05D7DE] text-xs font-bold tracking-widest uppercase mb-2">The Solution</h3>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">How Techmapperz Solve It</h2>
          <p className="text-gray-400 text-[15px] leading-relaxed pb-2">
            We Used A Drone-Based LiDAR Workflow Combined With Aerial Imaging To
            Capture Dense, Accurate, Corridor-Scale Terrain Data. The Process Was
            Structured For Direct Use In Planning And Engineering, Giving The Client
            Faster Execution, Reliable Outputs, And A Scalable Geospatial Base.
          </p>

          <div className="bg-[#161C26] border border-white/5 rounded-2xl p-6 sm:p-8 mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "CORRIDOR-SCALE COVERAGE",
                "HIGH-DENSITY LIDAR CAPTURE",
                "RELIABLE TERRAIN MODELLING",
                "ENGINEERING-READY DELIVERY"
              ].map((tag, idx) => (
                <div key={idx} className="bg-[#214354] border border-[#2B566A] rounded-xl py-4 px-3 flex items-center justify-center text-center shadow-inner hover:bg-[#285165] transition-colors">
                  <span className="text-[#1FD5DB] text-[10px] sm:text-[11px] font-bold tracking-wider uppercase">{tag}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </section>

      {/* Section 3: Project Gallery */}
      <section className="max-w-7xl mx-auto w-full px-6 md:px-12 pb-24 relative z-10 pt-16 border-t border-white/5">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-[#05D7DE] text-xs font-bold tracking-widest uppercase mb-4">Project Gallery</h3>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Show the Real Project Visually</h2>
          <p className="text-gray-400 text-[15px] leading-relaxed">
            This Section Is Designed For Your Actual Project Visuals. Add Drone Survey Images, Corridor Screenshots, LiDAR Terrain Models, Engineering Drawings, Or Site Photographs To Make The Case Study Feel More Authentic And Easier To Explore.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Top Row - Image 1 (Wider) */}
          <div className="md:col-span-2 group rounded-2xl overflow-hidden border border-white/5 bg-[#161C26] flex flex-col h-80 md:h-[400px] hover:border-[#05D7DE]/30 transition-all duration-300">
            <div className="relative flex-grow overflow-hidden bg-[#1C2331]">
              <img src="https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=1000" alt="Drone Survey" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#161C26] to-transparent opacity-60"></div>
            </div>
            <div className="p-4 bg-[#141A24] border-t border-white/5 flex items-center justify-between z-10">
              <span className="text-gray-300 text-sm font-medium">Drone Survey Alignment Overview</span>
            </div>
          </div>

          {/* Top Row - Image 2 (Narrower) */}
          <div className="md:col-span-1 group rounded-2xl overflow-hidden border border-white/5 bg-[#161C26] flex flex-col h-80 md:h-[400px] hover:border-[#05D7DE]/30 transition-all duration-300">
            <div className="relative flex-grow overflow-hidden bg-[#1C2331]">
              <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800" alt="LiDAR" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#161C26] to-transparent opacity-60"></div>
            </div>
            <div className="p-4 bg-[#141A24] border-t border-white/5 flex items-center justify-between z-10">
              <span className="text-gray-300 text-sm font-medium">High-Density LiDAR Point Cloud</span>
            </div>
          </div>

          {/* Bottom Row - Image 3 */}
          <div className="md:col-span-1 group rounded-2xl overflow-hidden border border-white/5 bg-[#161C26] flex flex-col h-80 md:h-[350px] hover:border-[#05D7DE]/30 transition-all duration-300">
            <div className="relative flex-grow overflow-hidden bg-[#1C2331]">
              <img src="https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&q=80&w=800" alt="Railway" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#161C26] to-transparent opacity-60"></div>
            </div>
            <div className="p-4 bg-[#141A24] border-t border-white/5 flex items-center justify-between z-10">
              <span className="text-gray-300 text-sm font-medium">Corridor Topography Map</span>
            </div>
          </div>

          {/* Bottom Row - Image 4 */}
          <div className="md:col-span-1 group rounded-2xl overflow-hidden border border-white/5 bg-[#161C26] flex flex-col h-80 md:h-[350px] hover:border-[#05D7DE]/30 transition-all duration-300">
            <div className="relative flex-grow overflow-hidden bg-[#1C2331]">
              <img src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&q=80&w=800" alt="Engineering" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#161C26] to-transparent opacity-60"></div>
            </div>
            <div className="p-4 bg-[#141A24] border-t border-white/5 flex items-center justify-between z-10">
              <span className="text-gray-300 text-sm font-medium">Engineering Execution View</span>
            </div>
          </div>

          {/* Bottom Row - Image 5 */}
          <div className="md:col-span-1 group rounded-2xl overflow-hidden border border-white/5 bg-[#161C26] flex flex-col h-80 md:h-[350px] hover:border-[#05D7DE]/30 transition-all duration-300">
            <div className="relative flex-grow overflow-hidden bg-[#1C2331]">
              <img src="https://images.unsplash.com/photo-1464039397811-476f652a343b?auto=format&fit=crop&q=80&w=800" alt="Landscape" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#161C26] to-transparent opacity-60"></div>
            </div>
            <div className="p-4 bg-[#141A24] border-t border-white/5 flex items-center justify-between z-10">
              <span className="text-gray-300 text-sm font-medium">Terrain Consistency Check</span>
            </div>
          </div>

        </div>
      </section>

      {/* Section 4: What was delivered & How the Project was Executed */}
      <section className="max-w-7xl mx-auto w-full px-6 md:px-12 pb-24 relative z-10 pt-16 border-t border-white/5">
        
        {/* Sub-section 1: Core Capabilities */}
        <div className="mb-32">
          <div className="text-center mb-12">
            <h3 className="text-[#05D7DE] text-xs font-bold tracking-widest uppercase mb-4">Core Capabilities</h3>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">What was delivered</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "DRONE-BASED LIDAR SURVEY FOR LONG RAILWAY CORRIDORS",
              "HIGH-RESOLUTION TERRAIN AND ELEVATION MAPPING",
              "L-SECTION AND CROSS-SECTION GENERATION",
              "GRADIENT AND VERTICAL CURVE ANALYSIS",
              "GIS-BASED FEATURE EXTRACTION",
              "STRUCTURED ENGINEERING-READY DATASETS"
            ].map((text, idx) => (
              <div key={idx} className="bg-[#244252] border border-[#366173] rounded-xl p-8 flex items-center justify-center text-center hover:bg-[#2C4E61] transition-colors shadow-lg min-h-[140px]">
                <span className="text-white text-xs sm:text-[13px] font-bold tracking-wide uppercase leading-relaxed">{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sub-section 2: Execution Process */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Illustration and Text */}
          <div className="space-y-8 h-full flex flex-col">
            <div>
              <h3 className="text-[#05D7DE] text-xs font-bold tracking-widest uppercase mb-4">Execution Process</h3>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-8">
                How the Project was <br/> Executed ?
              </h2>
            </div>
            
            {/* Illustration */}
            <div className="relative w-full max-w-md mt-auto flex items-center justify-center">
              <img src="/portfolio/Executed.png" alt="Execution Process Illustration" className="w-full h-auto object-contain" />
            </div>
          </div>

          {/* Right: Steps */}
          <div className="space-y-5">
            {[
              {
                step: "01",
                title: "Planning & Requirement Analysis",
                desc: "Defined alignment coverage, corridor width, and precision benchmarks before field execution."
              },
              {
                step: "02",
                title: "Drone Data Acquisition.",
                desc: "Executed LiDAR and aerial imaging flights with consistent corridor coverage and controlled data density."
              },
              {
                step: "03",
                title: "Data Processing.",
                desc: "Processed point clouds, classified terrain, and prepared the geospatial base for modelling and analysis."
              },
              {
                step: "04",
                title: "Engineering Output Delivery.",
                desc: "Delivered terrain models, sections, and analysis outputs ready for railway planning and design use."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-[#171C25] border border-white/5 rounded-[1.25rem] p-6 flex flex-col sm:flex-row items-start sm:items-center gap-6 hover:bg-[#1E2532] transition-colors h-full">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#2983D1] to-[#12C8C6] flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(18,200,198,0.25)]">
                  <span className="text-white font-bold text-lg">{item.step}</span>
                </div>
                <div>
                  <h4 className="text-white text-xl font-bold mb-2 tracking-wide">{item.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* Section 5: Key Deliverables & Business Impact */}
      <section className="max-w-7xl mx-auto w-full px-6 md:px-12 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 relative z-10 pt-16 border-t border-white/5">
        
        {/* Left Column - Key Deliverables */}
        <div className="space-y-6">
          <h3 className="text-[#05D7DE] text-xs font-bold tracking-widest uppercase mb-2">Key Deliverables</h3>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Engineering-Ready Outputs.</h2>
          <p className="text-gray-400 text-[15px] leading-relaxed pb-2">
            Railway Corridor Projects Require Continuous, High-Accuracy Terrain Informa-
            Tion Across Long Distances. Traditional Methods Can Be Slower And Less
            Scalable When Engineering Teams Need Reliable Elevation Data, Terrain
            Understanding, And Corridor-Wide Consistency.
          </p>

          <div className="space-y-3">
            {[
              "LiDAR Point Cloud Dataset.",
              "Topographic Surface Model",
              "L-Section Drawings.",
              "X-Section Drawings.",
              "Gradient Change Analysis.",
              "Vertical Curve Calculations",
              "Feature Mapping Including Roads, Bridges, And Underpasses."
            ].map((text, idx) => (
              <div key={idx} className="flex items-center gap-4 bg-[#141A24] border border-white/5 rounded-[1.125rem] p-4 hover:bg-[#1C2431] transition-colors shadow-sm">
                <CheckIcon />
                <span className="text-white text-[15px] font-semibold tracking-wide">{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Business Impact */}
        <div className="space-y-6">
          <h3 className="text-[#05D7DE] text-xs font-bold tracking-widest uppercase mb-2">Business Impact</h3>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Results and Value Delivered</h2>
          <p className="text-gray-400 text-[15px] leading-relaxed pb-4">
            We Used A Drone-Based LiDAR Workflow Combined With Aerial Imaging To
            Capture Dense, Accurate, Corridor-Scale Terrain Data. The Process Was
            Structured For Direct Use In Planning And Engineering, Giving The Client
            Faster Execution, Reliable Outputs, And A Scalable Geospatial Base.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-4">
            {[
              "Faster Survey Execution",
              "Detailed Terrain Visualisation",
              "Accurate Elevation And Gradient Insights",
              "Better Support For Infrastructure Planning"
            ].map((text, idx) => (
              <div key={idx} className="rounded-2xl p-[1px] bg-gradient-to-br from-[#4E677B] to-[#715467] shadow-lg hover:shadow-xl transition-shadow group">
                <div className="bg-[#262C36] rounded-[15px] p-6 h-full flex items-center justify-center text-center min-h-[140px] group-hover:bg-[#2A313C] transition-colors">
                  <span className="text-white text-[15px] font-bold tracking-wide">{text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* Section 6: CTA Section */}
      <section className="max-w-7xl mx-auto w-full px-6 md:px-12 pb-32 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 relative z-10 pt-16 border-t border-white/5 mt-12">
        
        {/* Left Column */}
        <div className="space-y-6">
          <h3 className="text-[#05D7DE] text-xs font-bold tracking-widest uppercase mb-2">Key Deliverables</h3>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Engineering-Ready Outputs.</h2>

          <div className="space-y-3 pt-4">
            {[
              "Drone LiDAR Survey.",
              "Railway Corridor Mapping.",
              "Topographic Survey.",
              "GIS Mapping & Analysis.",
              "Infrastructure Survey Solutions."
            ].map((text, idx) => (
              <div key={idx} className="flex items-center gap-4 bg-[#141A24] border border-white/5 rounded-[1.125rem] p-4 hover:bg-[#1C2431] transition-colors shadow-sm">
                <CheckIcon />
                <span className="text-white text-[15px] font-semibold tracking-wide">{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - CTA Card */}
        <div className="relative rounded-[2rem] overflow-hidden bg-[#111721] border border-[#233549] p-8 md:p-12 shadow-2xl flex flex-col justify-center border-dashed">
          {/* Cyan Glow Effects */}
          <div className="absolute -top-24 -right-24 w-[25rem] h-[25rem] bg-[#05D7DE] opacity-20 blur-[100px] rounded-full pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-24 w-[25rem] h-[25rem] bg-[#05D7DE] opacity-20 blur-[100px] rounded-full pointer-events-none"></div>
          <div className="absolute inset-0 border-[2px] border-dashed border-[#05D7DE]/20 rounded-[2rem] pointer-events-none z-20 m-1"></div>
          
          <div className="relative z-10 space-y-6">
            <h3 className="text-[#05D7DE] text-[11px] md:text-xs font-bold tracking-widest uppercase">
              Need a high-accuracy survey for your infrastructure project?
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-snug">
              Let's plan your next drone LiDAR <br className="hidden md:block" /> or corridor mapping project.
            </h2>
            <p className="text-gray-400 text-[14px] md:text-[15px] leading-relaxed pb-4">
              Techmapperz Helps Infrastructure Teams Execute Fast, Accurate, And Scalable Geospatial Surveys For Railway, Highway, And Large Linear Projects.
            </p>
            
            {/* Action Buttons */}
            <div className="-ml-2">
              <HeroButtons />
            </div>
          </div>
        </div>

      </section>

    </div>
  );
};

export default PortfolioPage;