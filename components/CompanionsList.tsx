import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn, getSubjectColor } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

interface CompanionsListCProps {
  //   id: string;
  title: string;
  companions: Companion[];
  classNames?: string;
}

const CompanionsList = ({
  title,
  companions,
  classNames,
}: CompanionsListCProps) => {
  return (
    <article className={cn("companion-list", classNames)}>
      <h2 className="font-bold text-2xl">{title}</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-lg w-2/3">Lessons</TableHead>
            <TableHead className="text-lg">Subject</TableHead>
            <TableHead className="text-lg text-right">Duration</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {companions?.map(({ id, subject, name, duration, topic }) => (
            <TableRow key={id}>
              <TableCell>
                <Link href={`/companions/${id}`}>
                  <div className="flex items-center gap-2">
                    <div
                      className="size-[72px] flex items-center justify-center rounded-lg max-md:hidden"
                      style={{ backgroundColor: getSubjectColor(subject) }}
                    >
                      <Image
                        src={`/icons/${subject}.svg`}
                        alt={subject}
                        width={35}
                        height={35}
                      />
                    </div>
                    <div className="flex flex-col">
                      <p className="font-bold text-2xl">{name}</p>
                      <p className="text-lg">Topic: {topic}</p>
                    </div>
                  </div>
                </Link>
              </TableCell>
              <TableCell>
                <div className="subject-badge w-fit max-md:hidden">
                  {subject}
                </div>
                <div className="flex items-center justify-center rounded-lg w-full p-2 md:hidden" style={{ backgroundColor: getSubjectColor(subject) }}>
                    <Image
                        src={`/icons/${subject}.svg`}
                        alt={subject}
                        width={18}
                        height={18}
                      />
                </div>
              </TableCell>
              <TableCell className="flex items-center w-full text-xl justify-end gap-2">
                {duration} {' '}
                <span className="max-md:hidden">mins</span>
                <span className="md:hidden">
                    <Image
                        src={`/icons/clock.svg`}
                        alt="minutes"
                        width={14}
                        height={14}
                      />
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </article>
  );
};

export default CompanionsList;
