import Link from "next/link";

export default function StudentInfo() {
  let name = "Ahmad Heshmati";
  let courseSection = "CPRG 306 B";
  let gitHubLink = "https://github.com/ahmadhmi/cprg306-assignments";

  return (
    <>
      <h1>Name: {name}</h1>
      <h1>Course Section: {courseSection}</h1>
      <Link href={gitHubLink}>GitHub Repository</Link>
    </>
  );
}
