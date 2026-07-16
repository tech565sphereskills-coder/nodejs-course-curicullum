import {
  Terminal,
  Boxes,
  Network,
  Cpu,
  Database,
  Server,
  KeyRound,
  ShieldCheck,
  UploadCloud,
  Zap,
  Rocket,
  type LucideIcon,
} from "lucide-react";

export type Subtopic = {
  eyebrow: string;
  title: string;
  description: string;
};

export type Module = {
  id: string;
  number: string;
  title: string;
  tagline: string;
  eyebrow: string;
  icon: LucideIcon;
  subtopics: Subtopic[];
};

export const curriculum: Module[] = [
  {
    id: "setup",
    number: "01",
    title: "Setup & Node.js Foundation",
    tagline: "Build a clean TypeScript-based Node.js environment before touching backend frameworks.",
    eyebrow: "Start correctly",
    icon: Terminal,
    subtopics: [
      { eyebrow: "Environment", title: "Node.js installation and runtime basics", description: "Install Node.js, understand the runtime, and set up the project from an empty folder." },
      { eyebrow: "Tooling", title: "npm, package.json, and scripts", description: "Understand package management, dependencies, development scripts, and the project lifecycle." },
      { eyebrow: "TypeScript", title: "TypeScript configuration", description: "Create and understand tsconfig.json for a modern Node.js backend project." },
      { eyebrow: "Runtime", title: "The process object", description: "Work with environment variables, process information, arguments, and runtime behavior." },
    ],
  },
  {
    id: "core-modules",
    number: "02",
    title: "Core Modules",
    tagline: "Master the built-in modules that power everything you'll build in Node.",
    eyebrow: "Built-ins",
    icon: Boxes,
    subtopics: [
      { eyebrow: "Filesystem", title: "fs: sync, async, and streams", description: "Read and write files safely with promises, callbacks, and streaming APIs." },
      { eyebrow: "Paths", title: "path & os utilities", description: "Cross-platform paths, temp directories, CPU info, and platform detection." },
      { eyebrow: "Events", title: "EventEmitter patterns", description: "Design event-driven modules and decouple logic with typed emitters." },
      { eyebrow: "Crypto", title: "util & crypto basics", description: "Hashing, HMAC, random tokens, and helpful utilities you'll reach for often." },
    ],
  },
  {
    id: "http",
    number: "03",
    title: "HTTP Module",
    tagline: "Understand how the web really works before Express hides it from you.",
    eyebrow: "Under the hood",
    icon: Network,
    subtopics: [
      { eyebrow: "Server", title: "http.createServer from scratch", description: "Boot a raw HTTP server and see what Express is doing for you." },
      { eyebrow: "Lifecycle", title: "Request / response lifecycle", description: "Headers, status codes, body parsing, and connection handling." },
      { eyebrow: "Routing", title: "Routing by URL and method", description: "Implement a tiny router yourself to internalize the pattern." },
      { eyebrow: "Streams", title: "Streaming responses", description: "Pipe files, JSON, and generated content efficiently to the client." },
    ],
  },
  {
    id: "internals",
    number: "04",
    title: "Node.js Internals",
    tagline: "Peek inside the event loop, libuv, and the concurrency model.",
    eyebrow: "How it runs",
    icon: Cpu,
    subtopics: [
      { eyebrow: "Loop", title: "Event loop phases", description: "Timers, poll, check, close — and where microtasks fit in." },
      { eyebrow: "libuv", title: "libuv & thread pool", description: "What runs on threads vs the main loop, and why it matters." },
      { eyebrow: "I/O", title: "Non-blocking I/O", description: "Design APIs that stay responsive under real production load." },
      { eyebrow: "Concurrency", title: "Worker threads vs cluster", description: "Choose the right parallelism model for CPU-heavy vs I/O-heavy work." },
    ],
  },
  {
    id: "postgres",
    number: "05",
    title: "PostgreSQL",
    tagline: "Model data, write real SQL, and connect it to Node like a professional.",
    eyebrow: "Data layer",
    icon: Database,
    subtopics: [
      { eyebrow: "Modeling", title: "Relational modeling", description: "Design normalized schemas, relationships, and constraints." },
      { eyebrow: "SQL", title: "Joins, indexes, transactions", description: "Write SQL you can defend in a code review and reason about performance." },
      { eyebrow: "Driver", title: "pg driver & connection pooling", description: "Connect from Node, manage pools, and handle transactions safely." },
      { eyebrow: "Migrations", title: "Drizzle / Prisma migrations", description: "Version your schema and ship changes without breaking production." },
    ],
  },
  {
    id: "express",
    number: "06",
    title: "Express Setup",
    tagline: "A production-grade Express project structure — no tutorial spaghetti.",
    eyebrow: "Framework",
    icon: Server,
    subtopics: [
      { eyebrow: "Bootstrap", title: "App bootstrap & structure", description: "Layered project structure that scales past the first three endpoints." },
      { eyebrow: "Routing", title: "Routing & route params", description: "Modular routers, nested routes, and typed request params." },
      { eyebrow: "Middleware", title: "Middleware pipeline", description: "Compose auth, logging, parsing, and validation into a clean pipeline." },
      { eyebrow: "Errors", title: "Error-handling middleware", description: "One place to translate thrown errors into safe API responses." },
    ],
  },
  {
    id: "auth",
    number: "07",
    title: "Auth & JWT",
    tagline: "Real authentication: hashing, tokens, refresh flows, and roles.",
    eyebrow: "Security",
    icon: KeyRound,
    subtopics: [
      { eyebrow: "Passwords", title: "Hashing with bcrypt / argon2", description: "Store credentials the way a security engineer would sign off on." },
      { eyebrow: "Tokens", title: "JWT sign & verify", description: "Issue and validate tokens, and understand what belongs in a claim." },
      { eyebrow: "Refresh", title: "Access + refresh token flow", description: "Rotate tokens, handle logout, and survive token theft." },
      { eyebrow: "RBAC", title: "Role-based access control", description: "Protect routes by role and design permissions that scale." },
    ],
  },
  {
    id: "crud",
    number: "08",
    title: "CRUD & Admin",
    tagline: "Ship REST APIs that don't fall over on the first real user.",
    eyebrow: "API design",
    icon: ShieldCheck,
    subtopics: [
      { eyebrow: "REST", title: "REST resource design", description: "Resource naming, verbs, status codes, and idempotency." },
      { eyebrow: "Validation", title: "Runtime validation with Zod", description: "Validate every payload before it touches your database." },
      { eyebrow: "Queries", title: "Pagination, filtering, sorting", description: "Query patterns that stay fast as tables grow." },
      { eyebrow: "Docs", title: "OpenAPI documentation", description: "Auto-generate API docs your frontend teammates actually use." },
    ],
  },
  {
    id: "uploads",
    number: "09",
    title: "Uploads",
    tagline: "Handle files without shooting yourself in the foot.",
    eyebrow: "Files",
    icon: UploadCloud,
    subtopics: [
      { eyebrow: "Multipart", title: "Multer & multipart parsing", description: "Accept files safely with size, type, and count limits." },
      { eyebrow: "Storage", title: "Local vs S3 / R2 storage", description: "Choose a storage backend and abstract it behind a clean interface." },
      { eyebrow: "URLs", title: "Signed upload / download URLs", description: "Let clients upload directly to storage without touching your server." },
      { eyebrow: "Processing", title: "Image processing pipeline", description: "Resize, compress, and transform uploaded media on the fly." },
    ],
  },
  {
    id: "redis",
    number: "10",
    title: "Redis",
    tagline: "Cache, rate-limit, and queue with the workhorse of production Node.",
    eyebrow: "Performance",
    icon: Zap,
    subtopics: [
      { eyebrow: "Cache", title: "Cache-aside & write-through", description: "Speed up hot endpoints without corrupting your data." },
      { eyebrow: "Limits", title: "Rate limiting", description: "Protect endpoints from abuse with token buckets and sliding windows." },
      { eyebrow: "Pub/Sub", title: "Pub/Sub messaging", description: "Fan out events across services without a heavy message broker." },
      { eyebrow: "Queues", title: "Background jobs with BullMQ", description: "Move slow work off the request path with reliable job queues." },
    ],
  },
  {
    id: "deploy",
    number: "11",
    title: "Testing & Deployment",
    tagline: "Ship it — with tests, containers, CI, and observability.",
    eyebrow: "Production",
    icon: Rocket,
    subtopics: [
      { eyebrow: "Unit", title: "Vitest / Jest unit tests", description: "Test business logic in isolation and keep the suite fast." },
      { eyebrow: "Integration", title: "Supertest API tests", description: "Exercise your Express app end-to-end against a real database." },
      { eyebrow: "Docker", title: "Dockerizing the API", description: "Build small, reproducible images ready for any cloud." },
      { eyebrow: "Deploy", title: "CI/CD & monitoring", description: "GitHub Actions, deploys to Railway / Fly / VPS, and logs that help you." },
    ],
  },
];
