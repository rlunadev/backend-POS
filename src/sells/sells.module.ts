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

@Module({
  controllers: [OrdersController, OrderDetailsController, ProductsController, CategoriesController, UnitsController, StockController],
  providers: [OrderDetailsService, OrdersService, ProductsService, CategoriesService, UnitsService]
})
export class SellsModule {}
