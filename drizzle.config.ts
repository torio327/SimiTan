import "dotenv/config";
import type{Config} from "drizzle-kit";
import  {defineConfig} from "drizzle-kit";

// export default defineConfig({
//     dialect:"postgresql",
//     out: "./drizzle",
//     schema: "./db/schema.ts",
//     dbCredentials: {
//         url:process.env.DATABASE_URL!
//     },
// });

export default{
    schema: "./db/schema.ts",
    dialect:"postgresql",
    out: "./drizzle",
    dbCredentials: {
      url:process.env.DATABASE_URL!
    }
} satisfies Config;
