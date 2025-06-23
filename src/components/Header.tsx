import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '@image/Movimento_Brasil_Livre_logo.png';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="p-4 fixed top-0 left-0 w-full z-50 bg-white">
      <nav className="container sticky z-50 flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img className="w-32" src={Logo} alt="Logo" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link className="text-gray-500 text-base font-semibold hover:text-blue-200 hover:underline" to="/about">MBL</Link>
          <Link className="text-gray-500 text-base font-semibold hover:text-blue-200 hover:underline" to="/about">Valete +</Link>
          <Link className="text-gray-500 text-base font-semibold hover:text-blue-200 hover:underline" to="/about">Clube do Livro</Link>
          <Link className="text-gray-500 text-base font-semibold hover:text-blue-200 hover:underline" to="/about">Festival</Link>
          <Link className="text-gray-500 text-base font-semibold hover:text-blue-200 hover:underline" to="/about">Nossos Porta-Vozes</Link>
          <Link className="text-gray-500 text-base font-semibold hover:text-blue-200 hover:underline" to="/about">Notícias</Link>
          <Link className="text-gray-500 text-base font-semibold hover:text-blue-200 hover:underline" to="/about">Elite</Link>
          <a className="bg-blue-300 text-white font-bold py-2 px-5 rounded-md" href="#">Newsletter</a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="relative flex flex-col justify-between w-6 h-4 md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span
            className={`
              block h-[2px] w-full bg-gray-700 rounded transform transition-transform duration-500
              ${isMobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}
            `}
          ></span>
          <span
            className={`
              block h-[2px] w-full bg-gray-700 rounded transform transition-transform duration-500
              ${isMobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}
            `}
          ></span>
        </button>
      </nav>

      {/* 🔳 Background branco com animação vertical */}
      <div
        className={`
          absolute top-[57px] left-0 w-full bg-white shadow-lg
          transform transition-transform duration-500 ease-in-out
          ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-[150%]'}
        `}
      >
        <div className="h-[460px]"></div> {/* Altura do fundo */}
      </div>

      {/* 🟦 Links com animação horizontal da esquerda para o centro */}
      <div
        className={`
          fixed top-[57px] left-0 w-full
          transform transition-transform duration-500 ease-in-out
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-[100%]'}
          z-[60]
        `}
      >
        <div className="flex flex-col items-center gap-6 p-6">
          <Link className="text-gray-500 text-lg font-bold  hover:text-blue-200 hover:underline" to="/about">MBL</Link>
          <Link className="text-gray-500 text-lg font-bold  hover:text-blue-200 hover:underline" to="/about">Valete +</Link>
          <Link className="text-gray-500 text-lg font-bold  hover:text-blue-200 hover:underline" to="/about">Clube do Livro</Link>
          <Link className="text-gray-500 text-lg font-bold  hover:text-blue-200 hover:underline" to="/about">Festival</Link>
          <Link className="text-gray-500 text-lg font-bold  hover:text-blue-200 hover:underline" to="/about">Nossos Porta-Vozes</Link>
          <Link className="text-gray-500 text-lg font-bold  hover:text-blue-200 hover:underline" to="/about">Notícias</Link>
          <Link className="text-gray-500 text-lg font-bold  hover:text-blue-200 hover:underline" to="/about">Elite</Link>
          <a className="bg-blue-300 text-white font-bold py-2 px-5 rounded-md" href="#">Newsletter</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
