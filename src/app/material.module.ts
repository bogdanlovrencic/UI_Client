import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

const matModules = [MatButtonModule];

@NgModule({
  imports: [...matModules],
  exports: [...matModules]
})
export class MaterialModule {}
