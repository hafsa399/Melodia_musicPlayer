
import "./AuthModal.css";

// show popup card
function AuthModal({isOpen,mode,closeModal}) {
    if(!isOpen){
        return null;
    }
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
                <form>
                    {mode ==="signup"&&(
                        <>
                        <label>Full Name</label>
                        <input type="text" placeholder="enter fullname">
                        </input></>
                    )}
                    <label>Email</label>
                    <input type="email" placeholder="enter email"></input>
                    <label>Password</label>
                    <input type="password" placeholder="enter a strong password"/>
                    {mode==="signup" && (
                        <>
                        <label>Confirm Password</label>
                        <input type="password"
                        placeholder="Confirm password"/>
                        </>
                    )}
                        <button className="submit-btn">
                            {mode==="login"?"login":"Create Account"}
                        </button>
                
                </form>
            </div>
        </div>
    );
}

export default AuthModal;