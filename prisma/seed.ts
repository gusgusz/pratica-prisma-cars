import { carss } from "./cars.js";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    let cars = await prisma.cars.findFirst();
    if (!cars) {
    for (const car of carss) {
        await prisma.cars.create({
        data: car,
        });
    }
    }}

main().catch((e) => {
        throw e;
    })
 .finally(async () => {

        await prisma.$disconnect();

    } );



