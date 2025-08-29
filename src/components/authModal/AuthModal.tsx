"use client";

import { useState } from "react";
import Modal from "../modal/Modal";

type ErrorsType = {
  password?: string;
  email?: string;
};

type AuthModalProps = {
  isOpen: boolean;
  onCloseClick: () => void;
};

export default function AuthModal({ isOpen, onCloseClick }: AuthModalProps) {
  const [errors, setErrors] = useState<ErrorsType>({});
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const validateForm = () => {
    const newErrors: ErrorsType = {};
    if (!/\S+@\S+/.test(email)) {
      newErrors.email = "Invalid email";
    } else {
      newErrors.email = "";
    }
    if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    } else {
      newErrors.password = "";
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      return true;
    }
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onCloseClick={onCloseClick}
      onEscapeKeyDown={onCloseClick}
      onBackdropClick={onCloseClick}
    >
      <div className="w-full h-full flex flex-col items-center justify-center p-4 gap-4">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Authentication</h2>
          <p className="text-sm">Please log in to continue.</p>
        </div>
        <form
          className="w-full h-full max-w-[18rem] flex flex-col gap-2"
          onSubmit={onSubmit}
        >
          <div className="w-full">
            <label
              htmlFor="email"
              className="h-6 block text-red-500 mb-1 text-sm"
            >
              {errors.email}
            </label>

            <input
              id="email"
              type="text"
              placeholder="Email"
              className={`outline-none focus:border-secondary p-2 border rounded w-full ${
                errors.email ? "border-red-500" : ""
              }`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="h-6 block text-red-500 mb-1 text-sm"
            >
              {errors.password}
            </label>

            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              className={`outline-none focus:border-secondary mb-4 p-2 border rounded w-full ${
                errors.password ? "border-red-500" : ""
              }`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="border-2 border-transparent focus:border-secondary bg-blue-500 text-white p-2 rounded w-full"
          >
            Login
          </button>
        </form>
      </div>
    </Modal>
  );
}
