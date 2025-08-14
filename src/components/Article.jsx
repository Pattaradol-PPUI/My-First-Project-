import { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';

export function ArticlesSection() {
    const [activeTab, setActiveTab] = useState('Highlight');
    const [searchQuery, setSearchQuery] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const categories = ['Highlight', 'Cat', 'Inspiration', 'General'];

    return (
        <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest articles</h2>
                
                {/* Desktop Layout */}
                <div className="hidden md:block">
                    <div className="flex justify-between items-center mb-8">
                        {/* Category Tabs */}
                        <div className="flex bg-gray-200 rounded-lg p-1">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setActiveTab(category)}
                                    className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                                        activeTab === category
                                            ? 'bg-white text-gray-900 shadow-sm'
                                            : 'text-gray-600 hover:text-gray-900'
                                    }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>

                        {/* Search Box */}
                        <div className="relative max-w-md w-full ml-8">
                            <input
                                type="text"
                                placeholder="Search"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-4 pr-12 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                            <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
                                <Search className="h-5 w-5 text-gray-400" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden space-y-6">
                    {/* Search Box */}
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-4 pr-12 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
                            <Search className="h-5 w-5 text-gray-400" />
                        </div>
                    </div>

                    {/* Category Dropdown */}
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Category</label>
                        <div className="relative">
                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-left text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent flex justify-between items-center"
                            >
                                <span>{activeTab}</span>
                                <ChevronDown className={`h-5 w-5 text-gray-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                            </button>
                            
                            {isDropdownOpen && (
                                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
                                    {categories.map((category) => (
                                        <button
                                            key={category}
                                            onClick={() => {
                                                setActiveTab(category);
                                                setIsDropdownOpen(false);
                                            }}
                                            className={`w-full px-4 py-3 text-left hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg ${
                                                activeTab === category 
                                                    ? 'text-blue-600 bg-blue-50' 
                                                    : 'text-gray-900'
                                            }`}
                                        >
                                            {category}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Articles Content Area */}
                <div className="mt-8">
                    <div className="bg-white rounded-lg shadow-sm p-6 min-h-96">
                        <p className="text-gray-500 text-center">
                            Articles for "{activeTab}" category will be displayed here...
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}