<div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
  {services.map((s, i) => (
    <AnimatedSection key={i}>
      <div className="group bg-gradient-to-br from-[#0B1220] via-[#0F172A] to-black border border-blue-500/30 rounded-2xl p-6 transition-all duration-300 hover:border-blue-400 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:-translate-y-1">
        
        {/* ICON */}
        <div className="text-blue-400 group-hover:text-blue-300 transition mb-3">
          <s.icon />
        </div>

        {/* TITLE */}
        <h3 className="mt-2 font-semibold text-white group-hover:text-blue-400 transition">
          {s.title}
        </h3>

        {/* DESC */}
        <p className="text-sm text-gray-400 group-hover:text-gray-300">
          {s.desc}
        </p>

      </div>
    </AnimatedSection>
  ))}
</div>