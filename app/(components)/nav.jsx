import Link from "next/link"

const links = [
  {name: "Home", href:"/home"},
  {name: "Create User", href:"/CreateUser"},
  {name: "Client Member", href:"/ClientMember"},
  {name: "Member", href:"/Member"},
  {name: "Denied", href:"/Denied"},
  {name: "Public", href:"/Public"},
];

const Nav = () => {
  return (
    <header className="bg-gray-600 text-gray-100">
      <nav className="flex justify-between items-center w-full px-10 py-4">
        <div>My Site</div>
        <div className="flex gap-10">
          {links.map((link, index) => (
            <Link href={link.href} key={index}>
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Nav;
