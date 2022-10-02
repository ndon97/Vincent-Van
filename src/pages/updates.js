import Navbar from "../components/Navbar";
import Cardlg from "../components/Cardlg";

const updates = () => {
  return (
    <div className="bg-gray-200">
      <Navbar />
      <h1 className="text-black text-3xl mt-5 mb-10 text-center underline underline-offset-4">
        Keep up with all the Vincent Updates
      </h1>
      <Cardlg />
    </div>
  );
};

export default updates;
