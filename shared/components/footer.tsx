const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full py-3">
      <div className="flex items-center justify-center">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-redcustom hover:text-primary hover:underline">
            SMA Muhammadiyah 1
          </span>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
