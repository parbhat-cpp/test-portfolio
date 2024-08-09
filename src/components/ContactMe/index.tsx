"use client";

import React, { useState } from "react";
import styles from "./styles.module.scss";
import { Send } from "@mui/icons-material";
import { notifyError, notifySuccess, notifyWarn } from "@/functions";

const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !email || !message) {
      notifyWarn("Enter all the fields");
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        notifyError("Enter a valid email");
        return;
      }

      const mailResponse = await fetch("/api/send-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      if (mailResponse.ok) {
        setName("");
        setEmail("");
        setMessage("");
        notifySuccess("Email sent successfully");
      } else {
        notifyError("Failed to send email");
      }
    }
  };

  return (
    <section id="contact-me" className={styles.contactContainer}>
      <h5>Contact Me</h5>
      <form onSubmit={handleSendMail} className={styles.contactBox}>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          name="Text1"
          cols={40}
          rows={20}
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button>
          Send <Send />{" "}
        </button>
      </form>
    </section>
  );
};

export default ContactMe;
