export function MainContent() {
    return (
        <main className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Stay<br />
              Informed,<br />
              Stay Inspired
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-md mx-auto lg:mx-0">
              Discover a World of Knowledge at Your Fingertips. Your Daily Dose of Inspiration and Information.
            </p>
          </div>

          {/* Right Content */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-6">
            {/* Main Image */}
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop&crop=face"
              alt="Person with cat in autumn setting"
              className="w-80 h-96 object-cover rounded-2xl shadow-lg"
            />

            {/* Author Card */}
            <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 max-w-sm mt-6 lg:mt-0">
              <div className="mb-3">
                <span className="text-sm text-gray-500 font-medium">~Author</span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Thompson P.
              </h3>
              
              <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
                <p>
                  I am a pet enthusiast and freelance writer who specializes in animal behavior and care. With a deep love for cats, I enjoy sharing insights on feline companionship and wellness.
                </p>
                
                <p>
                  When I'm not writing, I spend time volunteering at my local animal shelter, helping cats find loving homes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
}