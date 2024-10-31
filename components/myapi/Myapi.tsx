import { ExternalLinkIcon } from '@heroicons/react/solid';

export default function ApiCardList(): JSX.Element {
    const cards = [
        { title: "API Title 1", senderId: "exampleID1" },
        { title: "API Title 2", senderId: "exampleID2" },
        { title: "API Title 3", senderId: "exampleID3" },
        
       
    ];

    return (
        <div className="grid gap-6 p-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {cards.map((card, index) => (
                <div
                    key={index}
                    className="p-6 rounded-lg shadow-lg bg-gray-800 hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 cursor-pointer"
                >
                    <h2 className="text-2xl font-semibold text-white mb-2">{card.title}</h2>
                    <p className="text-sm text-gray-400 mb-4">
                        Sender ID: <span className="font-medium">{card.senderId}</span>
                    </p>
                    <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-indigo-400 hover:text-indigo-600 font-semibold"
                    >
                        <ExternalLinkIcon className="h-5 w-5 mr-1" />
                        Visit API Website
                    </a>
                </div>
            ))}
        </div>
    );
}
