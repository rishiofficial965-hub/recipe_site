import React from 'react'

const About = () => {
  return (
    <div className="w-full min-h-[80vh] flex flex-col items-center justify-center text-white py-20 px-6">
      <div className="max-w-5xl w-full">
        <div className="text-center mb-24">
          <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-none">
            OUR <span className="text-yellow-400">MISSION</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-3xl mx-auto font-light">
            We're on a journey to democratize fine dining. By combining
            professional culinary techniques with intuitive technology, we
            empower everyone to create masterpiece meals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div>
              <h2 className="text-4xl font-black text-white tracking-tight mb-4">
                The Story
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed font-light">
                Restro Project emerged from a simple observation: the world's
                best recipes are often locked behind kitchen doors. We decided to
                unlock them.
              </p>
            </div>
            <div>
              <p className="text-lg text-gray-400 leading-relaxed font-light">
                What started as a digital notebook for elite chefs has
                transformed into a worldwide collective where flavor knows no
                borders and every cook is a storyteller.
              </p>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-12 relative overflow-hidden group">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl group-hover:bg-yellow-400/20 transition-colors duration-700"></div>
            <h2 className="text-3xl font-black text-yellow-400 mb-10 relative z-10">
              Why We're Different
            </h2>
            <ul className="space-y-8 relative z-10">
              {[
                "Chef-Verified Instructions",
                "Stunning Visual Guides",
                "Global Culinary Community",
                "Intelligent Meal Planning",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-6 group/item active:scale-95 transition-transform cursor-pointer">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover/item:border-yellow-400/50 transition-all">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  </div>
                  <span className="text-xl font-bold text-gray-200 group-hover/item:text-white transition-colors">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-32 text-center py-16 border-t border-white/5">
          <p className="text-2xl md:text-3xl font-black text-white/20 italic tracking-tight">
            "GOOD FOOD IS THE FOUNDATION OF GENUINE HAPPINESS."
          </p>
          <p className="text-yellow-400 font-bold mt-4 tracking-widest text-xs uppercase">
            — Auguste Escoffier
          </p>
        </div>
      </div>
    </div>
  );
}

export default About