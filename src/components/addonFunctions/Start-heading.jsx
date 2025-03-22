export function DefaultStartHeading({ heading }) {
  return (
    <div className="flex items-center justify-start relative py-10">
      <span className="bg-gray-600 absolute left-0  w-fit text-white px-5 py-3 text-xl rounded-md ">
        {heading}
      </span>
      <span className="w-full h-[2px] bg-gray-600"></span>
    </div>
  );
}

export function CenterHeading({ heading }) {
  return (
    <div className="flex items-center justify-center py-10 sticky ">
      <span className="bg-gray-800 absolute  w-fit text-white px-5 py-3 text-xl rounded-md ">
        {heading}
      </span>
      <span className="w-full h-[2px] bg-gray-800"></span>
    </div>
  );
}
