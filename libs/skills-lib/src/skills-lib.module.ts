import { Module } from '@nestjs/common';
import { SkillsLibService } from './skills-lib.service';

@Module({
  providers: [SkillsLibService],
  exports: [SkillsLibService],
})
export class SkillsLibModule {}
