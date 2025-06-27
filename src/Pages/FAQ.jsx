import React from 'react';

const faqs = [
  {
    question: "What is Pawsome Hobby?",
    answer: "Pawsome Hobby is a platform where users can create and join hobby-based groups to connect with like-minded people.",
  },
  {
    question: "How do I join a group?",
    answer: "Navigate to the 'All Groups' page, browse or filter by category, and click on a group to join or view more details.",
  },
  {
    question: "Can I create my own hobby group?",
    answer: "Yes, if you're logged in, you can go to the dashboard and use the 'Create Group' feature to start your own hobby group.",
  },
  {
    question: "Is Pawsome Hobby free to use?",
    answer: "Yes, it's completely free to browse, join, or create groups and interact with the community.",
  },
  {
    question: "How do I change my profile settings?",
    answer: "Go to your dashboard, then click on 'Profile Settings' where you can update your details and preferences.",
  }
];

const FAQ = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-8 text-base-content">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="collapse collapse-arrow bg-base-200 text-base-content rounded-box"
          >
            <input type="checkbox" />
            <div className="collapse-title text-lg font-medium">
              {faq.question}
            </div>
            <div className="collapse-content">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
