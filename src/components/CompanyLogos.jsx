import { companyLogos } from "../constants";
import Section from "./Section";

const CompanyLogos = () => {
  return (
    <Section crosses className={"py-0"}>
      <div>
        <h5 className="tagline mb-6 text-center text-n-1/50">
          Trusted by top companies
        </h5>
        <ul className="flex">
          {companyLogos.map((logo, index) => (
            <li
              className="flex items-center justify-center flex-1 h-[8.5rem]"
              key={index}
            >
              <img 
                src={logo} 
                width={134} 
                height={28} 
                alt={logo} 
              />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default CompanyLogos;