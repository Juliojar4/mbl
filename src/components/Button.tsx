type ButtonProps = {
    text: string;
    link: string;
    className?: string;
  };
  
  export default function Button({ text, link, className }: ButtonProps) {
    return (
      <a
        href={link}
        className={`global-transition px-8 py-[6px] medium-body rounded-md text-white bg-blue-300 hover:bg-orange-300 ${className ?? ''}`}
      >
        {text}
      </a>
    );
  }
  