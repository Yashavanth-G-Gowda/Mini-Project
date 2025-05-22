import React from "react";
import InformationIcon from "../components/InformationIcon";
import ImportantIcon from "../components/ImportantIcon";
import EnvelopeIcon from "../components/EnvelopeIcon";

const notifications = [
    { id: 1, bgColor: 'bg-red-300', icon: <ImportantIcon />, heading: 'Return Book within 3 days to avoid fine',  text: 'Return the book \'Programming in ANSI C\' written by \'E balagurusamy\' published by \'Pearson\' on or before 25th May, 2025 to avoid fine. ' },
    { id: 2, bgColor: 'bg-violet-300', icon: <InformationIcon />, heading: 'Return Book within 5 days to avoid fine',  text: 'Return the book \'Operating Systems\' written by \'Silberschatz\' published by \'Pearson\' on or before 27th May, 2025 to avoid fine.' },
    { id: 3, bgColor: 'bg-emerald-200', icon: <EnvelopeIcon />, heading: 'Library Best User Award', content: "-Faculty", text: 'An award will be given for those who have used library resoureces frequently.' }
];

const NotificationCard = ({ bgColor, icon, heading, content, text }) => (
    <div className={`border-2 border-black ${bgColor} outline-none rounded-xl mb-6 p-4 shadow-md`}>
        <div className="flex items-center mb-4">
            <div className="mr-4">
                {icon}
            </div>
            <div className="flex flex-col">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-xl font-bold">{heading}</h1>
                    </div>
                    <div className="ml-2">
                        <p className="text-sm text-black font-medium">{content}</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex">
            <p className="text-sm leading-relaxed">{text}</p>
        </div>
    </div>
);

const NotificationPage = () => {
    return (
        <div className="grid place-items-center h-screen bg-gradient-to-r from-teal-900 via-teal-500 to-teal-200">
            <div className="rounded-md w-[90%] max-w-[700px] border-black bg-slate-100 p-10 shadow-gray-500 shadow-lg">
                <div className="flex flex-col justify-center items-center relative w-full mb-2">
                    {notifications.map(notification => (
                        <NotificationCard
                            key={notification.id}
                            bgColor={notification.bgColor}
                            icon={notification.icon}
                            heading={notification.heading}
                            content={notification.content}
                            text={notification.text}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NotificationPage;
