import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { faker } from "@faker-js/faker";

const socket = io("https://crm-lemon-eight.vercel.app");

function VendorInteraction() {
  const [vendors, setVendors] = useState([]);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [selectedVendor, setSelectedVendor] = useState(null);
  const [hasVendorResponded, setHasVendorResponded] = useState(false);

  useEffect(() => {
    const vendorList = Array.from({ length: 5 }, () => ({
      id: faker.string.uuid(),
      name: faker.person.fullName(),
      job: faker.commerce.department(),
    }));
    setVendors(vendorList);
  }, []);

  useEffect(() => {
    socket.on("receiveMessage", (data) => {
      setMessages((prev) => [...prev, data]);
    });
    return () => socket.off("receiveMessage");
  }, []);

  const sendMessage = () => {
    if (message.trim() && selectedVendor) {
      const newMessage = { sender: "Client", text: message, vendorId: selectedVendor.id };
      socket.emit("sendMessage", newMessage);
      setMessages((prev) => [...prev, newMessage]);
      setMessage("");

      // Automated vendor response only if not responded before
      if (!hasVendorResponded) {
        setTimeout(() => {
          const vendorResponse = {
            sender: selectedVendor.name,
            text: "Thank you for reaching out! How can I assist you?",
            vendorId: selectedVendor.id,
          };
          setMessages((prev) => [...prev, vendorResponse]);
          setHasVendorResponded(true);
        }, 1000);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Vendor List */}
          <div className="w-full lg:w-1/3 bg-white shadow-xl rounded-lg p-6 border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Assigned Vendors</h2>
            <ul className="space-y-3">
              {vendors.map((vendor) => (
                <li
                  key={vendor.id}
                  className={`p-3 cursor-pointer rounded-lg transition duration-300 ease-in-out shadow-md flex items-center justify-between hover:bg-orange-100 ${
                    selectedVendor?.id === vendor.id
                      ? "bg-orange-500 text-white"
                      : "bg-gray-50 text-gray-800"
                  }`}
                  onClick={() => {
                    setSelectedVendor(vendor);
                    setHasVendorResponded(false);
                  }}
                >
                  <div>
                    <span className="text-lg font-medium">{vendor.name}</span>
                    <span className="text-sm text-gray-600 ml-2">({vendor.job})</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Chat Section */}
          <div className="w-full lg:w-2/3 bg-white shadow-xl rounded-lg p-6 border border-gray-200 flex flex-col">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Vendor Chat</h2>
            {selectedVendor ? (
              <>
                <div
                  className="border p-4 flex-1 overflow-y-auto bg-gray-50 rounded-lg shadow-inner"
                  style={{ maxHeight: "400px" }}
                >
                  {messages
                    .filter((msg) => msg.vendorId === selectedVendor.id)
                    .map((msg, index) => (
                      <p
                        key={index}
                        className={`my-2 flex ${
                          msg.sender === "Client" ? "justify-end" : "justify-start"
                        }`}
                      >
                        <span
                          className={`inline-block px-4 py-2 rounded-lg text-white transition duration-300 ease-in-out shadow-md break-words ${
                            msg.sender === "Client" ? "bg-orange-500" : "bg-gray-600"
                          }`}
                        >
                          {msg.text}
                        </span>
                      </p>
                    ))}
                </div>
                <div className="mt-4 flex flex-col md:flex-row">
                  <input
                    type="text"
                    className="flex-grow p-3 border rounded-lg focus:ring-4 focus:ring-orange-400 transition duration-300 ease-in-out shadow-sm mb-2 md:mb-0"
                    placeholder="Type a message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <button
                    className="md:ml-3 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition duration-300 ease-in-out shadow-lg"
                    onClick={sendMessage}
                  >
                    Send
                  </button>
                </div>
              </>
            ) : (
              <p className="text-gray-500">Select a vendor to chat with.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default VendorInteraction;
