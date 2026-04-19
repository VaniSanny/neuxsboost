import { NextResponse } from "next/server";
import { redis, SHOP_DATA_KEY } from "@/lib/redis";

export async function GET() {
    try {
        const data = await redis.get(SHOP_DATA_KEY);
        if (!data) {
            return NextResponse.json({ categories: [], products: [] });
        }
        return NextResponse.json(JSON.parse(data));
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch data from Redis" }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { password, data } = body;

        if (password !== process.env.ADMIN_PASSWORD) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        await redis.set(SHOP_DATA_KEY, JSON.stringify(data));
        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: "Failed to update data in Redis" }, { status: 500 });
    }
}
