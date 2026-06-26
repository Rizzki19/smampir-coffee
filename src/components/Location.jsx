export default function Location() {
  return (
    <section id="maps" className="py-20 px-4 md:px-8">
      <h2 className="text-2xl font-bold mb-6">Lokasi Kami</h2>
      <div className="rounded-3xl overflow-hidden shadow-lg border-4 border-white w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.408407770675!2d113.70169267484839!3d-8.161542791869179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd695005258e29b%3A0xd5c85fef754ba7fe!2sS&#39;mampir%20coffee!5e0!3m2!1sid!2sid!4v1782474458514!5m2!1sid!2sid"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>
      <p className="mt-4 font-bold text-orange-700">
        Operasional: 20:00 - 01:00
      </p>
    </section>
  );
}
