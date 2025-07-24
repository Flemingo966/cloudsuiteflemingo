
const Hero = () => {
  return (
    <section className="relative w-full h-screen bg-black overflow-hidden">
      {/* Video Background */}
      <video
        muted
        autoPlay
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center container px-4">
        <h1 className="text-4xl md:text-7xl font-bold font-primary">
          Cloudsuite Flemingo Services
        </h1>

        {/* 2-line spacing */}
        <div className="my-8"></div>

        <p className="text-base md:text-lg max-w-2xl font-secondary">
        We at Cloudsuite Flemingo Services have over a decade of experience in the field, providing complete ERP implementation solutions that are suited to a wide range of business requirements. Leading platforms like Oracle NetSuite , Salesforce, Zoho, and Microsoft Dynamics 365 are all areas in which we have extensive experience. With ten years of practical experience and a staff of qualified experts, we provide intelligent, scalable ERP systems that help businesses increase efficiency, streamline processes, and promote long-term success.
        </p>
      </div>
    </section>
  );
};

export default Hero;
