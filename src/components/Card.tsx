// components/Card.tsx
import React from 'react';
import { Mail, Phone } from 'lucide-react';

interface User {
	ID: string;
	JobTitle: string;
	EmailAddress: string;
	FirstNameLastName: string;
	Email: string;
	Phone: string;
	Company: string;
}

interface CardProps {
	user: User;
}

const Card: React.FC<CardProps> = ({ user }) => (
	<div className="max-w-sm rounded overflow-hidden shzadow-lg bg-slate-200">
		<div className="px-6 py-4">
			<div className="font-bold text-gray-600 text-xl mb-2">{user.FirstNameLastName}</div>
			<p className="flex gap-3 text-gray-700 text-base ">
				<Mail /> {user.Email}
			</p>
			<p className="flex gap-4 text-gray-700 text-base">
				<Phone /> {user.Phone}
			</p>
		</div>
		<div className="flex justify-center px-6 pt-2 pb-2 h-[50px] space-x-2">
			<span className="flex items-center justify-center bg-slate-300 rounded-2xl px-3 py-1 text-sm font-semibold text-gray-700 truncate">
				{user.JobTitle}
			</span>
			<span className="flex items-center justify-center bg-slate-300 rounded-2xl px-3 py-1 text-sm font-semibold text-gray-700 truncate">
				{user.Company}
			</span>
		</div>
	</div>
);

export default Card;
