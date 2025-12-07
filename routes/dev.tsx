// routes/dev.tsx
import { Head } from "fresh/runtime";
import Dev from "../islands/Dev.tsx";

export default function DevPage() {
  return (
    <div>
      <Head><title>Ethan's Tools</title></Head>
      <Dev />
    </div>
  );
}
