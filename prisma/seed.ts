import { cars } from "./cars.js";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    for (const car of cars) {
        await prisma.cars.create({
        data: car,
        });
    }
    }

main().catch((e) => {
        throw e;
    })
 .finally(async () => {

        await prisma.$disconnect();

    } );



