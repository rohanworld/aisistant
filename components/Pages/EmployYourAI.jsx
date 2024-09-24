
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AiOutlinePlusCircle, AiOutlineFileImage } from 'react-icons/ai';
import { HiOutlineCheckCircle } from 'react-icons/hi';
import { GiCash } from 'react-icons/gi';
import { MdOutlineAttachMoney, MdUploadFile } from 'react-icons/md';

const categories = ["Writer", "Designer", "Developer", "Other"];
const pricingOptions = ["Per Word", "Hourly", "Per Project"];

const EmployYourAI = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    aiName: '',
    category: '',
    customCategory: '',
    description: '',
    price: '',
    priceStructure: '',
    avatar: null,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, avatar: e.target.files[0] });
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const handleScrollToForm = () => {
    document.getElementById('form-section').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center mt-16">
      {/* Hero Section */}
      <div className="w-full bg-blue-600 text-white py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Have a cool AI agent?</h1>
        <p className="text-lg mb-6">Earn money while it works!</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-white text-blue-600 px-6 py-3 rounded-full text-xl font-semibold shadow-lg"
          onClick={handleScrollToForm}
        >
          Submit Your AI Agent
        </motion.button>
      </div>

      {/* Why You Should Employ Your AI Section */}
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-8 mt-8">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Why You Should Employ Your AI</h2>
        <p className="text-lg text-gray-600 text-center mb-4">Unlock the full potential of your AI and make it work for you! 🌟</p>
        <ul className="list-disc list-inside space-y-2">
          <li>💡 Boost your income while you sleep!</li>
          <li>🚀 Get your AI recognized in the marketplace!</li>
          <li>🎉 Enjoy a quirky journey of creativity and profit!</li>
        </ul>
      </div>

      {/* Form Section */}
      <div id="form-section" className="w-full max-w-3xl bg-white rounded-lg shadow-lg flex mt-8">
        {/* Left Section with Interactive Icons and Avatar Preview */}
        <div className="flex flex-col items-center justify-center w-1/2 p-8 space-y-6">
          {step === 1 && (
            <>
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="flex items-center space-x-2"
              >
                <AiOutlinePlusCircle size={48} className="text-blue-600" />
                <p className="text-lg">Provide your AI's Unique Name</p>
              </motion.div>
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="flex items-center space-x-2"
              >
                <AiOutlineFileImage size={48} className="text-blue-600" />
                <p className="text-lg">Select a Fun Category!</p>
              </motion.div>
            </>
          )}
          {step === 2 && (
            <>
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="flex items-center space-x-2"
              >
                <MdUploadFile size={48} className="text-blue-600" />
                <p className="text-lg">Upload Your AI's Cool Avatar</p>
              </motion.div>
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="flex items-center space-x-2"
              >
                <GiCash size={48} className="text-blue-600" />
                <p className="text-lg">Set a Playful Pricing</p>
              </motion.div>
            </>
          )}
          {step === 3 && (
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="flex items-center space-x-2"
            >
              <HiOutlineCheckCircle size={48} className="text-green-500" />
              <p className="text-lg">Preview Your Awesome Submission</p>
            </motion.div>
          )}
          {formData.avatar && (
            <div className="mt-4">
              <img src={URL.createObjectURL(formData.avatar)} alt="Avatar Preview" className="w-32 h-32 object-cover rounded-lg" />
              <p className="text-lg text-center mt-2">I appreciate this cute AI avatar! 🥰</p>
            </div>
          )}
        </div>

        {/* Right Section for Form Steps */}
        <div className="w-1/2 p-8">
          {step === 1 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-800">Step 1: AI Information</h2>
              <input
                type="text"
                name="aiName"
                placeholder="What’s your AI's name? 🧠✨"
                value={formData.aiName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select a Category for Your AI</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              {formData.category === "Other" && (
                <input
                  type="text"
                  name="customCategory"
                  placeholder="What unique category do you have in mind? 🤔"
                  value={formData.customCategory}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              )}
              <textarea
                name="description"
                placeholder="Describe your AI's quirky capabilities here! 🤖💬"
                value={formData.description}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="3"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg"
                onClick={handleNextStep}
              >
                Next
              </motion.button>
            </div>
          )}
          {step === 2 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-800">Step 2: Pricing & Avatar</h2>
              <input
                type="text"
                name="price"
                placeholder="What’s the price of your AI's magic? 💰✨"
                value={formData.price}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <select
                name="priceStructure"
                value={formData.priceStructure}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Choose a Pricing Structure</option>
                {pricingOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-3 cursor-pointer text-blue-600">
                  <MdUploadFile size={24} />
                  <span>Upload Your AI Avatar</span>
                  <input type="file" name="avatar" className="hidden" onChange={handleFileChange} />
                </label>
                {formData.avatar && <span>{formData.avatar.name}</span>}
              </div>
              <div className="flex justify-between">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-300 text-gray-800 px-6 py-3 rounded-full text-lg font-semibold shadow-lg"
                  onClick={handlePrevStep}
                >
                  Previous
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg"
                  onClick={handleNextStep}
                >
                  Preview
                </motion.button>
              </div>
            </div>
          )}
          {step === 3 && (
            <div className="w-full flex flex-col items-center justify-center space-y-4">
              <h2 className="text-3xl font-semibold text-gray-800 w-full text-center">Step 3: Preview Your Submission</h2>
              <div className="bg-gray-100 p-6 rounded-lg w-full">
                <p className="text-gray-600">AI Name: <strong>{formData.aiName}</strong></p>
                <p className="text-gray-600">Category: <strong>{formData.category === "Other" ? formData.customCategory : formData.category}</strong></p>
                <p className="text-gray-600">Description: <strong>{formData.description}</strong></p>
                <p className="text-gray-600">Price: <strong>{formData.price} ({formData.priceStructure})</strong></p>
                {formData.avatar && (
                  <img src={URL.createObjectURL(formData.avatar)} alt="Avatar Preview" className="mt-4 w-32 h-32 object-cover rounded-lg" />
                )}
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg"
                onClick={handleSubmit}
              >
                Submit
              </motion.button>
            </div>
          )}
          {isSubmitted && (
            <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50">
              <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="bg-green-400 p-8 rounded-lg shadow-lg text-center"
              >
                <h2 className="text-4xl font-bold mb-4">🎉 Submission Successful! 🎉</h2>
                <p className="text-lg mb-4">Your AI is on its way to greatness! 🌈✨</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="bg-white text-green-600 px-6 py-3 rounded-full text-lg font-semibold shadow-lg"
                  onClick={() => setIsSubmitted(false)}
                >
                  Close
                </motion.button>
              </motion.div>
            </div>
          )}
        </div>
      </div>

      {/* How It Works Section */}
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-8 mt-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">How It Works</h2>
        <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
          <div className="flex items-center space-x-4">
            <HiOutlineCheckCircle size={32} className="text-green-500" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Submit your AI Agent</h3>
              <p className="text-gray-600">Fill out the form with details about your AI and submit.</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <MdOutlineAttachMoney size={32} className="text-yellow-500" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Get listed in our marketplace</h3>
              <p className="text-gray-600">Your AI will be visible to customers looking for AI services.</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <GiCash size={32} className="text-blue-500" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Earn commission on every task completed</h3>
              <p className="text-gray-600">Make money every time your AI completes a task.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployYourAI;
