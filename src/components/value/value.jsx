import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { FaBriefcase, FaUserTie, FaAward, FaSearch } from "react-icons/fa"; // Importing icons for different services
import "./value.css";
import data from "../../accordion";

const Value = () => {
  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* Left side */}
        <div className="v-left">
          <div className="image-container">
            <img src="./public/images/job-portal-value.jpg" alt="Job Portal Services" />
          </div>
        </div>

        {/* Right side */}
        <div className="flexColStart v-right">
          <span className="blueText">Our Services</span>

          <span className="primaryText">Why Choose JobFinder?</span>

          <span className="secondaryText">
            We offer tailored job search experiences<br />
            Connecting you with top companies<br />
            Empowering your career with the best opportunities
          </span>

          <Accordion className="accordion" allowMultipleExpanded={false} preExpanded={[0]}>
            {data.map((item, i) => {
              const [className, setClassName] = useState(null);
              return (
                <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
                  <AccordionItemHeading>
                    <AccordionItemButton className="flexCenter accordionButton">
                      <AccordionItemState>
                        {({ expanded }) =>
                          expanded ? setClassName("expanded") : setClassName("collapsed")
                        }
                      </AccordionItemState>

                      <div className="flexCenter icon">{item.icon}</div>
                      <span className="primaryText">{item.heading}</span>
                      <div className="flexCenter icon">
                        <MdOutlineArrowDropDown size={20} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="secondaryText">{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;
