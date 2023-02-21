import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const Icon = ({ id, open }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  ); 

const Collapse = ({ header, children }) => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  return (
    <Fragment>
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className="flex justify-between items-center w-full"
        >
          <p className="text-themeGrey3 font-semibold w-fit whitespace-nowrap">
            {header}
          </p>
          <hr className="border-[1px] border-themeGrey1 ml-4 w-full" />
        </AccordionHeader>
        <AccordionBody className="mt-4">{children}</AccordionBody>
      </Accordion>
    </Fragment>
  );
};

export default Collapse;
