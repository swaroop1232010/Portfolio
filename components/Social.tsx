import Link from "next/link";
import React from "react";
import { FaLinkedin, FaMedium, FaGithub, FaFacebook } from "react-icons/fa";

const Social = () => {
  return (
    <div className="flex text-[30px] text-[#e3e2ea92] justify-center">
      <Link
        href={"https://www.linkedin.com/in/swaroop-reddy-55269b145/"}
        target="_blank"
        className="mr-[1rem]"
      >
        <FaLinkedin style={{ color: "#0e76a8" }} />
      </Link>
      <Link
        href={"https://github.com/swaroop1232010/Portfolio?tab=readme-ov-file"}
        target="_blank"
        className="mr-[1rem]"
      >
        <FaGithub style={{ color: "#333" }} />
      </Link>
      <Link href={"https://medium.com/@swaroop1232010"} target="_blank">
        <FaMedium style={{ color: "#00ab6c" }} />
      </Link>
    </div>
  );
};

export default Social;
