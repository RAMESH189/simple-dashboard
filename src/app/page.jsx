import Content from "@/components/Content";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="flex-[0.9] flex flex-col h-screen overflow-hidden">
      <Header />
      <Content />
    </div>
  );
}
