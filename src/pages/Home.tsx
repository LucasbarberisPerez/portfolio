import { useTranslation } from "react-i18next";
import { Intro } from "../components/section/introduction/Intro";
import StackInfo from "../components/section/stack/StackInfo";

export default function Home() {
  const [t] = useTranslation("global");

  return (
    <>
      <main className="container-full flex flex-col justify-center items-center gap-6">
        <Intro />
        <StackInfo/>
      </main>
    </>
  );
}