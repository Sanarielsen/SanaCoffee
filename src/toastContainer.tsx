import React from 'react';
import { Toast } from './toastService';

interface ToastContainerProps {
	toasts: Toast[];
	removeToast: (id: string) => void;
}

const ToastContainer: React.FC<ToastContainerProps> = ({ toasts, removeToast }) => {
	return (
		<div style={{ position: 'fixed', top: 10, right: 10, zIndex: 1000 }}>
			{toasts.map((toast) => (
				<div
					key={toast.id}
					style={{
						backgroundColor:
							toast.type === 'error'
								? 'red'
								: toast.type === 'success'
									? 'green'
									: 'blue',
						color: 'white',
						padding: '10px',
						margin: '5px',
						borderRadius: '5px',
					}}
				>
					{toast.message}
					<button
						onClick={() => removeToast(toast.id)}
						style={{
							marginLeft: '10px',
							background: 'none',
							border: 'none',
							color: 'white',
							cursor: 'pointer',
						}}
					>
						X
					</button>
				</div>
			))}
		</div>
	);
};

export default ToastContainer;
