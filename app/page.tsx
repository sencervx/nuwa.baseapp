'useclient'
import Image from "next/image";


export default function Home() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Image
        src="/nuwa-fullpage.png"
        alt="Home"
        fill
        style={{ objectFit: "cover", objectPosition: "top"}}
      />
    </div>
  );
}
