import { headers } from "next/headers";
import { Providers } from "./providers";
import App from "./app";




interface HomePageProps {
  cookies: string;
}

export default function Home() {
  return (
    <Providers cookie={headers().get("cookie") ?? ""}>
      <App/>      
    </Providers>
  );
}  