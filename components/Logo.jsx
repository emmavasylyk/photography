import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/">
      <Image src="/logo.svg" property={100} alt="logo" width={36} height={36} />
    </Link>
  );
};

export default Logo;
