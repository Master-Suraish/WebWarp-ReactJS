const Footer = () => {
  return (
    <footer className="bg-red-950 flex justify-center items-center text-slate-300 font-semibold h-15 min-w-screen md:text-lg max-sm:text-center">
      © {new Date().getFullYear()} RedBlood.com — Donate Blood, Save Lives.
    </footer>
  );
};

export default Footer;
