import { useState } from "react";

export const LicenseChatbot = () => {
  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    try {
      const response = await fetch("http://127.0.0.1:8000/license_chatbot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ Question: input }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      // assuming your API returns { answer: "..." }
      setAnswer(data.answer || "No answer returned from API.");
    } catch (err) {
      console.error(err);
      setAnswer("Failed to fetch answer. Please try again.");
    } finally {
      setLoading(false);
      setInput(""); // optional: clear input after submit
    }
  };

  return (
    <main className="hero-section main">
      <div className="container grid grid-two-cols gap-8">
        
        {/* Chatbot Box */}
        <div className="chatbot-box bg-white p-6 rounded-xl shadow-lg max-w-lg mx-auto">
          <h1 className="heading-xl text-center mb-4">License Chatbot</h1>
          <p className="paragraph text-center mb-6 text-3xl leading-relaxed">
            License Chatbot is a conversational AI designed to assist developers 
            and users in understanding various software licenses.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 w-full">
            <textarea
              placeholder="Ask me about a license..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              rows={4}
              className="w-full max-w-2xl p-4 text-lg border rounded-lg shadow-md resize-none"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              disabled={loading}
            >
              {loading ? "Loading..." : "Submit"}
            </button>
          </form>

          {answer && (
            <div className="mt-4 p-3 bg-gray-100 rounded-lg text-black">
              {answer}
            </div>
          )}
        </div>

        {/* Supported Licenses */}
        <div className="licenses-box bg-blue-100 p-6 rounded-xl shadow-md">
          <h1 className="heading-xl mb-4">Supported Licenses</h1>
          <ul className="paragraph list-disc list-inside space-y-2">
            <li>MIT License</li>
            <li>Apache License</li>
            <li>ISC License</li>
            <li>GNU General Public License (GPL)</li>
            <li>Mozilla Public License (MPL)</li>
            <li>zlib License</li>
            <li>BSD License</li>
            <li>Server Side Public License (SSPL)</li>
            <li>GNU Affero General Public License (AGPL)</li>
            <li>GNU Lesser General Public License (LGPL)</li>
            <li>Eclipse Public License (EPL)</li>
            <li>Common Development and Distribution License (CDDL)</li>
            <li>Artistic License</li>
            <li>The Unlicense</li>
            <li>Boost Software License</li>
            <li>University of Illinois/NCSA Open Source License (NCSA License)</li>
            <li>Common Public License (CPL)</li>
            <li>Microsoft Public License</li>
            <li>Open Software License (OSL)</li>
          </ul>
        </div>
      </div>
    </main>
  );
};
