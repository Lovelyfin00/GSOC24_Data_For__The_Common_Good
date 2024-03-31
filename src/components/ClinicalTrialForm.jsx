import { useState } from "react";
import Questions from "./Questions";
import clinicalTrialsData from "../data/clinicalTrialsData.json"

const ClinicalTrialForm = () => {
  const [formData, setFormData] = useState({});
  const [currentStep, setCurrentStep] = useState(0);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNextStep = (e) => {
    e.preventDefault(); // Prevent default form submission
    setCurrentStep(currentStep + 1);
  };

  const getFilteredQuestions = () => {
    const sex = formData['question_2']; // Assuming question 2 is the question for sex
    return clinicalTrialsData.questions.filter((question) => {
      if (!question.sex) return true;
      return question.sex === 'both' || question.sex === sex;
    });
  };

  const renderForm = () => {
    const questions = getFilteredQuestions();
    const currentQuestion = questions[currentStep];

    return (
      <section className="flex justify-center items-center h-[100vh]">
        <div>
          <h1 className=" font-bold mb-8 text-3xl text-primary-blue">Clinical Trial Matching Application Example</h1>
          <form onSubmit={handleNextStep} className=" justify-start">
            <Questions
              question={currentQuestion}
              formData={formData}
              handleInputChange={handleInputChange}
            />
            <button className="border px-16 py-1 mt-8 hover:bg-primary-orange hover:text-primary-blue hover:border-0 rounded-lg border-primary-blue-light" type="submit">
              {getFilteredQuestions().length - 1 === currentStep ? "Submit" : "Next"}
            </button>
          </form>
        </div>
      </section>
    );
  };

  return (
    <div>
      {currentStep < getFilteredQuestions().length ? (
        renderForm()
      ) : (
        <section className="flex justify-center items-center min-h-[100vh] my-4">
          <div>
            <h1 className=" font-bold mb-8 text-3xl text-primary-blue">Thank you for your submission!</h1>
            <h2 className=" font-bold mb-8 text-2xl text-primary-orange text-center">Your Answers</h2>
            {Object.entries(formData).map(([key, value], index) => (
              <section key={key} className=" flex">
                <p className="mr-4">{index + 1}</p>
                <div>
                  <h3 className=" text-neutral-900 font-bold text-xl">{key}</h3>
                  <p className="mb-4 mt-2 capitalize"><span className=" font-bold italic text-neutral-800">Answer:</span> {value}</p>
                </div>
              </section>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ClinicalTrialForm;