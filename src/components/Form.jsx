const Form = () => {
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Patient Follow-Up</h2>
      <p className="text-lg mt-5 text-center mb-6">
        Add Patient and {""}
        <span className="text-indigo-600 font-bold ">Manage Them</span>
      </p>
      <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
        <div className="mb-5">
          <label
            htmlFor="pet"
            className="block text-gray-700 uppercase font-bold"
          >
            Pet Name
          </label>
          <input
            id="pet"
            type="text"
            placeholder="Enter the Pet's Name"
            className="border-2 w-full p-2 mt-w placeholder-gray-400 rounded-md"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="owner"
            className="block text-gray-700 uppercase font-bold"
          >
            Owner Name
          </label>
          <input
            id="owner"
            type="text"
            placeholder="Enter the Owner's Name"
            className="border-2 w-full p-2 mt-w placeholder-gray-400 rounded-md"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter the owner's Mail"
            className="border-2 w-full p-2 mt-w placeholder-gray-400 rounded-md"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="date"
            className="block text-gray-700 uppercase font-bold"
          >
            discharge date
          </label>
          <input
            id="date"
            type="date"
            className="border-2 w-full p-2 mt-w placeholder-gray-400 rounded-md"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="symptoms"
            className="block text-gray-700 uppercase font-bold"
          >
            Reason for visit
          </label>
          <textarea
            id="symptoms"
            className="border-2 w-full p-2 mt-w placeholder-gray-400 rounded-md"
            placeholder="Enter the Pet Symptoms"
          ></textarea>
        </div>
        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
          value="Add Patient"
        />
      </form>
    </div>
  );
};

export default Form;
