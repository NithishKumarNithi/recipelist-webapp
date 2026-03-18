import { IoFastFood } from 'react-icons/io5';

export default function Header() {
  return (
    <nav className="border-b mb-8">
      <div className="flex max-w-3xl py-4 items-center mx-auto">
        <a href="/" id="logo" className="text-3xl">
          <IoFastFood size={50} />
        </a>
        <ul className="flex grow justify-end">
          <li className="me-4">Home</li>
          <li className="me-4">Indian</li>
          <li className="me-4">American</li>
          <li>Pakistani</li>
        </ul>
      </div>
    </nav>
  );
}
