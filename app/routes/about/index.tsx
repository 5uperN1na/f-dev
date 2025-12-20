const AboutPage = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 bg-gray-900">
      <div className="flex flex-xol md:flex-row md:items-start items-center gap-10 mb-12">
        <img
          src="/images/profile.jpg"
          alt="profle"
          className="w-40 h-40 rounded-full object-cover border-4 border-blue-500 shadow-md"
        />
      </div>

      <h1 className="text-3xl font-bold mb-2 text-white">Hey, I am Paula!👋</h1>

      <p className="text-gray-300 text-lg">
        I am a passionate web develoer and content creator who loves building
        friendly digital experiences and helping others grow into confident,
        modern developers.
      </p>

      <div className="mb-8">
      <h2 className="text-2xl font-semibold text-white mb-7">My Mission</h2>
        <p className="text-gray-300 leading-relaxed">
          orem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-white mb-4">
       🚀 Tech I Use
      </h2>
      <ul className="flex flex-wrap gap-4 text-sm text-gray-300">
        {[
          'React',
          'JavaScript',
          'Typescript',
          'Tailwind CSS',
          'Node.js',
          'Express.js',
          'MongoDB',
        ].map((tech) =>(
          <li key={tech} className='bg-gray-700.px-3.py-1.rounded-md'>{tech}</li>
        ))}
      </ul>
    </div>
  );
};

export default AboutPage;
