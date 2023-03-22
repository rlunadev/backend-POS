import { Module } from '@nestjs/common';
import { OrdersController } from './orders/orders.controller';
import { OrderDetailsController } from './order-details/order-details.controller';
import { OrderDetailsService } from './order-details/order-details.service';
import { OrdersService } from './orders/orders.service';
import { ProductsService } from './products/products.service';
import { ProductsController } from './products/products.controller';
import { CategoriesController } from './categories/categories.controller';
import { CategoriesService } from './categories/categories.service';
import { UnitsService } from './units/units.service';
import { UnitsController } from './units/units.controller';
import { StockController } from './stock/stock.controller';
import { CategoriesModule } from './categories/categories.module';
import { OrderDetailsModule } from './order-details/order-details.module';
import { OrdersModule } from './orders/orders.module';
import { ProductsModule } from './products/products.module';
import { StockModule } from './stock/stock.module';
import { UnitsModule } from './units/units.module';

@Module({
  controllers: [OrdersController, OrderDetailsController, ProductsController, CategoriesController, UnitsController, StockController],
  providers: [OrderDetailsService, OrdersService, ProductsService, CategoriesService, UnitsService],
  imports: [CategoriesModule, OrderDetailsModule, OrdersModule, ProductsModule, StockModule, UnitsModule]
})
export class SellsModule {}
