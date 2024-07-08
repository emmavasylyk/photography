import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/logo.svg"
        property
        alt="logo"
        width={55}
        height={55}
        className=""
      />
    </Link>
  );
};

export default Logo;
