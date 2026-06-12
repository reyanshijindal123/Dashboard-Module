

"use client";

import { useState } from "react";

interface SignupForm {
  name: string;
  email: string;
  password: string;
  age: string;
}

export default function SignupPage() {
  const [form, setForm] = useState<SignupForm>({
    name: "",
    email: "",
    password: "",
    age: "",
  });

  const [error, setError] = useState("");

  const validateForm = () => {
    if (form.name.length < 3) {
      return "Name must be at least 3 characters";
    }

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(form.email)) {
      return "Invalid email";
    }

    if (form.password.length < 6) {
      return "Password must be at least 6 characters";
    }

    if (Number(form.age) < 18) {
      return "Age must be 18+";
    }

    return null;
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const validationError = validateForm();

    if (validationError) {
      setError(validationError);
      return;
    }

    await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...form,
        age: Number(form.age),
      }),
    });

    alert("Signup successful");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 p-8"
    >
      <input
        placeholder="Name"
        value={form.name}
        onChange={(e) =>
          setForm({
            ...form,
            name: e.target.value,
          })
        }
      />

      <input
        placeholder="Email"
        value={form.email}
        onChange={(e) =>
          setForm({
            ...form,
            email: e.target.value,
          })
        }
      />

      <input
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={(e) =>
          setForm({
            ...form,
            password: e.target.value,
          })
        }
      />

      <input
        type="number"
        placeholder="Age"
        value={form.age}
        onChange={(e) =>
          setForm({
            ...form,
            age: e.target.value,
          })
        }
      />

      {error && (
        <p className="text-red-500">{error}</p>
      )}

      <button type="submit">
        Signup
      </button>
    </form>
  );
}