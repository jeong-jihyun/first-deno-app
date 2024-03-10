import { serve } from "https://deno.land/std@0.68.0/http/server.ts";
import { webModule } from "./src/web.ts";

webModule();
const server = serve({ port: 8000 });
for await (const req of server) {
    console.log("서버실행완료");
    req.respond({
        body: "Hello Deno",
    });
}

//type A = Awaited<Promise<string>>;

//console.log(A);
