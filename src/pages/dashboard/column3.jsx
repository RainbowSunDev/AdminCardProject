import { useEffect, useState } from "react";
import { ICON_URL, IMAGE_URL } from "../../config/constants";

const initialData = {
  name: "James Hiddleston",
  role: "Machine Learning Engineer",
  location: "San Francisco Bay Area",
  pastRoles: ["Senior Machine Learning Engineer at Google Oct 2020 - Jun 2022"],
  education: [
    "Stanford University, M.S., Computer Science Oct 2016 - Nov 2020",
  ],
};
export const ColumnItem3 = ({ data }) => {
  const { name, role, location, pastRoles, education } = data;
  return (
    <div className="border border-themeGrey1 bg-white rounded-lg">
      <div className="flex mt-5 mx-5 justify-between">
        <div className="w-full">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="border border-themeGrey1 w-4 h-4"
              />
              <h1 className="text-[24px] font-[600] ml-3">{name}</h1>
              <img
                alt=""
                src={ICON_URL + "linkedin-alt.svg"}
                className="ml-2"
              />
              <img alt="" src={ICON_URL + "github.svg"} className="ml-2" />
              <img alt="" src={ICON_URL + "bxl_upwork.svg"} className="ml-2" />
            </div>
            <div>
              <img alt="" src={ICON_URL + `beacon.svg`} />
            </div>
          </div>
          <div className="ml-7 flex items-center mt-[6px]">
            <p className="text-base font-[400]">{role}</p>
            <div className="w-1 h-1 rounded-full bg-themeGrey4 ml-[6px]"></div>
            <p className="text-sm text-themeGrey2 font-[400] ml-[6px]">
              {location}
            </p>
            <div className="w-1 h-1 rounded-full bg-themeGrey4 ml-[6px]"></div>
            <img alt="" src={ICON_URL + "phone.svg"} className="ml-[6px]" />
            <img alt="" src={ICON_URL + "mail.svg"} className="ml-[6px]" />
          </div>
        </div>
      </div>
      <div className="h-[1px] ml-7 bg-themeGrey1 mt-5"></div>
      <div className="flex w-full pt-[17px] pb-[22px] pl-12 pr-7 justify-between">
        <div>
          <div className="flex">
            <p className="text-base font-[600] w-40">Past Roles</p>
            <div className="ml-7">
              <ul>
                {pastRoles.map((item, i) => {
                  return <li key={i}>{item}</li>;
                })}
              </ul>
            </div>
          </div>
          <div className="flex mt-5">
            <p className="text-base font-[600] w-40">Education</p>
            <div className="ml-7">
              <ul>
                {education.map((item, i) => {
                  return <li key={i}>{item}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-end mr-">
          <p className="text-themePurple1 text-sm font-[600]">Show more</p>
          <img alt="" src={ICON_URL + `nextArrow.svg`} className="ml-1" />
        </div>
      </div>
    </div>
  );
};
export const Column3 = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData([initialData, initialData, initialData]);
  }, []);
  return (
    <>
      <div className=" bg-[#F5F5F5] p-7 w-full">
        <div className="flex w-full justify-between">
          <div className="flex items-center">
            <img alt="" src={ICON_URL + `people.svg`} />
            <h1 className="ml-3 text-[24px] items-center font-[600]">4,000</h1>
            <p className="text-themeGrey2 text-sm ml-[6px] font-[500]">
              Candidates
            </p>
          </div>
          <div className="flex items-center">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="border border-themeGrey1 w-4 h-4"
              />
              <p className="text-themePurple1 text-sm ml-3 font-[600]">
                Select All Page
              </p>
            </div>
            <div className="w-[1px] h-full bg-themeGrey1 ml-4" />
            <div className="flex bg-white ml-4">
              <button className="flex items-center py-2 px-3 text-sm font-[600] rounded-lg border border-themeGrey1">
                <span>
                  <img alt="" src={ICON_URL + "export.svg"} className="mr-2" />
                </span>
                Export
              </button>
            </div>
            <div className="flex flex-center bg-themePurple1 py-2 px-3 rounded-lg ml-4">
              <img alt="" src={ICON_URL + "project.svg"} />
              <p className="text-white font-[600] text-sm ml-2">
                Add to Project
              </p>
              <img alt="" src={ICON_URL + "dropdown.svg"} className="ml-2" />
            </div>
          </div>
        </div>
        <div className="w-full grid grid-cols-1 gap-4 mt-[26px]">
          {data.map((item, i) => {
            return <ColumnItem3 data={item} key={i} />;
          })}
        </div>
      </div>
      <img
        alt=""
        src={IMAGE_URL + "sticky.png"}
        className="fixed right-7 bottom-7"
      />
    </>
  );
};
