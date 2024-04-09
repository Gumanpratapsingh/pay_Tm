// ConfirmationPage.jsx
function ConfirmationPage({ isSuccess, message }) {
    const containerStyle = "flex justify-center items-center h-screen bg-gray-100";
    const messageBoxStyle = "max-w-md p-4 space-y-8 bg-white shadow-lg rounded-lg text-center";
    const successStyle = "text-2xl text-green-600 font-bold";
    const errorStyle = "text-2xl text-red-600 font-bold";
  
    return (
      <div className={containerStyle}>
        <div className={messageBoxStyle}>
          {isSuccess ? (
            <div>
              <p className={successStyle}>Success!</p>
              <p>{message}</p>
            </div>
          ) : (
            <div>
              <p className={errorStyle}>Failed</p>
              <p>{message}</p>
            </div>
          )}
          {/* You can navigate back or to another route as needed */}
          <button onClick={() => window.history.back()} className="bg-green-500 text-white p-2 rounded">
            Go Back
          </button>
        </div>
      </div>
    );
  }
  
  export default ConfirmationPage;
  