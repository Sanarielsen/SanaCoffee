import React from 'react';
import { useToastService } from './toastService';
import ToastContainer from './toastContainer';

const App: React.FC = () => {
  const { toasts, addToast, removeToast } = useToastService();

  const handleShowToast = () => {
    addToast({ message: 'Hello, World!', type: 'success' });
  };

  const handleShowErrorToast = () => {
    addToast({ message: 'This is an error!', type: 'error' });
  };

  return (
    <div>
      <h1>Toast Service Demo</h1>
      <button onClick={handleShowToast}>Show Success Toast</button>
      <button onClick={handleShowErrorToast}>Show Error Toast</button>
      <ToastContainer toasts={toasts} removeToast={removeToast} />
    </div>
  );
}

export default App;
