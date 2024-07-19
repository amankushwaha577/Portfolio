"use client";

import { useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import "./RecentProjects.css"; // Ensure to import the CSS file

const RecentProjects = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [animating, setAnimating] = useState(false);

  const handleTabClick = (tabNumber: any) => {
    if (tabNumber !== activeTab) {
      setAnimating(true);
      setTimeout(() => {
        setActiveTab(tabNumber);
        setAnimating(false);
      }, 500); // Match the animation duration
    }
  };

  return (
    <div className="relative py-20">
      {/* Background Animation */}
      <div className="tab-background"></div>

      <h1 className="heading">
        30 Industrial Level Personal{" "}
        <span className="text-purple"> Projects</span>
      </h1>

      {/* Tab Buttons */}
      <div className="tab-buttons-container">
        <button
          onClick={() => handleTabClick(1)}
          className={`tab-button ${activeTab === 1 ? "active" : ""}`}
        >
          Colection 1
        </button>
        <button
          onClick={() => handleTabClick(2)}
          className={`tab-button ${activeTab === 2 ? "active" : ""}`}
        >
          Colection 2
        </button>
        <button
          onClick={() => handleTabClick(3)}
          className={`tab-button ${activeTab === 3 ? "active" : ""}`}
        >
          Colection 3
        </button>
        <button
          onClick={() => handleTabClick(4)}
          className={`tab-button ${activeTab === 4 ? "active" : ""}`}
        >
          Colection 4
        </button>
        <button
          onClick={() => handleTabClick(5)}
          className={`tab-button ${activeTab === 5 ? "active" : ""}`}
        >
          Colection 5
        </button>
      </div>

      {/* Tab Content */}
      <div className="relative z-10">
        <div
          className={`tab-content ${animating ? "exit" : "enter"}`}
          style={{
            transition: animating
              ? "none"
              : "opacity 0.5s ease, transform 0.5s ease",
          }}
        >
          <div className="tab-content-background p-4">
            {activeTab === 1 && (
              <div className="flex flex-wrap items-center justify-center gap-16 mt-10">
                {projects.map((item) => (
                  <div
                    className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
                    key={item.id}
                  >
                    <PinContainer
                      title="https://github.com/amankushwaha577/"
                      href="https://github.com/amankushwaha577/"
                    >
                      <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                        <div
                          className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                          style={{ backgroundColor: "#13162D" }}
                        >
                          <img src="/bg.png" alt="bgimg" />
                        </div>
                        <img
                          src={item.img}
                          alt="cover"
                          className="z-10 absolute bottom-0"
                        />
                      </div>

                      <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                        {item.title}
                      </h1>

                      <p
                        className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                        style={{
                          color: "#BEC1DD",
                          margin: "1vh 0",
                        }}
                      >
                        {item.des}
                      </p>

                      <div className="flex items-center justify-between mt-7 mb-3">
                        <div className="flex items-center">
                          {item.iconLists.map((icon, index) => (
                            <div
                              key={index}
                              className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                              style={{
                                transform: `translateX(-${5 * index + 2}px)`,
                              }}
                            >
                              <img src={icon} alt="icon5" className="p-2" />
                            </div>
                          ))}
                        </div>

                        <div className="flex justify-center items-center">
                          <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                            Check Live Site
                          </p>
                          <FaLocationArrow className="ms-3" color="#CBACF9" />
                        </div>
                      </div>
                    </PinContainer>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 2 && (
              <div className="flex items-center justify-center">
                {/* Content for Tab 2 */}
                <p>Tab 2 content goes here.</p>
              </div>
            )}

            {activeTab === 3 && (
              <div className="flex items-center justify-center">
                {/* Content for Tab 3 */}
                <p>Tab 3 content goes here.</p>
              </div>
            )}

            {activeTab === 4 && (
              <div className="flex items-center justify-center">
                {/* Content for Tab 3 */}
                <p>Tab 4 content goes here.</p>
              </div>
            )}

            {activeTab === 5 && (
              <div className="flex items-center justify-center">
                {/* Content for Tab 3 */}
                <p>Tab 5 content goes here.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;
