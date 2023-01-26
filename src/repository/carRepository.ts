import { PrismaClient } from '@prisma/client';
import { Car } from '../protocols/carsProtocols';

const prisma = new PrismaClient();


async function getCars() {
  return prisma.cars.findMany();
}

async function getCar(id: number) {
  return prisma.cars.findFirst({
    where: { id: id}
  });
}

async function getCarWithLicensePlate(licensePlate: string) {

 return  prisma.cars.findFirst({
    where: { licensePlate: licensePlate}
  })

}


async function createCar(model: string, licensePlate: string, year: number, color: string) {

  return prisma.cars.create({
    data: {
      model: model,
      licensePlate: licensePlate,
      year: year,
      color: color
    }
  })
 
}

async function deleteCar(id: number) {

  return prisma.cars.delete({
    where: {  id: id }
  })

}


async function updateCar(id: number, car: Car) {
  return prisma.cars.update({
    where: {id: id},
    data: car
  });


}



const carRepository = {
  getCars,
  createCar,
  getCar,
  getCarWithLicensePlate,
  deleteCar,
  updateCar
}

export default carRepository;