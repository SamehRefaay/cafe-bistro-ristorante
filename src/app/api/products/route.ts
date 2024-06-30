import { prisma } from '@/utils/client';
import { NextRequest, NextResponse } from 'next/server';

//GET ALL PRODUCTS
export const GET = async (req: NextRequest) => {
	try {
		const { searchParams } = new URL(req.url);
		const cat = searchParams.get('cat');

		const products = await prisma.product.findMany({
			where: {
				...(cat ? { cateSlug: cat } : {}),
			},
		});
		return new NextResponse(JSON.stringify(products), {
			status: 200,
		});
	} catch (error) {
		console.log(error);
		return new NextResponse(
			JSON.stringify({ message: 'Some thing went wrong!' }),
			{
				status: 500,
			}
		);
	}
};

//GET ADD NEW PRODUCT
export const POST = async (req: NextRequest) => {
	try {
		const body = await req.json();

		const products = await prisma.product.create({
			data: body,
		});

		return new NextResponse(JSON.stringify(products), {
			status: 201,
		});
	} catch (error) {
		console.log(error);
		return new NextResponse(
			JSON.stringify({ message: 'Some thing went wrong!' }),
			{
				status: 500,
			}
		);
	}
};
