// styles.ts

const tailwindStyles = {
  body: "bg-gray-900 text-white font-sono p-12 md:p-24 font-normal",
  header: "mb-10 flex justify-between items-center",
  main: "grid grid-cols-2 gap-12 md:grid-cols-1 md:gap-0 md:grid-rows-2 md:items-stretch md:gap-4",
  logo: "flex items-center gap-4",
  logoImg: "w-68 h-68",
  h1: "text-2xl md:text-3xl uppercase font-coiny mt-6",
  category: "mb-4",
  fact: "bg-gray-800 text-white text-lg leading-7 uppercase mb-4 p-4 md:p-8 md:mb-4 md:flex md:items-end md:gap-3",
  factFlex: "flex justify-between gap-3",
  tag: "uppercase font-coiny text-xs py-1 px-4 cursor-pointer rounded-full",
  voteButtons: "ml-auto flex gap-2",
  voteButton:
    "border-none text-lg py-1 px-2 bg-gray-700 rounded-full cursor-pointer transition duration-300",
  voteButtonHover: "hover:bg-gray-600",
  ul: "list-none",
  source: "text-blue-400 no-underline ml-3 transition duration-250",
  sourceHover: "hover:text-blue-600",
  btn: "border-none text-lg text-center uppercase py-3 px-0 md:py-4 md:px-4 bg-gradient-to-tl from-blue-600 via-red-500 to-yellow-500 rounded-full cursor-pointer transform hover:scale-110 hover:-rotate-2 transition duration-300",
  btnLarge: "text-xl py-4 px-6 md:py-5 md:px-8",
  btnAllCategories: "mb-4 w-full",
  btnCategory: "w-full",
  factForm:
    "bg-gray-800 mb-10 p-4 md:mb-16 md:p-8 flex gap-4 rounded-md opacity-100 transition-opacity duration-500",
  factInput:
    "w-72 bg-gray-700 border-none rounded-full p-4 text-xl text-white font-sono",
  factInputPlaceholder: "placeholder-gray-400",
  factInputFull: "flex-grow",
  factSpan: "font-semibold text-xl mr-4",
  factFormInput: "flex-grow",
  factFormSelect:
    "w-72 bg-gray-700 border-none rounded-full p-4 text-xl text-white font-sono",
  factFormSelectOption: "w-full",
  factFormSpan: "text-xl text-center",
  hidden: "opacity-0",
  message: "text-xl uppercase font-semibold text-center mt-6",
  messageError: "text-red-500 font-semibold mr-2",
  displayNone: "hidden",
};

export default tailwindStyles;
