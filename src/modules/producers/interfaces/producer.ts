import { Document } from 'mongoose';
import { Phone } from '../../phones/interfaces/phone.interface';
import { Address } from '../../locations/interfaces/address.interface';

export interface Producer extends Document {
  readonly name: string;
  readonly cuit: string;
  readonly description: string;
  readonly address: Address;
  readonly email: string;
  readonly phone: Phone;
}
