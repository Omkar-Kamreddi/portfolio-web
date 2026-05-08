function SectionTitle({ title, subtitle }) {

  return (

    <div className="text-center mb-16">

      <p className="text-cyan-400 uppercase tracking-widest mb-3">
        {subtitle}
      </p>

      <h2 className="text-4xl md:text-5xl font-bold">
        {title}
      </h2>

    </div>

  )
}

export default SectionTitle