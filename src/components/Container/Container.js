const Container = ({ children }) => {
  return (
    <div className="xl:px-20 md:px-10 sm:px-2 px-4 bg-[#010313] text-white py-10">
      {children}
    </div>
  );
};

export default Container;