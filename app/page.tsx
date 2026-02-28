import { connectDB } from "@/lib/db";

export default async function Home() {

  console.log("MongoDB Connected Successfully!");

  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">
        MongoDB Connected Successfully 🚀
      </h1>
    </div>
  );
}