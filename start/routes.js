'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
    return { greeting: 'Hello world in JSON' }
})

Route.post('/register', 'AuthController.register')
Route.post('/login', 'AuthController.login')

Route.put('/products/:id', 'ProductController.update')
Route.delete('products/id', 'ProductController.delete')
Route.post('/products', 'ProductController.store')
Route.get('/products', 'ProductController.getProducts');

Route.put('/categories/:id', 'CategoryController.update')
Route.delete('categories/id', 'CategoryController.delete')
Route.post('/categories', 'CategoryController.store')
Route.get('/categories', 'CategoryController.getCategories');

Route.put('/orders/:id', 'OrderController.update')
Route.delete('orders/id', 'OrderController.delete')
Route.post('/orders', 'OrderController.store')
Route.get('/orders', 'OrderController.getOrders');


Route.put('/orderdetails/:id', 'OrderDetailController.update')
Route.delete('orderdetails/id', 'OrderDetailController.delete')
Route.post('/orderdetails', 'OrderDetailController.store')
Route.get('/orderdetails', 'OrderDetailController.getOrderDetails');
Route.get('/orderorderdetails/order_id', 'OrderDetailController.getOrderDetailsByOrderID');