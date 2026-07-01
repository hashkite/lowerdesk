export default function AnnouncementBar() {
  return (
    <div
      role="complementary"
      aria-label="Special Offer"
      className="bg-indigo-950 text-indigo-100 py-3 px-margin-mobile md:px-margin-desktop text-center overflow-hidden"
    >
      <p className="font-label text-label-md tracking-[0.2em] uppercase">
        Limited Edition Release. 55% Off —{' '}
        <a
          href="https://fittrock.com/products/yogeek-sit-to-stand-adjustable-desk"
          className="underline underline-offset-4 hover:text-white transition-colors focus-visible:outline-white"
        >
          Shop Now
        </a>
        .
      </p>
    </div>
  );
}
