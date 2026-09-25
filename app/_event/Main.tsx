"use client";

import { Button } from "@/components/ui/button";
import { addToWaitlist } from "@/actions/actions";
import { useState } from "react";

export default function Main() {
	const [email, setEmail] = useState("");
	const [showEmailField, setShowEmailField] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [notification, setNotification] = useState<{ type: 'success' | 'error', message: string } | null>(null);

	const handleSubmit = async () => {
		if (!email.trim()) {
			setNotification({ type: 'error', message: 'Please enter a valid email address' });
			return;
		}

		setIsSubmitting(true);
		setNotification(null);
		
		const { data, error } = await addToWaitlist(email);
		
		if (error) {
			console.error(error);
			setNotification({ type: 'error', message: 'Something went wrong. Please try again.' });
		} else {
			setNotification({ type: 'success', message: 'Successfully joined the waitlist!' });
			setEmail("");
			setShowEmailField(false);
		}
		
		setIsSubmitting(false);
	};

	const handleJoinWaitlist = () => {
		setShowEmailField(true);
		setNotification(null);
	};

	return (
		<div className="flex h-fit w-full px-4 sm:w-5/6 md:w-2/3 flex-col items-center justify-between gap-y-8 md:flex-row md:gap-y-0">
			<div className="flex h-fit w-fit flex-col items-start justify-center">
				<div className="flex flex-col items-center justify-center md:items-start">
					<div className="flex flex-col items-center justify-center md:items-start">
						<span className="animate-fade-in-up font-neue text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white text-center md:text-left">
							Cal Hacks 12.0
						</span>
					</div>
					<span className="animate-fade-in-up font-neue text-xl sm:text-2xl md:text-xl lg:text-xl xl:text-2xl font-light text-white text-center md:text-left mt-2">
						Oct 24-26, 2025
					</span>
					<span className="animate-fade-in-up font-neue text-xl sm:text-2xl md:text-xl lg:text-xl xl:text-2xl font-light text-white text-center md:text-left">
						Palace of Fine Arts, San Francisco
					</span>
				</div>
			</div>

			<div className="flex h-fit w-full md:w-fit flex-col items-center md:items-end justify-center gap-y-4">
				<div className="flex h-fit w-full md:w-fit flex-col items-center justify-center md:items-end">
					<span className="animate-fade-in-up text-center md:text-end font-neue text-2xl sm:text-3xl md:text-2xl lg:text-3xl xl:text-4xl font-medium text-white">
						Interested in attending?
					</span>
					<span className="animate-fade-in-up text-center md:text-end font-neue text-lg sm:text-xl md:text-xl lg:text-xl xl:text-2xl text-white">
						Join our waitlist for updates.
					</span>
					
					{/* Notification */}
					{notification && (
						<div className={`mt-4 p-3 rounded-lg text-center w-full max-w-sm ${
							notification.type === 'success' 
								? 'bg-green-100 text-green-800 border border-green-200' 
								: 'bg-red-100 text-red-800 border border-red-200'
						}`}>
							{notification.message}
						</div>
					)}

					{/* Email field - expandable */}
					{showEmailField && (
						<div className="mt-4 w-full max-w-sm">
							<input
								type="email"
								placeholder="Enter your email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="w-full px-4 py-3 text-base rounded-full border text-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
								onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
							/>
							<div className="flex flex-col sm:flex-row gap-2 mt-3">
								<Button 
									onClick={handleSubmit}
									disabled={isSubmitting}
									className="flex-1 px-6 py-3 text-base rounded-full relative z-10 min-h-[44px]"
								>
									{isSubmitting ? 'Submitting...' : 'Submit'}
								</Button>
								<Button 
									variant="outline"
									onClick={() => {
										setShowEmailField(false);
										setEmail("");
										setNotification(null);
									}}
									className="px-6 py-3 text-base rounded-full relative z-10 min-h-[44px]"
								>
									Cancel
								</Button>
							</div>
						</div>
					)}

					{/* Join Waitlist button - only show when email field is not expanded */}
					{!showEmailField && (
						<Button 
							variant="secondary" 
							onClick={handleJoinWaitlist}
							className="mt-6 px-6 py-3 text-lg sm:text-xl rounded-full relative z-10 min-h-[44px] w-full sm:w-auto max-w-xs bg-white text-black hover:bg-white/90"
						>
							Join Waitlist
						</Button>
					)}
				</div>
			</div>
		</div>
	);
}
