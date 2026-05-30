import React from "react";
import PropTypes from "prop-types";
import techStack from "./../technology/techStack"; // Your tech data

const TechPage = ({ query }) => {
  const stack = query?.stack;

  // Find the tech by name
  const tech = techStack.find(
    (item) => item.name?.toLowerCase() === stack?.toLowerCase()
  );

  console.log(tech);

  if (!tech) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-b from-gray-800 to-black">
        <div className="text-center text-lg font-semibold text-gray-400">
          Technology not found
        </div>
      </div>
    );
  }

  const {
    name = "Unknown",
    icon = "💻",
    releaseDate = "N/A",
    creator = "N/A",
    description = "No description available.",
    useCases = [],
    popularCompanies = [],
    website = "#",
    bg = "#1A202C",
    textColor = "#E2E8F0",
    features = [],
    popularity = "N/A",
    relatedTechnologies = [],
  } = tech;

  return (
    <div className="p-4 sm:p-6 min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-4xl mx-auto bg-gray-800 shadow-lg rounded-lg p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-4 space-y-2 sm:space-y-0">
          <div className="text-4xl sm:text-5xl">{icon}</div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-center sm:text-left" style={{ color: textColor }}>
            {name}
          </h1>
        </div>

        <div className="mt-4 sm:mt-6 text-gray-300 space-y-3 sm:space-y-4">
          {/* <p className="text-sm sm:text-base">
            <strong className="text-white">Release Date:</strong> {releaseDate}
          </p> */}
          {/* <p className="text-sm sm:text-base">
            <strong className="text-white">Creator:</strong> {creator}
          </p> */}
          <p className="mt-3 sm:mt-4 text-sm sm:text-base">
            <strong className="text-white">Description:</strong> {description}
          </p>
        </div>

        {features.length > 0 && (
          <div className="mt-4 sm:mt-6">
            <p className="font-semibold text-lg sm:text-xl text-white mb-2">Key Features:</p>
            <ul className="list-disc pl-4 sm:pl-6 text-gray-300 text-sm sm:text-base">
              {features.map((feature, index) => (
                <li key={index} className="my-1 sm:my-2">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {popularity && (
          <div className="mt-4 sm:mt-6">
            <p className="font-semibold text-lg sm:text-xl text-white mb-2">Popularity:</p>
            <p className="text-gray-300 text-sm sm:text-base">{popularity}</p>
          </div>
        )}

        {useCases.length > 0 && (
          <div className="mt-4 sm:mt-6">
            <p className="font-semibold text-lg sm:text-xl text-white mb-2">Use Cases:</p>
            <ul className="list-disc pl-4 sm:pl-6 text-gray-300 text-sm sm:text-base">
              {useCases.map((useCase, index) => (
                <li key={index} className="my-1 sm:my-2">
                  {useCase}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* {popularCompanies.length > 0 && (
          <div className="mt-4 sm:mt-6">
            <p className="font-semibold text-lg sm:text-xl text-white mb-2">Popular Companies:</p>
            <ul className="list-disc pl-4 sm:pl-6 text-gray-300 text-sm sm:text-base">
              {popularCompanies.map((company, index) => (
                <li key={index} className="my-1 sm:my-2">
                  {company}
                </li>
              ))}
            </ul>
          </div>
        )} */}

        {relatedTechnologies.length > 0 && (
          <div className="mt-4 sm:mt-6">
            <p className="font-semibold text-lg sm:text-xl text-white mb-2">Related Technologies:</p>
            <ul className="list-disc pl-4 sm:pl-6 text-gray-300 text-sm sm:text-base">
              {relatedTechnologies.map((tech, index) => (
                <li key={index} className="my-1 sm:my-2">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* <div className="mt-6 sm:mt-8 text-center">
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base text-white bg-blue-600 rounded-full hover:bg-blue-700 transition duration-300 shadow-md"
          >
            Official Website
          </a>
        </div> */}
      </div>
    </div>

  );
};

TechPage.propTypes = {
  query: PropTypes.shape({
    stack: PropTypes.string.isRequired,
  }).isRequired,
};

export default TechPage;
