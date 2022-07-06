import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
    imports: [],
    controllers: [CatsController],
    providers: [CatsService],
/*tout module qui importe le CatsModulea accès au CatsService et partagera la 
même instance avec tous les autres modules qui l'importent également.
Imaginons que nous voulions partager une instance de the CatsServiceentre 
plusieurs autres modules*/
    exports: [CatsService]
})
export class CatsModule {}
