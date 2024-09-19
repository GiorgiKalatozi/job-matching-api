import { Injectable, NotFoundException } from '@nestjs/common';
import { JobSeeker } from './entities/job-seeker.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { JobPosting } from '@app/job-postings-lib';
import { CreateJobSeekerDto } from './dtos';

@Injectable()
export class JobSeekersLibService {
  constructor(
    @InjectRepository(JobSeeker)
    private readonly jobSeekersRepository: Repository<JobSeeker>,
    @InjectRepository(JobPosting)
    private readonly jobPostingsRepository: Repository<JobPosting>,
  ) {}

  async findAll(): Promise<JobSeeker[]> {
    return this.jobSeekersRepository.find();
  }

  async create(
    createCompanyDto: CreateJobSeekerDto,
    userId: number,
  ): Promise<JobSeeker> {
    const jobSeeker = this.jobSeekersRepository.create({
      ...createCompanyDto,
      userId,
    });
    return this.jobSeekersRepository.save(jobSeeker);
  }

  async getMatchedJobPostings(seekerId: number) {
    const seeker = await this.jobSeekersRepository.findOne({
      where: { id: seekerId },
      relations: {
        skills: true,
      },
    });

    if (!seeker) {
      throw new NotFoundException('Job seeker not found');
    }

    const postings = await this.jobPostingsRepository.find({
      relations: {
        skills: true,
      },
    });

    const matchedPostings = postings
      .map((posting) => {
        const requiredSkills = posting.skills.map((skill) => skill.name);
        const seekerSkills = seeker.skills.map((skill) => skill.name);

        const matchCount = requiredSkills.filter((skill) =>
          seekerSkills.includes(skill),
        ).length;
        const percentageMatch = (matchCount / requiredSkills.length) * 100;

        return {
          ...posting,
          matchPercentage: percentageMatch,
        };
      })
      .filter((posting) => posting.matchPercentage >= 51);

    return matchedPostings;
  }
}
