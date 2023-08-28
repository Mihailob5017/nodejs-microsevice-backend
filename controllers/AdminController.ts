import { Request, Response, NextFunction } from 'express';
import { CreateVandorInput } from '../dto/Vandor.dto';

export const CreateVandor = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const {
		name,
		address,
		password,
		phone,
		pincode,
		email,
		foodType,
		ownerName,
	} = <CreateVandorInput>req.body;

	return res.json({
		name,
		address,
		password,
		phone,
		pincode,
		email,
		foodType,
		ownerName,
	});
};

export const GetVandors = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {};

export const GetVandorByID = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {};
