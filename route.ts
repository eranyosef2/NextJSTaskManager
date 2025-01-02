import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const tasks = await prisma.task.findMany();
    return new Response(JSON.stringify(tasks), { status: 200 });
  } catch (error) {
    console.error("Failed to fetch tasks:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch tasks" }), { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, status, dueDate } = body;

    if (!name || !status || !dueDate) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400 });
    }

    const task = await prisma.task.create({
      data: {
        name,
        status,
        dueDate: new Date(dueDate),
      },
    });

    return new Response(JSON.stringify(task), { status: 201 });
  } catch (error) {
    console.error("Failed to add task:", error);
    return new Response(JSON.stringify({ error: "Failed to add task" }), { status: 500 });
  }
}
