import { Link } from "react-router-dom";
import { PlusIcon } from "lucide-react";

const Navbar = () => {
  return (
    <header className="bg-base-100 shadow-lg border-b border-base-content/10 sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-3xl font-bold text-primary font-mono tracking-tight hover:text-primary-focus transition-colors">
            NotePad
          </Link>
          <div className="flex items-center gap-4">
            <Link to={"/create"} className="btn btn-primary btn-sm sm:btn-md gap-2">
              <PlusIcon className="size-4 sm:size-5" />
              <span className="hidden sm:inline">New Note</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;