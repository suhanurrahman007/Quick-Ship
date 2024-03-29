const SectionTitle = ({ header, miniHeader }) => {
  return (
    <div className="flex flex-col space-y-2 justify-center items-center mb-8">
      <p className="text-lg text-purple-400 italic">---{miniHeader}---</p>
      <hr className="w-80 border" />
      <h2 className="text-3xl text-white font-semibold">{header}</h2>
      <hr className="w-80 border" />
    </div>
  );
};

export default SectionTitle;