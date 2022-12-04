import boldIcon from "../../assets/textAreaIcons/boldIcon.svg";
import italicIcon from "../../assets/textAreaIcons/italicIcon.svg";
import underlineIcon from "../../assets/textAreaIcons/underline.svg";
import emoji from "../../assets/textAreaIcons/emoji.svg";
import link from "../../assets/textAreaIcons/link.svg";
import bullet from "../../assets/textAreaIcons/bullets.svg";
import alignContent from "../../assets/textAreaIcons/alignContent.svg";
import backArrow from "../../assets/textAreaIcons/backArrow.svg";
import forwardArrow from "../../assets/textAreaIcons/forwardArrow.svg";
const TextArea = () => {
  return (
    <form className="-translate-y-4">
      <div class="w-full mb-4   rounded-xl bg-[#FCFCFC] ">
        <div class="flex items-center justify-between px-3 py-2 border-b-0 rounded-xl rounded-b-none border-[2px] border-solid border-gray-200">
          <div class="flex flex-wrap items-center divide-gray-200 sm:divide-x ">
            <div class="flex items-center space-x-1 sm:pr-4">
              <button
                type="button"
                class="p-2 text-gray-500 rounded cursor-pointer hover:bg-gray-100 "
              >
                <img src={boldIcon} alt="boldIcon" />
                <span class="sr-only">Attach file</span>
              </button>
              <button
                type="button"
                class="p-2 text-gray-500 rounded cursor-pointer hover:bg-gray-100 "
              >
                <img src={italicIcon} alt="italic icon" />
                <span class="sr-only">Embed map</span>
              </button>
              <button
                type="button"
                class="p-2 text-gray-500 rounded cursor-pointer hover:bg-gray-100 "
              >
                <img src={underlineIcon} alt="underline Icon" />
                <span class="sr-only">Upload image</span>
              </button>
              <button
                type="button"
                class="p-2 text-gray-500 rounded cursor-pointer hover:bg-gray-100 "
              >
                <img src={emoji} alt="emojiIcon" />
                <span class="sr-only">Format code</span>
              </button>
              <button
                type="button"
                class="p-2 text-gray-500 rounded cursor-pointer hover:bg-gray-100 "
              >
                <img src={link} alt="link Icon" />
                <span class="sr-only">Add emoji</span>
              </button>
              <button
                type="button"
                class="p-2 text-gray-500 rounded cursor-pointer hover:bg-gray-100 "
              >
                <img src={emoji} alt="emojiIcon" />
                <span class="sr-only">Format code</span>
              </button>
              <button
                type="button"
                class="p-2 text-gray-500 rounded cursor-pointer hover:bg-gray-100 "
              >
                <img src={bullet} alt="link Icon" />
                <span class="sr-only">Add emoji</span>
              </button>
              <button
                type="button"
                class="p-2 text-gray-500 rounded cursor-pointer hover:bg-gray-100 "
              >
                <img src={alignContent} alt="link Icon" />
                <span class="sr-only">Add emoji</span>
              </button>
              <button
                type="button"
                class="translate-x-36 text-gray-500 rounded cursor-pointer hover:bg-gray-100 "
              >
                <img src={backArrow} alt="link Icon" />
                <span class="sr-only">Add emoji</span>
              </button>
              <button
                type="button"
                class="translate-x-36 text-gray-500 rounded cursor-pointer hover:bg-gray-100 "
              >
                <img src={forwardArrow} alt="link Icon" />
                <span class="sr-only">Add emoji</span>
              </button>
            </div>
          </div>
        </div>
        <div class="px-4 py-2 bg-[#F4F4F4] rounded-b-lg border-t-0 border-[2px] border-solid border-gray-200 dark:bg-gray-800">
          <label for="editor" class="sr-only">
            Publish post
          </label>
          <textarea
            id="editor"
            rows="8"
            class="block w-full px-0 text-sm bg-[#F4F4F4] focus:outline-none text-gray-800  border-0 focus:ring-0  "
            required
          ></textarea>
        </div>
      </div>
    </form>
  );
};

export default TextArea;
