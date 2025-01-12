interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <nav className={className}>
      <div className="flex items-center justify-between p-4">
        <h1 className="text-lg font-bold">Admin Panel</h1>
        <div className="flex items-center space-x-4">
          <button className="text-gray-300 hover:text-white">Logout</button>
        </div>
      </div>
    </nav>
  );
};
