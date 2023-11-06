import Link from "next/link";
import StudentInfo from "./StudentInfo";

export default function Home() {
  return (
    <main className="flex flex-col">
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <StudentInfo/>
      <Link href="/week2">Week2</Link>
      <Link href="/week3">Week3</Link>
      <Link href="/week4">Week4</Link>
      <Link href="/week5">Week5</Link>
      <Link href="/week6">Week6</Link>
      <Link href="/week7">Week7</Link>
      <Link href="/week8">Week8</Link>
    </main>
  );
}
