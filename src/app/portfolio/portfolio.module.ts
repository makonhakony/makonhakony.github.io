import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';
import { ImageLibraryComponent } from './image-library/image-library.component';
import { ContactFormComponent } from './contact-form/contact-form.component';;
import { ContactService } from './contact-form/contact.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AlbumComponent } from './album/album.component';
import { SkillsComponent } from './skills/skills.component';
import { PositionsComponent } from './positions/positions.component';
import { ConnectionsComponent } from './connections/connections.component';


@NgModule({
  declarations: [
    ImageLibraryComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    ContactFormComponent,
    ContactFormComponent,
    AlbumComponent,
    SkillsComponent,
    PositionsComponent,
    ConnectionsComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    ReactiveFormsModule
  ],
  providers:[
    ContactService
  ]
})
export class PortfolioModule { }
