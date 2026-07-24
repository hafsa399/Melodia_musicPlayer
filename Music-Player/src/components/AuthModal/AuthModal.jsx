import "./AuthModal.css";
import { useState } from "react";

import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "../../firebase/auth";

// show popup card
function AuthModal({isOpen,mode,closeModal}) {
    
    const [fullName, setFullName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");
const [error, setError] = useState("");
const [loading, setLoading] = useState(false);
    
    if(!isOpen){
        return null;
    }



    const handleSubmit = async (e) => {
      setLoading(true);
  e.preventDefault();

  setError("");

if (!email.trim()) {
  return setError("Email is required.");
}

if (!password.trim()) {
  return setError("Password is required.");
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailRegex.test(email)) {
  return setError("Please enter a valid email address.");
}

if (password.length < 8) {
  return setError("Password must be at least 8 characters.");
} 

  try {
    if (mode === "signup") {

      if (!fullName.trim()) {
        return setError("Full name is required.");
      }

      if (password !== confirmPassword) {
        return setError("Passwords do not match.");
      }

      const userCredential =
        await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

      await updateProfile(userCredential.user, {
        displayName: fullName,
      });

      alert("Account created successfully!");
setLoading(false);
      closeModal();

      setFullName("");
setEmail("");
setPassword("");
setConfirmPassword("");
setError("");

    } else {

      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      alert("Login successful!");

      closeModal();
      setFullName("");
setEmail("");
setPassword("");
setConfirmPassword("");
setError("");
5
    }

  } catch (err) {
    setLoading(false);

    switch (err.code) {
  case "auth/email-already-in-use":
    setError("This email is already registered.");
    break;

  case "auth/invalid-email":
    setError("Invalid email address.");
    break;

  case "auth/weak-password":
    setError("Password should be at least 6 characters.");
    break;

  case "auth/invalid-credential":
    setError("Incorrect email or password.");
    break;

  default:
    setError("Something went wrong. Please try again.");
}
  }
};

    return (
        <div className="modal-overlay">
            <div className="auth-modal">
                <button className="close-btn"
                onClick={closeModal}>
                    X
                </button>
                <h2>
                    {mode==="login" ?"Welcome Back":"Create Account"}
                </h2>
                <form onSubmit={handleSubmit}>
                    {mode ==="signup"&&(
                        <>
                        <label>Full Name</label>
                        <input type="text" placeholder="enter fullname"
                        value={fullName}
                        onChange={(e)=> setFullName(e.target.value)}>
                        </input></>
                    )}
                    <label>Email</label>
                    <input type="email" placeholder="enter email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}></input>
                    <label>Password</label>
                    <input type="password" 
                    placeholder="enter a strong password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}/>
                    {mode==="signup" && (
                        <>
                        <label>Confirm Password</label>
                       <input
                         type="password"
                          placeholder="Confirm password"
                                value={confirmPassword}
                           onChange={(e) => setConfirmPassword(e.target.value)}
/>
                        </>
                    )}
                    {error && <p className="error">{error}</p>}
                       <button
  type="submit"
  className="submit-btn"
  disabled={loading}
>
  {loading
    ? "Please wait..."
    : mode === "login"
    ? "Login"
    : "Create Account"}
</button>
                        
                
                </form>
            </div>
        </div>
    );
}

export default AuthModal;