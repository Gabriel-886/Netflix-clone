import { PrismaClient } from "@prisma/client";

const client = global.prismadb || new PrismaClient();
if (process.env.NODE_ENV === "production") global.prismadb = client;

export default client;

// 总结来说，这段代码的目的是确保在Node.js应用的整个生命周期内，
// 无论在开发环境还是生产环境，都只创建一个PrismaClient实例，并且这个实例可以在整个应用中被方便地访问和使用。
// 这有助于优化资源使用，特别是在生产环境中，减少连接数据库的次数可以提高应用的性能。
// 热重载
