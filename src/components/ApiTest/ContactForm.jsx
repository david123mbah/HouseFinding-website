import { useState } from "react";

const ContactForm = ({ existingProperty = {}, updateCallback = () => {} }) => {
  const [category, setCategory] = useState(existingProperty.category || "");
  const [cost, setCost] = useState(existingProperty.cost || "");
  const [image, setImage] = useState(null);
  const [location, setLocation] = useState(existingProperty.location || "");
  const [description, setDescription] = useState(existingProperty.description || "");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const updating = Object.keys(existingProperty).length !== 0;

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("category", category);
    formData.append("cost", cost);
    formData.append("location", location);
    formData.append("description", description);
    if (image) {
      formData.append("image", image);
    }

    const url = `http://127.0.0.1:5000/${updating ? `update_property/${existingProperty.propertyId}` : `create_property`}`;
    const options = {
      method: updating ? "PUT" : "POST",
      body: formData,
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        const data = await response.json();
        alert(data.message);
      } else {
        setShowSuccessMessage(true);
        updateCallback();
      }
    } catch (error) {
      console.error("An error occurred:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <form onSubmit={onSubmit} className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        {showSuccessMessage && (
          <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4 rounded">
            <p>Job information updated successfully!</p>
          </div>
        )}
        <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
          {updating ? "Update Property" : "Create New Property"}
        </h2>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="category">
            Job Category:
          </label>
          <input
            className="shadow-sm border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="e.g., Software Engineering"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="cost">
            Salary Range:
          </label>
          <input
            className="shadow-sm border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            id="cost"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
            placeholder="e.g., $60,000 - $80,000"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="image">
            Job Image:
          </label>
          <input
            className="shadow-sm border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="file"
            id="image"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="location">
            Location:
          </label>
          <input
            className="shadow-sm border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="e.g., New York, NY"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="description">
            Job Description:
          </label>
          <textarea
            className="shadow-sm border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Provide a detailed description of the job..."
            rows="4"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${
              updating ? "bg-yellow-500 hover:bg-yellow-600" : ""
            }`}
            type="submit"
          >
            {updating ? "Update Property" : "Create Property"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
