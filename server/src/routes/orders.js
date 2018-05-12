import express from 'express';
import Orders from '../controllers/Orders';
import asyncWrapper from '../helpers/asyncWrapper';
import ordersValidation from '../validations/orders';
import Authorization from '../middlewares/Authorization';
import ValidationHandler from '../middlewares/ValidationHandler';
import OrderValidationHandler from '../middlewares/OrderValidationHandler';
import TrimValues from '../middlewares/TrimValues';

const ordersRoutes = express.Router();
const authorization = new Authorization('user');
const validation = [ValidationHandler.validate, TrimValues.trim];

ordersRoutes.use(Authorization.authorize);

ordersRoutes.get('/', asyncWrapper(Orders.getOrders));

ordersRoutes.use(authorization.authorizeRole);

ordersRoutes.post(
  '/', ordersValidation.create, OrderValidationHandler.isShopOpen,
  validation, asyncWrapper(Orders.create)
);
ordersRoutes.put('/:orderId', ordersValidation.update, validation, asyncWrapper(Orders.update));

export default ordersRoutes;
