import Image from "next/image"
import Link from "next/link"
import { AiFillGithub } from "react-icons/ai"
import { BsFillLaptopFill } from "react-icons/bs"

export function ProjectCard() {
  return (
    <div>
      <div className="">
        <Image src={img} className="" atl="" />
        <div className="proj-txtx">
          <h3>{title}</h3>
          <Link href={url} target="_blank">
            <span>Project Website</span>
            <BsFillLaptopFill />
          </Link>
          <Link href={repo} target="_blank">
            <span>Repository Link</span>
            <AiFillGithub />
          </Link>
        </div>
      </div>
    </div>
  )
}
