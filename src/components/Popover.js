const Popover = ({ text }) => {
  return (
    <div className="absolute z-10 p-2 bg-gray-800 text-white rounded shadow bottom-10 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
      {text}
    </div>
  );
};

export default Popover;