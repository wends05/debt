import AddGrade from "@/components/AddGrade";
import Error from "@/components/Error";
import GWA from "@/components/GWA";
import GradesList from "@/components/GradesList";

export default function Home() {
  return (
    <main className="bg-zinc-300 min-h-screen p-5 gap-2 flex flex-col">
      <h1 className="text-xl py-2">Grade Application</h1>
      <section className="flex w-full justify-evenly">
        <div className="text-center self-center px-5 gap-2">
          <h2>Input the corresponding fields to get your Grade</h2>
          <Error />
        </div>
        <AddGrade />
      </section>
      <GWA />
      <GradesList />
    </main>
  );
}
