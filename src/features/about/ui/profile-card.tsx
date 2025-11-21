// Profile Card Requirements
import React from "react";
import { Card } from "@/shared/ui";
import { Social } from "../config";
import Image from "next/image";
import Link from "next/link";
// Profile Card Props
interface Props {
  readonly photo: string;
  readonly name: string;
  readonly role: string;
  readonly summary: string;
  readonly socials: Social[];
}
// Profile Card Main Function
function ProfileCard({ photo, name, role, summary, socials }: Props) {
  return (
    <Card>
      <div className="flex flex-col gap-3 min-[483px]:flex-row dark:text-gray-300 high-contrast:text-black">
        {/* Profile Image */}
        <Image
          src={`/profiles/${photo}.jpeg`}
          alt={`${name} Foto`}
          width={350}
          height={291}
          className="w-full h-auto rounded-lg min-[483px]:w-28"
        />
        {/* Name, Role and Social Section */}
        <section className="flex flex-col justify-center">
          <h3 className="font-semibold text-lg font-small:text-base font-large:text-xl font-xlarge:text-2xl">
            {name}
          </h3>
          <span className="text-primary font-semibold dark:text-primary-light font-small:text-sm font-large:text-lg font-xlarge:text-xl">
            {role}
          </span>
          <div className="flex gap-4 mt-2">
            {socials.map((social) => (
              <Link
                key={social.id}
                href={social.link.href}
                target={social.link.newTab ? "_blank" : undefined}
                title={social.alt}
                className="flex gap-1 justify-center items-center transition-all hover:cursor-pointer hover:text-primary-light hover:scale-110"
              >
                <social.icon className="w-7 h-7" />
              </Link>
            ))}
          </div>
        </section>
      </div>
      {/* Summary */}
      <p className="dark:text-gray-300 high-contrast:text-black font-small:text-sm font-large:text-lg font-xlarge:text-xl">
        {summary}
      </p>
    </Card>
  );
}

export default ProfileCard;
