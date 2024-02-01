import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { Genres } from "@/typings";

export default async function GenreDropdown() {
  const url = `https://api.themoviedb.org/3/genre/movie/list?language=en&${process.env.API_KEY}`;
  const options: RequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.API_AUTH}`,
    },
    next: {
      revalidate: 60 * 60 * 24,
    },
  };

  const resp = await fetch(url.toString(), options);
  const data = (await resp.json()) as Genres;

  console.log(data);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="text-white flex justify-center items-center">
        Genre <ChevronDown className="ml-1" />
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuLabel>Select a genre</DropdownMenuLabel>
        <DropdownMenuSeparator />

        {data.genres?.map((genre) => (
          <DropdownMenuItem key={genre.id} className="cursor-pointer">
            <Link href={`/genre/${genre.id}?genre=${genre.name}`}>
              {genre.name}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
