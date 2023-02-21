import Collapse from "../collapse";
export const Navbar = () => {
  const inputCss =
    "block w-full focus:outline-none rounded-lg border border-themeGrey1 bg-[#F9FAFB] pl-4";
  return (
    <div className="w-[466px] bg-white px-7 py-9">
      <div>
        <div className="flex">
          <div className="flex items-center cursor-pointer">
            <img alt="" src="/img/icon/save.svg"></img>
            <p className="text-themeGrey3 text-[14px] ml-[6px]">Save Search</p>
          </div>
          <div className="flex items-center ml-5 cursor-pointer">
            <img alt="" src="/img/icon/open.svg"></img>
            <p className="text-themeGrey3 text-[14px] ml-[6px]">Save Search</p>
          </div>
        </div>
        <div className="mt-7">
          <form class="flex items-center">
            <label for="simple-search" class="sr-only">
              Search...
            </label>
            <div class="relative w-full">
              <div class="absolute inset-y-0 left-0 flex items-center px-[14px] pointer-events-none">
                <img alt="" src="/img/icon/search.svg"></img>
              </div>
              <input
                type="text"
                id="simple-search"
                class="bg-white border border-gray-300 text-themeGrey3 text-[14px] focus:outline-none rounded-[20px] block w-full pl-10 py-2"
                placeholder="Search"
                required
              />
            </div>
          </form>
        </div>
      </div>
      <div className="flex mt-7 cursor-pointer">
        <img alt="" src="/img/icon/close.svg"></img>
        <p className="text-themeGrey3 text-[14px] ml-[6px]">Clear</p>
      </div>

      <div className="w-full p-4 pb-5 mt-4 border-[1px] border-themeGrey1 rounded-lg">
        <Collapse header="View Filters For">
          <div className="relative">
            <select
              className="block px-4 py-3 pr-8 leading-tight focus:outline-none text-themeGrey3 text-[14px] rounded-lg w-full appearance-none focus:border-gray-400 bg-[#F9FAFB] border border-themeGrey1 "
              id="select-option"
            >
              <option value="option1">Linkedln</option>
              <option value="option2">Performance Rating</option>
              <option value="option3">Performance Rating</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <img alt="" src="/img/icon/arrowdown.svg"></img>
            </div>
          </div>
        </Collapse>
      </div>
      <div className="w-full p-4 pb-5 mt-4 border-[1px] border-themeGrey1 rounded-lg">
        <Collapse header="Keywords (Linkedln)">
          <textarea
            id="message"
            rows="4"
            class="block p-3 w-full text-sm text-themeGrey3 bg-[#F9FAFB] border focus:outline-none rounded-lg border-themeGrey1"
            placeholder="(engineer OR developer) AND software AND NOT designer"
          ></textarea>
        </Collapse>
      </div>
      <div className="w-full p-4 pb-5 mt-4 border-[1px] border-themeGrey1 rounded-lg">
        <Collapse header="Keywords (Linkedln)">
          <div>
            <div className="mt-1 flex rounded-md shadow-sm">
              <div className="relative flex flex-grow items-stretch focus-within:z-10">
                <input
                  type="text"
                  className={`${inputCss} rounded-l-lg p-3 border-right`}
                  placeholder="Search"
                />
              </div>
              <button
                type="button"
                className="relative -ml-px inline-flex items-center space-x-2 rounded-r-md border border-themeGrey1 focus:outline-none bg-[#F3F4F6] text-sm font-medium text-gray-700 hover:bg-gray-100"
              >
                <img alt="" src="/img/icon/magic.svg"></img>
              </button>
            </div>
          </div>
        </Collapse>
      </div>
      <div className="w-full p-4 pb-5 mt-4 border-[1px] border-themeGrey1 rounded-lg">
        <Collapse header="Power Filters">
          <div>
            <div className="mt-1 flex rounded-md shadow-sm">
              <div className="relative flex flex-grow items-stretch focus-within:z-10">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className={`${inputCss} py-3`}
                  placeholder="Search"
                />
              </div>
            </div>
          </div>
        </Collapse>
      </div>

      <div className="w-full p-4 pb-5 mt-4 border-[1px] border-themeGrey1 rounded-lg">
        <Collapse header="Location (Linkedln)">
          <div>
            <label className="text-themeGrey3 text-[14px] font-medium">
              Country
            </label>
            <div className="flex rounded-md shadow-sm mt-3">
              <div className="relative flex flex-grow items-stretch focus-within:z-10">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className={`${inputCss} py-3`}
                  placeholder="Search"
                />
              </div>
            </div>
          </div>
        </Collapse>
      </div>
    </div>
  );
};
