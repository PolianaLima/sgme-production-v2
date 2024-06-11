import React from "react";
import Image from "next/image";
import Link from "next/link";
type ImagemButtonProps = {
    img: string;
    link: string;
    titleLink: string;
}

export default function ImagemButton({img, link, titleLink}:ImagemButtonProps){
    return (
        <div className="col-sm-2 container-sm d-sm-flex flex-column align-items-center">
            <Image src={img}
                   width={200}
                   height={200}
                   sizes="100vw"
                   alt="Icone de Blog"
                   priority={true}
            />

            <Link href={link} className="btn bg-primary w-100 text-light">{titleLink}</Link>
        </div>
    )
}