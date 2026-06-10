export default function RailwayLidarPortfolioPage() {
  const stats = [
    { label: 'Project Type', value: 'Drone-Based LiDAR Topographic Survey' },
    { label: 'Industry', value: 'Railway Infrastructure' },
    { label: 'Core Functionality', value: 'Terrain Mapping + Corridor Analysis' },
    { label: 'Business Goal', value: 'Improve planning accuracy and survey efficiency' },
  ];

  const keyFeatures = [
    'Drone-based LiDAR survey',
    'High-resolution terrain mapping',
    'Topographic modeling',
    'GIS-based feature extraction',
    'Corridor-based survey execution',
    'Engineering-ready output generation',
  ];

  const scopeItems = [
    { label: 'Survey Length', value: '173 km' },
    { label: 'Coverage Width', value: '100 m corridor' },
    { label: 'Location', value: 'Uttar Pradesh' },
    { label: 'Survey Objective', value: 'Accurate terrain and topographic data for railway planning and design' },
  ];

  const techStack = ['LiDAR', 'Drone Mapping', 'GIS', 'Aerial Imaging', 'Topographic Data Processing'];

  const processSteps = [
    {
      title: 'Drone Data Acquisition',
      description:
        'High-precision drone flights were conducted across the railway corridor to capture LiDAR and aerial imaging data.',
    },
    {
      title: 'LiDAR Data Processing',
      description:
        'Captured datasets were processed to generate dense point cloud and terrain information for further analysis.',
    },
    {
      title: 'Topographic Model Creation',
      description:
        'Terrain and elevation data were converted into accurate topographic outputs for engineering and infrastructure planning.',
    },
    {
      title: 'GIS Feature Extraction',
      description:
        'Important corridor features were extracted and mapped to support planning, validation, and design workflows.',
    },
  ];

  const deliverables = [
    'LiDAR point cloud',
    'Topographic model',
    'L & X sections',
    'Feature mapping',
    'Corridor terrain dataset',
    'Engineering-ready survey outputs',
  ];

  const qualityPoints = ['GSD < 3 cm', 'High-density data', 'Accurate elevation modeling', 'Consistent corridor-wide data quality'];

  const results = [
    'Faster survey execution across a long railway alignment',
    'Accurate terrain and elevation data for planning',
    'Improved infrastructure design support',
    'Better efficiency than traditional large-scale survey methods',
  ];

  return (
    <main className="bg-white text-slate-900">
      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-slate-50 via-white to-cyan-50">
        <div className="absolute inset-0 opacity-50">
          <div className="absolute -left-16 top-10 h-72 w-72 rounded-full bg-cyan-100 blur-3xl" />
          <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-blue-100 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="inline-flex rounded-full border border-cyan-200 bg-white px-4 py-1 text-sm font-medium text-cyan-700 shadow-sm">
                Case Study
              </span>

              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
                Drone Survey / LiDAR Mapping / Railway Infrastructure
              </p>

              <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                High-Precision LiDAR Survey for Railway Corridor Mapping
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Techmapperz conducted a drone-based LiDAR and aerial imaging survey for a railway corridor project in Uttar Pradesh,
                covering a 173 km railway alignment with a 100-meter corridor to generate high-accuracy terrain and elevation data
                for infrastructure planning and engineering design.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#project-overview"
                  className="rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5"
                >
                  View Project Details
                </a>
                <a
                  href="#contact"
                  className="rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-400"
                >
                  Request Similar Survey
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-200/60">
              <div className="grid gap-4 sm:grid-cols-2">
                {stats.map((item) => (
                  <div key={item.label} className="rounded-2xl bg-slate-50 p-5">
                    <p className="text-sm text-slate-500">{item.label}</p>
                    <p className="mt-2 text-base font-semibold text-slate-900">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="project-overview" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">Project Introduction</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Reliable topographic data for large-scale railway infrastructure development
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Large railway corridor projects demand accurate terrain intelligence for route planning, engineering design,
              and infrastructure execution. Techmapperz delivered a drone-based LiDAR topographic survey designed to capture
              dense elevation and terrain data across a long linear corridor with speed, consistency, and precision.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <h3 className="text-lg font-semibold text-slate-900">Project Snapshot</h3>
            <ul className="mt-5 space-y-3 text-slate-600">
              <li>• 173 km railway alignment surveyed</li>
              <li>• 100 m corridor coverage</li>
              <li>• High-resolution terrain mapping</li>
              <li>• LiDAR + aerial imaging workflow</li>
              <li>• Engineering-ready outputs delivered</li>
              <li>• Designed for better railway planning accuracy</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 lg:grid-cols-2 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">Client Challenge</p>
            <h2 className="mt-4 text-2xl font-bold text-slate-900 sm:text-3xl">
              Maintaining survey accuracy across a long railway corridor
            </h2>
            <p className="mt-6 text-base leading-7 text-slate-600">
              Traditional survey methods can be slower and less efficient for long linear infrastructure projects.
              The challenge was to map a 173 km railway alignment while maintaining consistent data quality,
              dependable elevation accuracy, and efficient delivery for planning and engineering use.
            </p>
          </div>

          <div className="rounded-3xl border border-cyan-200 bg-gradient-to-br from-cyan-600 to-slate-900 p-8 text-white shadow-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-100">Our Solution</p>
            <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
              Drone-based LiDAR and GIS workflow for faster, high-accuracy corridor mapping
            </h2>
            <p className="mt-6 text-base leading-7 text-slate-100">
              Techmapperz used drone-based LiDAR and aerial imaging to capture dense terrain data and generate precise
              topographic outputs for railway planning. This approach delivered a scalable survey method for long-distance
              infrastructure mapping with better speed and consistency.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">Key Features</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Designed for precision terrain capture and corridor analysis
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            The project combined drone surveying, LiDAR processing, and GIS analysis to generate dependable railway corridor datasets.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {keyFeatures.map((feature) => (
            <div key={feature} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 h-10 w-10 rounded-2xl bg-cyan-100" />
              <h3 className="text-lg font-semibold text-slate-900">{feature}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Project Scope</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Survey coverage built for infrastructure-grade requirements
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                The scope focused on corridor-wide data capture for a major railway alignment, ensuring that planning teams received
                accurate and usable terrain intelligence across the full project length.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {scopeItems.map((item) => (
                <div key={item.label} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <p className="text-sm text-slate-400">{item.label}</p>
                  <p className="mt-2 text-base font-semibold text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">Technology Used</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Advanced geospatial tools selected for speed, density, and precision
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              We used a proven combination of LiDAR, drone mapping, and GIS workflows to capture high-density terrain information
              and turn it into actionable survey outputs for railway engineering use.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {techStack.map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center text-sm font-semibold text-slate-900">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">Project Process</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              A structured workflow from field capture to engineering-ready outputs
            </h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {processSteps.map((step, index) => (
              <div key={step.title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-sm font-bold text-white">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">{step.title}</h3>
                </div>
                <p className="mt-5 text-base leading-7 text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">Key Deliverables</p>
            <h2 className="mt-4 text-2xl font-bold text-slate-900 sm:text-3xl">Outputs prepared for planning and engineering teams</h2>
            <ul className="mt-6 space-y-4 text-slate-600">
              {deliverables.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-cyan-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">Accuracy & Data Quality</p>
            <h2 className="mt-4 text-2xl font-bold text-slate-900 sm:text-3xl">High-density survey data with dependable consistency</h2>
            <ul className="mt-6 space-y-4 text-slate-600">
              {qualityPoints.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-slate-900" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-slate-50 via-white to-cyan-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">Results & Business Impact</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Faster execution and stronger planning confidence for railway development
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                The final dataset gave the project team a high-resolution terrain base for better decision-making,
                route analysis, and engineering preparation across the full railway corridor.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {results.map((item) => (
                <div key={item} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <p className="text-base font-medium leading-7 text-slate-800">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div id="contact" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="rounded-[2rem] border border-slate-200 bg-slate-900 p-10 text-white shadow-2xl lg:p-14">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Call To Action</p>
                <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                  Need accurate drone survey and LiDAR mapping for infrastructure projects?
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                  Techmapperz provides drone survey, LiDAR mapping, GIS analysis, and topographic data solutions for railway,
                  road, utility, mining, and large-scale infrastructure development projects.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
                <a
                  href="/contact"
                  className="rounded-2xl bg-white px-6 py-3 text-center text-sm font-semibold text-slate-900 shadow-lg transition hover:-translate-y-0.5"
                >
                  Request a Survey Consultation
                </a>
                <a
                  href="/portfolio"
                  className="rounded-2xl border border-white/20 bg-white/5 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Explore More Projects
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
