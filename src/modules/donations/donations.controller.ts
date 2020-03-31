import { Controller, Get, Post, Body } from '@nestjs/common';
import { DonationsService } from './donations.service';
import { CreateDonationDto } from './dto/create-donation.dto';

@Controller('donations')
export class DonationsController {
  constructor(private donationsSvc: DonationsService) {}
  @Get()
  getAll() {
    return this.donationsSvc.findAll();
  }

  @Post()
  async create(@Body() createDonationDto: CreateDonationDto) {
    await this.donationsSvc.create(createDonationDto);
  }
}
