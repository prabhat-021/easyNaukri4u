export default function JoinUsCard() {
  return (
    <div className="bg-gray-100 border-gray-300 relative rounded-lg border w-full lg:w-2/5 h-[50%] my-auto shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s] ">
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-400 to-gray-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-gray-600 to-transparent"></div>
      </div>
      <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
        <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-gray-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-gray-600"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-gray-800"></div>
        </div>
        <p className="text-center ml-3 text-gray-600 text-base lg:text-xl">
          Be a part of success story building Team
        </p>
      </div>
      <div className="overflow-hidden border-t-[2px] border-gray-600 px-2 lg:px-4 py-4 lg:py-8">
        <img
          src="/images/about.png"
          alt="Team"
          className="w-full rounded-lg mb-4"
        />

        <div className="ml-4 lg:ml-8 mr-2">
          <span className="text-gray-400">
            We are hiring for various profiles and locations. Interns for winter
            internships and live projects are also welcome.
          </span>
        </div>
        <div className="text-gray-600 text-center pt-4">
          <button className="border-2 border-gray-400 py-2 px-8 rounded-full  hover:bg-gray-300 hover:text-white">
            <a href="#"> Join us</a>
          </button>
        </div>
      </div>
    </div>
  );
}
